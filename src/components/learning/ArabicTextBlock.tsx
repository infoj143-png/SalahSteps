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
      className={`p-4 my-2 rounded-xl bg-teal-50/50 border border-teal-100 text-center ${className}`}
      dir="rtl"
      lang="ar"
    >
      <p className="font-arabic text-2xl md:text-3xl lg:text-4xl leading-relaxed text-slate-800 font-bold tracking-wide">
        {arabicText}
      </p>
    </div>
  );
}
