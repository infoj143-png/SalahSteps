import { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { InteractiveLessonViewer } from "@/components/learning/InteractiveLessonViewer";
import { fullSalahOverviewLesson } from "@/data/salahOverviewLesson";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Salah for Kids — Complete Step-by-Step Prayer Guide",
  description:
    "A child-friendly, step-by-step visual guide teaching children how to pray Salah (Namaz) with simple actions, Arabic text, transliteration, and English meanings.",
  path: "/salah-for-kids",
});

export default function SalahForKidsPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-teal-50/50">
        <Breadcrumbs items={[{ label: "Salah for Kids" }]} />
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
            Interactive Prayer Hub
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Salah for Kids — Complete Guide
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Welcome to the SalahSteps interactive prayer guide. Learn the foundational movements and recitations of prayer, then choose your prayer length below.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-10">
          {/* Specific Rakat Prayer Guides Cards */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/90 shadow-2xs">
            <h2 className="text-xl font-extrabold text-slate-900 mb-2">
              Select Prayer Length Guide
            </h2>
            <p className="text-slate-600 text-sm mb-6">
              Choose the specific prayer length you want to learn step by step:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link
                href="/2-rakat-salah"
                className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200/80 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                  1️⃣
                </div>
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-emerald-700 transition-colors">
                  2 Rakat Salah →
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  For Fajr, Sunnah, and Nafl prayers.
                </p>
              </Link>

              <Link
                href="/3-rakat-salah"
                className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200/80 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                  2️⃣
                </div>
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-amber-800 transition-colors">
                  3 Rakat Salah →
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  For Maghrib and Witr prayers.
                </p>
              </Link>

              <Link
                href="/4-rakat-salah"
                className="p-5 rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200/80 hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center font-bold mb-3 group-hover:scale-105 transition-transform">
                  3️⃣
                </div>
                <h3 className="font-extrabold text-slate-900 text-base group-hover:text-sky-700 transition-colors">
                  4 Rakat Salah →
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  For Dhuhr, Asr, and Isha prayers.
                </p>
              </Link>
            </div>
          </div>

          {/* Core Interactive Postures Lesson */}
          <div>
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Foundational Master Lesson
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Master Standard Prayer Postures
              </h2>
            </div>
            <InteractiveLessonViewer lesson={fullSalahOverviewLesson} />
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
