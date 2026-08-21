import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InteractiveLessonViewer } from "@/components/learning/InteractiveLessonViewer";
import { threeRakatSalahLesson } from "@/data/salahLessons";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "3 Rakat Salah Guide for Kids — Maghrib & Witr Prayer Lesson",
  description:
    "Learn how to pray 3 Rakat Salah (like Maghrib) with an interactive step-by-step visual lesson for kids, including Arabic text, transliteration, and meanings.",
  path: "/3-rakat-salah",
});

export default function ThreeRakatSalahPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-teal-50/50">
        <Breadcrumbs items={[{ label: "Salah Guides", href: "/salah-for-kids" }, { label: "3 Rakat Salah" }]} />
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Maghrib & Witr Prayers
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            3 Rakat Salah Step-by-Step Guide
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Follow this step-by-step lesson to understand how to pray 3 Rakat Salah, including where to do the first sitting (Tashahhud) and the final sitting.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Structure Overview */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/90 shadow-2xs">
            <h2 className="text-xl font-extrabold text-slate-900 mb-3 flex items-center gap-2">
              <span>📌</span> 3 Rakat Prayer Structure
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-slate-700">
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                <span className="font-bold text-emerald-900">1st Rakat:</span>
                <p className="mt-1 text-xs text-slate-600">Thana + Al-Fatihah + Extra Surah + Ruku + 2 Sajdahs.</p>
              </div>
              <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                <span className="font-bold text-amber-900">2nd Rakat:</span>
                <p className="mt-1 text-xs text-slate-600">Al-Fatihah + Extra Surah + Ruku + 2 Sajdahs + <strong>First Tashahhud</strong> (Sit & Stand up).</p>
              </div>
              <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100">
                <span className="font-bold text-teal-900">3rd Rakat:</span>
                <p className="mt-1 text-xs text-slate-600">Al-Fatihah + Ruku + 2 Sajdahs + <strong>Final Tashahhud & Durood</strong> + Salam.</p>
              </div>
            </div>
          </div>

          {/* Interactive Lesson Viewer */}
          <InteractiveLessonViewer lesson={threeRakatSalahLesson} />
        </div>
      </Section>
    </PageContainer>
  );
}
