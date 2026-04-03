import { InnerPageHero } from "@/app/components/inner-page-hero";
import { AnimatedSection } from "@/app/components/animated-section";
import { Button } from "@/app/components/ui/button";
import { SectionHeading } from "@/app/components/section-heading";
import { Building2, Users, FileText, Award, Briefcase, Target, Newspaper, Camera } from "lucide-react";
import { Link } from "react-router";
import { AnchorNavigation } from "@/app/components/anchor-navigation";

const heroImg = "https://images.unsplash.com/photo-1760346546771-a81d986459ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwbWVldGluZyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ4MTM4ODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const leadershipTeam = [
  { name: "Dr. Ahmed Al-Ghamdi", title: "Chief Executive Officer", department: "Executive Management" },
  { name: "Eng. Khalid Al-Otaibi", title: "Chief Operating Officer", department: "Operations" },
  { name: "Sarah Al-Mansour", title: "Chief Financial Officer", department: "Finance" },
  { name: "Dr. Mohammed Al-Zahrani", title: "VP, Research & Development", department: "R&D" },
  { name: "Fatima Al-Dosari", title: "VP, Quality & Compliance", department: "Quality Assurance" },
  { name: "Abdullah Al-Shehri", title: "VP, Sales & Marketing", department: "Commercial" },
];

const boardMembers = [
  { name: "H.E. Tariq Al-Barrak", title: "Chairman of the Board" },
  { name: "Dr. Nasser Al-Qahtani", title: "Board Member" },
  { name: "Eng. Saeed Al-Mutairi", title: "Board Member" },
  { name: "Dr. Layla Al-Harbi", title: "Independent Board Member" },
  { name: "Ibrahim Al-Rashid", title: "Board Member" },
  { name: "Maha Al-Suwaidi", title: "Independent Board Member" },
];

export function AboutChemanol() {
  return (
    <div className="bg-white">
      <InnerPageHero
        title="About Chemanol"
        description="Chemanol (Methanol Chemicals Company) is Saudi Arabia's leading producer of methanol and formaldehyde-based products, serving global markets since 2009."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: "About Chemanol" }]}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="hidden lg:block w-64 flex-shrink-0">
            <AnchorNavigation items={[
              { id: "overview", label: "Overview" },
              { id: "leadership", label: "Leadership & Board" },
              { id: "compliance", label: "Compliance & Ethics" },
              { id: "policies", label: "Corporate Policies" },
              { id: "supply-chain", label: "Supply Chain" },
              { id: "investor-relations", label: "Investor Relations" },
              { id: "quality", label: "Quality Management" },
              { id: "media-center", label: "Media Center" },
              { id: "careers", label: "Careers" },
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
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                      { value: "25+", label: "Years of Excellence" },
                      { value: "2,500+", label: "Employees" },
                      { value: "50+", label: "Countries Served" },
                    ].map((stat, i) => (
                      <div key={i} className={`text-center py-4 ${i === 1 ? "border-l border-r border-neutral-100" : ""}`}>
                        <div className="text-3xl text-[#0658a5] mb-1">{stat.value}</div>
                        <div className="text-sm text-neutral-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-4 text-sm text-neutral-700" style={{ lineHeight: 1.6 }}>
                    <p>Chemanol is a leading chemical manufacturer specializing in methanol and methanol derivatives. Our state-of-the-art production facilities and commitment to innovation have positioned us as a key player in the global chemical industry.</p>
                    <p><strong className="text-neutral-900">Our Mission:</strong> To deliver high-quality chemical products while maintaining the highest standards of safety, environmental responsibility, and customer service.</p>
                    <p><strong className="text-neutral-900">Our Vision:</strong> To be the preferred partner in the chemical industry, recognized for innovation, sustainability, and operational excellence.</p>
                    <p><strong className="text-neutral-900">Strategic Focus:</strong> Continuous investment in technology, expansion of product portfolio, and commitment to sustainable operations.</p>
                  </div>
                </div>
              </AnimatedSection>
            </section>

            {/* Leadership */}
            <section id="leadership" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Leadership & Board of Directors" size="md" />
              </AnimatedSection>

              <div className="mb-10">
                <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-5">Executive Leadership Team</h3>
                <div className="grid grid-cols-3 gap-5">
                  {leadershipTeam.map((leader, i) => (
                    <AnimatedSection key={i} delay={i * 0.08}>
                      <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0658a5]/10 to-[#2dabe2]/10 rounded-full mb-4 flex items-center justify-center">
                          <span className="text-lg text-[#0658a5]/60">{leader.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</span>
                        </div>
                        <div className="text-sm text-neutral-900">{leader.name}</div>
                        <div className="text-xs text-[#0658a5] mt-1">{leader.title}</div>
                        <div className="text-xs text-neutral-400 mt-0.5">{leader.department}</div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-5">Board of Directors</h3>
                <div className="grid grid-cols-3 gap-5">
                  {boardMembers.map((member, i) => (
                    <AnimatedSection key={i} delay={i * 0.08}>
                      <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                        <div className="w-14 h-14 bg-gradient-to-br from-[#0658a5]/10 to-[#2dabe2]/10 rounded-full mb-4 flex items-center justify-center">
                          <span className="text-sm text-[#0658a5]/60">{member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</span>
                        </div>
                        <div className="text-sm text-neutral-900">{member.name}</div>
                        <div className="text-xs text-neutral-500 mt-1">{member.title}</div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </section>

            {/* Compliance */}
            <section id="compliance" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Compliance & Ethics" size="md" />
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0658a5]/10 rounded-sm flex items-center justify-center shrink-0">
                      <FileText className="w-6 h-6 text-[#0658a5]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-base mb-2 text-neutral-900">Code of Conduct</h3>
                      <p className="text-sm text-neutral-600" style={{ lineHeight: 1.6 }}>Our comprehensive code of conduct guides all business activities and employee behavior</p>
                    </div>
                  </div>
                  <ul className="space-y-3 text-sm text-neutral-700">
                    {["Ethical business practices and anti-corruption measures", "Regulatory compliance across all jurisdictions", "Whistleblower protection and reporting mechanisms", "Regular ethics training for all employees"].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 bg-[#2dabe2] rounded-full mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </section>

            {/* Policies */}
            <section id="policies" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Corporate Policies" size="md" />
              </AnimatedSection>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { title: "Privacy Policy", desc: "Data protection and privacy standards" },
                  { title: "Quality Policy", desc: "Quality assurance commitments" },
                  { title: "Environmental Policy", desc: "Environmental management standards" },
                  { title: "Safety Policy", desc: "Health and safety commitments" },
                ].map((policy, i) => (
                  <AnimatedSection key={i} delay={i * 0.08}>
                    <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group">
                      <FileText className="w-8 h-8 text-[#0658a5]/40 mb-3 group-hover:text-[#0658a5] transition-colors duration-300" strokeWidth={1.5} />
                      <h3 className="text-sm text-neutral-900 mb-1">{policy.title}</h3>
                      <p className="text-xs text-neutral-500 mb-4">{policy.desc}</p>
                      <button className="text-xs text-[#0658a5] hover:text-[#2dabe2] border border-[#0658a5]/20 hover:border-[#2dabe2] px-3 py-1.5 rounded-sm transition-all duration-300 cursor-pointer">View Policy</button>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </section>

            {/* Supply Chain */}
            <section id="supply-chain" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Supply Chain Responsibility" size="md" />
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8">
                  <p className="text-sm text-neutral-700 mb-6" style={{ lineHeight: 1.6 }}>Our supply chain management practices ensure ethical sourcing, sustainability, and quality throughout our vendor network.</p>
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { title: "Supplier Selection", desc: "Rigorous evaluation and qualification processes" },
                      { title: "Performance Monitoring", desc: "Continuous assessment and improvement" },
                      { title: "Sustainability Standards", desc: "Environmental and social criteria" },
                    ].map((item, i) => (
                      <div key={i} className="border-l-2 border-[#2dabe2]/30 pl-4">
                        <div className="text-sm text-neutral-900 mb-1">{item.title}</div>
                        <p className="text-xs text-neutral-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </section>

            {/* Investor Relations */}
            <section id="investor-relations" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Investor Relations" size="md" />
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8">
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                      { label: "Stock Symbol", value: "CHEMANOL" },
                      { label: "Market Cap", value: "SAR 2.5B" },
                      { label: "Exchange", value: "Saudi Stock Exchange" },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">{item.label}</div>
                        <div className="text-lg text-[#0658a5]">{item.value}</div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {["Financial Reports", "Annual Reports", "Press Releases", "Corporate Profile (PDF)"].map((label) => (
                      <button key={label} className="text-sm text-[#0658a5] border border-[#0658a5]/20 hover:border-[#2dabe2] hover:bg-[#2dabe2]/5 px-4 py-2.5 rounded-sm transition-all duration-300 cursor-pointer">{label}</button>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </section>

            {/* Quality */}
            <section id="quality" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Quality Management" size="md" />
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8">
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <div className="flex gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#B8BD44]/10 rounded-sm flex items-center justify-center shrink-0">
                          <Award className="w-6 h-6 text-[#B8BD44]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-sm text-neutral-900 mb-1">Quality Management System</h3>
                          <p className="text-xs text-[#0658a5]">ISO 9001:2015 certified</p>
                        </div>
                      </div>
                      <ul className="text-sm text-neutral-600 space-y-2">
                        {["Process documentation and control", "Internal auditing programs", "Continuous improvement initiatives", "Customer satisfaction monitoring"].map((item) => (
                          <li key={item} className="flex gap-2 items-start"><div className="w-1.5 h-1.5 bg-[#2dabe2] rounded-full mt-2 shrink-0" />{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="flex gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#0658a5]/10 rounded-sm flex items-center justify-center shrink-0">
                          <Target className="w-6 h-6 text-[#0658a5]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="text-sm text-neutral-900 mb-1">Quality Control</h3>
                          <p className="text-xs text-[#0658a5]">Advanced testing and verification</p>
                        </div>
                      </div>
                      <ul className="text-sm text-neutral-600 space-y-2">
                        {["Raw material inspection", "In-process quality checks", "Final product testing", "Laboratory accreditation"].map((item) => (
                          <li key={item} className="flex gap-2 items-start"><div className="w-1.5 h-1.5 bg-[#2dabe2] rounded-full mt-2 shrink-0" />{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-[#0658a5]/5 border border-[#0658a5]/10 rounded-sm p-6">
                    <h3 className="text-sm text-neutral-900 mb-2">Product Development</h3>
                    <p className="text-xs text-neutral-600" style={{ lineHeight: 1.6 }}>Our R&D team works on continuous product improvement and development of new chemical solutions to meet evolving customer needs and market demands.</p>
                  </div>
                </div>
              </AnimatedSection>
            </section>

            {/* Media Center */}
            <section id="media-center" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Media Center" size="md" />
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#0658a5]/10 rounded-sm flex items-center justify-center shrink-0">
                      <Newspaper className="w-6 h-6 text-[#0658a5]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm text-neutral-900 mb-1">News & Media Resources</h3>
                      <p className="text-xs text-neutral-500" style={{ lineHeight: 1.6 }}>Access our latest press releases, technical articles, case studies, and media gallery.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { icon: FileText, label: "Technical Articles", desc: "In-depth technical content" },
                      { icon: Newspaper, label: "Press Releases", desc: "Corporate announcements" },
                      { icon: Award, label: "Case Studies", desc: "Success stories" },
                      { icon: Camera, label: "Media Gallery", desc: "Photos and videos" },
                    ].map((item, i) => (
                      <div key={i} className="bg-[#0658a5]/[0.03] border border-[#2dabe2]/10 rounded-sm p-4 hover:border-[#2dabe2]/30 transition-all duration-300">
                        <item.icon className="w-5 h-5 text-[#0658a5]/50 mb-2" strokeWidth={1.5} />
                        <div className="text-sm text-neutral-900 mb-0.5">{item.label}</div>
                        <p className="text-xs text-neutral-500">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/media-center">
                    <button className="bg-[#0658a5] text-white text-sm px-6 py-2.5 rounded-sm hover:bg-[#2dabe2] transition-colors duration-300 cursor-pointer">Visit Media Center</button>
                  </Link>
                </div>
              </AnimatedSection>
            </section>

            {/* Careers */}
            <section id="careers" className="scroll-mt-24">
              <AnimatedSection>
                <SectionHeading className="mb-8" title="Careers" size="md" />
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8">
                  <div className="flex gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#B3A03D]/10 rounded-sm flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-[#B3A03D]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-sm text-neutral-900 mb-1">Join Our Team</h3>
                      <p className="text-xs text-neutral-500" style={{ lineHeight: 1.6 }}>Explore opportunities in operations, engineering, research, and administration.</p>
                    </div>
                  </div>
                  <div className="bg-[#0658a5]/[0.03] border border-[#0658a5]/10 rounded-sm p-6 mb-6">
                    <div className="grid grid-cols-3 gap-6">
                      {[
                        { label: "Competitive Compensation", desc: "Market-leading packages" },
                        { label: "Professional Development", desc: "Training and growth" },
                        { label: "Benefits & Wellness", desc: "Comprehensive benefits" },
                      ].map((item, i) => (
                        <div key={i}>
                          <div className="text-xs text-neutral-400 mb-1">{item.label}</div>
                          <div className="text-sm text-neutral-700">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to="/careers">
                    <button className="bg-[#0658a5] text-white text-sm px-6 py-2.5 rounded-sm hover:bg-[#2dabe2] transition-colors duration-300 cursor-pointer">Apply Online</button>
                  </Link>
                </div>
              </AnimatedSection>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
