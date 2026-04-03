import { PageHeader } from "@/app/components/page-header";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { Download, Calendar, Building2 } from "lucide-react";
import { Link } from "react-router";
import { SplitCtaLink } from "@/app/components/split-cta";

export function CaseStudyCustomChemical() {
  return (
    <div className="bg-neutral-50">
      <PageHeader
        title="Custom Chemical Solutions"
        description="Tailored methanol derivatives for pharmaceutical intermediate synthesis"
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <Breadcrumbs 
          items={[
            { label: "Industries & Applications", href: "/industries" },
            { label: "Case Studies", href: "/industries#case-studies" },
            { label: "Custom Chemical Solutions" }
          ]} 
        />

        <div className="max-w-4xl mx-auto">
          {/* Meta Information */}
          <div className="bg-white border border-neutral-200 rounded-sm p-6 mb-8">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-neutral-500 mb-1">INDUSTRY</div>
                <div className="text-sm text-neutral-900">Specialty Chemicals</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">PUBLICATION DATE</div>
                <div className="text-sm text-neutral-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4" strokeWidth={1.5} />
                  November 2025
                </div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">CLIENT TYPE</div>
                <div className="text-sm text-neutral-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4" strokeWidth={1.5} />
                  Pharmaceutical Intermediates
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white border border-neutral-200 rounded-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Executive Summary</h2>
              <p className="text-neutral-600 mb-4">
                A pharmaceutical intermediate manufacturer required ultra-high purity methanol with stringent quality specifications for API (Active Pharmaceutical Ingredient) synthesis. Chemanol developed a custom purification process and supply chain solution that exceeded industry standards while ensuring regulatory compliance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Challenge</h2>
              <p className="text-neutral-600 mb-4">
                The client's synthesis process required methanol with purity levels exceeding standard industrial grades, with strict limits on trace impurities that could interfere with pharmaceutical production.
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li>Required purity ≥ 99.95% with trace metal content &lt; 0.1 ppm</li>
                <li>Need for full regulatory documentation and CoA for each batch</li>
                <li>Demanding delivery schedule aligned with production campaigns</li>
                <li>Quality consistency critical for downstream API synthesis</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Solution</h2>
              <p className="text-neutral-600 mb-4">
                Chemanol's R&D team developed a specialized production protocol:
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li>Custom distillation process achieving pharmaceutical-grade purity</li>
                <li>Dedicated production line preventing cross-contamination</li>
                <li>Enhanced QC testing protocol with ICP-MS trace metal analysis</li>
                <li>Full regulatory support including DMF documentation</li>
                <li>Just-in-time delivery system aligned with client production schedule</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Results</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">99.97%</div>
                  <div className="text-sm text-neutral-600">Average purity achieved</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">100%</div>
                  <div className="text-sm text-neutral-600">On-time delivery record</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">Zero</div>
                  <div className="text-sm text-neutral-600">Quality-related batch rejections</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">3 years</div>
                  <div className="text-sm text-neutral-600">Ongoing partnership duration</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Technical Specifications</h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="py-2 text-neutral-600">Product Grade</td>
                      <td className="py-2 text-neutral-900">Pharmaceutical Grade Methanol</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Purity</td>
                      <td className="py-2 text-neutral-900">≥ 99.95% (GC)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Trace Metals</td>
                      <td className="py-2 text-neutral-900">&lt; 0.1 ppm total</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Compliance</td>
                      <td className="py-2 text-neutral-900">USP/EP/JP standards, cGMP</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Conclusion</h2>
              <p className="text-neutral-600">
                This case study exemplifies Chemanol's capability to deliver highly specialized chemical solutions for demanding applications. The pharmaceutical client has expanded their relationship with Chemanol, now sourcing additional specialty solvents and intermediates for their global production network.
              </p>
            </section>
          </div>

          {/* Download & Related */}
          <div className="mt-8 flex gap-4">
            <button className="bg-white border border-neutral-200 rounded-sm px-6 py-3 text-sm text-[#0658a5] hover:text-[#2dabe2] hover:border-[#2dabe2] transition-colors cursor-pointer inline-flex items-center">
              <Download className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Download PDF
            </button>
            <SplitCtaLink to="/industries" label="View All Case Studies" />
          </div>
        </div>
      </div>
    </div>
  );
}