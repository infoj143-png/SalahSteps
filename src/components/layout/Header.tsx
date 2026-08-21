import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-xl shadow-sm group-hover:bg-emerald-800 transition-colors">
            🕌
          </div>
          <span className="font-bold text-lg text-slate-800 group-hover:text-emerald-700 transition-colors">
            Kids<span className="text-emerald-700">Salah</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-emerald-700 px-3 py-2 rounded-md hover:bg-emerald-50/60 transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
}
