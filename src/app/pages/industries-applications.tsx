import { InnerPageHero } from "@/app/components/inner-page-hero";
import { AnimatedSection } from "@/app/components/animated-section";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Building2, Droplet, Pill, Paintbrush, Fuel, Layers, Sparkles, FlaskConical, Beaker, Car, Leaf } from "lucide-react";
import { Link } from "react-router";
import { AnchorNavigation } from "@/app/components/anchor-navigation";
import { CardCornerCtaLink } from "@/app/components/split-cta";
import { SectionHeading } from "@/app/components/section-heading";

const heroImg = "https://images.unsplash.com/photo-1740914994162-0b2a49280aeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwbG9naXN0aWNzJTIwc2hpcHBpbmd8ZW58MXx8fHwxNzc0ODY5NzY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const sectors = [
  { id: "automotive", icon: Car, color: "text-[#0658a5]", bg: "bg-[#0658a5]/10", title: "Automotive", desc: "Advanced resins and formaldehyde derivatives used for high-performance coatings, adhesives to enhance vehicle durability and fuel efficiency." },
  { id: "construction", icon: Building2, color: "text-[#B8BD44]", bg: "bg-[#B8BD44]/10", title: "Construction", desc: "Essential building agents for wood products (MDF, plywood), concrete additives, and construction chemicals." },
  { id: "pharmaceuticals", icon: Pill, color: "text-[#B3A03D]", bg: "bg-[#B3A03D]/10", title: "Pharmaceuticals", desc: "High-purity methanol as intermediates critical for the synthesis of active pharmaceutical ingredients." },
  { id: "energy", icon: Droplet, color: "text-[#A96448]", bg: "bg-[#A96448]/10", title: "Energy", desc: "Fuel additives and alternative energy solutions including methanol for fuel cells and MTBE for improved octane." },
  { id: "paints-coatings", icon: Paintbrush, color: "text-[#0658a5]", bg: "bg-[#0658a5]/10", title: "Paints & Coatings", desc: "Solvents and chemical intermediates for high-performance paints, coatings, and surface treatment applications." },
  { id: "agriculture", icon: Leaf, color: "text-[#B8BD44]", bg: "bg-[#B8BD44]/10", title: "Agriculture", desc: "Chemical solutions for agricultural applications including fertilizers, pesticides, and crop protection products." },
];

export function IndustriesApplications() {
  return (
    <div className="bg-white">
      <InnerPageHero
        title="Industries We Serve"
        description="Chemanol provides essential chemical solutions that power a diverse range of global industries. From automotive coatings to pharmaceutical synthesis, our high-purity methanol derivatives drive innovation."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: "Industries & Applications" }]}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="hidden lg:block w-64 flex-shrink-0">
            <AnchorNavigation items={[
              { id: "by-industry", label: "By Industry" },
              { id: "by-application", label: "By Application" },
              { id: "case-studies", label: "Case Studies" },
              { id: "technical-articles", label: "Technical Articles" },
            ]} />
          </div>

          <div className="flex-1 w-full lg:w-auto space-y-20">
            {/* By Industry */}
            <section id="by-industry" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading
                  className="mb-8"
                  title="Explore by Sector"
                  description="Discover how our products are applied across key market sectors."
                  size="lg"
                  descriptionClassName="text-neutral-500"
                />
              </AnimatedSection>
              <div className="grid grid-cols-2 gap-6">
                {sectors.map((sector, i) => (
                  <AnimatedSection key={sector.id} delay={i * 0.08}>
                    <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                      <div className="bg-gradient-to-br from-[#0658a5]/5 to-[#2dabe2]/5 rounded-sm h-28 mb-4 flex items-center justify-center">
                        <sector.icon className="w-10 h-10 text-[#0658a5]/20" strokeWidth={1.5} />
                      </div>
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-10 h-10 ${sector.bg} rounded-sm flex items-center justify-center flex-shrink-0`}>
                          <sector.icon className={`w-5 h-5 ${sector.color}`} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg text-neutral-900 mt-1">{sector.title}</h3>
                      </div>
                      <p className="text-sm text-neutral-500 mb-4" style={{ lineHeight: 1.6 }}>{sector.desc}</p>
                      <CardCornerCtaLink to={`/industries/${sector.id}`} label={`Explore ${sector.title}`} size="sm" />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>

            {/* By Application */}
            <section id="by-application" className="bg-neutral-50 border border-neutral-200 rounded-sm p-8 scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="By Application" size="md" />
              </AnimatedSection>
              <div className="grid grid-cols-3 gap-5">
                {[
                  { icon: Fuel, color: "text-[#0658a5]", bg: "bg-[#0658a5]/10", label: "Fuel additives & oxygenates", desc: "MTBE for octane enhancement", sub: "Automotive, Transportation" },
                  { icon: Layers, color: "text-[#B8BD44]", bg: "bg-[#B8BD44]/10", label: "Resin & polymer production", desc: "Urea and phenol-formaldehyde resins", sub: "Construction, Wood Products" },
                  { icon: Sparkles, color: "text-[#B3A03D]", bg: "bg-[#B3A03D]/10", label: "Solvents & cleaning agents", desc: "Industrial methanol solvents", sub: "Coatings, Manufacturing" },
                  { icon: FlaskConical, color: "text-[#A96448]", bg: "bg-[#A96448]/10", label: "Chemical intermediates", desc: "Building blocks for synthesis", sub: "Pharmaceuticals, Specialty" },
                  { icon: Beaker, color: "text-[#0658a5]", bg: "bg-[#0658a5]/10", label: "Specialty formulations", desc: "Custom chemical solutions", sub: "Various Industries" },
                ].map((item, i) => (
                  <AnimatedSection key={item.label} delay={i * 0.08}>
                    <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group">
                      <div className="bg-gradient-to-br from-[#0658a5]/5 to-[#2dabe2]/5 rounded-sm h-24 mb-4 flex items-center justify-center">
                        <item.icon className="w-8 h-8 text-[#0658a5]/20" strokeWidth={1.5} />
                      </div>
                      <div className="flex items-start gap-3 mb-2">
                        <div className={`w-9 h-9 ${item.bg} rounded-sm flex items-center justify-center flex-shrink-0`}>
                          <item.icon className={`w-4 h-4 ${item.color}`} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-sm text-neutral-900 mt-0.5">{item.label}</h3>
                      </div>
                      <p className="text-xs text-neutral-500 mb-1">{item.desc}</p>
                      <p className="text-xs text-neutral-400">{item.sub}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>

            {/* Innovation CTA */}
            <AnimatedSection>
              <section className="bg-[#0658a5] text-white rounded-sm p-10">
                <div className="grid grid-cols-2 gap-10 items-center">
                  <div>
                    <h2 className="text-2xl mb-3">Innovation in Application</h2>
                    <p className="text-white/60 mb-6" style={{ lineHeight: 1.6 }}>Our technical teams work closely with industry partners to develop custom formulations. Learn how our methanol derivatives helped solve critical elasticity issues in next-generation composite materials.</p>
                    <div className="flex gap-3">
                      <button className="text-sm border border-white/30 text-white px-5 py-2.5 rounded-sm hover:bg-white hover:text-[#0658a5] transition-all duration-300 cursor-pointer">Read Case Studies</button>
                      <button className="text-sm border border-white/30 text-white px-5 py-2.5 rounded-sm hover:bg-[#2dabe2] hover:border-[#2dabe2] transition-all duration-300 cursor-pointer">Contact Technical Team</button>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-sm h-52 flex items-center justify-center">
                    <Droplet className="w-14 h-14 text-white/20" strokeWidth={1} />
                  </div>
                </div>
              </section>
            </AnimatedSection>

            {/* Case Studies */}
            <section id="case-studies" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Case Studies" size="md" />
              </AnimatedSection>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { sector: "AUTOMOTIVE", title: "Fuel Blending Optimization", desc: "How a major fuel distributor achieved 15% efficiency gains using our MTBE solutions", link: "/case-studies/fuel-blending-optimization" },
                  { sector: "CONSTRUCTION", title: "Resin Performance Improvement", desc: "Advanced formaldehyde solutions for high-strength wood panel manufacturing", link: "/case-studies/resin-performance-improvement" },
                  { sector: "SPECIALTY", title: "Custom Chemical Solutions", desc: "Tailored methanol derivatives for pharmaceutical intermediate synthesis", link: "/case-studies/custom-chemical-solutions" },
                ].map((study, i) => (
                  <AnimatedSection key={study.link} delay={i * 0.1}>
                    <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                      <div className="text-xs text-neutral-400 mb-2">{study.sector}</div>
                      <h3 className="text-sm text-neutral-900 mb-2 group-hover:text-[#0658a5] transition-colors">{study.title}</h3>
                      <p className="text-xs text-neutral-500 mb-4" style={{ lineHeight: 1.6 }}>{study.desc}</p>
                      <CardCornerCtaLink to={study.link} label="Read Case Study" size="sm" />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>

            {/* Technical Articles */}
            <section id="technical-articles" className="bg-neutral-50 border border-neutral-200 rounded-sm p-8 scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-6" title="Technical Articles" size="md" />
              </AnimatedSection>
              <div className="space-y-4">
                {[
                  { title: "Methanol in Modern Fuel Systems", desc: "Technical overview of methanol blending in gasoline and its impact on engine performance", link: "/technical-resources/articles/methanol-fuel-systems" },
                  { title: "Formaldehyde-Based Resins: Applications & Performance", desc: "Comprehensive guide to formaldehyde resin systems in wood panel manufacturing", link: "/technical-resources/articles/formaldehyde-resins" },
                  { title: "MTBE: Properties and Industrial Uses", desc: "Technical data on MTBE as a fuel oxygenate and octane enhancer", link: "/technical-resources/articles/mtbe-properties" },
                ].map((article, i) => (
                  <AnimatedSection key={article.link} delay={i * 0.08}>
                    <div className="pb-4 border-b border-neutral-200 last:border-0">
                      <h3 className="text-sm text-neutral-900 mb-1">{article.title}</h3>
                      <p className="text-xs text-neutral-500 mb-2">{article.desc}</p>
                      <CardCornerCtaLink to={article.link} label="Read Article" size="sm" />
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
