import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { LearningCard } from "@/components/learning/LearningCard";
import { PrintableResourceCard } from "@/components/learning/PrintableResourceCard";
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

      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/90 via-[#fdfbf7] to-[#fdfbf7] pt-12 pb-16 md:pt-20 md:pb-24 border-b border-emerald-900/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Text */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-200/80 text-emerald-900 text-xs md:text-sm font-bold shadow-2xs">
                <span>✨</span> Child-Friendly & Parent-Approved Learning
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                SalahSteps helps children learn <span className="text-emerald-700 underline decoration-emerald-300 decoration-wavy decoration-2">Salah and Wudu</span> step by step.
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                A warm, peaceful, mobile-first guide helping parents and children learn daily prayer and ablution with simple visual steps, clear Arabic text, transliteration, and meanings.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button href="/salah-for-kids" size="lg" variant="primary" className="w-full sm:w-auto">
                  Learn Salah 🕌
                </Button>
                <Button href="/wudu-for-kids" size="lg" variant="secondary" className="w-full sm:w-auto">
                  Learn Wudu 💧
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm text-slate-700 font-semibold border-t border-slate-200/70 max-w-xl mx-auto lg:mx-0">
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <span className="text-emerald-600 font-bold">✓</span> Step-by-Step
                </div>
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <span className="text-emerald-600 font-bold">✓</span> Clear Arabic & Roman
                </div>
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <span className="text-emerald-600 font-bold">✓</span> Parent Tips
                </div>
                <div className="flex items-center gap-1.5 justify-center lg:justify-start">
                  <span className="text-emerald-600 font-bold">✓</span> Printable Charts
                </div>
              </div>
            </div>

            {/* Hero Visual Placeholder System */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md bg-white rounded-3xl border-2 border-emerald-100 shadow-xl p-6 md:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">SalahSteps Journey</span>
                  </div>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                    Step-by-Step
                  </span>
                </div>

                {/* Illustrated Step Card Preview 1 */}
                <div className="bg-emerald-50/70 rounded-2xl p-4 border border-emerald-100/80 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center text-3xl shrink-0">
                    💧
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Step 1 — Wudu</span>
                    <h3 className="text-sm font-bold text-slate-900">Cleanse & Prepare</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Start with Bismillah and pure intention.</p>
                  </div>
                </div>

                {/* Illustrated Step Card Preview 2 */}
                <div className="bg-amber-50/70 rounded-2xl p-4 border border-amber-100/80 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center text-3xl shrink-0">
                    🕌
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">Step 2 — Stand for Prayer</span>
                    <h3 className="text-sm font-bold text-slate-900">Takbirat al-Ihram</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Face Qibla and say Allahu Akbar peacefully.</p>
                  </div>
                </div>

                {/* Illustrated Step Card Preview 3 */}
                <div className="bg-sky-50/70 rounded-2xl p-4 border border-sky-100/80 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xs flex items-center justify-center text-3xl shrink-0">
                    📖
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-sky-800 uppercase tracking-wider">Step 3 — Recitation</span>
                    <h3 className="text-sm font-bold text-slate-900">Surah Al-Fatihah</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Read Arabic, transliteration & meanings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Main Learning Cards */}
      <Section background="default">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
            Core Foundations
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Start Your Child&apos;s Learning Journey
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Choose between Salah or Wudu to start interactive, step-by-step visual lessons tailored for children.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Main Card 1: Learn Salah */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl p-8 text-white shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-3xl mb-6">
                🕌
              </div>
              <span className="text-xs font-extrabold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-300/30">
                Primary Guide
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 mb-3">
                Learn Salah Step by Step
              </h3>
              <p className="text-emerald-100 text-sm md:text-base leading-relaxed mb-8">
                Help children learn every posture, movement, and recitation in prayer — from Takbir to Tasleem.
              </p>
            </div>
            <Button href="/salah-for-kids" variant="outline" size="lg" className="w-full justify-center bg-white text-emerald-900 hover:bg-emerald-50 border-white">
              Start Learning Salah 🕌
            </Button>
          </div>

          {/* Main Card 2: Learn Wudu */}
          <div className="bg-gradient-to-br from-sky-600 to-blue-800 rounded-3xl p-8 text-white shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-6 -mr-6 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center text-3xl mb-6">
                💧
              </div>
              <span className="text-xs font-extrabold tracking-wider uppercase px-3 py-1 rounded-full bg-sky-400/20 text-sky-200 border border-sky-300/30">
                Essential Preparation
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mt-3 mb-3">
                Learn Wudu Step by Step
              </h3>
              <p className="text-sky-100 text-sm md:text-base leading-relaxed mb-8">
                Teach children how to perform ablution correctly with clear sequential guides and bathroom posters.
              </p>
            </div>
            <Button href="/wudu-for-kids" variant="outline" size="lg" className="w-full justify-center bg-white text-sky-900 hover:bg-sky-50 border-white">
              Learn Wudu 💧
            </Button>
          </div>
        </div>
      </Section>

      {/* 3. Salah Learning Journey Section */}
      <Section background="muted">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Interactive Learning Modules
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                The Salah Learning Journey
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">
                Master the prayer basics step by step, then explore specific prayer length guides.
              </p>
            </div>
            <div>
              <Button href="/salah-for-kids" variant="outline">
                View Complete Guide →
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LearningCard
              title="Full Salah Guide"
              description="Complete visual prayer guide covering posture, recitations, and step sequences."
              href="/salah-for-kids"
              icon="🕌"
              tag="Core Guide"
              ctaText="Start Learning Salah"
            />

            <LearningCard
              title="2 Rakat Salah Guide"
              description="Step-by-step breakdown for Fajr and Sunnah prayers."
              href="/2-rakat-salah"
              icon="1️⃣"
              ctaText="Learn 2 Rakat"
            />

            <LearningCard
              title="3 Rakat Salah Guide"
              description="Clear step sequence for Maghrib prayer."
              href="/3-rakat-salah"
              icon="2️⃣"
              ctaText="Learn 3 Rakat"
            />

            <LearningCard
              title="4 Rakat Salah Guide"
              description="Step-by-step prayer guide for Dhuhr, Asr, and Isha."
              href="/4-rakat-salah"
              icon="3️⃣"
              ctaText="Learn 4 Rakat"
            />

            <LearningCard
              title="What to Say in Salah"
              description="Arabic recitations with transliteration and English translations."
              href="/what-to-say-in-salah"
              icon="📖"
              tag="Recitations"
              ctaText="Practice Recitations"
            />

            <LearningCard
              title="Salah Duas for Kids"
              description="Important prayers recited before, during, and after Salah."
              href="/salah-duas-for-kids"
              icon="🤲"
              tag="Duas"
              ctaText="Learn Duas"
            />
          </div>
        </div>
      </Section>

      {/* 4. Wudu Learning Journey */}
      <Section background="default">
        <div className="bg-gradient-to-r from-sky-50 via-teal-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-sky-100">
          <div className="max-w-3xl space-y-4 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-3 py-1 rounded-full">
              Wudu Sequence
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
              Simple Step Sequence for Wudu
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Cleanliness (Taharah) is the key to Salah. Children can learn the sequence of Wudu easily with our visual checklist.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-2xs">
              <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">Step 1</span>
              <h3 className="font-bold text-slate-900 mt-2">Niyyah & Hands</h3>
              <p className="text-xs text-slate-600 mt-1">Make intention, say Bismillah, wash hands 3 times.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-2xs">
              <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">Step 2</span>
              <h3 className="font-bold text-slate-900 mt-2">Mouth & Nose</h3>
              <p className="text-xs text-slate-600 mt-1">Rinse mouth and sniff water into nose 3 times.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-2xs">
              <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">Step 3</span>
              <h3 className="font-bold text-slate-900 mt-2">Face & Arms</h3>
              <p className="text-xs text-slate-600 mt-1">Wash face and arms up to elbows 3 times.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-sky-100 shadow-2xs">
              <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">Step 4</span>
              <h3 className="font-bold text-slate-900 mt-2">Head & Feet</h3>
              <p className="text-xs text-slate-600 mt-1">Wipe wet hands over head, wash feet to ankles.</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <Button href="/wudu-for-kids" variant="secondary">
              Explore Full Wudu Guide 💧
            </Button>
            <Button href="/wudu-chart-for-kids" variant="ghost">
              Print Wudu Poster 📄
            </Button>
          </div>
        </div>
      </Section>

      {/* 5. Dedicated Parent Section */}
      <Section background="muted">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          <div className="lg:col-span-7 space-y-5">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
              For Parents & Educators
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Teach Salah with Confidence, Kindness, & Patience
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Teaching prayer to young children is one of the most rewarding milestones for a Muslim parent. SalahSteps offers practical guidance to encourage positive prayer habits without pressure.
            </p>
            <div className="space-y-3 pt-2 text-sm text-slate-700 font-medium">
              <div className="flex items-start gap-2.5">
                <span className="text-amber-600 text-base">🌱</span>
                <span>Focus on love and connection before perfection in posture.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-amber-600 text-base">⭐</span>
                <span>Establish a peaceful routine with printable prayer habit trackers.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-amber-600 text-base">❤️</span>
                <span>Lead by example and celebrate every gentle step of progress.</span>
              </div>
            </div>
            <div className="pt-4">
              <Button href="/how-to-teach-kids-salah" variant="primary">
                Read Parent Educational Guide →
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-2xl">
              👨‍👩‍👧‍👦
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Why Parents Trust SalahSteps
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Designed specifically for modern Muslim families. Mobile-friendly pages let children practice alongside parents on phones, tablets, or printed posters.
            </p>
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 text-xs text-amber-950 font-medium leading-relaxed">
              &quot;Prayer is a lifelong journey. Our goal is to make a child&apos;s first memories of Salah joyful and comforting.&quot;
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Printable Resources Section */}
      <Section background="default">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
                Home Printables
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Printable Charts & Trackers
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-2xl">
                Hang charts near prayer areas or bathroom sinks to encourage children at home.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PrintableResourceCard
              title="Weekly Salah Tracker Chart"
              description="A colourful weekly chart for kids to mark off daily prayers at home."
              format="Salah Tracker"
              href="/salah-chart-for-kids"
              status="available"
            />

            <PrintableResourceCard
              title="Step-by-Step Wudu Poster"
              description="Clear visual illustration sequence of Wudu steps for bathroom display."
              format="Wudu Poster"
              href="/wudu-chart-for-kids"
              status="available"
            />

            <PrintableResourceCard
              title="Downloadable PDF Bundle"
              description="High-resolution printable PDF pack containing all wall charts and habit cards."
              format="PDF Bundle"
              status="coming-soon"
            />
          </div>
        </div>
      </Section>

      {/* 7. Educational & Fiqh Statement */}
      <Section background="card">
        <div className="max-w-4xl mx-auto text-center space-y-3 p-6 rounded-3xl bg-emerald-50/40 border border-emerald-100">
          <h2 className="text-base font-bold text-slate-900">
            Educational Quality & Fiqh Content Safety
          </h2>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed max-w-3xl mx-auto">
            SalahSteps is dedicated to accurate, safe, and trustworthy Islamic educational material. Recitations and postures are verified against reliable classical sources. Where minor madhhab/fiqh variations exist, our guides focus on standard accepted principles so children learn prayer with clarity and peace of mind.
          </p>
        </div>
      </Section>
    </PageContainer>
  );
}
