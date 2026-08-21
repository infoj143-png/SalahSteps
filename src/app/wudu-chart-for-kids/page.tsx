import { Metadata } from "next";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PrintableResourceCard } from "@/components/learning/PrintableResourceCard";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Printable Wudu Chart for Kids — Bathroom Steps Poster",
  description:
    "Free printable Wudu step-by-step poster and checklist for children to keep near the bathroom sink.",
  path: "/wudu-chart-for-kids",
});

export default function WuduChartForKidsPage() {
  const wuduSteps = [
    { num: 1, title: "Intention & Bismillah", desc: "Make intention in your heart and say Bismillah.", icon: "💭" },
    { num: 2, title: "Wash Hands 3x", desc: "Wash both hands thoroughly up to wrists.", icon: "🤲" },
    { num: 3, title: "Rinse Mouth 3x", desc: "Take water into mouth and rinse thoroughly.", icon: "💧" },
    { num: 4, title: "Rinse Nose 3x", desc: "Sniff water gently into nose and blow out.", icon: "👃" },
    { num: 5, title: "Wash Face 3x", desc: "Wash whole face from forehead to chin.", icon: "😊" },
    { num: 6, title: "Wash Arms 3x", desc: "Wash right arm then left arm up to elbows.", icon: "💪" },
    { num: 7, title: "Wipe Head & Ears 1x", desc: "Wipe wet hands over head and clean ears.", icon: "💆" },
    { num: 8, title: "Wash Feet 3x", desc: "Wash right foot then left foot up to ankles.", icon: "🦶" },
  ];

  return (
    <PageContainer>
      <Section className="py-8 bg-sky-50/60 border-b border-sky-100/80">
        <Breadcrumbs items={[{ label: "Wudu Chart for Kids" }]} />
        <div className="max-w-3xl mt-2">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Printable Wudu Bathroom Poster
          </h1>
          <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
            Display this step-by-step Wudu sequence poster near your bathroom sink to help children remember ablution steps easily.
          </p>
        </div>
      </Section>

      {/* Online Previewable Poster */}
      <Section background="default">
        <div className="max-w-4xl mx-auto bg-white border-2 border-sky-200 rounded-3xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-800 bg-sky-100/80 px-3 py-1 rounded-full">
                SalahSteps Wudu Wall Guide
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2">
                How to Perform Wudu (Ablution)
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">SalahSteps Educational Chart</span>
              <span className="text-lg">💧✨</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {wuduSteps.map((step) => (
              <div key={step.num} className="bg-sky-50/50 rounded-2xl p-4 border border-sky-100 text-center flex flex-col justify-between">
                <div>
                  <span className="text-2xl block mb-2">{step.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-0.5 rounded-full inline-block mb-1">
                    Step {step.num}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mt-1">{step.title}</h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500 text-center">
            💡 Tip: Keep water usage gentle and remember that Wudu brings physical purity and peace.
          </div>
        </div>
      </Section>

      {/* Available Printables Cards */}
      <Section background="muted">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 text-center">
            Printable Resources Status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrintableResourceCard
              title="Step-by-Step Wudu Poster"
              description="Full visual step sequence layout ready to view or print from browser."
              format="Web Poster"
              href="/wudu-chart-for-kids"
              status="available"
            />
            <PrintableResourceCard
              title="Downloadable High-Res PDF Wudu Poster"
              description="High-resolution PDF artwork optimized for bathroom wall display."
              format="PDF Poster"
              status="coming-soon"
            />
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
