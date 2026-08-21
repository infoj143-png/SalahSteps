import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { StepCard } from "@/components/learning/StepCard";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Wudu for Kids — Step-by-Step Ablution Guide",
  description:
    "Learn how to perform Wudu (ablution) for kids with simple visual steps, clean explanations, and practical advice for parents.",
  path: "/wudu-for-kids",
});

export default function WuduForKidsPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-sky-50/50">
        <Breadcrumbs items={[{ label: "Wudu for Kids" }]} />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Wudu for Kids — Step-by-Step Guide
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Wudu (ablution) is how we wash and prepare ourselves before standing in prayer. Follow these steps to make Wudu clean and simple.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <StepCard
            stepNumber={1}
            title="Niyyah & Bismillah"
            description="Make intention in your heart to clean yourself for prayer, and begin by saying Bismillah."
            arabicText="بِسْمِ اللَّهِ"
            transliteration="Bismillah"
            translation="In the name of Allah"
            illustrationPlaceholder="Child at sink preparing for Wudu"
          />

          <StepCard
            stepNumber={2}
            title="Washing Hands"
            description="Wash both hands up to the wrists three times, making sure water reaches between the fingers."
            illustrationPlaceholder="Child washing hands under tap water"
            tips={["Encourage children not to waste water."]}
          />
        </div>
      </Section>
    </PageContainer>
  );
}
