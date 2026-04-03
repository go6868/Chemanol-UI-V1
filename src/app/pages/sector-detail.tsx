import { useParams, Link } from "react-router";
import { PageHeader } from "@/app/components/page-header";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/app/components/ui/card";
import { ArrowLeft, ArrowRight, FileText, Beaker, CheckCircle, Droplet, Layers, FlaskConical } from "lucide-react";

export function SectorDetail() {
  const { sectorId } = useParams();

  const sectors = {
    automotive: {
      name: "Automotive",
      description: "Advanced chemical solutions for automotive manufacturing, coatings, and fuel additives that enhance performance and sustainability.",
      icon: "🚗",
      products: [
        {
          name: "Methanol for Fuel Blending",
          description: "High-purity methanol for gasoline and biodiesel production, improving octane rating and reducing emissions."
        },
        {
          name: "Formaldehyde for Resins",
          description: "Key component for automotive adhesives and high-performance resins used in vehicle manufacturing."
        },
        {
          name: "MTBE (Fuel Oxygenate)",
          description: "Premium octane enhancer for cleaner combustion and improved engine performance."
        }
      ],
      applications: [
        "Fuel additives and oxygenates for cleaner combustion",
        "Adhesives and bonding agents for vehicle assembly",
        "Coatings and surface treatments for corrosion resistance",
        "Composite materials for lightweight components"
      ],
      caseStudy: {
        title: "Automotive OEM Partnership",
        description: "Chemanol partnered with a leading automotive manufacturer to supply high-purity MTBE for their fuel blending operations, resulting in 15% reduction in emissions and improved fuel efficiency."
      }
    },
    construction: {
      name: "Construction",
      description: "Essential building materials and chemical solutions for modern construction, including wood products, adhesives, and concrete additives.",
      icon: "🏗️",
      products: [
        {
          name: "Formaldehyde-based Resins",
          description: "High-performance resins for plywood, particleboard, and MDF manufacturing."
        },
        {
          name: "Urea-Formaldehyde Resins",
          description: "Durable adhesives for engineered wood products and laminates."
        },
        {
          name: "Phenol-Formaldehyde Resins",
          description: "Weather-resistant resins for exterior-grade wood panels and construction materials."
        }
      ],
      applications: [
        "Plywood and engineered wood adhesives",
        "MDF and particleboard binding agents",
        "Concrete additives and admixtures",
        "Insulation foam components"
      ],
      caseStudy: {
        title: "Sustainable Wood Panel Production",
        description: "A major wood panel manufacturer adopted Chemanol's low-emission formaldehyde resins, achieving E0 grade certification and meeting stringent environmental standards."
      }
    },
    pharmaceuticals: {
      name: "Pharmaceuticals",
      description: "High-purity chemical intermediates for pharmaceutical synthesis and fine chemical production with stringent quality control.",
      icon: "💊",
      products: [
        {
          name: "Pharmaceutical Grade Methanol",
          description: "Ultra-pure methanol meeting USP/EP standards for API synthesis and extraction processes."
        },
        {
          name: "Formaldehyde Solutions",
          description: "Controlled-concentration formaldehyde for pharmaceutical intermediates and synthesis."
        },
        {
          name: "Custom Chemical Intermediates",
          description: "Tailored chemical solutions for specific pharmaceutical applications."
        }
      ],
      applications: [
        "Active pharmaceutical ingredient (API) synthesis",
        "Solvent for extraction and purification",
        "Chemical intermediates for drug manufacturing",
        "Laboratory reagents and analytical standards"
      ],
      caseStudy: {
        title: "API Manufacturing Excellence",
        description: "Chemanol supplied pharmaceutical-grade methanol to a global API manufacturer, maintaining 99.9% purity and zero batch rejections over 3 years of partnership."
      }
    },
    energy: {
      name: "Energy",
      description: "Fuel additives and alternative energy solutions supporting cleaner energy production and improved fuel performance.",
      icon: "⚡",
      products: [
        {
          name: "Methanol for Fuel Applications",
          description: "Clean-burning methanol for fuel cells, turbines, and alternative fuel systems."
        },
        {
          name: "MTBE (Methyl Tertiary-Butyl Ether)",
          description: "High-performance octane enhancer and oxygenate for gasoline blending."
        },
        {
          name: "Biodiesel Components",
          description: "Methanol for biodiesel transesterification processes."
        }
      ],
      applications: [
        "Fuel cell technology and hydrogen carriers",
        "Gasoline octane enhancement",
        "Biodiesel production",
        "Gas turbine fuel systems"
      ],
      caseStudy: {
        title: "Renewable Energy Integration",
        description: "Chemanol partnered with a renewable energy company to supply methanol for fuel cell applications, supporting 50MW of clean energy generation."
      }
    },
    "paints-coatings": {
      name: "Paints & Coatings",
      description: "Solvents and chemical intermediates for high-performance paints, coatings, and surface treatment applications.",
      icon: "🎨",
      products: [
        {
          name: "Industrial Solvents",
          description: "High-purity methanol for paint formulation, thinning, and cleaning applications."
        },
        {
          name: "Resin Components",
          description: "Chemical intermediates for coating resins and film-forming agents."
        },
        {
          name: "Formaldehyde for Coatings",
          description: "Cross-linking agents for durable and weather-resistant coatings."
        }
      ],
      applications: [
        "Industrial paint formulations",
        "Automotive coatings and clear coats",
        "Architectural and decorative paints",
        "Protective coatings and anti-corrosion treatments"
      ],
      caseStudy: {
        title: "High-Performance Coating Solutions",
        description: "A leading coatings manufacturer utilized Chemanol's solvents to develop a new line of low-VOC industrial paints, reducing environmental impact by 40%."
      }
    },
    agriculture: {
      name: "Agriculture",
      description: "Chemical solutions for agricultural applications including fertilizers, pesticides, and crop protection products.",
      icon: "🌾",
      products: [
        {
          name: "Formaldehyde for Agrochemicals",
          description: "Intermediate for pesticide and herbicide formulation."
        },
        {
          name: "Methanol for Chemical Synthesis",
          description: "Raw material for agricultural chemical production."
        },
        {
          name: "Fertilizer Components",
          description: "Chemical intermediates for specialty fertilizers and soil treatments."
        }
      ],
      applications: [
        "Pesticide and herbicide formulation",
        "Fertilizer production and additives",
        "Seed treatment chemicals",
        "Crop protection products"
      ],
      caseStudy: {
        title: "Sustainable Agriculture Support",
        description: "Chemanol supplied agricultural-grade chemicals to a fertilizer manufacturer, enabling the production of 500,000 tons of crop nutrients annually."
      }
    }
  };

  const sector = sectors[sectorId as keyof typeof sectors];

  if (!sector) {
    return (
      <div className="bg-neutral-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Sector Not Found</h1>
          <Link to="/industries">
            <Button>Return to Industries</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50">
      <PageHeader title={sector.name} description={sector.description} />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <Breadcrumbs items={[
          { label: "Industries & Applications", href: "/industries" },
          { label: sector.name }
        ]} />

        <div className="max-w-6xl mx-auto space-y-12 mt-8">
          {/* Products Section */}
          <section>
            <h2 className="text-3xl mb-6 text-neutral-900">Our Products for {sector.name}</h2>
            <div className="grid grid-cols-3 gap-6 items-stretch">
              {sector.products.map((product, index) => {
                // Select different icons for each product
                const icons = [Droplet, Layers, FlaskConical];
                const IconComponent = icons[index] || Beaker;
                
                return (
                  <Card key={index} className="hover:border-neutral-400 transition-colors h-full">
                    <CardHeader className="pb-8">
                      <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-lg mb-3">{product.name}</CardTitle>
                      <CardDescription className="leading-relaxed">{product.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Applications Section */}
          <section className="bg-white border border-neutral-200 rounded-lg p-8">
            <h2 className="text-2xl mb-6 text-neutral-900">Key Applications</h2>
            <div className="grid grid-cols-2 gap-4">
              {sector.applications.map((application, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-700">{application}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Case Study Section */}
          <section className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <div className="flex items-start gap-4 mb-4">
              <FileText className="w-8 h-8 text-blue-600 shrink-0" />
              <div>
                <h3 className="text-xl mb-2 text-neutral-900">{sector.caseStudy.title}</h3>
                <p className="text-sm text-neutral-700">{sector.caseStudy.description}</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-white border border-neutral-200 rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg mb-2 text-neutral-900">Interested in Our {sector.name} Solutions?</h3>
                <p className="text-sm text-neutral-600">
                  Contact our team to discuss your specific requirements and technical specifications.
                </p>
              </div>
              <Link to="/contact">
                <Button className="group">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-rotate-45" />
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}