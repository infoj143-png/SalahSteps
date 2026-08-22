import React from "react";
import Link from "next/link";
import { ResourceItem } from "@/types/resources";

interface ResourceCardProps {
  resource: ResourceItem;
  className?: string;
}

export function ResourceCard({ resource, className = "" }: ResourceCardProps) {
  const isAvailable = resource.status === "available";
  const href = isAvailable ? resource.webRoute || resource.downloadUrl || `/resources/${resource.slug}` : undefined;

  return (
    <div
      className={`bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group ${className}`}
    >
      <div>
        {/* Top Header: Icon & Badges */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-2xl shadow-2xs group-hover:scale-105 transition-transform duration-200 shrink-0">
            <span>{resource.icon}</span>
          </div>

          <div className="flex flex-wrap items-center justify-end gap-1.5">
            {/* Availability Status Badge */}
            {isAvailable ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide bg-emerald-100/90 text-emerald-800 border border-emerald-200/70">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide bg-slate-100 text-slate-600 border border-slate-200">
                Coming Soon
              </span>
            )}

            {/* Type Badge */}
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide bg-amber-100/80 text-amber-900 border border-amber-200/60">
              {resource.type}
            </span>
          </div>
        </div>

        {/* Resource Title & Description */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
            {href ? (
              <Link href={href} className="hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded">
                {resource.title}
              </Link>
            ) : (
              <span>{resource.title}</span>
            )}
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">
            {resource.description}
          </p>
        </div>

        {/* Audience & Tags */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6">
          <span className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md">
            🎯 {resource.audience}
          </span>
          {resource.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100/80"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Action Section */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          href={`/resources/${resource.slug}`}
          className="text-xs font-bold text-slate-600 hover:text-emerald-700 transition-colors py-1 px-2 -ml-2 rounded-lg hover:bg-slate-100"
        >
          View Details →
        </Link>

        {isAvailable && href ? (
          <Link
            href={href}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs hover:shadow-xs transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            <span>{resource.isPrintable ? "View / Print" : "Open Guide"}</span>
            <svg
              className="w-3.5 h-3.5 ml-1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        ) : (
          <button
            disabled
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold rounded-xl bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed"
          >
            <span>🔒 Coming Soon</span>
          </button>
        )}
      </div>
    </div>
  );
}
