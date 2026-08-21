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
  illustrationPlaceholder = "Child posture illustration placeholder",
  arabicText,
  transliteration,
  translation,
  tips,
}: StepCardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow p-6 md:p-8 mb-8">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        {/* Step Indicator and Illustration Area */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <div className="w-full aspect-4/3 rounded-xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center p-4 text-center mb-3">
            <span className="text-4xl mb-2" role="img" aria-label="illustration">
              🧘
            </span>
            <span className="text-xs text-slate-500 font-medium italic">
              {illustrationPlaceholder}
            </span>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
            Step {stepNumber}
          </span>
        </div>

        {/* Content Area */}
        <div className="w-full md:w-2/3 space-y-4">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-slate-800">
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
            <div className="mt-4 pt-4 border-t border-slate-100 bg-amber-50/60 p-4 rounded-xl border-l-4 border-l-amber-400">
              <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-2">
                💡 Tip for Parents
              </h4>
              <ul className="list-disc list-inside space-y-1 text-xs md:text-sm text-amber-950">
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
