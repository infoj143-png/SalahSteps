import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InteractiveLessonViewer } from "@/components/learning/InteractiveLessonViewer";
import { twoRakatSalahLesson } from "@/data/salahLessons";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "2 Rakat Salah Guide for Kids — Step-by-Step Prayer Lesson",
  description:
    "A simple, visual step-by-step interactive lesson for learning 2 Rakat prayer (Fajr, Sunnah, Nafl) with Arabic text, transliteration, meanings, and parent guidance.",
  path: "/2-rakat-salah",
});

export default function TwoRakatSalahPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-teal-50/50">
        <Breadcrumbs items={[{ label: "Salah Guides", href: "/salah-for-kids" }, { label: "2 Rakat Salah" }]} />
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Fajr, Sunnah & Nafl Prayers
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            2 Rakat Salah Step-by-Step Guide
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Follow this interactive visual lesson to learn every posture, movement, and recitation of a 2 Rakat prayer from Takbir to Salam.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Overview Card */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/90 shadow-2xs">
            <h2 className="text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-2">
              <span>📌</span> Quick Structure Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <span className="font-bold text-emerald-900">Rakat 1 Sequence:</span>
                <p className="mt-1 text-slate-600">
                  Niyyah → Takbir → Thana → Surah Al-Fatihah + Extra Surah → Ruku → Standing → 2 Sajdahs.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                <span className="font-bold text-amber-900">Rakat 2 Sequence:</span>
                <p className="mt-1 text-slate-600">
                  Surah Al-Fatihah + Extra Surah → Ruku → Standing → 2 Sajdahs → Tashahhud + Durood → Salam.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Lesson Viewer */}
          <InteractiveLessonViewer lesson={twoRakatSalahLesson} />
        </div>
      </Section>
    </PageContainer>
  );
}
