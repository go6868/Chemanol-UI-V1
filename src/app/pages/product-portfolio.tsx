import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown, FileText, SlidersHorizontal } from "lucide-react";
import { InnerPageHero } from "@/app/components/inner-page-hero";
import { AnimatedSection } from "@/app/components/animated-section";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { CardCornerCtaLink, SplitCtaLink } from "@/app/components/split-cta";
import { SectionHeading } from "@/app/components/section-heading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import constructionImage from "../../assets/Construction.jpg";
import automobileImage from "../../assets/Automobile.jpg";
import medicineImage from "../../assets/Medicine.jpg";
import sectionBackgroundImage from "../../assets/Section BG.jpg";

const heroImg = "https://images.unsplash.com/photo-1705727210721-961cc64a6895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaWNhbCUyMGxhYm9yYXRvcnklMjBibHVlJTIwbW9kZXJufGVufDF8fHx8MTc3NDg2OTc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const industryOptions = [
  "Automotive",
  "Construction",
  "Pharmaceuticals",
  "Energy",
  "Paints & Coatings",
  "Agriculture",
];

const applicationOptions = [
  "Fuel additives & oxygenates",
  "Resin & polymer production",
  "Solvents & cleaning agents",
  "Chemical intermediates",
  "Specialty formulations",
];

const products = [
  {
    id: "methanol",
    name: "Methanol",
    image: automobileImage,
    borderHover: "hover:border-[#0658a5]/35",
    description: "High-purity methanol for fuel blending, solvent systems, and core chemical synthesis routes across demanding industrial operations.",
    industries: ["Automotive", "Pharmaceuticals", "Energy"],
    applications: ["Fuel additives & oxygenates", "Solvents & cleaning agents", "Chemical intermediates"],
  },
  {
    id: "aqueous-formaldehyde-solution",
    name: "Aqueous Formaldehyde Solution",
    image: constructionImage,
    borderHover: "hover:border-[#B8BD44]/40",
    description: "Stabilized formaldehyde solution created for industrial blending, preservation systems, and downstream resin production.",
    industries: ["Construction", "Agriculture", "Paints & Coatings"],
    applications: ["Resin & polymer production", "Chemical intermediates"],
  },
  {
    id: "urea-formaldehyde-concentrate",
    name: "Urea Formaldehyde Concentrate",
    image: constructionImage,
    borderHover: "hover:border-[#B8BD44]/40",
    description: "Concentrated UF chemistry designed for board manufacturing, adhesive preparation, and high-volume processing.",
    industries: ["Construction", "Agriculture"],
    applications: ["Resin & polymer production", "Specialty formulations"],
  },
  {
    id: "hexamethylene-tetramine",
    name: "Hexamethylene Tetramine",
    image: medicineImage,
    borderHover: "hover:border-[#A96448]/40",
    description: "Specialty intermediate supporting curing systems, pharma processing, and technical formulation programs.",
    industries: ["Pharmaceuticals", "Agriculture", "Paints & Coatings"],
    applications: ["Chemical intermediates", "Specialty formulations"],
  },
  {
    id: "formaldehyde",
    name: "Formaldehyde Products",
    image: constructionImage,
    borderHover: "hover:border-[#B8BD44]/40",
    description: "Formaldehyde solutions engineered for resin systems, wood products, and industrial formulations that demand consistent process performance.",
    industries: ["Construction", "Paints & Coatings", "Agriculture"],
    applications: ["Resin & polymer production", "Specialty formulations"],
  },
  {
    id: "paraformaldehyde",
    name: "Paraformaldehyde",
    image: constructionImage,
    borderHover: "hover:border-[#B3A03D]/40",
    description: "Solid formaldehyde source aimed at crop chemistry, disinfection programs, and specialty resin modification.",
    industries: ["Agriculture", "Construction", "Pharmaceuticals"],
    applications: ["Chemical intermediates", "Specialty formulations"],
  },
  {
    id: "urea-formaldehyde-powder-resin",
    name: "Urea Formaldehyde Powder Resin",
    image: constructionImage,
    borderHover: "hover:border-[#B8BD44]/40",
    description: "Powder resin option tailored for dry blending, efficient board pressing, and controlled bond development.",
    industries: ["Construction", "Agriculture"],
    applications: ["Resin & polymer production", "Specialty formulations"],
  },
  {
    id: "melamine-formaldehyde-powder-resin",
    name: "Melamine Formaldehyde Powder Resin",
    image: constructionImage,
    borderHover: "hover:border-[#B3A03D]/40",
    description: "Melamine-based powder resin for hardwearing surfaces, decorative boards, and performance panel systems.",
    industries: ["Construction", "Paints & Coatings"],
    applications: ["Resin & polymer production", "Specialty formulations"],
  },
  {
    id: "derivatives",
    name: "Methanol Derivatives",
    image: sectionBackgroundImage,
    borderHover: "hover:border-[#B3A03D]/40",
    description: "A versatile derivatives portfolio including MTBE and related intermediates supporting octane performance and downstream conversion chemistry.",
    industries: ["Automotive", "Energy", "Paints & Coatings"],
    applications: ["Fuel additives & oxygenates", "Chemical intermediates", "Solvents & cleaning agents"],
  },
  {
    id: "melamine-urea-formaldehyde-resin",
    name: "Melamine Urea Formaldehyde Resin",
    image: constructionImage,
    borderHover: "hover:border-[#B8BD44]/40",
    description: "Hybrid MUF resin developed for moisture resistance, quick cure, and engineered wood durability.",
    industries: ["Construction", "Agriculture"],
    applications: ["Resin & polymer production", "Specialty formulations"],
  },
  {
    id: "sulphonated-naphthalene-formaldehyde",
    name: "Sulphonated Naphthalene Formaldehyde",
    image: constructionImage,
    borderHover: "hover:border-[#0658a5]/35",
    description: "Dispersant technology built for concrete flow control, admixture stability, and formulation consistency.",
    industries: ["Construction", "Paints & Coatings"],
    applications: ["Specialty formulations", "Chemical intermediates"],
  },
  {
    id: "dimethylamine",
    name: "Dimethylamine",
    image: medicineImage,
    borderHover: "hover:border-[#A96448]/40",
    description: "Reactive amine feedstock serving pharmaceutical synthesis, crop chemistry, and performance additives.",
    industries: ["Pharmaceuticals", "Agriculture", "Energy"],
    applications: ["Chemical intermediates", "Specialty formulations"],
  },
  {
    id: "specialty",
    name: "Specialty Chemicals",
    image: medicineImage,
    borderHover: "hover:border-[#A96448]/40",
    description: "Custom chemical solutions tailored for regulated environments, specialized formulations, and application-specific manufacturing requirements.",
    industries: ["Pharmaceuticals", "Agriculture", "Paints & Coatings"],
    applications: ["Specialty formulations", "Chemical intermediates"],
  },
  {
    id: "trimethylamine",
    name: "Trimethylamine",
    image: medicineImage,
    borderHover: "hover:border-[#0658a5]/35",
    description: "Amine building block for surfactant development, process auxiliaries, and industrial specialty programs.",
    industries: ["Pharmaceuticals", "Agriculture", "Energy"],
    applications: ["Chemical intermediates", "Specialty formulations"],
  },
  {
    id: "monomethylamine",
    name: "Monomethylamine",
    image: medicineImage,
    borderHover: "hover:border-[#A96448]/40",
    description: "Flexible intermediate supporting agrochemical, pharmaceutical, and custom formulation manufacturing lines.",
    industries: ["Pharmaceuticals", "Agriculture", "Paints & Coatings"],
    applications: ["Chemical intermediates", "Specialty formulations"],
  },
];

const technicalArticles = [
  {
    to: "/technical-resources/articles/methanol-fuel-systems",
    title: "Methanol in Modern Fuel Systems",
    desc: "Technical overview of methanol blending in gasoline and its impact on engine performance.",
  },
  {
    to: "/technical-resources/articles/formaldehyde-resins",
    title: "Formaldehyde-Based Resins: Applications & Performance",
    desc: "A practical guide to resin chemistry, manufacturing applications, and performance considerations.",
  },
  {
    to: "/technical-resources/articles/mtbe-properties",
    title: "MTBE: Properties and Industrial Uses",
    desc: "Technical data on MTBE as a fuel oxygenate, blending component, and industrial intermediate.",
  },
];

export function ProductPortfolio() {
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedApplications, setSelectedApplications] = useState<string[]>([]);
  const [expandedGroups, setExpandedGroups] = useState({
    industries: true,
    applications: true,
  });

  const toggleExpandedGroup = (group: "industries" | "applications") => {
    setExpandedGroups((current) => ({
      ...current,
      [group]: !current[group],
    }));
  };

  const toggleFilterValue = (
    value: string,
    selectedValues: string[],
    setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setSelectedValues((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesIndustries =
      selectedIndustries.length === 0 ||
      selectedIndustries.some((industry) => product.industries.includes(industry));

    const matchesApplications =
      selectedApplications.length === 0 ||
      selectedApplications.some((application) => product.applications.includes(application));

    return matchesIndustries && matchesApplications;
  });

  const activeFilterCount = selectedIndustries.length + selectedApplications.length;

  const getIndustryTagClassName = (industry: string) =>
    selectedIndustries.includes(industry)
      ? "border-[#7FB8E5] bg-[#EAF5FD] text-[#0F57A4]"
      : "border-[#D2E0EA] bg-[#F5FAFD] text-[#355468]";

  const getApplicationTagClassName = (application: string) =>
    selectedApplications.includes(application)
      ? "border-[#7FB8E5] bg-[#EAF5FD] text-[#0F57A4]"
      : "border-[#CFE1F1] bg-[#0658a5]/[0.06] text-[#0658a5]";

  return (
    <div className="bg-white">
      <InnerPageHero
        title="Product Portfolio"
        description="Comprehensive range of methanol and methanol derivatives delivering quality and reliability to global industries."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: "Products" }]}
      />

      <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start">
          <aside className="order-1 w-full lg:w-[290px] lg:shrink-0">
            <div className="border border-[#D9E6F0] bg-[linear-gradient(180deg,#FFFFFF_0%,#F6FAFD_100%)] p-4 shadow-[0_20px_50px_rgba(6,88,165,0.06)] lg:sticky lg:top-28">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 text-[#0658a5]">
                    <SlidersHorizontal className="h-6 w-6" strokeWidth={1.8} />
                    <span className="text-xl text-neutral-900">Find Products</span>
                  </div>
                </div>
                {activeFilterCount > 0 ? (
                  <span className="bg-[#0658a5]/10 px-3 py-1 text-xs text-[#0658a5]">
                    {activeFilterCount} selected
                  </span>
                ) : null}
              </div>

              <div className="space-y-3">
                <div className="border border-[#D6E3EE] bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-neutral-900"
                    onClick={() => toggleExpandedGroup("industries")}
                  >
                    <span>Industries</span>
                    <ChevronDown
                      className={`h-4 w-4 text-neutral-500 transition-transform duration-200 ${expandedGroups.industries ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  {expandedGroups.industries ? (
                    <div className="space-y-3 border-t border-[#E6EEF4] px-4 py-3">
                      {industryOptions.map((industry) => (
                        <label key={industry} className="flex cursor-pointer items-start gap-3 text-sm text-neutral-600">
                          <input
                            type="checkbox"
                            className="mt-0.5 h-4 w-4 rounded-none border-[#B9CAD8] accent-[#0658a5]"
                            checked={selectedIndustries.includes(industry)}
                            onChange={() => toggleFilterValue(industry, selectedIndustries, setSelectedIndustries)}
                          />
                          <span>{industry}</span>
                        </label>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="border border-[#D6E3EE] bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-neutral-900"
                    onClick={() => toggleExpandedGroup("applications")}
                  >
                    <span>Application</span>
                    <ChevronDown
                      className={`h-4 w-4 text-neutral-500 transition-transform duration-200 ${expandedGroups.applications ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                  {expandedGroups.applications ? (
                    <div className="space-y-3 border-t border-[#E6EEF4] px-4 py-3">
                      {applicationOptions.map((application) => (
                        <label key={application} className="flex cursor-pointer items-start gap-3 text-sm text-neutral-600">
                          <input
                            type="checkbox"
                            className="mt-0.5 h-4 w-4 rounded-none border-[#B9CAD8] accent-[#0658a5]"
                            checked={selectedApplications.includes(application)}
                            onChange={() => toggleFilterValue(application, selectedApplications, setSelectedApplications)}
                          />
                          <span>{application}</span>
                        </label>
                      ))}
                    </div>
                  ) : null}
                </div>

                <button
                  type="button"
                  className="w-full border border-[#D6E3EE] bg-white px-4 py-3 text-sm text-[#0658a5] transition-colors duration-200 hover:border-[#0F57A4] hover:text-[#0F57A4] disabled:cursor-not-allowed disabled:opacity-45"
                  onClick={() => {
                    setSelectedIndustries([]);
                    setSelectedApplications([]);
                  }}
                  disabled={activeFilterCount === 0}
                >
                  Remove filters
                </button>
              </div>
            </div>
          </aside>

          <div className="order-2 w-full flex-1">
            <section id="product-range" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading
                  className="mb-8"
                  title="Product Range"
                  description="Browse our core product families and filter by industry or application to narrow the range."
                  size="md"
                  descriptionClassName="text-sm sm:text-base text-neutral-600"
                />
              </AnimatedSection>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {filteredProducts.map((product, i) => (
                    <AnimatedSection key={product.id} delay={i * 0.08}>
                      <div className={`group relative transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${product.borderHover}`}>
                        <div
                          className="pointer-events-none absolute inset-0 bg-[#0F57A4] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[8px] group-hover:translate-y-[8px] group-hover:opacity-100"
                        />
                        <div className="relative z-10 flex h-full flex-col overflow-hidden border border-[#D9E6F0] bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-[8px] group-hover:-translate-y-[8px]">
                          <div className="aspect-[16/9] overflow-hidden bg-neutral-100">
                            <ImageWithFallback
                              src={product.image}
                              alt={product.name}
                              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                            />
                          </div>

                          <div className="flex flex-1 flex-col p-6">
                            <h3 className="mb-2 text-xl text-neutral-900">{product.name}</h3>
                            <p
                              className="mb-5 text-sm text-neutral-600"
                              style={{
                                lineHeight: 1.7,
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 1,
                                overflow: "hidden",
                              }}
                            >
                              {product.description}
                            </p>

                            <div className="space-y-4">
                              <div>
                                <div className="mb-2 text-xs uppercase tracking-[0.16em] text-neutral-400">Industries</div>
                                <div className="flex max-h-[3.25rem] flex-wrap gap-2 overflow-hidden">
                                  {product.industries.map((industry) => (
                                    <span
                                      key={industry}
                                      className={`border px-3 py-1 text-xs transition-colors duration-300 ${getIndustryTagClassName(industry)}`}
                                    >
                                      {industry}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <div className="mb-2 text-xs uppercase tracking-[0.16em] text-neutral-400">Applications</div>
                                <div className="flex max-h-[3.25rem] flex-wrap gap-2 overflow-hidden">
                                  {product.applications.map((application) => (
                                    <span
                                      key={application}
                                      className={`border px-3 py-1 text-xs transition-colors duration-300 ${getApplicationTagClassName(application)}`}
                                    >
                                      {application}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <CardCornerCtaLink to={`/products/${product.id}`} label="View Details" size="sm" className="mt-6" />
                          </div>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              ) : (
                <div className="rounded-[18px] border border-dashed border-[#C8D7E3] bg-[#FBFDFF] px-6 py-14 text-center">
                  <div className="mb-2 text-lg text-neutral-900">No products match the selected filters</div>
                  <p className="mx-auto max-w-xl text-sm leading-7 text-neutral-500">
                    Adjust the selected industries or applications to broaden the result set.
                  </p>
                </div>
              )}
            </section>
          </div>
        </div>

        <section id="technical-articles" className="mt-20 scroll-mt-24 border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          <AnimatedSection>
            <SectionHeading
              className="mb-8"
              title="Technical Articles"
              action={<SplitCtaLink to="/media-center" label="View All Articles" size="md" />}
              size="md"
            />
          </AnimatedSection>

          <Carousel opts={{ align: "start" }} className="px-1 sm:px-2">
            <CarouselContent>
              {technicalArticles.map((article, i) => (
                <CarouselItem key={article.to} className="md:basis-1/2 xl:basis-1/3">
                  <AnimatedSection delay={i * 0.08}>
                    <Link
                      to={article.to}
                      className="block h-full overflow-hidden border border-[#D6E4EE] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#2dabe2]/35 hover:shadow-[0_18px_40px_rgba(6,88,165,0.08)]"
                    >
                      <div className="flex h-40 items-center justify-center bg-gradient-to-br from-[#0658a5]/6 to-[#2dabe2]/8">
                        <FileText className="h-11 w-11 text-[#0658a5]/30" strokeWidth={1.5} />
                      </div>
                      <div className="flex min-h-[180px] flex-col p-5">
                        <div className="mb-2 text-base text-neutral-900 transition-colors duration-300 hover:text-[#0658a5]">
                          {article.title}
                        </div>
                        <div className="text-sm leading-7 text-neutral-500">{article.desc}</div>
                      </div>
                    </Link>
                  </AnimatedSection>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-end gap-3 pr-1">
              <CarouselPrevious className="static translate-y-0 rounded-full border-[#D1DEE9] bg-white text-[#0658a5] shadow-none hover:bg-[#0658a5] hover:text-white" />
              <CarouselNext className="static translate-y-0 rounded-full border-[#D1DEE9] bg-white text-[#0658a5] shadow-none hover:bg-[#0658a5] hover:text-white" />
            </div>
          </Carousel>
        </section>
      </div>
    </div>
  );
}
