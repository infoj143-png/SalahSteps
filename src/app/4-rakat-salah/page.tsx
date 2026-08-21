import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "4 Rakat Salah Guide for Kids",
  description:
    "Learn how to pray 4 Rakat Salah (Dhuhr, Asr, Isha) with child-friendly step-by-step guidance.",
  path: "/4-rakat-salah",
});

export default function FourRakatSalahPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-teal-50/50">
        <Breadcrumbs items={[{ label: "4 Rakat Salah" }]} />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            4 Rakat Salah Guide for Kids
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            A clear guide for children learning 4 Rakat prayers like Dhuhr, Asr, and Isha.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Structure of 4 Rakat Prayer
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Covers Rakat 1, Rakat 2 with Sitting (First Tashahhud), Rakat 3, and Rakat 4 with Final Sitting and Salam.
          </p>
        </div>
      </Section>
    </PageContainer>
  );
}
