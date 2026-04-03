import { useParams, Link } from "react-router";
import { PageHeader } from "@/app/components/page-header";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { Button } from "@/app/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { Download, FileText, Mail, Droplet, FlaskConical, Beaker, Sparkles } from "lucide-react";
import { CardCornerCtaInline } from "@/app/components/split-cta";

export function ProductDetail() {
  const { productId } = useParams();

  // Icon mapping for products
  const productIcons = {
    methanol: { Icon: Droplet, color: "bg-blue-50", iconColor: "text-blue-600" },
    formaldehyde: { Icon: FlaskConical, color: "bg-green-50", iconColor: "text-green-600" },
    derivatives: { Icon: Beaker, color: "bg-purple-50", iconColor: "text-purple-600" },
    specialty: { Icon: Sparkles, color: "bg-orange-50", iconColor: "text-orange-600" },
  };

  // Product data would typically come from API/database
  const products = {
    methanol: {
      id: "methanol",
      name: "Methanol",
      description: "High-purity methanol meeting international quality standards for diverse industrial applications.",
      cas: "67-56-1",
      formula: "CH₃OH",
      specifications: [
        { parameter: "Purity", value: "≥ 99.85%", method: "ASTM D1722" },
        { parameter: "Water Content", value: "≤ 0.10%", method: "ASTM E203" },
        { parameter: "Color (Pt-Co)", value: "≤ 5", method: "ASTM D1209" },
        { parameter: "Acidity (as CH₃COOH)", value: "≤ 0.003%", method: "ASTM D1613" },
        { parameter: "Acetone & Aldehydes", value: "≤ 0.003%", method: "ASTM D1612" },
      ],
      applications: [
        { name: "Fuel Additive", description: "Blending component for gasoline and biodiesel production" },
        { name: "Chemical Feedstock", description: "Raw material for formaldehyde, MTBE, acetic acid, and other chemicals" },
        { name: "Solvent", description: "Industrial solvent for paints, coatings, and cleaning applications" },
        { name: "Antifreeze", description: "Component in windshield washer fluids and antifreeze formulations" },
      ],
      packaging: ["Bulk tankers", "ISO tanks", "Drums (200L)", "IBCs (1000L)"],
    },
    formaldehyde: {
      id: "formaldehyde",
      name: "Formaldehyde Products",
      description: "Formaldehyde solutions in multiple concentrations for resin manufacturing and industrial applications.",
      cas: "50-00-0",
      formula: "CH₂O",
      specifications: [
        { parameter: "Concentration", value: "37%, 44%, 50%", method: "ASTM D1979" },
        { parameter: "Methanol Content", value: "1-15%", method: "Gas Chromatography" },
        { parameter: "Acidity (as HCOOH)", value: "≤ 0.04%", method: "ASTM D1613" },
        { parameter: "Iron (Fe)", value: "≤ 5 ppm", method: "ASTM D1687" },
        { parameter: "Appearance", value: "Clear, colorless", method: "Visual" },
      ],
      applications: [
        { name: "Resin Production", description: "Key ingredient in urea-formaldehyde and phenol-formaldehyde resins" },
        { name: "Wood Panels", description: "Adhesive for plywood, particleboard, and MDF manufacturing" },
        { name: "Disinfectants", description: "Antimicrobial agent in industrial and medical applications" },
        { name: "Chemical Synthesis", description: "Intermediate in production of various chemical compounds" },
      ],
      packaging: ["Bulk tankers", "ISO tanks", "Drums (200L)", "IBCs (1000L)"],
    },
    derivatives: {
      id: "derivatives",
      name: "Methanol Derivatives",
      description: "Advanced methanol-based chemicals including MTBE, DME, and acetic acid for specialized applications.",
      cas: "Various",
      formula: "Various",
      specifications: [
        { parameter: "Purity Range", value: "≥ 98.0%", method: "Product Specific" },
        { parameter: "Quality Grade", value: "Industrial/Technical", method: "Internal Standards" },
        { parameter: "Conformance", value: "ISO 9001 Certified", method: "Third-party Audit" },
        { parameter: "Consistency", value: "Batch to Batch", method: "QC Testing" },
      ],
      applications: [
        { name: "Fuel Oxygenates", description: "MTBE and TAME for gasoline blending" },
        { name: "Alternative Fuels", description: "DME as clean fuel alternative" },
        { name: "Chemical Intermediates", description: "Building blocks for further synthesis" },
        { name: "Solvents", description: "Specialty solvents for industrial processes" },
      ],
      packaging: ["Bulk tankers", "ISO tanks", "Per customer requirement"],
    },
    specialty: {
      id: "specialty",
      name: "Specialty Chemicals",
      description: "Customized chemical solutions tailored to meet specific industry requirements and applications.",
      cas: "N/A",
      formula: "Proprietary",
      specifications: [
        { parameter: "Custom Formulation", value: "Per Specification", method: "Customer Requirements" },
        { parameter: "Quality Assurance", value: "ISO Certified", method: "Third-party Testing" },
        { parameter: "Batch Consistency", value: "Guaranteed", method: "Statistical Process Control" },
        { parameter: "Technical Support", value: "Included", method: "Dedicated Team" },
      ],
      applications: [
        { name: "Custom Formulations", description: "Tailored chemical solutions for specific applications" },
        { name: "Industrial Solutions", description: "Specialized products for niche markets" },
        { name: "Technical Applications", description: "High-performance chemicals for demanding uses" },
      ],
      packaging: ["Per customer requirement"],
    },
  };

  const product = products[productId as keyof typeof products];

  // Get other products for cross-selling
  const relatedProducts = Object.values(products).filter(p => p.id !== productId);

  if (!product) {
    return (
      <div className="bg-neutral-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Return to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-neutral-50">
      <PageHeader title={product.name} description={product.description} />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.name }
            ]} 
          />

          {/* Product Overview */}
          <section className="bg-white border border-neutral-200 rounded-lg p-8">
            <h2 className="text-2xl mb-6 text-neutral-900">Product Overview</h2>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-xs text-neutral-500 mb-1">CAS Number</div>
                <div className="text-sm text-neutral-900">{product.cas}</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Chemical Formula</div>
                <div className="text-sm text-neutral-900">{product.formula}</div>
              </div>
              <div>
                <div className="text-xs text-neutral-500 mb-1">Availability</div>
                <div className="text-sm text-green-600">In Stock</div>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
            </TabsList>

            {/* Specifications Tab */}
            <TabsContent value="specifications" className="mt-6">
              <div className="bg-white border border-neutral-200 rounded-lg p-8">
                <h3 className="text-lg mb-4 text-neutral-900">Key Specifications</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="border-b border-neutral-200">
                      <tr className="text-left">
                        <th className="pb-3 text-neutral-900">Parameter</th>
                        <th className="pb-3 text-neutral-900">Specification</th>
                        <th className="pb-3 text-neutral-900">Test Method</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr key={index} className="border-b border-neutral-100">
                          <td className="py-3 text-neutral-700">{spec.parameter}</td>
                          <td className="py-3 text-neutral-900">{spec.value}</td>
                          <td className="py-3 text-neutral-600">{spec.method}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                  <p className="text-xs text-neutral-700">
                    <strong>Note:</strong> Specifications may vary based on grade and customer requirements. Contact our technical team for detailed specifications and custom formulations.
                  </p>
                </div>
              </div>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications" className="mt-6">
              <div className="bg-white border border-neutral-200 rounded-lg p-8">
                <h3 className="text-lg mb-6 text-neutral-900">Applications</h3>
                <div className="space-y-4">
                  {product.applications.map((app, index) => (
                    <div key={index} className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                      <div className="text-base text-neutral-900 mb-2">{app.name}</div>
                      <div className="text-sm text-neutral-600">{app.description}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <h4 className="text-base mb-4 text-neutral-900">Packaging Options</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.packaging.map((pack, index) => (
                      <span key={index} className="text-sm bg-neutral-100 text-neutral-700 px-3 py-2 rounded">
                        {pack}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Downloads Tab */}
            <TabsContent value="downloads" className="mt-6">
              <div className="bg-white border border-neutral-200 rounded-lg p-8">
                <h3 className="text-lg mb-6 text-neutral-900">Downloads</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-neutral-600" />
                      <div>
                        <div className="text-sm text-neutral-900">Safety Data Sheet (SDS)</div>
                        <div className="text-xs text-neutral-600">PDF • Updated Jan 2026</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-neutral-600" />
                      <div>
                        <div className="text-sm text-neutral-900">Technical Data Sheet (TDS)</div>
                        <div className="text-xs text-neutral-600">PDF • Updated Jan 2026</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-neutral-600" />
                      <div>
                        <div className="text-sm text-neutral-900">Product Brochure</div>
                        <div className="text-xs text-neutral-600">PDF • 2 MB</div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Enquiry CTA */}
          <section className="bg-blue-50 border border-blue-200 rounded-sm p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg mb-2 text-neutral-900">Have Questions About This Product?</h3>
                <p className="text-sm text-neutral-600">
                  Our technical team is ready to assist with product selection, specifications, and custom formulations.
                </p>
              </div>
              <Link to="/contact">
                <Button>
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </section>

          {/* Related Products */}
          <section className="space-y-6">
            <h2 className="text-2xl text-neutral-900">Other Products</h2>
            <div className="grid grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => {
                const iconData = productIcons[relatedProduct.id as keyof typeof productIcons];
                const Icon = iconData.Icon;
                
                return (
                  <Link
                    key={relatedProduct.id}
                    to={`/products/${relatedProduct.id}`}
                    className="group flex h-full flex-col rounded-sm border border-neutral-200 bg-white p-6 transition-colors cursor-pointer hover:border-[#2dabe2]"
                  >
                    <div className={`w-12 h-12 ${iconData.color} rounded-sm flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${iconData.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base text-neutral-900 mb-3 group-hover:text-[#2dabe2] transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <CardCornerCtaInline label="View Details" size="sm" className="mt-auto" />
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}