import React from "react";

interface ArabicTextBlockProps {
  arabicText: string;
  className?: string;
}

export function ArabicTextBlock({
  arabicText,
  className = "",
}: ArabicTextBlockProps) {
  if (!arabicText) return null;

  return (
    <div
      className={`p-5 my-3 rounded-2xl bg-emerald-50/60 border border-emerald-100/80 text-center shadow-2xs ${className}`}
      dir="rtl"
      lang="ar"
    >
      <p className="font-arabic text-2xl sm:text-3xl lg:text-4xl leading-loose text-slate-900 font-bold tracking-wide">
        {arabicText}
      </p>
    </div>
  );
}
