import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PrintableResourceCard } from "@/components/learning/PrintableResourceCard";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Printable Salah Chart for Kids",
  description:
    "Free printable Salah tracker charts for children to encourage daily prayer habits and track progress.",
  path: "/salah-chart-for-kids",
});

export default function SalahChartForKidsPage() {
  return (
    <PageContainer>
      <Section className="py-8 bg-amber-50/50">
        <Breadcrumbs items={[{ label: "Salah Chart for Kids" }]} />
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Printable Salah Tracker Chart for Kids
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Help your child build a daily prayer habit with simple printable prayer charts and trackers.
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <PrintableResourceCard
            title="Weekly Salah Tracker Chart"
            description="A colourful weekly chart for kids to mark off their 5 daily prayers."
          />
          <PrintableResourceCard
            title="My First Salah Progress Sheet"
            description="A step-by-step milestone sheet for young children learning the movements of prayer."
          />
        </div>
      </Section>
    </PageContainer>
  );
}
