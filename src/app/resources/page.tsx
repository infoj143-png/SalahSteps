import { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ResourceCard } from "@/components/learning/ResourceCard";
import { resourcesData } from "@/data/resourcesData";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Learning Resources & Parent Materials — SalahSteps",
  description:
    "Explore free printable prayer charts, Wudu bathroom posters, parent guides, and practice materials for teaching children Salah.",
  path: "/resources",
});

export default function ResourcesPage() {
  const printableResources = resourcesData.filter((r) => r.category === "printable");
  const parentResources = resourcesData.filter((r) => r.category === "parent");
  const salahResources = resourcesData.filter((r) => r.category === "salah");
  const wuduResources = resourcesData.filter((r) => r.category === "wudu");
  const practiceResources = resourcesData.filter((r) => r.category === "practice");

  return (
    <PageContainer>
      {/* Hero Header */}
      <Section className="py-10 bg-gradient-to-b from-emerald-50/80 via-teal-50/40 to-amber-50/30 border-b border-emerald-900/10">
        <Breadcrumbs items={[{ label: "Resources Hub" }]} />
        <div className="max-w-3xl mt-4">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-3 py-1 rounded-full border border-emerald-200/60">
            Parents & Educators Library
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mt-3">
            Salah & Wudu Resources Hub
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
            Discover simple, beautiful, and authentic learning materials to support your child&apos;s daily prayer habit. Printable trackers, visual guides, and parent handbooks all in one place.
          </p>
        </div>

        {/* Quick Category Jump Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-8">
          <a
            href="#printable-materials"
            className="text-xs font-bold px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 shadow-2xs transition-all"
          >
            🖨️ Printable Materials ({printableResources.length})
          </a>
          <a
            href="#parent-guides"
            className="text-xs font-bold px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 shadow-2xs transition-all"
          >
            🏡 Parent Guides ({parentResources.length})
          </a>
          <a
            href="#salah-resources"
            className="text-xs font-bold px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 shadow-2xs transition-all"
          >
            🕌 Salah Guides ({salahResources.length})
          </a>
          <a
            href="#wudu-resources"
            className="text-xs font-bold px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 shadow-2xs transition-all"
          >
            💧 Wudu Materials ({wuduResources.length})
          </a>
        </div>
      </Section>

      {/* 1. Printable Materials Section */}
      <Section id="printable-materials" background="default">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🖨️</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Printable Learning Materials
              </h2>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Visual charts and tracking sheets ready for home or classroom display.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {printableResources.map((item) => (
            <ResourceCard key={item.id} resource={item} />
          ))}
        </div>
      </Section>

      {/* 2. Parent Guides Section */}
      <Section id="parent-guides" background="muted">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏡</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Parent Guidance & Teaching Support
              </h2>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Practical handbooks for parents nurturing lifelong prayer habits with patience and love.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {parentResources.map((item) => (
            <ResourceCard key={item.id} resource={item} />
          ))}
        </div>
      </Section>

      {/* 3. Salah & Wudu Learning Guides */}
      <Section id="salah-resources" background="default">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🕌</span>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Salah & Recitation Reference Guides
              </h2>
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Step-by-step guides breaking down movements, recitations, and Rakat structures.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {salahResources.concat(wuduResources).concat(practiceResources).map((item) => (
            <ResourceCard key={item.id} resource={item} />
          ))}
        </div>
      </Section>

      {/* Parent Support Banner Callout */}
      <Section className="bg-emerald-950 text-white rounded-3xl my-8 p-8 md:p-12 relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-900/90 px-3 py-1 rounded-full border border-emerald-700/60">
            Parent Support
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold mt-3 text-white">
            Need help guiding your child?
          </h2>
          <p className="mt-3 text-sm md:text-base text-emerald-100/90 leading-relaxed">
            Read our step-by-step parent teaching guide explaining the four-step learning model: Learn → Practice → Review → Encourage.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/how-to-teach-kids-salah"
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all"
            >
              Read Parent Teaching Guide →
            </Link>
            <Link
              href="/salah-chart-for-kids"
              className="px-5 py-3 rounded-xl bg-emerald-900/90 hover:bg-emerald-800 text-emerald-100 border border-emerald-700/80 font-bold text-sm transition-all"
            >
              View Printable Tracker
            </Link>
          </div>
        </div>
      </Section>
    </PageContainer>
  );
}
