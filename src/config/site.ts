export const siteConfig = {
  name: "SalahSteps",
  title: "SalahSteps — Teach Your Child How to Pray Salah & Perform Wudu",
  description:
    "SalahSteps is a peaceful, mobile-first educational tool helping parents teach children how to pray Salah and perform Wudu with simple step-by-step visual guides, Arabic text, transliteration, and clear meanings.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://salahsteps.com",
  ogImage: "https://salahsteps.com/og.png",
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Learn Salah", href: "/salah-for-kids" },
    { title: "Learn Wudu", href: "/wudu-for-kids" },
    { title: "What to Say", href: "/what-to-say-in-salah" },
    { title: "For Parents", href: "/how-to-teach-kids-salah" },
    { title: "Resources", href: "/salah-chart-for-kids" },
  ],
  footerNav: {
    salahGuides: [
      { title: "Complete Salah Guide", href: "/salah-for-kids" },
      { title: "2 Rakat Salah", href: "/2-rakat-salah" },
      { title: "3 Rakat Salah", href: "/3-rakat-salah" },
      { title: "4 Rakat Salah", href: "/4-rakat-salah" },
      { title: "What to Say in Salah", href: "/what-to-say-in-salah" },
      { title: "Salah Duas for Kids", href: "/salah-duas-for-kids" },
    ],
    wuduAndPrintables: [
      { title: "Step-by-Step Wudu Guide", href: "/wudu-for-kids" },
      { title: "Printable Salah Chart", href: "/salah-chart-for-kids" },
      { title: "Printable Wudu Chart", href: "/wudu-chart-for-kids" },
    ],
    parents: [
      { title: "How to Teach Kids Salah", href: "/how-to-teach-kids-salah" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
