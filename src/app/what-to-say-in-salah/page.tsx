import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ArabicTextBlock } from "@/components/learning/ArabicTextBlock";
import { TransliterationBlock } from "@/components/learning/TransliterationBlock";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "What to Say in Salah — Recitations, Arabic & Transliteration",
  description:
    "Learn what to recite in each position of Salah with clear Arabic text, transliteration, and simple meanings for kids.",
  path: "/what-to-say-in-salah",
});

export default function WhatToSayInSalahPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-teal-50/50">
        <Breadcrumbs items={[{ label: "What to Say in Salah" }]} />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            What to Say in Salah
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Learn the recitations for Takbir, Ruku, Sujud, and Tashahhud with clear Arabic, transliteration, and meaning.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              1. Takbir (Starting Salah & Moving)
            </h2>
            <ArabicTextBlock arabicText="اللَّهُ أَكْبَرُ" />
            <TransliterationBlock
              transliteration="Allahu Akbar"
              translation="Allah is the Greatest"
            />
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              2. What to Say in Ruku (Bowing)
            </h2>
            <ArabicTextBlock arabicText="سُبْحَانَ رَبِّيَ الْعَظِيمِ" />
            <TransliterationBlock
              transliteration="Subhana Rabbiyal 'Adheem"
              translation="Glory be to my Lord, the Most Great"
            />
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              3. What to Say in Sujud (Prostration)
            </h2>
            <ArabicTextBlock arabicText="سُبْحَانَ رَبِّيَ الْأَعْلَى" />
            <TransliterationBlock
              transliteration="Subhana Rabbiyal A'la"
              translation="Glory be to my Lord, the Most High"
            />
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
