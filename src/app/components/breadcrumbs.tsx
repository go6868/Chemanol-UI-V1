import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center text-sm text-neutral-600 mb-8">
      <Link to="/" className="text-[#0658a5] hover:text-[#2dabe2] cursor-pointer">
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2" strokeWidth={1.5} />
          {item.href ? (
            <Link to={item.href} className="text-[#0658a5] hover:text-[#2dabe2] cursor-pointer">
              {item.label}
            </Link>
          ) : (
            <span className="text-neutral-900">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}