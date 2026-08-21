import { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InteractiveLessonViewer } from "@/components/learning/InteractiveLessonViewer";
import { wuduLesson } from "@/data/wuduLesson";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Wudu for Kids — Step-by-Step Ablution Guide",
  description:
    "Learn how to perform Wudu (ablution) for kids with simple visual steps, clean explanations, Arabic recitations, transliteration, and practical advice for parents.",
  path: "/wudu-for-kids",
});

export default function WuduForKidsPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-sky-50/50">
        <Breadcrumbs items={[{ label: "Wudu for Kids" }]} />
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sky-800 bg-sky-100 px-3 py-1 rounded-full">
            Essential Preparation for Prayer
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Wudu for Kids — Step-by-Step Guide
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Wudu (ablution) is how we cleanse ourselves before standing in prayer. Follow this simple 9-step lesson to master Wudu with joy and confidence.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Quick Checklist Banner */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-sky-100 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <span>💧</span> Wudu Sequence Checklist
                </h2>
                <p className="text-xs text-slate-600 mt-1">
                  Remember: Wash right side first, don&apos;t waste water, and focus on cleanliness.
                </p>
              </div>
              <Link
                href="/wudu-chart-for-kids"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-50 text-sky-900 border border-sky-200 text-xs font-bold hover:bg-sky-100 transition-colors shrink-0"
              >
                <span>📄</span> Printable Bathroom Poster →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 text-xs font-semibold text-slate-700 text-center">
              <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">1. Hands (3x)</div>
              <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">2. Mouth (3x)</div>
              <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">3. Nose (3x)</div>
              <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">4. Face (3x)</div>
              <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">5. Arms (3x)</div>
              <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">6. Head (1x)</div>
              <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">7. Ears (1x)</div>
              <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100">8. Feet (3x)</div>
              <div className="p-2.5 rounded-xl bg-sky-50/60 border border-sky-100 col-span-2 sm:col-span-1">9. Dua</div>
            </div>
          </div>

          {/* Interactive Wudu Lesson */}
          <InteractiveLessonViewer lesson={wuduLesson} />
        </div>
      </Section>
    </PageContainer>
  );
}
