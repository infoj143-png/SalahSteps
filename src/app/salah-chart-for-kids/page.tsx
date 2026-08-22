import { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { PrintButton } from "@/components/ui/PrintButton";
import { PrintableResourceCard } from "@/components/learning/PrintableResourceCard";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Printable Salah Chart for Kids — Prayer Tracker",
  description:
    "Free printable Salah tracker charts and weekly prayer progress checklists for children to encourage daily prayer habits.",
  path: "/salah-chart-for-kids",
});

export default function SalahChartForKidsPage() {
  const prayers = ["Fajr 🌅", "Dhuhr ☀️", "Asr 🌤️", "Maghrib 🌆", "Isha 🌙"];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <PageContainer>
      {/* Top Header */}
      <Section className="py-8 bg-amber-50/60 border-b border-amber-100/80 print:hidden">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: "Salah Chart for Kids" }]} />
        <div className="max-w-3xl mt-2 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Printable Salah Tracker Chart for Kids
            </h1>
            <p className="mt-3 text-base md:text-lg text-slate-600 leading-relaxed">
              Help your child build a joyful daily prayer habit with this easy weekly prayer tracker. You can view, print, or hang this page directly at home.
            </p>
          </div>
          <div className="shrink-0">
            <PrintButton label="Print Chart Now 🖨️" />
          </div>
        </div>
      </Section>

      {/* Online Previewable & Printable Chart */}
      <Section background="default" className="print:p-0">
        <div className="max-w-4xl mx-auto bg-white border-2 border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm print:border-none print:shadow-none print:p-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full print:border print:border-emerald-300">
                SalahSteps Weekly Tracker
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2">
                My Weekly Salah Progress Chart
              </h2>
              <p className="text-xs text-slate-500 mt-1">Name: ____________________ | Week of: ______________</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">SalahSteps Educational Chart</span>
              <span className="text-lg">🕌⭐</span>
            </div>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-slate-200 text-xs font-bold text-slate-700 uppercase">
                  <th className="py-3 px-3">Prayer</th>
                  {days.map((day) => (
                    <th key={day} className="py-3 px-2 text-center">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm font-medium">
                {prayers.map((prayer) => (
                  <tr key={prayer} className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-3 font-bold text-slate-800">{prayer}</td>
                    {days.map((day) => (
                      <td key={day} className="py-3.5 px-2 text-center">
                        <div className="w-6 h-6 rounded-md border-2 border-slate-300 mx-auto" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-100 text-xs text-slate-500 text-center">
            💡 Tip: Hang this chart on your child&apos;s bedroom wall and put a colorful star sticker ⭐ for each prayer completed.
          </div>
        </div>
      </Section>

      {/* Available Printables Cards */}
      <Section background="muted" className="print:hidden">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              More Printable Resources
            </h2>
            <Link href="/resources" className="text-xs font-bold text-emerald-700 hover:underline">
              View All Resources →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrintableResourceCard
              title="Step-by-Step Wudu Poster"
              description="Visual bathroom poster layout with 8 essential steps ready to print."
              format="Web Poster"
              href="/wudu-chart-for-kids"
              status="available"
            />
            <PrintableResourceCard
              title="High-Res PDF Salah Chart"
              description="Illustrated PDF wall poster format ready for high-quality color printing."
              format="PDF Poster"
              status="coming-soon"
            />
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
