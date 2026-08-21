import React from "react";
import { ArabicTextBlock } from "./ArabicTextBlock";
import { TransliterationBlock } from "./TransliterationBlock";
import { VisualIllustration } from "./VisualIllustration";
import { PostureIconType } from "@/types/learning";

export interface StepCardProps {
  stepNumber: number;
  totalSteps?: number;
  title: string;
  description: string;
  rakatLabel?: string;
  iconType?: PostureIconType;
  illustrationPlaceholder?: string;
  arabicText?: string;
  transliteration?: string;
  translation?: string;
  whatToSayTitle?: string;
  tips?: string[];
  isActive?: boolean;
}

export function StepCard({
  stepNumber,
  totalSteps,
  title,
  description,
  rakatLabel,
  iconType = "qiyam",
  illustrationPlaceholder,
  arabicText,
  transliteration,
  translation,
  whatToSayTitle,
  tips,
  isActive = true,
}: StepCardProps) {
  return (
    <div
      className={`bg-white rounded-3xl border transition-all p-6 md:p-8 relative overflow-hidden ${
        isActive
          ? "border-emerald-200/90 shadow-md ring-1 ring-emerald-500/10"
          : "border-slate-200/80 shadow-xs"
      }`}
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
        {/* Step Indicator and Visual Illustration Area */}
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <VisualIllustration
            iconType={iconType}
            description={illustrationPlaceholder || title}
            className="mb-3"
          />

          <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
            <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 shadow-2xs">
              Step {stepNumber} {totalSteps ? `of ${totalSteps}` : ""}
            </span>

            {rakatLabel && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100/90 text-amber-900 border border-amber-200/80">
                {rakatLabel}
              </span>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="w-full md:w-2/3 space-y-4">
          <div>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
                {stepNumber}. {title}
              </h3>
            </div>
            <p className="text-slate-600 mt-2 text-base leading-relaxed">
              {description}
            </p>
          </div>

          {/* Arabic Text Block if available */}
          {arabicText && (
            <div className="space-y-1">
              {whatToSayTitle && (
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  {whatToSayTitle}:
                </p>
              )}
              <ArabicTextBlock arabicText={arabicText} />
            </div>
          )}

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
                <span>💡</span> Tip for Parents & Teachers
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
