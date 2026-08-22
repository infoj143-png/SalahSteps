import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ResourceCard } from "@/components/learning/ResourceCard";
import { resourcesData } from "@/data/resourcesData";
import { constructMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return resourcesData.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourcesData.find((r) => r.slug === slug);

  if (!resource) {
    return constructMetadata({
      title: "Resource Not Found — SalahSteps",
      path: "/resources",
    });
  }

  return constructMetadata({
    title: `${resource.title} — Resource Guide`,
    description: resource.description,
    path: `/resources/${resource.slug}`,
  });
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = resourcesData.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  const isAvailable = resource.status === "available";
  const primaryHref = resource.webRoute || resource.downloadUrl;

  const relatedResources = resourcesData.filter(
    (r) => r.id !== resource.id && (r.category === resource.category || r.audience === resource.audience)
  ).slice(0, 3);

  return (
    <PageContainer>
      {/* Header Banner */}
      <Section className="py-8 bg-gradient-to-b from-amber-50/70 via-emerald-50/40 to-white border-b border-slate-200/80">
        <Breadcrumbs
          items={[
            { label: "Resources", href: "/resources" },
            { label: resource.title },
          ]}
        />
        <div className="max-w-4xl mt-4 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-2xl">{resource.icon}</span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-200/60">
                {resource.type}
              </span>
              {isAvailable ? (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide bg-emerald-100/90 text-emerald-800 border border-emerald-200/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available Now
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide bg-slate-100 text-slate-600 border border-slate-200">
                  Coming Soon
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {resource.title}
            </h1>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {resource.description}
            </p>
          </div>

          {/* Direct CTA Button */}
          {isAvailable && primaryHref && (
            <div className="shrink-0 flex flex-col items-stretch md:items-end gap-2">
              <Link
                href={primaryHref}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm hover:shadow-md transition-all duration-150 text-center"
              >
                <span>{resource.isPrintable ? "Open & Print Material 🖨️" : "Access Guide Now →"}</span>
              </Link>
              <span className="text-xs text-slate-500 text-center md:text-right">
                Free for personal & family use
              </span>
            </div>
          )}
        </div>
      </Section>

      {/* Main Detail Body */}
      <Section background="default">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info Columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* What this resource is for */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-2xs">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span>🎯</span> What this resource is for
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {resource.details.whatIsItFor}
              </p>
            </div>

            {/* Who it is for */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-2xs">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                <span>👥</span> Who it is for
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                {resource.details.whoIsItFor}
              </p>
            </div>

            {/* How to use it */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 md:p-8 shadow-2xs">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
                <span>💡</span> How to use this resource effectively
              </h2>
              <ol className="space-y-3">
                {resource.details.howToUse.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-slate-700">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Key Features (Optional) */}
            {resource.details.features && resource.details.features.length > 0 && (
              <div className="bg-amber-50/50 rounded-3xl border border-amber-200/60 p-6 md:p-8 shadow-2xs">
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <span>✨</span> Key Highlights & Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {resource.details.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-slate-700 font-medium bg-white/80 p-3 rounded-xl border border-amber-100">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar Metadata */}
          <div className="space-y-6">
            <div className="bg-slate-50/90 rounded-3xl border border-slate-200 p-6 space-y-4">
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider">
                Resource Overview
              </h3>

              <div className="space-y-3 text-xs md:text-sm">
                <div className="flex justify-between py-2 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Category</span>
                  <span className="font-bold text-slate-800 capitalize">{resource.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Target Audience</span>
                  <span className="font-bold text-slate-800">{resource.audience}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Format</span>
                  <span className="font-bold text-slate-800">{resource.type}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-200/60">
                  <span className="text-slate-500 font-medium">Printable</span>
                  <span className="font-bold text-slate-800">{resource.isPrintable ? "Yes" : "No"}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500 font-medium">Status</span>
                  <span className="font-bold text-slate-800 capitalize">{resource.status.replace("-", " ")}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-slate-500 block mb-2">Tags:</span>
                <div className="flex flex-wrap gap-1.5">
                  {resource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-md"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Back link */}
            <div className="text-center">
              <Link
                href="/resources"
                className="inline-flex items-center text-xs font-bold text-slate-600 hover:text-emerald-700 transition-colors"
              >
                ← Back to All Resources
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Related Resources */}
      {relatedResources.length > 0 && (
        <Section background="muted">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center">
              Related Materials You May Find Helpful
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedResources.map((item) => (
                <ResourceCard key={item.id} resource={item} />
              ))}
            </div>
          </div>
        </Section>
      )}
    </PageContainer>
  );
}
