import { useState } from "react";
import { Link } from "react-router";
import { PageHeader } from "@/app/components/page-header";
import { Breadcrumbs } from "@/app/components/breadcrumbs";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import { Search, FileText, Package, Building2, Leaf } from "lucide-react";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  url: string;
  icon: "product" | "industry" | "document" | "sustainability";
}

export function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  // Mock search results data
  const allResults: SearchResult[] = [
    {
      id: "1",
      title: "Methanol - High Purity Grade",
      description: "Industrial-grade methanol suitable for chemical synthesis, fuel applications, and solvent use. Available in bulk quantities with ISO certification.",
      category: "Products",
      url: "/products/methanol",
      icon: "product",
    },
    {
      id: "2",
      title: "Formaldehyde Solutions (37%, 44%)",
      description: "Stabilized formaldehyde solutions for resin manufacturing, disinfection, and industrial applications. Multiple concentration grades available.",
      category: "Products",
      url: "/products/formaldehyde-37",
      icon: "product",
    },
    {
      id: "3",
      title: "Automotive Industry Applications",
      description: "Chemical solutions for automotive manufacturing including resins, coatings, and fuel additives. Supporting tier-1 and tier-2 suppliers worldwide.",
      category: "Industries",
      url: "/industries/automotive",
      icon: "industry",
    },
    {
      id: "4",
      title: "Safety Data Sheets (SDS) Library",
      description: "Complete safety data sheets for all Chemanol products, compliant with GHS standards. Available in multiple languages.",
      category: "Technical Resources",
      url: "/technical-resources#sds",
      icon: "document",
    },
    {
      id: "5",
      title: "Sustainability Overview",
      description: "Our commitment to environmental stewardship, responsible operations, and sustainable business practices across all facilities.",
      category: "Sustainability",
      url: "/sustainability#overview",
      icon: "sustainability",
    },
    {
      id: "6",
      title: "Hexamine (Hexamethylenetetramine)",
      description: "High-purity hexamine for pharmaceutical, rubber, and explosive industries. Compliant with USP and EP standards.",
      category: "Products",
      url: "/products/hexamine",
      icon: "product",
    },
    {
      id: "7",
      title: "Construction & Building Materials",
      description: "Specialized chemicals for construction applications including adhesives, resins, and concrete additives.",
      category: "Industries",
      url: "/industries/construction",
      icon: "industry",
    },
    {
      id: "8",
      title: "Technical Data Sheets (TDS)",
      description: "Detailed product specifications, physical properties, and application guidelines for all Chemanol products.",
      category: "Technical Resources",
      url: "/technical-resources#tds",
      icon: "document",
    },
    {
      id: "9",
      title: "EHSS - Environment, Health, Safety & Security",
      description: "Comprehensive EHSS programs ensuring workplace safety, environmental protection, and regulatory compliance.",
      category: "Sustainability",
      url: "/sustainability#ehss",
      icon: "sustainability",
    },
    {
      id: "10",
      title: "Pharmaceuticals Industry Solutions",
      description: "GMP-compliant chemical intermediates and solvents for pharmaceutical manufacturing. Full traceability and quality documentation.",
      category: "Industries",
      url: "/industries/pharmaceuticals",
      icon: "industry",
    },
  ];

  const filteredResults = searchQuery.trim()
    ? allResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  const getIcon = (iconType: SearchResult["icon"]) => {
    switch (iconType) {
      case "product":
        return <Package className="w-5 h-5 text-blue-600" strokeWidth={1.5} />;
      case "industry":
        return <Building2 className="w-5 h-5 text-purple-600" strokeWidth={1.5} />;
      case "document":
        return <FileText className="w-5 h-5 text-orange-600" strokeWidth={1.5} />;
      case "sustainability":
        return <Leaf className="w-5 h-5 text-green-600" strokeWidth={1.5} />;
    }
  };

  return (
    <div className="bg-neutral-50 min-h-screen">
      <PageHeader
        title="Search"
        description="Search our products, industries, technical resources, and company information."
      />

      <div className="max-w-[1440px] mx-auto px-12 py-12">
        <Breadcrumbs items={[{ label: "Search" }]} />

        <div className="max-w-3xl mx-auto">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" strokeWidth={1.5} />
                <Input
                  type="text"
                  placeholder="Search products, industries, documents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button type="submit" className="px-8">
                Search
              </Button>
            </div>
          </form>

          {/* Search Results */}
          {hasSearched && (
            <div>
              {filteredResults.length > 0 ? (
                <div className="space-y-4">
                  <div className="text-sm text-neutral-600 mb-6">
                    Found {filteredResults.length} {filteredResults.length === 1 ? "result" : "results"} for "{searchQuery}"
                  </div>
                  {filteredResults.map((result) => (
                    <Link
                      key={result.id}
                      to={result.url}
                      className="block bg-white border border-neutral-200 rounded-sm p-6 hover:border-[#0658a5] transition-colors group"
                    >
                      <div className="flex gap-4">
                        <div className="w-10 h-10 bg-neutral-50 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-blue-50 transition-colors">
                          {getIcon(result.icon)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded-sm">
                              {result.category}
                            </span>
                          </div>
                          <h3 className="text-base text-neutral-900 mb-2 group-hover:text-[#0658a5] transition-colors">
                            {result.title}
                          </h3>
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {result.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="bg-white border border-neutral-200 rounded-sm p-12 text-center">
                  <Search className="w-12 h-12 text-neutral-300 mx-auto mb-4" strokeWidth={1.5} />
                  <h3 className="text-lg text-neutral-900 mb-2">No results found</h3>
                  <p className="text-sm text-neutral-600 mb-6">
                    We couldn't find any results for "{searchQuery}". Try different keywords or browse our main sections.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Link to="/products">
                      <Button variant="outline" size="sm">Browse Products</Button>
                    </Link>
                    <Link to="/industries">
                      <Button variant="outline" size="sm">Browse Industries</Button>
                    </Link>
                    <Link to="/technical-resources">
                      <Button variant="outline" size="sm">Technical Resources</Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* No search yet */}
          {!hasSearched && (
            <div className="bg-white border border-neutral-200 rounded-sm p-12 text-center">
              <Search className="w-12 h-12 text-neutral-300 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-lg text-neutral-900 mb-2">Enter a search query</h3>
              <p className="text-sm text-neutral-600 mb-6">
                Search for products, industries, technical documents, or company information.
              </p>
              <div className="text-sm text-neutral-500">
                <p className="mb-2">Popular searches:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => {
                      setSearchQuery("methanol");
                      setHasSearched(true);
                    }}
                    className="px-3 py-1 bg-neutral-100 text-[#0658a5] rounded-sm hover:bg-blue-50 transition-colors"
                  >
                    Methanol
                  </button>
                  <button
                    onClick={() => {
                      setSearchQuery("formaldehyde");
                      setHasSearched(true);
                    }}
                    className="px-3 py-1 bg-neutral-100 text-[#0658a5] rounded-sm hover:bg-blue-50 transition-colors"
                  >
                    Formaldehyde
                  </button>
                  <button
                    onClick={() => {
                      setSearchQuery("automotive");
                      setHasSearched(true);
                    }}
                    className="px-3 py-1 bg-neutral-100 text-[#0658a5] rounded-sm hover:bg-blue-50 transition-colors"
                  >
                    Automotive
                  </button>
                  <button
                    onClick={() => {
                      setSearchQuery("SDS");
                      setHasSearched(true);
                    }}
                    className="px-3 py-1 bg-neutral-100 text-[#0658a5] rounded-sm hover:bg-blue-50 transition-colors"
                  >
                    Safety Data Sheets
                  </button>
                  <button
                    onClick={() => {
                      setSearchQuery("sustainability");
                      setHasSearched(true);
                    }}
                    className="px-3 py-1 bg-neutral-100 text-[#0658a5] rounded-sm hover:bg-blue-50 transition-colors"
                  >
                    Sustainability
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
