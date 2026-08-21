import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InteractiveLessonViewer } from "@/components/learning/InteractiveLessonViewer";
import { fourRakatSalahLesson } from "@/data/salahLessons";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "4 Rakat Salah Guide for Kids — Dhuhr, Asr & Isha Lesson",
  description:
    "Learn how to pray 4 Rakat Salah (Dhuhr, Asr, Isha) with an interactive step-by-step visual lesson for children, including clear Arabic text, transliteration, and meanings.",
  path: "/4-rakat-salah",
});

export default function FourRakatSalahPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-teal-50/50">
        <Breadcrumbs items={[{ label: "Salah Guides", href: "/salah-for-kids" }, { label: "4 Rakat Salah" }]} />
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Dhuhr, Asr & Isha Prayers
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            4 Rakat Salah Step-by-Step Guide
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Follow this interactive lesson to master the 4 Rakat daily prayers with clear stage breakdowns across Rakat 1, Rakat 2, First Sitting, Rakat 3, Rakat 4, and Final Sitting.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Structure Overview */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/90 shadow-2xs">
            <h2 className="text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-2">
              <span>📌</span> 4 Rakat Prayer Stage Breakdown
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm text-slate-700">
              <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <span className="font-bold text-emerald-900">Rakat 1:</span>
                <p className="mt-1 text-xs text-slate-600">Thana + Al-Fatihah + Extra Surah + Ruku + 2 Sajdahs.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100">
                <span className="font-bold text-amber-900">Rakat 2:</span>
                <p className="mt-1 text-xs text-slate-600">Al-Fatihah + Extra Surah + Ruku + 2 Sajdahs + <strong>First Sitting</strong>.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-sky-50/60 border border-sky-100">
                <span className="font-bold text-sky-900">Rakat 3:</span>
                <p className="mt-1 text-xs text-slate-600">Al-Fatihah only + Ruku + 2 Sajdahs + Rise to Rakat 4.</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-teal-50/60 border border-teal-100">
                <span className="font-bold text-teal-900">Rakat 4:</span>
                <p className="mt-1 text-xs text-slate-600">Al-Fatihah only + Ruku + 2 Sajdahs + <strong>Final Sitting & Salam</strong>.</p>
              </div>
            </div>
          </div>

          {/* Interactive Lesson Viewer */}
          <InteractiveLessonViewer lesson={fourRakatSalahLesson} />
        </div>
      </Section>
    </PageContainer>
  );
}
