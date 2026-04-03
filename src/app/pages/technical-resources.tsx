import { InnerPageHero } from "@/app/components/inner-page-hero";
import { AnimatedSection } from "@/app/components/animated-section";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Download, FileText, Search, Award, Shield, Leaf, Flame, Zap, Lock } from "lucide-react";
import { useState } from "react";

const heroImg = "https://images.unsplash.com/photo-1769152683420-f4eff91cb30b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBlbmdpbmVlcmluZyUyMGJsdWVwcmludHMlMjBkb2N1bWVudHN8ZW58MXx8fHwxNzc0ODY5NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const sdsDocuments = [
  { name: "Methanol - Safety Data Sheet", code: "SDS-MTH-001", date: "Dec 2025", language: "English" },
  { name: "MTBE - Safety Data Sheet", code: "SDS-MTBE-002", date: "Dec 2025", language: "English" },
  { name: "Formaldehyde 37% - Safety Data Sheet", code: "SDS-FOR-003", date: "Nov 2025", language: "English" },
  { name: "Urea Formaldehyde Resin - Safety Data Sheet", code: "SDS-UFR-004", date: "Nov 2025", language: "English" },
  { name: "Methanol - Safety Data Sheet (Arabic)", code: "SDS-MTH-001-AR", date: "Dec 2025", language: "Arabic" },
  { name: "Melamine Formaldehyde Resin - Safety Data Sheet", code: "SDS-MFR-005", date: "Nov 2025", language: "English" },
  { name: "Hexamine - Safety Data Sheet", code: "SDS-HEX-006", date: "Oct 2025", language: "English" },
  { name: "Formaldehyde 50% - Safety Data Sheet", code: "SDS-FOR-007", date: "Oct 2025", language: "English" },
];

const tdsDocuments = [
  { name: "Methanol Technical Specifications", code: "TDS-MTH-001", date: "Jan 2026", category: "Primary Products" },
  { name: "MTBE Technical Specifications", code: "TDS-MTBE-002", date: "Jan 2026", category: "Derivatives" },
  { name: "Formaldehyde 37% Technical Specifications", code: "TDS-FOR-003", date: "Dec 2025", category: "Primary Products" },
  { name: "UF Resin Technical Specifications", code: "TDS-UFR-004", date: "Dec 2025", category: "Resins" },
  { name: "Formaldehyde 50% Technical Specifications", code: "TDS-FOR-005", date: "Dec 2025", category: "Primary Products" },
  { name: "Melamine Formaldehyde Resin Technical Specifications", code: "TDS-MFR-006", date: "Nov 2025", category: "Resins" },
  { name: "Hexamine Technical Specifications", code: "TDS-HEX-007", date: "Nov 2025", category: "Specialty Chemicals" },
  { name: "Methanol for Fuel Blending - Technical Specifications", code: "TDS-MTH-008", date: "Nov 2025", category: "Primary Products" },
];

/* Custom line-art certification icons */
function QualityIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="6"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></svg>;
}
function EnvIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66L12 14"/><path d="M11 2C7 2 3 6 3 10c0 2 1 4 3 5.5"/><path d="M20.88 18.09A8 8 0 0 0 17 6c-3 0-5 2-7 4"/></svg>;
}
function SafetyIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
}
function EnergyIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
}
function CareIcon({ className }: { className?: string }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
}

const certifications = [
  { name: "ISO 9001:2015", type: "Quality Management", expires: "December 2026", issuer: "SAI Global", Icon: QualityIcon, color: "text-[#0658a5]", bg: "bg-[#0658a5]/10" },
  { name: "ISO 14001:2015", type: "Environmental Management", expires: "December 2026", issuer: "SAI Global", Icon: EnvIcon, color: "text-[#B8BD44]", bg: "bg-[#B8BD44]/10" },
  { name: "ISO 45001:2018", type: "Occupational Health & Safety", expires: "January 2027", issuer: "SAI Global", Icon: SafetyIcon, color: "text-[#A96448]", bg: "bg-[#A96448]/10" },
  { name: "RC14001", type: "Responsible Care", expires: "March 2027", issuer: "GPCA", Icon: CareIcon, color: "text-[#B3A03D]", bg: "bg-[#B3A03D]/10" },
  { name: "ISO 50001:2018", type: "Energy Management", expires: "June 2027", issuer: "SAI Global", Icon: EnergyIcon, color: "text-[#0658a5]", bg: "bg-[#0658a5]/10" },
  { name: "OHSAS 18001", type: "Health & Safety", expires: "August 2026", issuer: "BSI", Icon: SafetyIcon, color: "text-[#A96448]", bg: "bg-[#A96448]/10" },
];

const brochures = [
  { name: "Chemanol Product Portfolio 2026", pages: "24 pages", size: "4.2 MB", lang: "English" },
  { name: "Methanol Applications Guide", pages: "16 pages", size: "2.8 MB", lang: "English" },
  { name: "Formaldehyde-Based Resins Catalog", pages: "20 pages", size: "3.5 MB", lang: "English" },
  { name: "MTBE for Fuel Industry Brochure", pages: "12 pages", size: "2.1 MB", lang: "English" },
  { name: "Chemanol Product Portfolio 2026 (Arabic)", pages: "24 pages", size: "4.5 MB", lang: "Arabic" },
  { name: "Sustainability Report 2025", pages: "32 pages", size: "5.8 MB", lang: "English" },
];

const policies = [
  { name: "Environmental Policy", category: "Sustainability", size: "1.2 MB", updated: "Jan 2026" },
  { name: "Quality Policy", category: "Quality Management", size: "0.8 MB", updated: "Dec 2025" },
  { name: "Health & Safety Policy", category: "HSSE", size: "1.5 MB", updated: "Jan 2026" },
  { name: "Ethics & Compliance Code", category: "Governance", size: "2.1 MB", updated: "Nov 2025" },
  { name: "Anti-Corruption Policy", category: "Governance", size: "1.1 MB", updated: "Nov 2025" },
  { name: "Supply Chain Responsibility Policy", category: "Operations", size: "1.3 MB", updated: "Dec 2025" },
  { name: "Information Security Policy", category: "IT Governance", size: "0.9 MB", updated: "Oct 2025" },
  { name: "Human Rights Policy", category: "Governance", size: "1.0 MB", updated: "Nov 2025" },
];

export function TechnicalResources() {
  const [activeTab, setActiveTab] = useState("sds");

  return (
    <div className="bg-white">
      <InnerPageHero
        title="Technical Resources"
        description="Access comprehensive technical documentation, safety data sheets, certifications, and product specifications for all Chemanol products."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: "Technical Resources" }]}
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="sds">SDS Library</TabsTrigger>
              <TabsTrigger value="tds">TDS & Specs</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
              <TabsTrigger value="brochures">Product Brochures</TabsTrigger>
              <TabsTrigger value="policies">Policies Hub</TabsTrigger>
            </TabsList>

            {/* SDS */}
            <TabsContent value="sds">
              <AnimatedSection>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#A96448]/10 rounded-sm flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-[#A96448]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl text-neutral-900 mb-2">Safety Data Sheets (SDS)</h2>
                      <p className="text-sm text-neutral-500 mb-4" style={{ lineHeight: 1.6 }}>Download current Safety Data Sheets for all Chemanol products. Documents comply with GHS requirements.</p>
                      <div className="flex gap-2">
                        <div className="relative max-w-md flex-1">
                          <input className="w-full bg-transparent border-b border-neutral-200 text-sm py-2 pl-0 pr-8 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder="Search by product name or code..." />
                          <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Searchable table */}
                  <div className="overflow-hidden rounded-sm border border-neutral-100">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#0658a5]/5 text-left">
                          <th className="px-4 py-3 text-xs text-neutral-500 uppercase tracking-wider">Document Name</th>
                          <th className="px-4 py-3 text-xs text-neutral-500 uppercase tracking-wider">Code</th>
                          <th className="px-4 py-3 text-xs text-neutral-500 uppercase tracking-wider">Updated</th>
                          <th className="px-4 py-3 text-xs text-neutral-500 uppercase tracking-wider">Language</th>
                          <th className="px-4 py-3 text-xs text-neutral-500 uppercase tracking-wider text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sdsDocuments.map((doc, i) => (
                          <tr key={i} className={`border-t border-neutral-100 hover:bg-[#2dabe2]/[0.03] transition-colors ${i % 2 === 1 ? "bg-[#0658a5]/[0.02]" : ""}`}>
                            <td className="px-4 py-3 text-neutral-900">{doc.name}</td>
                            <td className="px-4 py-3 text-neutral-500 text-xs">{doc.code}</td>
                            <td className="px-4 py-3 text-neutral-500 text-xs">{doc.date}</td>
                            <td className="px-4 py-3 text-neutral-500 text-xs">{doc.language}</td>
                            <td className="px-4 py-3 text-right">
                              <button className="inline-flex items-center gap-1.5 text-xs text-[#0658a5] hover:text-[#2dabe2] transition-colors cursor-pointer">
                                <Download className="w-3.5 h-3.5" strokeWidth={1.5} />PDF
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            {/* TDS */}
            <TabsContent value="tds">
              <AnimatedSection>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0658a5]/10 rounded-sm flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-[#0658a5]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl text-neutral-900 mb-2">Technical Data Sheets & Specifications</h2>
                      <p className="text-sm text-neutral-500 mb-4" style={{ lineHeight: 1.6 }}>Detailed technical specifications, test methods, and application guidelines for our products.</p>
                      <div className="relative max-w-md">
                        <input className="w-full bg-transparent border-b border-neutral-200 text-sm py-2 pl-0 pr-8 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder="Search specifications..." />
                        <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden rounded-sm border border-neutral-100">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#0658a5]/5 text-left">
                          <th className="px-4 py-3 text-xs text-neutral-500 uppercase tracking-wider">Specification</th>
                          <th className="px-4 py-3 text-xs text-neutral-500 uppercase tracking-wider">Code</th>
                          <th className="px-4 py-3 text-xs text-neutral-500 uppercase tracking-wider">Updated</th>
                          <th className="px-4 py-3 text-xs text-neutral-500 uppercase tracking-wider">Category</th>
                          <th className="px-4 py-3 text-xs text-neutral-500 uppercase tracking-wider text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tdsDocuments.map((doc, i) => (
                          <tr key={i} className={`border-t border-neutral-100 hover:bg-[#2dabe2]/[0.03] transition-colors ${i % 2 === 1 ? "bg-[#0658a5]/[0.02]" : ""}`}>
                            <td className="px-4 py-3 text-neutral-900">{doc.name}</td>
                            <td className="px-4 py-3 text-neutral-500 text-xs">{doc.code}</td>
                            <td className="px-4 py-3 text-neutral-500 text-xs">{doc.date}</td>
                            <td className="px-4 py-3"><span className="text-xs bg-[#0658a5]/5 text-[#0658a5] px-2 py-0.5 rounded-sm">{doc.category}</span></td>
                            <td className="px-4 py-3 text-right">
                              <button className="inline-flex items-center gap-1.5 text-xs text-[#0658a5] hover:text-[#2dabe2] transition-colors cursor-pointer">
                                <Download className="w-3.5 h-3.5" strokeWidth={1.5} />PDF
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            {/* Certifications */}
            <TabsContent value="certifications">
              <AnimatedSection>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#B8BD44]/10 rounded-sm flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-[#B8BD44]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-xl text-neutral-900 mb-2">Certifications & Compliance</h2>
                      <p className="text-sm text-neutral-500" style={{ lineHeight: 1.6 }}>View and download our current certifications and compliance documents.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-5">
                    {certifications.map((cert, i) => (
                      <div key={i} className="border border-[#2dabe2]/10 rounded-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="text-base text-neutral-900 mb-0.5">{cert.name}</div>
                            <div className="text-xs text-neutral-500">{cert.type}</div>
                          </div>
                          <div className={`w-10 h-10 ${cert.bg} rounded-sm flex items-center justify-center`}>
                            <cert.Icon className={`w-5 h-5 ${cert.color}`} />
                          </div>
                        </div>
                        <div className="text-xs text-neutral-400 space-y-0.5 mb-4">
                          <div>Valid until: {cert.expires}</div>
                          <div>Issued by: {cert.issuer}</div>
                        </div>
                        <button className="flex items-center justify-center gap-1.5 text-xs text-[#0658a5] hover:text-[#2dabe2] transition-colors w-full cursor-pointer border-t border-neutral-100 pt-3">
                          <Download className="w-3.5 h-3.5" strokeWidth={1.5} />Download Certificate
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            {/* Brochures */}
            <TabsContent value="brochures">
              <AnimatedSection>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#B3A03D]/10 rounded-sm flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-[#B3A03D]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-xl text-neutral-900 mb-2">Product Brochures</h2>
                      <p className="text-sm text-neutral-500" style={{ lineHeight: 1.6 }}>Marketing materials and product catalogs for customer reference.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {brochures.map((brochure, i) => (
                      <div key={i} className={`flex items-center justify-between p-4 border border-neutral-100 rounded-sm hover:border-[#2dabe2]/30 transition-all duration-300 ${i % 2 === 1 ? "bg-[#0658a5]/[0.02]" : ""}`}>
                        <div className="flex-1">
                          <div className="text-sm text-neutral-900">{brochure.name}</div>
                          <div className="text-xs text-neutral-400 mt-0.5">{brochure.pages} · {brochure.size} · {brochure.lang}</div>
                        </div>
                        <button className="flex items-center gap-1.5 text-xs text-[#0658a5] hover:text-[#2dabe2] transition-colors cursor-pointer">
                          <Download className="w-3.5 h-3.5" strokeWidth={1.5} />Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </TabsContent>

            {/* Policies */}
            <TabsContent value="policies">
              <AnimatedSection>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#A96448]/10 rounded-sm flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-[#A96448]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="text-xl text-neutral-900 mb-2">Corporate Policies</h2>
                      <p className="text-sm text-neutral-500" style={{ lineHeight: 1.6 }}>Access our corporate policies and governance documents.</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {policies.map((policy, i) => (
                      <div key={i} className={`flex items-center justify-between p-4 border border-neutral-100 rounded-sm hover:border-[#2dabe2]/30 transition-all duration-300 ${i % 2 === 1 ? "bg-[#0658a5]/[0.02]" : ""}`}>
                        <div className="flex-1">
                          <div className="text-sm text-neutral-900">{policy.name}</div>
                          <div className="text-xs text-neutral-400 mt-0.5">{policy.category} · {policy.size} · Updated: {policy.updated}</div>
                        </div>
                        <button className="flex items-center gap-1.5 text-xs text-[#0658a5] hover:text-[#2dabe2] transition-colors cursor-pointer">
                          <Download className="w-3.5 h-3.5" strokeWidth={1.5} />Download
                        </button>
                      </div>
                    ))}
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
