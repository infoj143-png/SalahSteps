import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PrintableResourceCard } from "@/components/learning/PrintableResourceCard";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Printable Wudu Chart for Kids",
  description:
    "Free printable Wudu step-by-step poster and checklist for children to keep near the bathroom sink.",
  path: "/wudu-chart-for-kids",
});

export default function WuduChartForKidsPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-sky-50/50">
        <Breadcrumbs items={[{ label: "Wudu Chart for Kids" }]} />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Printable Wudu Guide & Chart
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Hang these printable guides near the bathroom sink to help your children remember the steps of Wudu.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <PrintableResourceCard
            title="Step-by-Step Wudu Bathroom Poster"
            description="Clear visual illustration sequence of Wudu steps for bathroom display."
          />
          <PrintableResourceCard
            title="Wudu Steps Checklist for Young Learners"
            description="Interactive checklist for children practicing Wudu independently."
          />
        </div>
      </Section>
    </PageContainer>
  );
}
