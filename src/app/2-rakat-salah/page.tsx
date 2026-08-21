import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "2 Rakat Salah Guide for Kids",
  description:
    "A simple step-by-step breakdown of performing a 2 Rakat prayer (Fajr, Sunnah, Nafl) for children.",
  path: "/2-rakat-salah",
});

export default function TwoRakatSalahPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-teal-50/50">
        <Breadcrumbs items={[{ label: "2 Rakat Salah" }]} />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            2 Rakat Salah Guide for Kids
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Learn how to perform a 2 Rakat prayer like Fajr prayer step-by-step with simple illustrations and recitations.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Structure of 2 Rakat Prayer
          </h2>
          <ul className="space-y-3 text-slate-600 list-disc list-inside text-sm md:text-base">
            <li><strong>Rakat 1:</strong> Takbir, Thana, Surah Al-Fatiha, additional Surah, Ruku, 2 Sajdahs.</li>
            <li><strong>Rakat 2:</strong> Surah Al-Fatiha, additional Surah, Ruku, 2 Sajdahs, Tashahhud, Tashahhud/Durood, and Salam.</li>
          </ul>
        </div>
      </Section>
    </PageContainer>
  );
}
