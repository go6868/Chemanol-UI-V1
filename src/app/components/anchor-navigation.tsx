interface AnchorNavItem {
  id: string;
  label: string;
}

interface AnchorNavigationProps {
  items: AnchorNavItem[];
}

export function AnchorNavigation({ items }: AnchorNavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-24 bg-white border border-[#2dabe2]/10 rounded-sm p-5">
      <div className="text-xs uppercase tracking-widest text-neutral-400 mb-4">On this page</div>
      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => scrollToSection(item.id)}
              className="text-sm text-neutral-600 hover:text-[#0658a5] text-left w-full py-1.5 px-3 rounded-sm hover:bg-[#0658a5]/5 transition-all duration-200 cursor-pointer"
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
