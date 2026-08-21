import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StepCard } from "@/components/learning/StepCard";
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
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Salah for Kids — Step-by-Step Guide
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Welcome to the interactive Salah guide. Here children and parents can learn each movement and recitation step by step with clear explanations.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <StepCard
            stepNumber={1}
            title="Intention (Niyyah) & Standing (Qiyam)"
            description="Stand facing the Qiblah with a clean heart and make the intention in your mind for the prayer you are about to perform."
            illustrationPlaceholder="Child standing peacefully facing Qiblah"
            tips={[
              "Remind your child that Niyyah is from the heart and does not need to be spoken loudly.",
              "Ensure feet are pointing forward comfortably.",
            ]}
          />

          <StepCard
            stepNumber={2}
            title="Takbirat-ul-Ihram"
            description="Raise your hands to ear level (or shoulder level) and say Takbir to begin the prayer."
            arabicText="اللَّهُ أَكْبَرُ"
            transliteration="Allahu Akbar"
            translation="Allah is the Greatest"
            illustrationPlaceholder="Child raising hands to ears"
            tips={["Keep fingers relaxed, facing forward."]}
          />

          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200 text-center my-8">
            <h2 className="text-lg font-bold text-amber-900 mb-2">
              📌 Educational Placeholder Notice
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed max-w-2xl mx-auto">
              This guide provides a structured framework for learning. Full verified step-by-step recitations and positions are reviewed by Islamic educators.
            </p>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
