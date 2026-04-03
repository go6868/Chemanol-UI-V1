import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { ScrollProgress } from "@/app/components/scroll-progress";
import { ScrollToTop } from "@/app/components/scroll-to-top";
import { LanguageProvider } from "@/app/contexts/language-context";
import { Outlet } from "react-router";
import { useEffect } from "react";

export function Root() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <LanguageProvider>
      <ScrollProgress />
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}