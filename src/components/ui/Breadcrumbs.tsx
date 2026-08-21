import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-xs md:text-sm text-slate-500 overflow-x-auto py-1">
        <li>
          <Link
            href="/"
            className="hover:text-emerald-700 transition-colors flex items-center gap-1"
          >
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 whitespace-nowrap">
            <span className="text-slate-400">/</span>
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="hover:text-emerald-700 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-slate-800" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
