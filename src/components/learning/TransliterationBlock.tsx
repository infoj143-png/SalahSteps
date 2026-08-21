import React from "react";

interface TransliterationBlockProps {
  transliteration: string;
  translation?: string;
  className?: string;
}

export function TransliterationBlock({
  transliteration,
  translation,
  className = "",
}: TransliterationBlockProps) {
  if (!transliteration && !translation) return null;

  return (
    <div className={`space-y-2 text-center md:text-left ${className}`}>
      {transliteration && (
        <p className="text-base md:text-lg font-medium text-emerald-900 italic bg-emerald-50/50 px-3 py-1.5 rounded-lg inline-block">
          &quot;{transliteration}&quot;
        </p>
      )}
      {translation && (
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">
          <strong className="text-slate-700 font-semibold">Meaning:</strong> &quot;{translation}&quot;
        </p>
      )}
    </div>
  );
}
