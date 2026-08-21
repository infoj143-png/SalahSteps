import React from "react";
import Link from "next/link";

interface PrintableResourceCardProps {
  title: string;
  description: string;
  format?: string;
  downloadUrl?: string;
}

export function PrintableResourceCard({
  title,
  description,
  format = "PDF Printable",
  downloadUrl = "#",
}: PrintableResourceCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl">📄</span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
            {format}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <Link
        href={downloadUrl}
        className="inline-flex items-center justify-center w-full px-4 py-2 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors"
      >
        <span>View Resource</span>
        <svg
          className="w-3.5 h-3.5 ml-1.5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </Link>
    </div>
  );
}
