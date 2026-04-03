import { PageHeader } from "@/app/components/page-header";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { Download, Calendar, Building2 } from "lucide-react";
import { Link } from "react-router";
import { SplitCtaLink } from "@/app/components/split-cta";

export function CaseStudyResinPerformance() {
  return (
    <div className="bg-neutral-50">
      <PageHeader
        title="Resin Performance Improvement"
        description="Advanced formaldehyde solutions for high-strength wood panel manufacturing"
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <Breadcrumbs 
          items={[
            { label: "Industries & Applications", href: "/industries" },
            { label: "Case Studies", href: "/industries#case-studies" },
            { label: "Resin Performance Improvement" }
          ]} 
        />

        <div className="max-w-4xl mx-auto">
          {/* Meta Information */}
          <div className="bg-white border border-neutral-200 rounded-sm p-6 mb-8">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-neutral-500 mb-1">INDUSTRY</div>
                <div className="text-sm text-neutral-900">Construction</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">PUBLICATION DATE</div>
                <div className="text-sm text-neutral-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4" strokeWidth={1.5} />
                  December 2025
                </div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">CLIENT TYPE</div>
                <div className="text-sm text-neutral-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4" strokeWidth={1.5} />
                  MDF Panel Manufacturer
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white border border-neutral-200 rounded-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Executive Summary</h2>
              <p className="text-neutral-600 mb-4">
                A leading MDF (Medium-Density Fiberboard) manufacturer collaborated with Chemanol to enhance the performance characteristics of their wood panel products using our high-purity formaldehyde-based resin systems. The project resulted in superior bond strength, reduced emissions, and improved production efficiency.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Challenge</h2>
              <p className="text-neutral-600 mb-4">
                The manufacturer needed to meet increasingly stringent environmental regulations while maintaining structural performance standards for their MDF panels used in furniture and construction applications.
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li>High formaldehyde emission levels exceeding new E1 standards</li>
                <li>Inconsistent bond strength across production batches</li>
                <li>Longer curing times impacting production throughput</li>
                <li>Customer complaints about panel delamination in humid conditions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Solution</h2>
              <p className="text-neutral-600 mb-4">
                Chemanol developed a customized urea-formaldehyde resin formulation with enhanced properties:
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li>Low-emission formaldehyde resin system meeting E0/E1 standards</li>
                <li>Optimized mole ratio for improved bond strength and water resistance</li>
                <li>Accelerated curing agents for faster production cycles</li>
                <li>On-site technical support for process optimization</li>
                <li>Quality control protocols and testing methodology</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Results</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">65%</div>
                  <div className="text-sm text-neutral-600">Reduction in formaldehyde emissions</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">22%</div>
                  <div className="text-sm text-neutral-600">Improvement in internal bond strength</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">18%</div>
                  <div className="text-sm text-neutral-600">Reduction in curing time</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">E0</div>
                  <div className="text-sm text-neutral-600">Emission class certification achieved</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Technical Specifications</h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="py-2 text-neutral-600">Product Used</td>
                      <td className="py-2 text-neutral-900">Chemanol UF Resin (low-emission grade)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Formaldehyde Content</td>
                      <td className="py-2 text-neutral-900">≤ 0.5 mg/L (E0 standard)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Bond Strength</td>
                      <td className="py-2 text-neutral-900">≥ 0.75 N/mm² (EN 319)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Implementation Timeline</td>
                      <td className="py-2 text-neutral-900">3 months (testing + production)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Conclusion</h2>
              <p className="text-neutral-600">
                The partnership between Chemanol and the MDF manufacturer demonstrates how advanced formaldehyde chemistry can deliver both environmental compliance and superior product performance. The manufacturer has since expanded the use of Chemanol resins to their entire product line and is exploring additional applications in plywood manufacturing.
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