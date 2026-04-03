import { InnerPageHero } from "@/app/components/inner-page-hero";
import { AnimatedSection } from "@/app/components/animated-section";
import { SectionHeading } from "@/app/components/section-heading";
import { MapPin, Phone, Mail, Clock, MessageSquare, ShoppingCart, FileText } from "lucide-react";
import { useState } from "react";

const heroImg = "https://images.unsplash.com/photo-1553775282-20af80779df7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHN1cHBvcnQlMjBoZWFkc2V0JTIwY29udGFjdCUyMGNlbnRlcnxlbnwxfHx8fDE3NzQ4Njk3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export function ContactSupport() {
  const [inquiryType, setInquiryType] = useState("general");

  return (
    <div className="bg-white">
      <InnerPageHero
        title="Contact & Support"
        description="Get in touch with our team for sales inquiries, general information, and supplier registration."
        backgroundImage={heroImg}
        breadcrumbs={[{ label: "Contact & Support" }]}
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Contact Details & Map */}
          <section className="grid grid-cols-2 gap-6">
            <AnimatedSection>
              <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8 h-full">
                <SectionHeading className="mb-6" title="Contact Details" size="md" />
                <div className="space-y-6">
                  {[
                    { icon: MapPin, color: "text-[#0658a5]", bg: "bg-[#0658a5]/10", label: "Head Office", value: "Chemanol Complex, Al-Jubail Industrial City\nSaudi Arabia" },
                    { icon: Phone, color: "text-[#B8BD44]", bg: "bg-[#B8BD44]/10", label: "Phone", value: "+966 13 XXX XXXX" },
                    { icon: Mail, color: "text-[#B3A03D]", bg: "bg-[#B3A03D]/10", label: "Email", value: "info@chemanol.com" },
                    { icon: Clock, color: "text-[#A96448]", bg: "bg-[#A96448]/10", label: "Business Hours", value: "Sunday - Thursday: 8:00 AM - 5:00 PM\nFriday - Saturday: Closed" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className={`w-11 h-11 ${item.bg} rounded-sm flex items-center justify-center shrink-0`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} strokeWidth={1.5} />
                      </div>
                      <div>
                        <div className="text-xs text-neutral-400 uppercase tracking-wider mb-1">{item.label}</div>
                        <div className="text-sm text-neutral-900 whitespace-pre-line">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8 h-full">
                <h3 className="text-lg text-neutral-900 mb-4">Location Map</h3>
                <div className="w-full h-80 bg-gradient-to-br from-[#0658a5]/5 to-[#2dabe2]/5 rounded-sm flex items-center justify-center border border-neutral-100">
                  <div className="text-center text-neutral-400">
                    <MapPin className="w-12 h-12 mx-auto mb-2" strokeWidth={1} />
                    <div className="text-sm">Interactive Map</div>
                    <div className="text-xs">Al-Jubail Industrial City, Saudi Arabia</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* Contact Form */}
          <section>
            <AnimatedSection>
              <div className="max-w-2xl mx-auto">
                <div className="bg-white border border-[#2dabe2]/10 rounded-sm p-8">
                  <SectionHeading className="mb-6" title="Contact Form" size="md" />
                  <form className="space-y-6">
                    <div>
                      <label className="mb-4 block text-sm text-neutral-900">Select Inquiry Type</label>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { id: "general", icon: MessageSquare, label: "General Inquiry" },
                          { id: "sales", icon: ShoppingCart, label: "Sales Inquiry" },
                          { id: "supplier", icon: FileText, label: "Supplier Registration" },
                        ].map((type) => (
                          <div
                            key={type.id}
                            onClick={() => setInquiryType(type.id)}
                            className={`p-4 border-2 rounded-sm cursor-pointer transition-all duration-300 ${
                              inquiryType === type.id ? "border-[#0658a5] bg-[#0658a5]/5" : "border-neutral-200 hover:border-[#2dabe2]/40"
                            }`}
                          >
                            <type.icon className={`w-6 h-6 mb-2 ${inquiryType === type.id ? "text-[#0658a5]" : "text-neutral-300"}`} strokeWidth={1.5} />
                            <div className={`text-sm ${inquiryType === type.id ? "text-neutral-900" : "text-neutral-500"}`}>{type.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {inquiryType === "supplier" && (
                      <div>
                        <label className="block text-sm text-neutral-900 mb-2">Company Name</label>
                        <input className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder="Your company name" />
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-neutral-900 mb-2">{inquiryType === "supplier" ? "Contact Person" : "Name"}</label>
                        <input className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder={inquiryType === "supplier" ? "Full name" : "Your name"} />
                      </div>
                      <div>
                        <label className="block text-sm text-neutral-900 mb-2">{inquiryType === "supplier" ? "Title" : "Company (Optional)"}</label>
                        <input className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder={inquiryType === "supplier" ? "Job title" : "Company name"} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-neutral-900 mb-2">Email</label>
                        <input type="email" className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder="your.email@company.com" />
                      </div>
                      <div>
                        <label className="block text-sm text-neutral-900 mb-2">Phone</label>
                        <input className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder="+966 XXX XXX" />
                      </div>
                    </div>

                    {inquiryType === "sales" && (
                      <div>
                        <label className="block text-sm text-neutral-900 mb-2">Product Interest</label>
                        <input className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder="Product name" />
                      </div>
                    )}

                    {inquiryType === "general" && (
                      <div>
                        <label className="block text-sm text-neutral-900 mb-2">Subject</label>
                        <input className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400" placeholder="Subject of your inquiry" />
                      </div>
                    )}

                    <div>
                      <label className="block text-sm text-neutral-900 mb-2">{inquiryType === "supplier" ? "Additional Details" : "Message"}</label>
                      <textarea
                        rows={4}
                        className="w-full bg-transparent border-b border-neutral-200 text-sm py-2.5 outline-none focus:border-[#2dabe2] transition-colors placeholder:text-neutral-400 resize-none"
                        placeholder={inquiryType === "supplier" ? "Tell us about your company" : "Your message"}
                      />
                    </div>

                    <button className="w-full bg-[#0658a5] text-white text-sm py-3 rounded-sm hover:bg-[#2dabe2] transition-colors duration-300 cursor-pointer">
                      {inquiryType === "supplier" ? "Submit Registration" : "Send Message"}
                    </button>
                  </form>
                </div>
              </div>
            </AnimatedSection>
          </section>
        </div>
      </div>
    </div>
  );
}
