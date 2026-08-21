import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "3 Rakat Salah Guide for Kids",
  description:
    "Learn how to pray 3 Rakat Salah (like Maghrib) with clear step-by-step instructions for kids.",
  path: "/3-rakat-salah",
});

export default function ThreeRakatSalahPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-teal-50/50">
        <Breadcrumbs items={[{ label: "3 Rakat Salah" }]} />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            3 Rakat Salah Guide for Kids
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Understand the step-by-step flow of 3 Rakat prayers, such as Maghrib Salah.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
          <h2 className="text-xl font-bold text-slate-800 mb-4">
            Structure of 3 Rakat Prayer
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Includes First Rakat, Second Rakat with First Tashahhud, Third Rakat with Final Tashahhud and Salam.
          </p>
        </div>
      </Section>
    </PageContainer>
  );
}
