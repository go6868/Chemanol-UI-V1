import { InnerPageHero } from "@/app/components/inner-page-hero";
import { AnimatedSection } from "@/app/components/animated-section";
import { SectionHeading } from "@/app/components/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/app/components/ui/accordion";
import { Leaf, Shield, Factory, Truck, FileCheck, Users } from "lucide-react";
import { AnchorNavigation } from "@/app/components/anchor-navigation";

const heroImg = "https://images.unsplash.com/photo-1723126907527-ae685454c54c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHN1c3RhaW5hYmxlJTIwZmFjdG9yeSUyMG5hdHVyZXxlbnwxfHx8fDE3NzQ4Njk3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Sustainability() {
  return (
    <div className="bg-white">
      <InnerPageHero
        title="Sustainability"
        description="Our commitment to sustainable operations, environmental stewardship, and responsible corporate citizenship drives innovation across all business functions."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: "Sustainability" }]}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="hidden lg:block w-64 flex-shrink-0">
            <AnchorNavigation items={[
              { id: "overview", label: "Overview" },
              { id: "ehss", label: "EHSS" },
              { id: "operations", label: "Operations" },
            ]} />
          </div>

          <div className="flex-1 w-full lg:w-auto space-y-20">
            {/* Overview */}
            <section id="overview" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Overview" size="md" />
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8">
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {[
                      { icon: Shield, color: "text-[#B8BD44]", bg: "bg-[#B8BD44]/10", title: "Responsible Care", desc: "Adhering to global chemical industry standards for safety, health, and environmental protection" },
                      { icon: Users, color: "text-[#0658a5]", bg: "bg-[#0658a5]/10", title: "Corporate Social Responsibility", desc: "Contributing to community welfare and economic development" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className={`w-12 h-12 ${item.bg} rounded-sm flex items-center justify-center shrink-0`}>
                          <item.icon className={`w-6 h-6 ${item.color}`} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-sm text-neutral-900 mb-1">{item.title}</h3>
                          <p className="text-xs text-neutral-500" style={{ lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-neutral-700" style={{ lineHeight: 1.6 }}>
                    Chemanol is committed to operating sustainably and responsibly. We implement comprehensive programs across environmental protection, health and safety, and supply chain responsibility to ensure the highest standards of compliance and ethical conduct.
                  </p>
                </div>
              </AnimatedSection>
            </section>

            {/* EHSS */}
            <section id="ehss" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Environment, Health, Safety & Security" size="md" />
              </AnimatedSection>

              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { icon: Leaf, color: "text-[#B8BD44]", bg: "bg-[#B8BD44]/10", title: "Environment", desc: "Minimizing environmental impact through waste reduction, emissions control, and resource conservation", items: ["Emissions monitoring", "Waste management systems", "Water conservation programs", "Environmental compliance audits"] },
                  { icon: Shield, color: "text-[#A96448]", bg: "bg-[#A96448]/10", title: "Health & Safety", desc: "Protecting our workforce through comprehensive safety protocols and training programs", items: ["Safety training & certification", "Incident prevention programs", "Personal protective equipment", "Emergency response planning"] },
                  { icon: FileCheck, color: "text-[#B3A03D]", bg: "bg-[#B3A03D]/10", title: "Product Stewardship", desc: "Ensuring product safety throughout the entire lifecycle from development to disposal", items: ["Product safety assessments", "Regulatory compliance", "Customer safety support", "Lifecycle management"] },
                ].map((card, i) => (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 h-full">
                      <div className={`w-12 h-12 ${card.bg} rounded-sm flex items-center justify-center mb-4`}>
                        <card.icon className={`w-6 h-6 ${card.color}`} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-sm text-neutral-900 mb-2">{card.title}</h3>
                      <p className="text-xs text-neutral-500 mb-4" style={{ lineHeight: 1.6 }}>{card.desc}</p>
                      <ul className="text-xs text-neutral-600 space-y-1.5">
                        {card.items.map((item) => (
                          <li key={item} className="flex gap-2 items-start">
                            <div className="w-1 h-1 bg-[#2dabe2] rounded-full mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={0.3}>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 bg-[#A96448]/10 rounded-sm flex items-center justify-center shrink-0">
                      <Truck className="w-6 h-6 text-[#A96448]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm text-neutral-900 mb-2">Supply Chain Responsibility</h3>
                      <p className="text-xs text-neutral-500 mb-4" style={{ lineHeight: 1.6 }}>Promoting ethical practices and sustainability standards throughout our supply chain network</p>
                      <div className="grid grid-cols-3 gap-4 mt-4">
                        {[
                          { label: "Supplier Code of Conduct", desc: "Ethical sourcing requirements" },
                          { label: "Supplier Audits", desc: "Regular compliance assessments" },
                          { label: "Sustainability Standards", desc: "Environmental and social criteria" },
                        ].map((item, i) => (
                          <div key={i} className="border-l-2 border-[#2dabe2]/30 pl-3">
                            <div className="text-xs text-neutral-400 mb-0.5">{item.label}</div>
                            <div className="text-xs text-neutral-700">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </section>

            {/* Operations */}
            <section id="operations" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Operations" size="md" />
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6">
                  <div className="flex gap-4 items-start mb-6">
                    <div className="w-12 h-12 bg-[#0658a5]/10 rounded-sm flex items-center justify-center shrink-0">
                      <Factory className="w-6 h-6 text-[#0658a5]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm text-neutral-900 mb-1">Sustainable Operations</h3>
                      <p className="text-xs text-neutral-500" style={{ lineHeight: 1.6 }}>Our production and maintenance operations are designed to maximize efficiency while minimizing environmental impact</p>
                    </div>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="production" className="border-[#2dabe2]/10">
                      <AccordionTrigger className="text-sm text-neutral-900 hover:text-[#0658a5]">Production Operations</AccordionTrigger>
                      <AccordionContent className="text-sm text-neutral-600" style={{ lineHeight: 1.6 }}>
                        <ul className="space-y-2">
                          <li><strong className="text-neutral-900">Process Optimization:</strong> Continuous improvement of production processes to reduce waste and energy consumption</li>
                          <li><strong className="text-neutral-900">Quality Control:</strong> Rigorous testing and monitoring to ensure product consistency and safety</li>
                          <li><strong className="text-neutral-900">Energy Efficiency:</strong> Implementation of energy-saving technologies and renewable energy sources</li>
                          <li><strong className="text-neutral-900">Waste Minimization:</strong> Reduction, reuse, and recycling programs throughout production</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="maintenance" className="border-[#2dabe2]/10">
                      <AccordionTrigger className="text-sm text-neutral-900 hover:text-[#0658a5]">Maintenance Operations</AccordionTrigger>
                      <AccordionContent className="text-sm text-neutral-600" style={{ lineHeight: 1.6 }}>
                        <ul className="space-y-2">
                          <li><strong className="text-neutral-900">Preventive Maintenance:</strong> Scheduled maintenance programs to ensure equipment reliability and safety</li>
                          <li><strong className="text-neutral-900">Predictive Maintenance:</strong> Advanced monitoring systems to detect potential issues before they occur</li>
                          <li><strong className="text-neutral-900">Asset Management:</strong> Lifecycle management of equipment and infrastructure</li>
                          <li><strong className="text-neutral-900">Safety Standards:</strong> Strict adherence to safety protocols during all maintenance activities</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </AnimatedSection>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
