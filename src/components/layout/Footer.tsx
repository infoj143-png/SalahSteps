import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand & About */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white text-lg shadow-xs">
                <span>🕌</span>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                Salah<span className="text-emerald-400">Steps</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              SalahSteps is a peaceful, warm, and trustworthy educational guide helping children learn Salah (prayer) and Wudu step by step. Designed for kids, parents, and teachers.
            </p>
          </div>

          {/* Navigation Group 1 */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 tracking-wider uppercase mb-4">
              Salah Guides
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerNav.salahGuides.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Group 2 */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 tracking-wider uppercase mb-4">
              Wudu & Charts
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerNav.wuduAndPrintables.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Group 3 */}
          <div>
            <h3 className="text-xs font-bold text-slate-200 tracking-wider uppercase mb-4">
              Parent Resources
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.footerNav.parents.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Educational Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="max-w-3xl leading-relaxed">
            SalahSteps is an educational resource created to assist parents and educators in teaching Islamic prayer routines. Content is curated using classical educational sources and designed for child comprehension.
          </p>
          <p className="shrink-0 font-medium text-slate-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
