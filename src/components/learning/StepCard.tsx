import React from "react";
import { ArabicTextBlock } from "./ArabicTextBlock";
import { TransliterationBlock } from "./TransliterationBlock";

export interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  illustrationPlaceholder?: string;
  arabicText?: string;
  transliteration?: string;
  translation?: string;
  tips?: string[];
}

export function StepCard({
  stepNumber,
  title,
  description,
  illustrationPlaceholder = "Child prayer position guide",
  arabicText,
  transliteration,
  translation,
  tips,
}: StepCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all p-6 md:p-8 mb-8 relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Step Indicator and Visual Illustration Area */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="w-full aspect-4/3 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-50/50 to-amber-50/30 border border-emerald-100 flex flex-col items-center justify-center p-4 text-center mb-3 shadow-2xs group">
            <div className="w-12 h-12 rounded-2xl bg-white/90 shadow-xs flex items-center justify-center text-2xl mb-2">
              <span>🧘</span>
            </div>
            <span className="text-xs text-emerald-950/80 font-medium px-2 py-0.5 rounded-md bg-white/60">
              {illustrationPlaceholder}
            </span>
          </div>
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
            Step {stepNumber}
          </span>
        </div>

        {/* Content Area */}
        <div className="w-full md:w-2/3 space-y-4">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
              {stepNumber}. {title}
            </h3>
            <p className="text-slate-600 mt-2 text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Arabic Text Block if available */}
          {arabicText && <ArabicTextBlock arabicText={arabicText} />}

          {/* Transliteration & Translation if available */}
          {(transliteration || translation) && (
            <TransliterationBlock
              transliteration={transliteration || ""}
              translation={translation}
            />
          )}

          {/* Parent Tips if available */}
          {tips && tips.length > 0 && (
            <div className="mt-4 pt-4 border-t border-slate-100 bg-amber-50/80 p-4 rounded-2xl border-l-4 border-l-amber-500">
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>💡</span> Tip for Parents
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-amber-950 font-medium leading-relaxed">
                {tips.map((tip, idx) => (
                  <li key={idx}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
