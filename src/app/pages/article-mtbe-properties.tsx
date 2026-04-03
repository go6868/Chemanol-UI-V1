import { PageHeader } from "@/app/components/page-header";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { Download, Calendar, User } from "lucide-react";
import { Link } from "react-router";
import { SplitCtaLink } from "@/app/components/split-cta";

export function ArticleMtbeProperties() {
  return (
    <div className="bg-neutral-50">
      <PageHeader
        title="MTBE: Properties and Industrial Uses"
        description="Technical data on MTBE as a fuel oxygenate and octane enhancer"
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <Breadcrumbs 
          items={[
            { label: "Industries & Applications", href: "/industries" },
            { label: "Technical Articles", href: "/industries#technical-articles" },
            { label: "MTBE Properties" }
          ]} 
        />

        <div className="max-w-4xl mx-auto">
          {/* Meta Information */}
          <div className="bg-white border border-neutral-200 rounded-sm p-6 mb-8">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-neutral-500 mb-1">CATEGORY</div>
                <div className="text-sm text-neutral-900">Fuel Additives</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">PUBLICATION DATE</div>
                <div className="text-sm text-neutral-900 flex items-center gap-2">
                  <Calendar className="w-4 h-4" strokeWidth={1.5} />
                  January 2026
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
                Methyl Tertiary-Butyl Ether (MTBE) is one of the most widely used fuel oxygenates globally, playing a critical role in improving gasoline octane ratings and combustion efficiency. This technical article provides comprehensive data on MTBE's chemical and physical properties, manufacturing processes, and industrial applications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Chemical & Physical Properties</h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 mb-4">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="py-2 text-neutral-600 w-1/2">Chemical Formula</td>
                      <td className="py-2 text-neutral-900">C₅H₁₂O</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Molecular Weight</td>
                      <td className="py-2 text-neutral-900">88.15 g/mol</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">CAS Number</td>
                      <td className="py-2 text-neutral-900">1634-04-4</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Appearance</td>
                      <td className="py-2 text-neutral-900">Colorless liquid</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Density (20°C)</td>
                      <td className="py-2 text-neutral-900">0.7404 g/cm³</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Boiling Point</td>
                      <td className="py-2 text-neutral-900">55.2°C</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Melting Point</td>
                      <td className="py-2 text-neutral-900">-109°C</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Flash Point</td>
                      <td className="py-2 text-neutral-900">-28°C (closed cup)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Vapor Pressure (20°C)</td>
                      <td className="py-2 text-neutral-900">245 hPa</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Solubility in Water</td>
                      <td className="py-2 text-neutral-900">42 g/L (20°C)</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Oxygen Content</td>
                      <td className="py-2 text-neutral-900">18.2% by weight</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Production Process</h2>
              <p className="text-neutral-600 mb-4">
                MTBE is synthesized through the catalytic reaction of methanol and isobutylene:
              </p>
              <div className="bg-neutral-100 border border-neutral-200 rounded-sm p-4 mb-4 text-center">
                <code className="text-neutral-900">CH₃OH + (CH₃)₂C=CH₂ → (CH₃)₃COCH₃</code>
                <p className="text-xs text-neutral-500 mt-2">Methanol + Isobutylene → MTBE</p>
              </div>
              <p className="text-neutral-600 mb-4">
                The reaction is typically carried out in the presence of acidic ion-exchange resins as catalysts at temperatures of 50-90°C and pressures of 0.5-1.5 MPa. The process achieves isobutylene conversion rates of 95-98%.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Fuel Performance Characteristics</h2>
              <p className="text-neutral-600 mb-4">
                MTBE delivers several key benefits when blended with gasoline:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-2xl text-[#0658a5] mb-1">110-118</div>
                  <div className="text-sm text-neutral-600">Research Octane Number (RON)</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-2xl text-[#0658a5] mb-1">98-101</div>
                  <div className="text-sm text-neutral-600">Motor Octane Number (MON)</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-2xl text-[#0658a5] mb-1">35.2 MJ/L</div>
                  <div className="text-sm text-neutral-600">Energy Density</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-2xl text-[#0658a5] mb-1">26.3 MJ/kg</div>
                  <div className="text-sm text-neutral-600">Heating Value</div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-sm p-4">
                <h3 className="text-sm mb-2 text-neutral-900">Typical Blending Rates</h3>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>• <strong>7-10%:</strong> Standard octane enhancement in regular gasoline</li>
                  <li>• <strong>11-15%:</strong> Premium gasoline formulations</li>
                  <li>• <strong>15-17%:</strong> Maximum recommended concentration (regional regulations vary)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Industrial Applications</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-[#0658a5] pl-4">
                  <h3 className="text-base mb-2 text-neutral-900">Primary Use: Gasoline Octane Booster</h3>
                  <p className="text-sm text-neutral-600">MTBE is primarily used to increase the octane rating of gasoline, reducing engine knock and improving combustion efficiency. It allows refiners to produce high-octane fuel without expensive reforming processes.</p>
                </div>

                <div className="border-l-4 border-[#0658a5] pl-4">
                  <h3 className="text-base mb-2 text-neutral-900">Oxygenate for Emissions Reduction</h3>
                  <p className="text-sm text-neutral-600">The oxygen content in MTBE promotes more complete combustion, reducing carbon monoxide (CO) and unburned hydrocarbon emissions by 10-15%.</p>
                </div>

                <div className="border-l-4 border-[#0658a5] pl-4">
                  <h3 className="text-base mb-2 text-neutral-900">Chemical Intermediate</h3>
                  <p className="text-sm text-neutral-600">MTBE serves as a feedstock for isobutylene production through thermal or catalytic cracking, supporting the synthesis of various specialty chemicals.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Quality Specifications</h2>
              <p className="text-neutral-600 mb-4">
                Commercial MTBE typically meets the following quality standards:
              </p>
              <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="py-2 text-left text-neutral-600">Parameter</th>
                      <th className="py-2 text-left text-neutral-600">Specification</th>
                      <th className="py-2 text-left text-neutral-600">Test Method</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="py-2 text-neutral-600">Purity (min)</td>
                      <td className="py-2 text-neutral-900">99.0 wt%</td>
                      <td className="py-2 text-neutral-900">ASTM D4815</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Methanol (max)</td>
                      <td className="py-2 text-neutral-900">0.10 wt%</td>
                      <td className="py-2 text-neutral-900">ASTM D4815</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Water (max)</td>
                      <td className="py-2 text-neutral-900">0.10 wt%</td>
                      <td className="py-2 text-neutral-900">ASTM E203</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Color (max)</td>
                      <td className="py-2 text-neutral-900">10 Pt-Co</td>
                      <td className="py-2 text-neutral-900">ASTM D1209</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Acidity (max)</td>
                      <td className="py-2 text-neutral-900">0.001 wt%</td>
                      <td className="py-2 text-neutral-900">ASTM D1613</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Safety & Handling</h2>
              <p className="text-neutral-600 mb-4">
                MTBE is a flammable liquid requiring appropriate safety precautions:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-neutral-200 rounded-sm p-4">
                  <h3 className="text-sm mb-2 text-neutral-900">Storage Requirements</h3>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Store in cool, well-ventilated area</li>
                    <li>• Keep away from ignition sources</li>
                    <li>• Use explosion-proof equipment</li>
                    <li>• Grounding/bonding required</li>
                  </ul>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <h3 className="text-sm mb-2 text-neutral-900">Personal Protection</h3>
                  <ul className="text-sm text-neutral-600 space-y-1">
                    <li>• Chemical-resistant gloves</li>
                    <li>• Safety goggles/face shield</li>
                    <li>• Adequate ventilation</li>
                    <li>• Vapor monitoring recommended</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Environmental Considerations</h2>
              <p className="text-neutral-600">
                While MTBE is effective as a fuel oxygenate, its environmental profile requires careful management. MTBE's relatively high water solubility and resistance to biodegradation necessitate proper handling and storage protocols. Many regions have implemented specific regulations governing MTBE use and groundwater protection measures.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">References</h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 text-sm text-neutral-600 space-y-2">
                <p>1. ASTM International, "Standard Specification for Methyl Tertiary-Butyl Ether (MTBE)" D5797 (2025)</p>
                <p>2. European Fuel Oxygenates Association, "MTBE Technical Manual" (2024)</p>
                <p>3. API, "Management of MTBE in Gasoline Distribution" Publication 4733 (2025)</p>
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