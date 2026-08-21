import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-emerald-900/10 shadow-2xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo / Brand Wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white font-bold text-xl shadow-xs group-hover:scale-105 group-hover:shadow-md transition-all duration-200">
            <span>🕌</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
              Salah<span className="text-emerald-600">Steps</span>
            </span>
            <span className="text-[10px] font-medium text-emerald-800/70 tracking-wider uppercase -mt-1 hidden sm:block">
              Kids & Parent Prayer Guide
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-700 hover:text-emerald-700 px-3.5 py-2 rounded-xl hover:bg-emerald-50/80 transition-all duration-150"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Desktop Header CTA & Mobile Nav Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <Button href="/salah-for-kids" size="sm" variant="primary">
              Start Learning ✨
            </Button>
          </div>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
