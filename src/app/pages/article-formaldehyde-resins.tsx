import { PageHeader } from "@/app/components/page-header";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { Download, Calendar, User } from "lucide-react";
import { Link } from "react-router";
import { SplitCtaLink } from "@/app/components/split-cta";

export function ArticleFormaldehydeResins() {
  return (
    <div className="bg-neutral-50">
      <PageHeader
        title="Formaldehyde-Based Resins: Applications & Performance"
        description="Comprehensive guide to formaldehyde resin systems in wood panel manufacturing"
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <Breadcrumbs 
          items={[
            { label: "Industries & Applications", href: "/industries" },
            { label: "Technical Articles", href: "/industries#technical-articles" },
            { label: "Formaldehyde-Based Resins" }
          ]} 
        />

        <div className="max-w-4xl mx-auto">
          {/* Meta Information */}
          <div className="bg-white border border-neutral-200 rounded-sm p-6 mb-8">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-neutral-500 mb-1">CATEGORY</div>
                <div className="text-sm text-neutral-900">Resins & Adhesives</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">PUBLICATION DATE</div>
                <div className="text-sm text-neutral-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4" strokeWidth={1.5} />
                  December 2025
                </div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">AUTHOR</div>
                <div className="text-sm text-neutral-900 flex items-center gap-2">
                  <User className="w-4 h-4" strokeWidth={1.5} />
                  Chemanol Technical Team
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white border border-neutral-200 rounded-sm p-8 space-y-6">
            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Introduction</h2>
              <p className="text-neutral-600 mb-4">
                Formaldehyde-based resins represent one of the most important classes of thermosetting polymers in modern manufacturing. These resins are essential for wood composite products, including particleboard, MDF (Medium-Density Fiberboard), and plywood. This article provides a comprehensive overview of formaldehyde resin chemistry, applications, and performance characteristics.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Types of Formaldehyde-Based Resins</h2>
              <p className="text-neutral-600 mb-4">
                Three main types of formaldehyde resins dominate industrial applications:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-4 border-[#0658a5] pl-4">
                  <h3 className="text-base mb-2 text-neutral-900">Urea-Formaldehyde (UF) Resins</h3>
                  <p className="text-sm text-neutral-600">Most widely used for interior applications. Advantages include low cost, fast curing, and excellent bonding strength. Primary use in particleboard and MDF manufacturing.</p>
                </div>

                <div className="border-l-4 border-[#0658a5] pl-4">
                  <h3 className="text-base mb-2 text-neutral-900">Phenol-Formaldehyde (PF) Resins</h3>
                  <p className="text-sm text-neutral-600">Superior water resistance and durability make PF resins ideal for exterior applications. Used extensively in exterior-grade plywood and OSB (Oriented Strand Board).</p>
                </div>

                <div className="border-l-4 border-[#0658a5] pl-4">
                  <h3 className="text-base mb-2 text-neutral-900">Melamine-Formaldehyde (MF) Resins</h3>
                  <p className="text-sm text-neutral-600">Combines excellent water resistance with low formaldehyde emission. Often used in surface coatings and as UF resin modifiers for enhanced performance.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Key Performance Parameters</h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="py-2 text-left text-neutral-600">Parameter</th>
                      <th className="py-2 text-left text-neutral-600">UF Resin</th>
                      <th className="py-2 text-left text-neutral-600">PF Resin</th>
                      <th className="py-2 text-left text-neutral-600">MF Resin</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="py-2 text-neutral-600">Curing Temp</td>
                      <td className="py-2 text-neutral-900">110-130°C</td>
                      <td className="py-2 text-neutral-900">140-160°C</td>
                      <td className="py-2 text-neutral-900">120-140°C</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Bond Strength</td>
                      <td className="py-2 text-neutral-900">Good</td>
                      <td className="py-2 text-neutral-900">Excellent</td>
                      <td className="py-2 text-neutral-900">Very Good</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Water Resistance</td>
                      <td className="py-2 text-neutral-900">Limited</td>
                      <td className="py-2 text-neutral-900">Excellent</td>
                      <td className="py-2 text-neutral-900">Good</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Relative Cost</td>
                      <td className="py-2 text-neutral-900">Low</td>
                      <td className="py-2 text-neutral-900">Medium</td>
                      <td className="py-2 text-neutral-900">High</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Emission Control & Environmental Compliance</h2>
              <p className="text-neutral-600 mb-4">
                Formaldehyde emission from wood composite products has been subject to increasingly stringent regulations globally. Modern resin formulations address these concerns through:
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li>Optimized mole ratios (F/U ratio) to minimize free formaldehyde</li>
                <li>Addition of formaldehyde scavengers (urea, melamine)</li>
                <li>Use of low-emission catalysts and hardeners</li>
                <li>Post-treatment processes to reduce emissions</li>
              </ul>
              
              <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 mt-4">
                <h3 className="text-sm mb-2 text-neutral-900">Global Emission Standards</h3>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="py-2 text-neutral-600">E0 (Japan)</td>
                      <td className="py-2 text-neutral-900">≤ 0.5 mg/L</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">E1 (Europe)</td>
                      <td className="py-2 text-neutral-900">≤ 0.124 mg/m³</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">CARB Phase 2 (USA)</td>
                      <td className="py-2 text-neutral-900">≤ 0.09 ppm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Application Guidelines</h2>
              <p className="text-neutral-600 mb-4">
                Successful resin application requires careful attention to several factors:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-neutral-200 rounded-sm p-4">
                  <h3 className="text-sm mb-2 text-neutral-900">Wood Preparation</h3>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Moisture content: 8-12%</li>
                    <li>• Surface cleanliness</li>
                    <li>• Particle size distribution</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <h3 className="text-sm mb-2 text-neutral-900">Resin Application</h3>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Resin content: 8-12% (dry basis)</li>
                    <li>• Uniform distribution</li>
                    <li>• Proper catalyst dosing</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <h3 className="text-sm mb-2 text-neutral-900">Press Conditions</h3>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Temperature: 160-200°C</li>
                    <li>• Pressure: 2.5-4.0 MPa</li>
                    <li>• Press time: 6-12 seconds/mm</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <h3 className="text-sm mb-2 text-neutral-900">Quality Control</h3>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Bond strength testing</li>
                    <li>• Emission measurements</li>
                    <li>• Physical properties</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Future Trends</h2>
              <p className="text-neutral-600">
                The formaldehyde resin industry continues to evolve with focus on sustainability and performance. Key trends include bio-based formaldehyde alternatives, nanotechnology-enhanced resins, and hybrid resin systems that combine the benefits of different chemistries while meeting increasingly strict environmental regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">References</h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 text-sm text-neutral-600 space-y-2">
                <p>1. Dunky, M., "Urea-formaldehyde (UF) adhesive resins for wood," International Journal of Adhesion and Adhesives (2024)</p>
                <p>2. European Panel Federation, "Technical Guidelines for Wood-Based Panels" (2025)</p>
                <p>3. ANSI/HPVA HP-1, "American National Standard for Hardwood and Decorative Plywood" (2024)</p>
              </div>
            </section>
          </div>

          {/* Download & Related */}
          <div className="mt-8 flex gap-4">
            <button className="bg-white border border-neutral-200 rounded-sm px-6 py-3 text-sm text-[#0658a5] hover:text-[#2dabe2] hover:border-[#2dabe2] transition-colors cursor-pointer inline-flex items-center">
              <Download className="w-4 h-4 mr-2" strokeWidth={1.5} />
              Download PDF
            </button>
            <SplitCtaLink to="/technical-resources" label="View All Articles" />
          </div>
        </div>
      </div>
    </div>
  );
}