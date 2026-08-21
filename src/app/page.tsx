import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { LearningCard } from "@/components/learning/LearningCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-US",
  };

  return (
    <PageContainer>
      <JsonLd data={websiteSchema} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/80 via-[#fdfbf7] to-[#fdfbf7] py-16 md:py-24 border-b border-teal-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100/80 text-emerald-800 text-xs md:text-sm font-semibold mb-6">
            <span>✨</span> Child-Friendly & Parent-Approved Learning
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Teach Your Child Salah — <span className="text-emerald-700">Step by Step</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A peaceful, mobile-first educational tool helping parents teach children how to pray Salah and perform Wudu with visual guides, Arabic text, transliteration, and clear meanings.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/salah-for-kids" size="lg" variant="primary" className="w-full sm:w-auto">
              Learn Salah 🕌
            </Button>
            <Button href="/wudu-for-kids" size="lg" variant="secondary" className="w-full sm:w-auto">
              Learn Wudu 💧
            </Button>
          </div>

          {/* Quick Feature Badges */}
          <div className="mt-12 pt-8 border-t border-slate-200/60 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-xs md:text-sm text-slate-600 font-medium">
            <div className="flex items-center justify-center gap-2">
              <span className="text-emerald-600">✓</span> Simple Step Cards
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-emerald-600">✓</span> Clear Arabic & Roman Text
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-emerald-600">✓</span> Mobile-First Design
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-emerald-600">✓</span> Free Printable Resources
            </div>
          </div>
        </div>
      </section>

      {/* Featured Learning Modules Section */}
      <Section background="default">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Interactive Salah Learning Modules
          </h2>
          <p className="mt-2 text-sm md:text-base text-slate-600">
            Choose a learning section to begin step-by-step lessons with your child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <LearningCard
            title="Salah for Kids"
            description="Complete visual guide covering positions, actions, and recitations for prayer."
            href="/salah-for-kids"
            icon="🕌"
            tag="Core Guide"
          />

          <LearningCard
            title="Wudu for Kids"
            description="Child-friendly step-by-step guide to washing and preparing for prayer."
            href="/wudu-for-kids"
            icon="💧"
            tag="Essential"
          />

          <LearningCard
            title="What to Say in Salah"
            description="Arabic recitations with Roman Urdu/transliteration and simple English meanings."
            href="/what-to-say-in-salah"
            icon="📖"
            tag="Recitations"
          />

          <LearningCard
            title="2 Rakat Salah Guide"
            description="Clear step-by-step flow for 2 Rakat prayers like Fajr and Sunnah prayers."
            href="/2-rakat-salah"
            icon="1️⃣"
          />

          <LearningCard
            title="3 Rakat Salah Guide"
            description="Step-by-step prayer breakdown for 3 Rakat prayers like Maghrib."
            href="/3-rakat-salah"
            icon="2️⃣"
          />

          <LearningCard
            title="4 Rakat Salah Guide"
            description="Step-by-step prayer guide for 4 Rakat prayers like Dhuhr, Asr, and Isha."
            href="/4-rakat-salah"
            icon="3️⃣"
          />
        </div>
      </Section>

      {/* Parent & Printable Resources Section */}
      <Section background="muted">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
              Parent Guidance
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              How to Teach Kids Salah
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Discover practical and loving tips for parents to encourage positive prayer habits, gently teach movements, and foster a lifelong connection to Salah.
            </p>
            <div>
              <Button href="/how-to-teach-kids-salah" variant="outline">
                Read Parent Guide
              </Button>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-semibold">
              Printable Charts
            </span>
            <h3 className="text-xl font-bold text-slate-900">
              Printable Trackers & Wall Posters
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Download simple daily prayer charts and Wudu bathroom posters designed for children to track progress at home.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="/salah-chart-for-kids" size="sm" variant="secondary">
                Salah Chart
              </Button>
              <Button href="/wudu-chart-for-kids" size="sm" variant="ghost">
                Wudu Chart
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Fiqh & Reliability Statement */}
      <Section background="card">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="text-lg font-bold text-slate-800">
            Educational Principles & Religious Content Safety
          </h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            Kids Salah Learning is committed to accurate, trustworthy Islamic educational resources. All recitations and steps are structured for review and verified against reliable classical sources. Where minor madhhab/fiqh variations exist, guides are kept clear and universally accessible for young learners.
          </p>
        </div>
      </Section>
    </PageContainer>
  );
}
