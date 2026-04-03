import { InnerPageHero } from "@/app/components/inner-page-hero";
import { AnimatedSection } from "@/app/components/animated-section";
import { SectionHeading } from "@/app/components/section-heading";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/components/ui/select";
import { Users, Award, TrendingUp, Heart, Upload, ExternalLink } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const heroImg = "https://images.unsplash.com/photo-1758876021739-d7c60b8742a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjYXJlZXIlMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBtb2Rlcm58ZW58MXx8fHwxNzc0ODY5NzY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function Careers() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", position: "", experience: "", coverLetter: "", resume: null as File | null });

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); };

  return (
    <div className="bg-white">
      <InnerPageHero
        title="Careers at Chemanol"
        description="Join a leading chemical manufacturer committed to excellence, innovation, and sustainable growth."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: "Careers" }]}
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Why Join */}
          <AnimatedSection>
            <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8">
              <SectionHeading className="mb-6" title="Why Join Chemanol?" size="md" />
              <p className="text-sm text-neutral-700 mb-8" style={{ lineHeight: 1.6 }}>
                Chemanol is one of the largest methanol producers in the Middle East, with a strong commitment to operational excellence, safety, and sustainability. We offer a dynamic work environment where talented professionals can grow their careers while contributing to our mission of delivering quality chemical products to global markets.
              </p>
              <div className="grid grid-cols-4 gap-6">
                {[
                  { icon: Users, color: "text-[#0658a5]", bg: "bg-[#0658a5]/10", title: "Diverse Team", desc: "Collaborative multicultural environment" },
                  { icon: Award, color: "text-[#B8BD44]", bg: "bg-[#B8BD44]/10", title: "Career Growth", desc: "Professional development programs" },
                  { icon: TrendingUp, color: "text-[#B3A03D]", bg: "bg-[#B3A03D]/10", title: "Industry Leader", desc: "Part of a world-class operation" },
                  { icon: Heart, color: "text-[#A96448]", bg: "bg-[#A96448]/10", title: "Work-Life Balance", desc: "Competitive benefits package" },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className={`w-12 h-12 ${item.bg} rounded-sm flex items-center justify-center mx-auto mb-3`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-sm text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-neutral-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* SuccessFactors */}
          <AnimatedSection delay={0.1}>
            <div className="bg-[#0658a5] rounded-sm p-8 flex items-center justify-between">
              <div>
                <h2 className="text-xl text-white mb-2">Explore Career Opportunities</h2>
                <p className="text-sm text-white/60" style={{ lineHeight: 1.6 }}>Visit our SuccessFactors career portal to browse current openings and submit your application.</p>
              </div>
              <a href="https://careers.chemanol.com" target="_blank" rel="noopener noreferrer">
                <button className="bg-white text-[#0658a5] text-sm px-6 py-3 rounded-sm hover:bg-[#2dabe2] hover:text-white transition-all duration-300 cursor-pointer flex items-center gap-2">
                  Visit Career Portal <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </a>
            </div>
          </AnimatedSection>

          {/* Application Form */}
          <AnimatedSection delay={0.15}>
            <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8">
              <SectionHeading
                className="mb-6"
                title="General Application"
                description="Can't find a suitable position? Submit a general application and we'll keep your profile on file."
                size="md"
                descriptionClassName="text-sm sm:text-base"
              />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "First Name", key: "firstName", placeholder: "Enter your first name" },
                    { label: "Last Name", key: "lastName", placeholder: "Enter your last name" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm text-neutral-900 mb-2">{field.label} <span className="text-[#A96448]">*</span></label>
                      <input className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder={field.placeholder} required />
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-neutral-900 mb-2">Email <span className="text-[#A96448]">*</span></label>
                    <input type="email" className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder="your.email@example.com" required />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-900 mb-2">Phone <span className="text-[#A96448]">*</span></label>
                    <input type="tel" className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder="+966 XX XXX XXXX" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-neutral-900 mb-2">Position <span className="text-[#A96448]">*</span></label>
                    <input className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder="Enter position title" required />
                  </div>
                  <div>
                    <label className="block text-sm text-neutral-900 mb-2">Experience <span className="text-[#A96448]">*</span></label>
                    <Select value={formData.experience} onValueChange={(v) => setFormData({ ...formData, experience: v })}>
                      <SelectTrigger><SelectValue placeholder="Select experience level" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="2-5">2-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-neutral-900 mb-2">Cover Letter</label>
                  <textarea rows={5} className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400 resize-none" placeholder="Tell us why you're interested in joining Chemanol..." />
                </div>
                <div>
                  <label className="block text-sm text-neutral-900 mb-2">Resume / CV <span className="text-[#A96448]">*</span></label>
                  <div className="border-2 border-dashed border-neutral-200 rounded-sm p-8 text-center hover:border-[#2dabe2] transition-colors">
                    <Upload className="w-8 h-8 text-neutral-300 mx-auto mb-3" strokeWidth={1.5} />
                    <p className="text-sm text-neutral-500 mb-1"><span className="text-[#0658a5] cursor-pointer hover:text-[#2dabe2]">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-neutral-400">PDF, DOC, or DOCX (max. 5MB)</p>
                  </div>
                </div>
                <div className="p-4 bg-[#0658a5]/[0.03] border border-[#0658a5]/10 rounded-sm">
                  <p className="text-xs text-neutral-500">By submitting, you consent to Chemanol storing and processing your data for recruitment. See our <Link to="/privacy-terms" className="text-[#0658a5] hover:text-[#2dabe2]">Privacy Policy</Link>.</p>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="bg-[#0658a5] text-white text-sm px-8 py-3 rounded-sm hover:bg-[#2dabe2] transition-colors duration-300 cursor-pointer">Submit Application</button>
                </div>
              </form>
            </div>
          </AnimatedSection>

          {/* Questions */}
          <AnimatedSection delay={0.2}>
            <div className="bg-[#0658a5]/5 border border-[#0658a5]/10 rounded-sm p-6">
              <h3 className="text-sm text-neutral-900 mb-2">Questions About Careers?</h3>
              <p className="text-xs text-neutral-500 mb-4">For general inquiries about career opportunities at Chemanol, please contact our HR department.</p>
              <div className="flex items-center gap-6 text-sm">
                <div><span className="text-neutral-400">Email:</span> <a href="mailto:careers@chemanol.com" className="text-[#0658a5] hover:text-[#2dabe2]">careers@chemanol.com</a></div>
                <div><span className="text-neutral-400">Phone:</span> <a href="tel:+966133417000" className="text-[#0658a5] hover:text-[#2dabe2]">+966 13 341 7000</a></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
