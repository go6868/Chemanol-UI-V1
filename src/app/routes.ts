import { createBrowserRouter } from "react-router";
import { Root } from "@/app/components/root";
import { Home } from "@/app/pages/home";
import { Sustainability } from "@/app/pages/sustainability";
import { AboutChemanol } from "@/app/pages/about-chemanol";
import { Innovation } from "@/app/pages/innovation";
import { TechnicalResources } from "@/app/pages/technical-resources";
import { ProductPortfolio } from "@/app/pages/product-portfolio";
import { ProductDetail } from "@/app/pages/product-detail";
import { ContactSupport } from "@/app/pages/contact-support";
import { IndustriesApplications } from "@/app/pages/industries-applications";
import { SectorDetail } from "@/app/pages/sector-detail";
import { SearchPage } from "@/app/pages/search";
import { PrivacyTerms } from "@/app/pages/privacy-terms";
import { CaseStudyFuelBlending } from "@/app/pages/case-study-fuel-blending";
import { CaseStudyResinPerformance } from "@/app/pages/case-study-resin-performance";
import { CaseStudyCustomChemical } from "@/app/pages/case-study-custom-chemical";
import { ArticleMethanolFuel } from "@/app/pages/article-methanol-fuel";
import { ArticleFormaldehydeResins } from "@/app/pages/article-formaldehyde-resins";
import { ArticleMtbeProperties } from "@/app/pages/article-mtbe-properties";
import { MediaCenter } from "@/app/pages/media-center";
import { Careers } from "@/app/pages/careers";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/products", Component: ProductPortfolio },
      { path: "/products/:productId", Component: ProductDetail },
      { path: "/industries", Component: IndustriesApplications },
      { path: "/industries/:sectorId", Component: SectorDetail },
      { path: "/technical-resources", Component: TechnicalResources },
      { path: "/sustainability", Component: Sustainability },
      { path: "/innovation", Component: Innovation },
      { path: "/about", Component: AboutChemanol },
      { path: "/contact", Component: ContactSupport },
      { path: "/search", Component: SearchPage },
      { path: "/privacy-terms", Component: PrivacyTerms },
      { path: "/media-center", Component: MediaCenter },
      { path: "/careers", Component: Careers },
      { path: "/case-studies/fuel-blending-optimization", Component: CaseStudyFuelBlending },
      { path: "/case-studies/resin-performance-improvement", Component: CaseStudyResinPerformance },
      { path: "/case-studies/custom-chemical-solutions", Component: CaseStudyCustomChemical },
      { path: "/technical-resources/articles/methanol-fuel-systems", Component: ArticleMethanolFuel },
      { path: "/technical-resources/articles/formaldehyde-resins", Component: ArticleFormaldehydeResins },
      { path: "/technical-resources/articles/mtbe-properties", Component: ArticleMtbeProperties },
    ],
  },
]);