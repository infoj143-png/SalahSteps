import React from "react";
import Link from "next/link";

interface LearningCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  tag?: string;
}

export function LearningCard({
  title,
  description,
  href,
  icon,
  tag,
}: LearningCardProps) {
  return (
    <Link
      href={href}
      className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-3xl p-3 bg-emerald-50 rounded-xl group-hover:bg-emerald-100 transition-colors">
            {icon}
          </span>
          {tag && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
              {tag}
            </span>
          )}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors mb-2">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div className="flex items-center text-sm font-semibold text-emerald-700 group-hover:text-emerald-800 pt-2">
        <span>Start Lesson</span>
        <svg
          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}
