import { PageHeader } from "@/app/components/page-header";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { Download, Calendar, User } from "lucide-react";
import { Link } from "react-router";
import { SplitCtaLink } from "@/app/components/split-cta";

export function ArticleMethanolFuel() {
  return (
    <div className="bg-neutral-50">
      <PageHeader
        title="Methanol in Modern Fuel Systems"
        description="Technical overview of methanol blending in gasoline and its impact on engine performance"
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <Breadcrumbs 
          items={[
            { label: "Industries & Applications", href: "/industries" },
            { label: "Technical Articles", href: "/industries#technical-articles" },
            { label: "Methanol in Modern Fuel Systems" }
          ]} 
        />

        <div className="max-w-4xl mx-auto">
          {/* Meta Information */}
          <div className="bg-white border border-neutral-200 rounded-sm p-6 mb-8">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-neutral-500 mb-1">CATEGORY</div>
                <div className="text-sm text-neutral-900">Fuel Applications</div>
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
                Methanol has emerged as one of the most versatile and effective fuel additives in modern automotive applications. Its unique chemical properties make it an ideal component for octane enhancement, emissions reduction, and alternative fuel formulations. This technical article explores the role of methanol in contemporary fuel systems.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Chemical Properties & Benefits</h2>
              <p className="text-neutral-600 mb-4">
                Methanol (CH₃OH) is the simplest alcohol, with molecular weight of 32.04 g/mol. Its key properties relevant to fuel applications include:
              </p>
              <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 mb-4">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-neutral-200">
                    <tr>
                      <td className="py-2 text-neutral-600">Octane Number (RON)</td>
                      <td className="py-2 text-neutral-900">109</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Energy Density</td>
                      <td className="py-2 text-neutral-900">15.6 MJ/L</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Oxygen Content</td>
                      <td className="py-2 text-neutral-900">50% by weight</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-neutral-600">Boiling Point</td>
                      <td className="py-2 text-neutral-900">64.7°C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Applications in Gasoline Blending</h2>
              <p className="text-neutral-600 mb-4">
                Methanol can be blended with gasoline in various concentrations for different applications:
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li><strong>M10-M15 Blends:</strong> Low-level blending for octane enhancement in conventional vehicles</li>
                <li><strong>M85:</strong> High-concentration blend for flexible-fuel vehicles (FFVs)</li>
                <li><strong>M100:</strong> Pure methanol for dedicated methanol vehicles and racing applications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Impact on Engine Performance</h2>
              <p className="text-neutral-600 mb-4">
                Research has demonstrated several performance benefits of methanol blending:
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-2xl text-[#0658a5] mb-1">3-5%</div>
                  <div className="text-sm text-neutral-600">Power output increase in turbocharged engines</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-2xl text-[#0658a5] mb-1">15-20%</div>
                  <div className="text-sm text-neutral-600">Reduction in NOx emissions</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-2xl text-[#0658a5] mb-1">10-15%</div>
                  <div className="text-sm text-neutral-600">Improvement in thermal efficiency</div>
                </div>
                <div className="border border-neutral-200 rounded-sm p-4">
                  <div className="text-2xl text-[#0658a5] mb-1">20-25°C</div>
                  <div className="text-sm text-neutral-600">Reduction in combustion temperature</div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Technical Considerations</h2>
              <p className="text-neutral-600 mb-4">
                While methanol offers significant benefits, several technical factors must be considered:
              </p>
              <ul className="list-disc list-inside text-neutral-600 space-y-2">
                <li><strong>Material Compatibility:</strong> Some fuel system components may require upgrade for methanol compatibility</li>
                <li><strong>Phase Separation:</strong> Water contamination can cause methanol-gasoline blends to separate</li>
                <li><strong>Cold Start Performance:</strong> Lower volatility may affect cold weather starting in high-blend applications</li>
                <li><strong>Corrosion Control:</strong> Methanol requires corrosion inhibitors in certain applications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">Future Outlook</h2>
              <p className="text-neutral-600">
                Methanol is positioned to play an increasingly important role in the transition to cleaner transportation fuels. Its potential as a hydrogen carrier for fuel cell vehicles, combined with the possibility of renewable methanol production from biomass or CO₂ capture, makes it a promising component of future sustainable fuel strategies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl mb-4 text-neutral-900">References</h2>
              <div className="bg-neutral-50 border border-neutral-200 rounded-sm p-4 text-sm text-neutral-600 space-y-2">
                <p>1. SAE International, "Methanol as a Motor Fuel," SAE Technical Paper Series (2025)</p>
                <p>2. International Energy Agency, "The Future of Methanol in Transportation" (2025)</p>
                <p>3. European Fuel Oxygenates Association, "Technical Guidelines for Methanol Blending" (2024)</p>
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