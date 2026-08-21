import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "How to Teach Kids Salah — Parent Educational Guide",
  description:
    "Practical, loving, and effective tips for parents to help children learn, understand, and build a lifelong love for Salah (Namaz).",
  path: "/how-to-teach-kids-salah",
});

export default function HowToTeachKidsSalahPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-amber-50/50">
        <Breadcrumbs items={[{ label: "How to Teach Kids Salah" }]} />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How to Teach Kids Salah — A Guide for Parents
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Teaching your child to pray is one of the most rewarding journeys as a parent. Here are practical strategies to build consistency, love, and understanding.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-8 text-slate-700 leading-relaxed">
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              1. Lead by Example
            </h2>
            <p>
              Children imitate what they see. When children consistently observe parents prioritizing prayer with calm focus, prayer naturally becomes part of daily life.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              2. Make It Positive and Encouraging
            </h2>
            <p>
              Praise their efforts, even when movements or recitations are imperfect. Focus on building love and consistency first.
            </p>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. Break It Into Small Steps
            </h2>
            <p>
              Start with learning Wudu and short recitations like Surah Al-Fatiha, then build up step by step without overwhelming the child.
            </p>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
