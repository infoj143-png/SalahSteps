export const siteConfig = {
  name: "Kids Salah Learning",
  title: "Kids Salah Learning — Teach Your Child How to Pray Salah & Wudu",
  description:
    "A child-friendly, mobile-first educational guide helping parents teach their children Salah (Namaz) and Wudu with simple step-by-step illustrations, Arabic text, transliteration, and English explanations.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://kidssalah.com",
  ogImage: "https://kidssalah.com/og.png",
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Salah for Kids", href: "/salah-for-kids" },
    { title: "Wudu Guide", href: "/wudu-for-kids" },
    { title: "What to Say", href: "/what-to-say-in-salah" },
    { title: "Parent Resources", href: "/how-to-teach-kids-salah" },
    { title: "Printables", href: "/salah-chart-for-kids" },
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
