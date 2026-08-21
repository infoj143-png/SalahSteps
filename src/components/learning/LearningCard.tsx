import React from "react";
import Link from "next/link";

interface LearningCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  tag?: string;
  ctaText?: string;
}

export function LearningCard({
  title,
  description,
  href,
  icon,
  tag,
  ctaText = "Start Lesson",
}: LearningCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-3xl border border-slate-200/80 p-6 md:p-7 shadow-xs hover:shadow-lg hover:border-emerald-300 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/5 to-teal-500/10 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-300" />

      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-2xl group-hover:bg-emerald-100/80 group-hover:scale-105 transition-all">
            <span>{icon}</span>
          </div>
          {tag && (
            <span className="text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-900 border border-emerald-200/50">
              {tag}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2.5 tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex items-center text-sm font-bold text-emerald-700 group-hover:text-emerald-800 pt-3 border-t border-slate-100">
        <span>{ctaText}</span>
        <svg
          className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
