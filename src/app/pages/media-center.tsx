import { InnerPageHero } from "@/app/components/inner-page-hero";
import { AnimatedSection } from "@/app/components/animated-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { FileText, Newspaper, Image, Video } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { CardCornerCtaInline } from "@/app/components/split-cta";
import { SectionHeading } from "@/app/components/section-heading";

const heroImg = "https://images.unsplash.com/photo-1453873623425-04e3561289aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzcGFwZXIlMjBwcmVzcyUyMG1lZGlhJTIwam91cm5hbGlzbXxlbnwxfHx8fDE3NzQ4Njk3NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const articles = [
  { title: "Methanol in Modern Fuel Systems", description: "Technical overview of methanol blending in gasoline and its impact on engine performance", date: "January 2026", category: "Fuel Applications", link: "/technical-resources/articles/methanol-fuel-systems" },
  { title: "Formaldehyde-Based Resins: Applications & Performance", description: "Comprehensive guide to formaldehyde resin systems in wood panel manufacturing", date: "December 2025", category: "Resins & Adhesives", link: "/technical-resources/articles/formaldehyde-resins" },
  { title: "MTBE: Properties and Industrial Uses", description: "Technical data on MTBE as a fuel oxygenate and octane enhancer", date: "January 2026", category: "Fuel Additives", link: "/technical-resources/articles/mtbe-properties" },
  { title: "Low-VOC Coating Solutions for Industrial Applications", description: "Advanced solvent technologies reducing volatile organic compound emissions in paint formulations", date: "November 2025", category: "Paints & Coatings", link: "/technical-resources/articles/low-voc-coatings" },
  { title: "Methanol as a Hydrogen Carrier for Energy Storage", description: "Exploring methanol's role in renewable energy systems and fuel cell applications", date: "October 2025", category: "Energy & Sustainability", link: "/technical-resources/articles/methanol-hydrogen-carrier" },
  { title: "Quality Control Standards in Pharmaceutical-Grade Methanol", description: "Meeting USP/EP specifications for pharmaceutical synthesis and API production", date: "September 2025", category: "Pharmaceuticals", link: "/technical-resources/articles/pharmaceutical-methanol" },
  { title: "Sustainable Wood Panel Manufacturing with Low-Emission Resins", description: "Achieving E0 grade certification through advanced formaldehyde resin technology", date: "August 2025", category: "Construction Materials", link: "/technical-resources/articles/sustainable-wood-panels" },
  { title: "Biodiesel Production: Methanol's Critical Role", description: "Transesterification processes and methanol requirements for renewable fuel production", date: "July 2025", category: "Renewable Energy", link: "/technical-resources/articles/biodiesel-methanol" },
];

const pressReleases = [
  { title: "Chemanol Announces Q4 2025 Financial Results", description: "Strong performance driven by increased demand for methanol derivatives", date: "January 15, 2026" },
  { title: "New ISO 45001 Certification Achieved", description: "Chemanol strengthens commitment to occupational health and safety standards", date: "December 10, 2025" },
  { title: "Expansion of Production Capacity Completed", description: "Phase 2 expansion project enhances methanol production capabilities by 20%", date: "November 20, 2025" },
];

const caseStudies = [
  { title: "Fuel Blending Optimization", description: "How a major fuel distributor achieved 15% efficiency gains using our MTBE solutions", industry: "Automotive", link: "/case-studies/fuel-blending-optimization" },
  { title: "Resin Performance Improvement", description: "Advanced formaldehyde solutions for high-strength wood panel manufacturing", industry: "Construction", link: "/case-studies/resin-performance-improvement" },
  { title: "Custom Chemical Solutions", description: "Tailored methanol derivatives for pharmaceutical intermediate synthesis", industry: "Specialty", link: "/case-studies/custom-chemical-solutions" },
];

export function MediaCenter() {
  const [activeTab, setActiveTab] = useState("articles");

  return (
    <div className="bg-white">
      <InnerPageHero
        title="Media Center"
        description="Access our latest news, technical articles, press releases, and multimedia content."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: "Media Center" }]}
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="articles">Technical Articles</TabsTrigger>
              <TabsTrigger value="press">Press Releases</TabsTrigger>
              <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              <TabsTrigger value="media">Media Gallery</TabsTrigger>
            </TabsList>

            <TabsContent value="articles">
              <AnimatedSection>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6">
                  <SectionHeading className="mb-6" title="Technical Articles" size="sm" />
                  <div className="space-y-4">
                    {articles.map((article, i) => (
                      <Link key={i} to={article.link} className="block p-4 border border-neutral-100 rounded-sm hover:border-[#2dabe2]/30 hover:shadow-sm transition-all duration-300 group cursor-pointer">
                        <div className="flex h-full gap-4">
                          <div className="bg-gradient-to-br from-[#0658a5]/5 to-[#2dabe2]/5 w-28 h-20 flex-shrink-0 rounded-sm flex items-center justify-center">
                            <FileText className="w-7 h-7 text-[#0658a5]/30" strokeWidth={1.5} />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="text-xs text-neutral-400 mb-1">{article.category} · {article.date}</div>
                            <h3 className="text-sm text-neutral-900 mb-1 group-hover:text-[#0658a5] transition-colors">{article.title}</h3>
                            <p className="text-xs text-neutral-500 mb-2" style={{ lineHeight: 1.6 }}>{article.description}</p>
                            <CardCornerCtaInline label="Read Article" size="sm" className="mt-auto" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="press">
              <AnimatedSection>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6">
                  <SectionHeading className="mb-6" title="Press Releases" size="sm" />
                  <div className="space-y-4">
                    {pressReleases.map((release, i) => (
                      <div key={i} className="p-4 border border-neutral-100 rounded-sm hover:border-[#2dabe2]/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-[#0658a5]/10 rounded-sm flex items-center justify-center flex-shrink-0">
                            <Newspaper className="w-5 h-5 text-[#0658a5]" strokeWidth={1.5} />
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-neutral-400 mb-1">{release.date}</div>
                            <h3 className="text-sm text-neutral-900 mb-1">{release.title}</h3>
                            <p className="text-xs text-neutral-500">{release.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="case-studies">
              <AnimatedSection>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6">
                  <SectionHeading className="mb-6" title="Case Studies" size="sm" />
                  <div className="space-y-4">
                    {caseStudies.map((study, i) => (
                      <Link key={i} to={study.link} className="block p-4 border border-neutral-100 rounded-sm hover:border-[#2dabe2]/30 hover:shadow-sm transition-all duration-300 group cursor-pointer">
                        <div className="flex h-full gap-4">
                          <div className="bg-gradient-to-br from-[#0658a5]/5 to-[#2dabe2]/5 w-28 h-20 flex-shrink-0 rounded-sm flex items-center justify-center">
                            <FileText className="w-7 h-7 text-[#0658a5]/30" strokeWidth={1.5} />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="text-xs text-neutral-400 mb-1">INDUSTRY: {study.industry.toUpperCase()}</div>
                            <h3 className="text-sm text-neutral-900 mb-1 group-hover:text-[#0658a5] transition-colors">{study.title}</h3>
                            <p className="text-xs text-neutral-500 mb-2">{study.description}</p>
                            <CardCornerCtaInline label="Read Case Study" size="sm" className="mt-auto" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            <TabsContent value="media">
              <AnimatedSection>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6">
                  <SectionHeading className="mb-6" title="Media Gallery" size="sm" />
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="bg-gradient-to-br from-[#0658a5]/5 to-[#2dabe2]/5 aspect-video rounded-sm flex items-center justify-center border border-neutral-100 hover:border-[#2dabe2]/30 transition-all duration-300 cursor-pointer">
                        <Image className="w-10 h-10 text-[#0658a5]/20" strokeWidth={1.5} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <h3 className="text-sm text-neutral-900 mb-4">Video Content</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[1, 2].map((item) => (
                        <div key={item} className="bg-gradient-to-br from-[#0658a5]/5 to-[#2dabe2]/5 aspect-video rounded-sm flex items-center justify-center border border-neutral-100 hover:border-[#2dabe2]/30 transition-all duration-300 cursor-pointer">
                          <Video className="w-10 h-10 text-[#0658a5]/20" strokeWidth={1.5} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
