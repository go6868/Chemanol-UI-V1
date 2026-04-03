import { InnerPageHero } from "@/app/components/inner-page-hero";
import { AnimatedSection } from "@/app/components/animated-section";
import { SectionHeading } from "@/app/components/section-heading";
import { Cpu, Database, BarChart, Cog } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1771189956777-575006b6b145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGNpcmN1aXQlMjBib2FyZCUyMGFic3RyYWN0fGVufDF8fHx8MTc3NDg2OTc2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Innovation() {
  return (
    <div className="bg-white">
      <InnerPageHero
        title="Innovation & Digital Transformation"
        description="Embracing digital technologies to enhance operational efficiency, safety, and customer experience across our chemical manufacturing operations."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: "Innovation" }]}
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Overview */}
          <AnimatedSection>
            <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8">
              <div className="flex gap-4 mb-6">
                <div className="w-12 h-12 bg-[#0658a5]/10 rounded-sm flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6 text-[#0658a5]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-2xl text-neutral-900 mb-2">Digital Transformation</h2>
                  <p className="text-sm text-neutral-500" style={{ lineHeight: 1.6 }}>Implementing cutting-edge technologies to optimize operations, improve safety, and enhance product quality</p>
                </div>
              </div>
              <p className="text-sm text-neutral-700" style={{ lineHeight: 1.6 }}>
                Chemanol is committed to continuous innovation through digital transformation initiatives. Our focus is on implementing proven technologies that deliver measurable improvements in operational efficiency, safety, and product quality.
              </p>
            </div>
          </AnimatedSection>

          {/* Focus Areas */}
          <section>
            <AnimatedSection>
              <SectionHeading className="mb-8" title="Focus Areas" size="md" />
            </AnimatedSection>
            <div className="space-y-6">
              {[
                { icon: Database, color: "text-[#0658a5]", bg: "bg-[#0658a5]/10", title: "Integrated Systems", desc: "Enterprise-wide systems for seamless data flow and process integration", items: ["Enterprise Resource Planning (ERP) systems", "Laboratory Information Management Systems (LIMS)", "Manufacturing Execution Systems (MES)", "Supply Chain Management systems"] },
                { icon: Cog, color: "text-[#B8BD44]", bg: "bg-[#B8BD44]/10", title: "Process Automation", desc: "Automated control systems for consistent quality and operational efficiency", items: ["Advanced Process Control (APC)", "Distributed Control Systems (DCS)", "Safety Instrumented Systems (SIS)", "Automated material handling"] },
                { icon: BarChart, color: "text-[#B3A03D]", bg: "bg-[#B3A03D]/10", title: "Digital Platforms & Analytics", desc: "Data-driven insights for informed decision-making and continuous improvement", items: ["Real-time production monitoring dashboards", "Predictive maintenance analytics", "Quality management platforms", "Environmental monitoring systems"] },
              ].map((area, i) => (
                <AnimatedSection key={i} delay={i * 0.12}>
                  <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8 hover:shadow-md transition-all duration-300">
                    <div className="flex gap-4 mb-5">
                      <div className={`w-12 h-12 ${area.bg} rounded-sm flex items-center justify-center shrink-0`}>
                        <area.icon className={`w-6 h-6 ${area.color}`} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-lg text-neutral-900 mb-1">{area.title}</h3>
                        <p className="text-sm text-neutral-500" style={{ lineHeight: 1.6 }}>{area.desc}</p>
                      </div>
                    </div>
                    <ul className="grid grid-cols-2 gap-3 text-sm text-neutral-600">
                      {area.items.map((item) => (
                        <li key={item} className="flex gap-2 items-start">
                          <div className="w-1.5 h-1.5 bg-[#2dabe2] rounded-full mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>

          {/* Impact */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#0658a5] rounded-sm p-10">
              <h2 className="text-lg text-white mb-6">Impact & Benefits</h2>
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: "15%", label: "Efficiency Improvement" },
                  { value: "20%", label: "Reduced Downtime" },
                  { value: "98%", label: "Process Reliability" },
                ].map((stat, i) => (
                  <div key={i} className={`text-center py-2 ${i === 1 ? "border-l border-r border-white/10" : ""}`}>
                    <div className="text-3xl text-[#2dabe2] mb-1">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
