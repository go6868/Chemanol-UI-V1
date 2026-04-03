import { PageHeader } from "@/app/components/page-header";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { Download, Calendar, Building2 } from "lucide-react";
import { Link } from "react-router";
import { SplitCtaLink } from "@/app/components/split-cta";

export function CaseStudyFuelBlending() {
  return (
    <div className="bg-neutral-50">
      <PageHeader
        title="Fuel Blending Optimization"
        description="How a major fuel distributor achieved 15% efficiency gains using our MTBE solutions"
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <Breadcrumbs 
          items={[
            { label: "Industries & Applications", href: "/industries" },
            { label: "Case Studies", href: "/industries#case-studies" },
            { label: "Fuel Blending Optimization" }
          ]} 
        />

        <div className="max-w-4xl mx-auto">
          {/* Meta Information */}
          <div className="bg-white border border-neutral-200 rounded-sm p-6 mb-8">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-neutral-500 mb-1">INDUSTRY</div>
                <div className="text-sm text-neutral-900">Automotive</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">PUBLICATION DATE</div>
                <div className="text-sm text-neutral-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4" strokeWidth={1.5} />
                  January 2026
                </div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">CLIENT TYPE</div>
                <div className="text-sm text-neutral-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4" strokeWidth={1.5} />
                  Regional Fuel Distributor
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white border border-neutral-200 rounded-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Executive Summary</h2>
              <p className="text-neutral-600 mb-4">
                A leading regional fuel distributor partnered with Chemanol to optimize their gasoline blending process using our high-purity MTBE (Methyl Tertiary-Butyl Ether). The implementation resulted in a 15% improvement in blending efficiency, reduced octane costs, and enhanced fuel performance characteristics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Challenge</h2>
              <p className="text-neutral-600 mb-4">
                The distributor faced increasing pressure to meet stringent octane rating requirements while managing rising feedstock costs. Their existing blending process relied on more expensive aromatic compounds, resulting in higher production costs and limited operational flexibility.
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li>Inconsistent octane ratings across production batches</li>
                <li>High dependence on volatile aromatic compound pricing</li>
                <li>Limited flexibility in feedstock sourcing</li>
                <li>Pressure to reduce overall production costs by 10-12%</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Solution</h2>
              <p className="text-neutral-600 mb-4">
                Chemanol technical team worked closely with the client to implement a phased transition to MTBE-based octane enhancement:
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li>Comprehensive fuel composition analysis and optimization modeling</li>
                <li>Gradual introduction of Chemanol MTBE into existing blending operations</li>
                <li>Real-time monitoring and adjustment of blending ratios</li>
                <li>Technical training for operations and quality control teams</li>
                <li>Ongoing support and performance optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Results</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">15%</div>
                  <div className="text-sm text-neutral-600">Efficiency improvement in blending operations</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">12%</div>
                  <div className="text-sm text-neutral-600">Reduction in octane enhancement costs</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">98%</div>
                  <div className="text-sm text-neutral-600">Consistency in octane rating targets</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-3xl text-[#0658a5] mb-1">6 months</div>
                  <div className="text-sm text-neutral-600">Full ROI achievement period</div>
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
                      <td className="py-2 text-neutral-900">Chemanol MTBE (99.5% purity)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Blend Ratio</td>
                      <td className="py-2 text-neutral-900">10-15% by volume</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Octane Enhancement</td>
                      <td className="py-2 text-neutral-900">+2.5 to +3.0 RON</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Implementation Timeline</td>
                      <td className="py-2 text-neutral-900">4 months (pilot + full rollout)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Conclusion</h2>
              <p className="text-neutral-600">
                The successful implementation of Chemanol MTBE in the distributor's blending operations demonstrates the tangible benefits of high-quality oxygenates in fuel production. The client continues to work with Chemanol technical support team for ongoing optimization and has expanded MTBE usage across their entire production network.
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