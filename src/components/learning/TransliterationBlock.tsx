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
    <div className={`space-y-2.5 text-center md:text-left ${className}`}>
      {transliteration && (
        <div className="inline-block bg-teal-50/80 border border-teal-100/80 px-3.5 py-1.5 rounded-xl">
          <p className="text-base md:text-lg font-semibold text-teal-950 italic">
            &quot;{transliteration}&quot;
          </p>
        </div>
      )}
      {translation && (
        <p className="text-sm md:text-base text-slate-700 leading-relaxed">
          <strong className="text-slate-900 font-bold">Meaning:</strong> &quot;{translation}&quot;
        </p>
      )}
    </div>
  );
}
