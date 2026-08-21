import React from "react";
import Link from "next/link";

interface PrintableResourceCardProps {
  title: string;
  description: string;
  format?: string;
  href?: string;
  status?: "available" | "coming-soon";
}

export function PrintableResourceCard({
  title,
  description,
  format = "Printable Chart",
  href,
  status = "available",
}: PrintableResourceCardProps) {
  const isAvailable = status === "available" && href && href !== "#";

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-xl">
            📄
          </div>
          <span className="text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-200/50">
            {format}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {isAvailable ? (
        <Link
          href={href}
          className="inline-flex items-center justify-center w-full px-4 py-2.5 text-xs font-bold rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 hover:text-emerald-900 border border-emerald-200/60 transition-colors"
        >
          <span>View Printable Page</span>
          <svg
            className="w-4 h-4 ml-1.5"
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
        </Link>
      ) : (
        <div className="inline-flex items-center justify-center w-full px-4 py-2.5 text-xs font-bold rounded-xl bg-slate-100 text-slate-500 border border-slate-200/80 cursor-not-allowed">
          <span>PDF Download Coming Soon</span>
        </div>
      )}
    </div>
  );
}
