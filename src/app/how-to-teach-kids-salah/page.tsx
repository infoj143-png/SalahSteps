import { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "How to Teach Kids Salah — Parent Educational Guide & Routine",
  description:
    "Practical, loving, and effective strategies for parents to help children learn, understand, and build a lifelong habit of daily prayer.",
  path: "/how-to-teach-kids-salah",
});

export default function HowToTeachKidsSalahPage() {
  const learningCycleSteps = [
    {
      stage: "1. Learn",
      title: "Interactive Understanding",
      description:
        "Begin with short, visual step-by-step guides explaining movements and what to say in Salah and Wudu.",
      icon: "📖",
      actionLink: "/salah-for-kids",
      actionText: "Explore Salah Guide",
    },
    {
      stage: "2. Practice",
      title: "Hands-on Experience",
      description:
        "Practice together at home with gentle guidance, focusing on position flow and basic posture before perfect recitation.",
      icon: "🤲",
      actionLink: "/2-rakat-salah",
      actionText: "Try 2-Rakat Practice",
    },
    {
      stage: "3. Review",
      title: "Daily Habit Tracker",
      description:
        "Use printable charts and weekly checklists so children can visually track their daily Fajr to Isha prayers.",
      icon: "📋",
      actionLink: "/salah-chart-for-kids",
      actionText: "View Prayer Chart",
    },
    {
      stage: "4. Encourage",
      title: "Positive Reinforcement",
      description:
        "Celebrate effort and milestones with sincere praise, star stickers, and family prayer moments.",
      icon: "⭐",
      actionLink: "/resources",
      actionText: "See Parent Resources",
    },
  ];

  const parentTips = [
    {
      title: "1. Lead by Calm Example",
      description:
        "Children absorb what they observe. When parents prepare for prayer with calmness and priority, prayer naturally feels like a peaceful, regular part of daily family life.",
      badge: "Foundation",
    },
    {
      title: "2. Prioritize Consistency Over Perfection",
      description:
        "Focus on building the routine first. In the early stages, celebrate small steps like standing together or remembering Sujood before worrying about flawless recitation.",
      badge: "Mindset",
    },
    {
      title: "3. Make Wudu & Prayer Environment Inviting",
      description:
        "Keep a child-sized prayer mat, clean towel, and visual posters near the bathroom sink and prayer space so children feel ownership.",
      badge: "Environment",
    },
    {
      title: "4. Explain the 'Why' with Love",
      description:
        "Help children connect prayer with gratitude to Allah. Frame Salah as a quiet moment to talk with Allah and express gratitude for blessings.",
      badge: "Spiritual",
    },
    {
      title: "5. Maintain a Predictable Daily Routine",
      description:
        "Pair prayer times with established daily routines, such as praying Fajr before breakfast or Maghrib together after school/homework.",
      badge: "Routine",
    },
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <Section className="py-10 bg-gradient-to-b from-amber-50/80 via-amber-50/40 to-white border-b border-amber-900/10">
        <Breadcrumbs items={[{ label: "How to Teach Kids Salah" }]} />
        <div className="max-w-3xl mt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-200/60">
            Parent Handbook & Strategy
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            How to Teach Kids Salah — A Guide for Parents
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Teaching your child to pray is one of the most rewarding journeys as a parent. Discover practical, loving strategies to build consistency, understanding, and joy step by step.
          </p>
        </div>
      </Section>

      {/* 4-Step Parent Framework: Learn -> Practice -> Review -> Encourage */}
      <Section background="default">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full">
              The SalahSteps Learning Cycle
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">
              How the SalahSteps Experience Works Together
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A balanced approach combining digital step-by-step guides with physical family practice and visual trackers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningCycleSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-2xl mb-4">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    {step.stage}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>
                <Link
                  href={step.actionLink}
                  className="inline-flex items-center justify-center w-full px-3 py-2 text-xs font-bold rounded-xl bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-emerald-800 border border-slate-200 hover:border-emerald-200 transition-colors"
                >
                  {step.actionText} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Core Strategy Tips Section */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              5 Core Guidance Principles for Parents
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Nurture a positive, encouraging environment at home with these practical tips.
            </p>
          </div>

          <div className="space-y-6">
            {parentTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/90 shadow-2xs flex flex-col sm:flex-row items-start gap-4 md:gap-6"
              >
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 font-bold text-lg flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900">
                      {tip.title}
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full">
                      {tip.badge}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                    {tip.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Age-Specific Guidance */}
      <Section background="default">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Age-Based Learning Expectations
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Adapt your teaching approach based on your child&apos;s natural developmental stages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Ages 4 to 6 */}
            <div className="bg-emerald-50/50 rounded-3xl border border-emerald-200/60 p-6 md:p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Younger Children (Ages 4–6)
              </span>
              <h3 className="text-xl font-bold text-slate-900">Focus on Habit & Imitation</h3>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Encourage standing next to parents during prayer.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Focus on simple Wudu steps and essential postures (Ruku, Sujood).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Keep expectations light and stress-free.</span>
                </li>
              </ul>
            </div>

            {/* Ages 7+ */}
            <div className="bg-sky-50/50 rounded-3xl border border-sky-200/60 p-6 md:p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-3 py-1 rounded-full">
                Independent Learners (Ages 7+)
              </span>
              <h3 className="text-xl font-bold text-slate-900">Focus on Accuracy & Recitation</h3>
              <ul className="space-y-2.5 text-xs md:text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">✓</span>
                  <span>Learn full Surah Al-Fatiha, Tashahhud, and position duas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">✓</span>
                  <span>Master differences between 2, 3, and 4 Rakat prayers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-sky-600 font-bold">✓</span>
                  <span>Use weekly printable trackers to build independent daily habits.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Printable Resources Callout */}
      <Section className="bg-amber-900 text-white rounded-3xl my-8 p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950 px-3 py-1 rounded-full border border-amber-700/60">
            Recommended Printables
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold mt-3 text-white">
            Download or Print Learning Charts
          </h2>
          <p className="mt-3 text-sm md:text-base text-amber-100/90 leading-relaxed">
            Get our free weekly Salah tracker chart and bathroom Wudu poster to place around your home for easy visual guidance.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/salah-chart-for-kids"
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all"
            >
              Weekly Salah Chart 📋
            </Link>
            <Link
              href="/wudu-chart-for-kids"
              className="px-5 py-3 rounded-xl bg-amber-950 hover:bg-amber-800 text-amber-100 border border-amber-700/80 font-bold text-sm transition-all"
            >
              Bathroom Wudu Guide 💧
            </Link>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
