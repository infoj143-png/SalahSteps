"use client";

import React, { useState, useEffect } from "react";
import { LessonData } from "@/types/learning";
import { StepCard } from "./StepCard";
import { Button } from "@/components/ui/Button";

interface InteractiveLessonViewerProps {
  lesson: LessonData;
  className?: string;
}

export function InteractiveLessonViewer({
  lesson,
  className = "",
}: InteractiveLessonViewerProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"interactive" | "all">("interactive");

  const totalSteps = lesson.steps.length;
  const currentStep = lesson.steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const handleJumpToStep = (index: number) => {
    setCurrentStepIndex(index);
    if (viewMode === "all") {
      setViewMode("interactive");
    }
  };

  // Keyboard navigation support (Arrow keys)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode !== "interactive") return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        if (currentStepIndex < totalSteps - 1) {
          setCurrentStepIndex((prev) => prev + 1);
        }
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        if (currentStepIndex > 0) {
          setCurrentStepIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStepIndex, totalSteps, viewMode]);

  const isWudu = lesson.category === "wudu";
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Lesson Control Header */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                isWudu
                  ? "bg-sky-100 text-sky-900 border border-sky-200"
                  : "bg-emerald-100 text-emerald-900 border border-emerald-200"
              }`}
            >
              {lesson.category === "wudu" ? "💧 Wudu Lesson" : `🕌 Salah Lesson (${lesson.rakatCount ? `${lesson.rakatCount} Rakat` : 'Full Guide'})`}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {totalSteps} Steps Total
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            {lesson.title}
          </h2>
          <p className="text-sm text-slate-600 mt-0.5">{lesson.subtitle}</p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl w-full md:w-auto justify-center">
          <button
            type="button"
            onClick={() => setViewMode("interactive")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              viewMode === "interactive"
                ? isWudu
                  ? "bg-sky-600 text-white shadow-xs"
                  : "bg-emerald-700 text-white shadow-xs"
                : "text-slate-700 hover:text-slate-900"
            }`}
          >
            Interactive Lesson ✨
          </button>
          <button
            type="button"
            onClick={() => setViewMode("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              viewMode === "all"
                ? isWudu
                  ? "bg-sky-600 text-white shadow-xs"
                  : "bg-emerald-700 text-white shadow-xs"
                : "text-slate-700 hover:text-slate-900"
            }`}
          >
            All Steps View 📜
          </button>
        </div>
      </div>

      {viewMode === "interactive" ? (
        <div className="space-y-6">
          {/* Progress Indicator */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-2xs space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-700">
              <span>
                Progress: Step {currentStepIndex + 1} of {totalSteps}
              </span>
              <span
                className={isWudu ? "text-sky-700 font-extrabold" : "text-emerald-700 font-extrabold"}
              >
                {progressPercent}% Complete
              </span>
            </div>

            {/* Visual Progress Bar */}
            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  isWudu
                    ? "bg-gradient-to-r from-sky-500 to-blue-600"
                    : "bg-gradient-to-r from-emerald-500 to-teal-600"
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Interactive Touch Steps Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 pt-1 scrollbar-none">
              {lesson.steps.map((step, idx) => (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => handleJumpToStep(idx)}
                  aria-label={`Jump to step ${idx + 1}: ${step.title}`}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all shrink-0 ${
                    idx === currentStepIndex
                      ? isWudu
                        ? "bg-sky-600 text-white ring-2 ring-sky-300"
                        : "bg-emerald-700 text-white ring-2 ring-emerald-300"
                      : idx < currentStepIndex
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {idx + 1}. {step.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Card */}
          <StepCard
            stepNumber={currentStep.stepNumber}
            totalSteps={totalSteps}
            title={currentStep.title}
            description={currentStep.description}
            rakatLabel={currentStep.rakatLabel}
            iconType={currentStep.iconType}
            illustrationPlaceholder={currentStep.illustrationDescription}
            arabicText={currentStep.arabicText}
            transliteration={currentStep.transliteration}
            translation={currentStep.translation}
            whatToSayTitle={currentStep.whatToSayTitle}
            tips={currentStep.tips}
            isActive={true}
          />

          {/* Lesson Navigation Controls */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs flex items-center justify-between gap-4">
            <Button
              type="button"
              variant="secondary"
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
              className="px-6 py-3 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ← Previous
            </Button>

            <span className="text-xs font-bold text-slate-500 hidden sm:inline-block">
              Use ← → keys on keyboard
            </span>

            {currentStepIndex < totalSteps - 1 ? (
              <Button
                type="button"
                variant="primary"
                onClick={handleNext}
                className="px-8 py-3"
              >
                Next Step →
              </Button>
            ) : (
              <Button
                type="button"
                variant="primary"
                onClick={() => handleJumpToStep(0)}
                className="px-8 py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white"
              >
                Restart Lesson 🔄
              </Button>
            )}
          </div>
        </div>
      ) : (
        /* All Steps View */
        <div className="space-y-6">
          {lesson.steps.map((step) => (
            <StepCard
              key={step.id}
              stepNumber={step.stepNumber}
              totalSteps={totalSteps}
              title={step.title}
              description={step.description}
              rakatLabel={step.rakatLabel}
              iconType={step.iconType}
              illustrationPlaceholder={step.illustrationDescription}
              arabicText={step.arabicText}
              transliteration={step.transliteration}
              translation={step.translation}
              whatToSayTitle={step.whatToSayTitle}
              tips={step.tips}
            />
          ))}
        </div>
      )}
    </div>
  );
}
