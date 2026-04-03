import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  const isRTL = language === "ar";

  // Update HTML dir and lang attributes
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language, isRTL]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}

// Translation data
const translations = {
  en: {
    header: {
      home: "Home",
      products: "Products",
      industries: "Industries & Applications",
      technicalResources: "Technical Resources",
      sustainability: "Sustainability",
      innovation: "Innovation",
      about: "About Chemanol",
      contact: "Contact & Support",
      cta: "Get in Touch",
      search: "Search",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    mobileMenu: {
      title: "Menu",
    },
    stockTicker: {
      lastUpdated: "Last updated:",
    },
    home: {
      hero: {
        title: "Leading Global Chemical Manufacturer",
        description: "Delivering methanol and methanol derivatives through sustainable operations and continuous innovation.",
        headlineLine1: "Chemistry that",
        headlineLine2: "Powers",
        headlineLine3: "the Future.",
        exploreProducts: "Explore Products",
        learnMore: "Learn More",
        searchTitle: "Find Your Solution",
        searchSubtitle: "Search our product catalog",
        searchPlaceholder: "Product, CAS Number, or Application...",
      },
      stats: {
        production: "Tons Annual Production Capacity",
        countries: "Countries Served Globally",
        employees: "Dedicated Employees",
        iso: "Certified Quality Standards",
      },
      products: {
        title: "Our Products",
        subtitle: "High-quality chemical solutions for global industries",
        viewPortfolio: "View Product Portfolio",
        methanol: {
          title: "Methanol",
          description: "High-purity methanol for fuel blending and chemical synthesis",
        },
        formaldehyde: {
          title: "Formaldehyde Products",
          description: "Multiple concentrations for resin and industrial applications",
        },
        derivatives: {
          title: "Methanol Derivatives",
          description: "Value-added products including MTBE and specialty chemicals",
        },
        specialty: {
          title: "Specialty Chemicals",
          description: "Custom formulations tailored to customer specifications",
        },
        learnMore: "Learn More",
      },
      industries: {
        title: "Industries & Applications",
        subtitle: "Supporting global industries through innovation-driven applications across diverse sectors",
        construction: {
          title: "Construction",
          description: "Essential building products and resins",
        },
        automotive: {
          title: "Automotive",
          description: "Fuel additives and performance chemicals",
        },
        pharmaceuticals: {
          title: "Pharmaceuticals",
          description: "High-purity intermediates",
        },
        exploreAll: "Explore All Industries",
      },
      technical: {
        title: "Technical Resources",
        tds: {
          title: "Product Data Sheets (TDS)",
          description: "Access comprehensive technical specifications and test methods for all products",
          action: "View Data Sheets",
        },
        sds: {
          title: "Safety Data Sheets (SDS)",
          description: "Download current safety information and handling guidelines",
          action: "Access SDS Library",
        },
      },
      sustainability: {
        title: "Sustainability Commitment",
        description: "Our business strategy is rooted in sustainability and our commitment to environmental excellence through compliance with industry standards.",
        emissions: "Emission Reduction Target",
        waste: "Waste to Landfill",
        energy: "Renewable Energy Goal",
        wasteValue: "Zero",
        action: "Learn More About Our Commitment",
      },
      about: {
        title: "About Chemanol",
        description: "Founded in 1999, Chemanol (Methanol Chemicals Company) is a leading chemical manufacturer specializing in methanol and its derivatives. Our world-class production facilities and commitment to operational excellence position us as a key player in the global chemical industry.",
        facility: "World-class facilities in Al-Jubail Industrial City",
        facilityDesc: "State-of-the-art production capabilities",
        iso: "ISO certified operations",
        isoDesc: "ISO 9001, 14001, 45001 compliance",
        action: "Our Company & Leadership",
        imageAlt: "Company Overview Image",
      },
      media: {
        title: "Media Center",
        browseAll: "Browse All News",
        readMore: "Read More",
        items: {
          first: {
            date: "JANUARY 15, 2026",
            title: "Chemanol Announces Q4 Financial Results",
            description: "Strong performance driven by operational excellence...",
          },
          second: {
            date: "JANUARY 10, 2026",
            title: "New Partnership in Digital Innovation",
            description: "Collaboration to enhance operational efficiency...",
          },
          third: {
            date: "DECEMBER 20, 2025",
            title: "Sustainability Milestone Achieved",
            description: "30% reduction in emissions ahead of target...",
          },
        },
      },
      bottomCta: {
        title: "How Can We Help You?",
        description: "Contact our experts to find the right chemical solution for your business needs.",
        action: "Get in Touch",
      },
    },
    footer: {
      products: {
        title: "Products",
        portfolio: "Product Portfolio",
        methanol: "Methanol",
        formaldehyde: "Formaldehyde Products",
        derivatives: "Methanol Derivatives",
        specialty: "Specialty Chemicals",
      },
      industries: {
        title: "Industries & Applications",
        overview: "Overview",
        automotive: "Automotive",
        construction: "Construction",
        pharmaceuticals: "Pharmaceuticals",
        paints: "Paints & Coatings",
      },
      technical: {
        title: "Technical Resources",
        sds: "SDS Library",
        tds: "TDS / Specs Library",
        certifications: "Certifications",
        brochures: "Product Brochures",
        policies: "Policies Hub",
      },
      sustainability: {
        title: "Sustainability",
        overview: "Overview",
        ehss: "EHSS",
        operations: "Operations",
      },
      innovation: {
        title: "Innovation",
        digital: "Digital Transformation",
      },
      about: {
        title: "About Chemanol",
        overview: "Overview",
        leadership: "Leadership & Board",
        compliance: "Compliance & Ethics",
        policies: "Corporate Policies",
        supplyChain: "Supply Chain Responsibility",
        investor: "Investor Relations",
        quality: "Quality Management",
        mediaCenter: "Media Center",
        careers: "Careers",
      },
      contact: {
        title: "Contact & Support",
        enquiry: "General Enquiry",
        sales: "Sales Contacts",
        technical: "Technical Support",
        logistics: "Logistics Support",
        visit: "Visit Request",
        supplier: "Supplier Registration",
      },
      form: {
        title: "Submit Enquiry",
        name: "Your name",
        email: "Your email",
        message: "Your message",
        send: "Send",
      },
      copyright: "© 2026 Chemanol (Methanol Chemicals Company). All rights reserved. Developed by",
      privacy: "Privacy Policy & Terms of Use",
    },
  },
  ar: {
    header: {
      home: "الرئيسية",
      products: "المنتجات",
      industries: "الصناعات والتطبيقات",
      technicalResources: "الموارد الفنية",
      sustainability: "الاستدامة",
      innovation: "الابتكار",
      about: "عن شركة كيمانول",
      contact: "الاتصال والدعم",
      cta: "تواصل معنا",
      search: "بحث",
      openMenu: "فتح القائمة",
      closeMenu: "إغلاق القائمة",
    },
    mobileMenu: {
      title: "القائمة",
    },
    stockTicker: {
      lastUpdated: "آخر تحديث:",
    },
    home: {
      hero: {
        title: "الشركة الرائدة عالمياً في تصنيع المواد الكيميائية",
        description: "توفير الميثانول ومشتقات الميثانول من خلال عمليات مستدامة وابتكار مستمر.",
        headlineLine1: "كيمياء",
        headlineLine2: "تصنع",
        headlineLine3: "المستقبل.",
        exploreProducts: "استكشف المنتجات",
        learnMore: "اعرف المزيد",
        searchTitle: "اعثر على الحل المناسب",
        searchSubtitle: "ابحث في كتالوج منتجاتنا",
        searchPlaceholder: "المنتج أو رقم CAS أو التطبيق...",
      },
      stats: {
        production: "طن من الطاقة الإنتاجية السنوية",
        countries: "دولة في جميع أنحاء العالم",
        employees: "موظف متفاني",
        iso: "معايير الجودة المعتمدة",
      },
      products: {
        title: "منتجاتنا",
        subtitle: "حلول كيميائية عالية الجودة للصناعات العالمية",
        viewPortfolio: "عرض محفظة المنتجات",
        methanol: {
          title: "الميثانول",
          description: "ميثانول عالي النقاء لخلط الوقود والتركيب الكيميائي",
        },
        formaldehyde: {
          title: "منتجات الفورمالديهايد",
          description: "تركيزات متعددة للراتنج والتطبيقات الصناعية",
        },
        derivatives: {
          title: "مشتقات الميثانول",
          description: "منتجات ذات قيمة مضافة بما في ذلك MTBE والمواد الكيميائية المتخصصة",
        },
        specialty: {
          title: "المواد الكيميائية المتخصصة",
          description: "تركيبات مخصصة مصممة حسب مواصفات العملاء",
        },
        learnMore: "اعرف المزيد",
      },
      industries: {
        title: "الصناعات والتطبيقات",
        subtitle: "دعم الصناعات العالمية من خلال التطبيقات المدفوعة بالابتكار عبر قطاعات متنوعة",
        construction: {
          title: "البناء",
          description: "منتجات البناء الأساسية والراتنجات",
        },
        automotive: {
          title: "السيارات",
          description: "إضافات الوقود والمواد الكيميائية للأداء",
        },
        pharmaceuticals: {
          title: "الأدوية",
          description: "وسائط عالية النقاء",
        },
        exploreAll: "استكشف جميع الصناعات",
      },
      technical: {
        title: "الموارد الفنية",
        tds: {
          title: "أوراق بيانات المنتج (TDS)",
          description: "الوصول إلى المواصفات الفنية الشاملة وطرق الاختبار لجميع المنتجات",
          action: "عرض أوراق البيانات",
        },
        sds: {
          title: "أوراق بيانات السلامة (SDS)",
          description: "تحميل معلومات السلامة الحالية وإرشادات التعامل",
          action: "الوصول إلى مكتبة SDS",
        },
      },
      sustainability: {
        title: "التزام الاستدامة",
        description: "تتجذر استراتيجية أعمالنا في الاستدامة والتزامنا بالتميز البيئي من خلال الامتثال لمعايير الصناعة.",
        emissions: "هدف خفض الانبعاثات",
        waste: "نفايات إلى مكب النفايات",
        energy: "هدف الطاقة المتجددة",
        wasteValue: "صفر",
        action: "اعرف المزيد عن التزامنا",
      },
      about: {
        title: "عن شركة كيمانول",
        description: "تأسست شركة كيمانول (شركة كيماويات الميثانول) في عام 1999، وهي شركة رائدة في تصنيع المواد الكيميائية متخصصة في الميثانول ومشتقاته. تضعنا مرافق الإنتاج ذات المستوى العالمي والتزامنا بالتميز التشغيلي كلاعب رئيسي في صناعة الكيماويات العالمية.",
        facility: "مرافق عالمية المستوى في مدينة الجبيل الصناعية",
        facilityDesc: "قدرات إنتاج حديثة",
        iso: "عمليات معتمدة من ISO",
        isoDesc: "الامتثال لمعايير ISO 9001، 14001، 45001",
        action: "شركتنا والقيادة",
        imageAlt: "صورة نظرة عامة على الشركة",
      },
      media: {
        title: "المركز الإعلامي",
        browseAll: "تصفح جميع الأخبار",
        readMore: "اقرأ المزيد",
        items: {
          first: {
            date: "15 يناير 2026",
            title: "كيمانول تعلن نتائجها المالية للربع الرابع",
            description: "أداء قوي مدفوع بالتميز التشغيلي...",
          },
          second: {
            date: "10 يناير 2026",
            title: "شراكة جديدة في الابتكار الرقمي",
            description: "تعاون لتعزيز الكفاءة التشغيلية...",
          },
          third: {
            date: "20 ديسمبر 2025",
            title: "تحقيق إنجاز جديد في الاستدامة",
            description: "خفض الانبعاثات بنسبة 30% قبل الموعد المستهدف...",
          },
        },
      },
      bottomCta: {
        title: "كيف يمكننا مساعدتك؟",
        description: "تواصل مع خبرائنا للعثور على الحل الكيميائي المناسب لاحتياجات أعمالك.",
        action: "تواصل معنا",
      },
    },
    footer: {
      products: {
        title: "المنتجات",
        portfolio: "محفظة المنتجات",
        methanol: "الميثانول",
        formaldehyde: "منتجات الفورمالديهايد",
        derivatives: "مشتقات الميثانول",
        specialty: "المواد الكيميائية المتخصصة",
      },
      industries: {
        title: "الصناعات والتطبيقات",
        overview: "نظرة عامة",
        automotive: "السيارات",
        construction: "البناء",
        pharmaceuticals: "الأدوية",
        paints: "الدهانات والطلاءات",
      },
      technical: {
        title: "الموارد الفنية",
        sds: "مكتبة SDS",
        tds: "مكتبة TDS / المواصفات",
        certifications: "الشهادات",
        brochures: "كتيبات المنتج",
        policies: "مركز السياسات",
      },
      sustainability: {
        title: "الاستدامة",
        overview: "نظرة عامة",
        ehss: "البيئة والصحة والسلامة",
        operations: "العمليات",
      },
      innovation: {
        title: "الابتكار",
        digital: "التحول الرقمي",
      },
      about: {
        title: "عن شركة كيمانول",
        overview: "نظرة عامة",
        leadership: "القيادة ومجلس الإدارة",
        compliance: "الامتثال والأخلاقيات",
        policies: "السياسات المؤسسية",
        supplyChain: "مسؤولية سلسلة التوريد",
        investor: "علاقات المستثمرين",
        quality: "إدارة الجودة",
        mediaCenter: "المركز الإعلامي",
        careers: "الوظائف",
      },
      contact: {
        title: "الاتصال والدعم",
        enquiry: "استفسار عام",
        sales: "جهات اتصال المبيعات",
        technical: "الدعم الفني",
        logistics: "دعم اللوجستيات",
        visit: "طلب زيارة",
        supplier: "تسجيل المورد",
      },
      form: {
        title: "إرسال استفسار",
        name: "اسمك",
        email: "بريدك الإلكتروني",
        message: "رسالتك",
        send: "إرسال",
      },
      copyright: "© 2026 كيمانول (شركة كيماويات الميثانول). جميع الحقوق محفوظة. تم التطوير بواسطة",
      privacy: "سياسة الخصوصية وشروط الاستخدام",
    },
  },
};
