import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & About */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🕌</span>
              <span className="font-bold text-lg text-white">
                Kids<span className="text-emerald-400">Salah</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              A peaceful, child-friendly educational resource helping parents
              and children learn Salah (Namaz) and Wudu step-by-step.
            </p>
          </div>

          {/* Navigation Group 1 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-3">
              Salah Guides
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.footerNav.salahGuides.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Group 2 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-3">
              Wudu & Charts
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.footerNav.wuduAndPrintables.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Group 3 */}
          <div>
            <h3 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-3">
              Parent Resources
            </h3>
            <ul className="space-y-2 text-sm">
              {siteConfig.footerNav.parents.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p>
            This website is an educational tool designed to assist families in learning Salah. Content is prepared using standard educational sources.
          </p>
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
