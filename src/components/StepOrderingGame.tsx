"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";

export interface StepItem {
  id: string;
  text: string;
  correctOrder: number;
}

export interface StepOrderingGameProps {
  title: string;
  items: StepItem[];
}

export function StepOrderingGame({ title, items }: StepOrderingGameProps) {
  const [currentItems, setCurrentItems] = useState<StepItem[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  // Helper to shuffle items array
  const shuffleItems = (array: StepItem[]): StepItem[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Initialize and shuffle on component mount or items change
  useEffect(() => {
    setIsMounted(true);
    setCurrentItems(shuffleItems(items));
    setIsChecked(false);
    setIsSuccessModalOpen(false);
  }, [items]);

  const handleReset = () => {
    setCurrentItems(shuffleItems(items));
    setIsChecked(false);
    setIsSuccessModalOpen(false);
  };

  const moveItem = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= currentItems.length) return;
    const newItems = [...currentItems];
    const [movedItem] = newItems.splice(fromIndex, 1);
    newItems.splice(toIndex, 0, movedItem);
    setCurrentItems(newItems);
    if (isChecked) {
      setIsChecked(false);
    }
  };

  const handleCheckOrder = () => {
    setIsChecked(true);
    const isAllCorrect = currentItems.every(
      (item, index) => item.correctOrder === index + 1
    );

    if (isAllCorrect) {
      setIsSuccessModalOpen(true);
    }
  };

  // Calculate score (number of correctly placed items)
  const correctCount = currentItems.filter(
    (item, index) => item.correctOrder === index + 1
  ).length;
  const isAllCorrect =
    currentItems.length > 0 && correctCount === currentItems.length;

  // Star calculation (e.g. 5 stars full score)
  const starsCount =
    currentItems.length > 0
      ? Math.round((correctCount / currentItems.length) * 5)
      : 0;

  // Drag and drop handlers
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    if (dragOverIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== dropIndex) {
      moveItem(draggedIndex, dropIndex);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  if (!isMounted) {
    return (
      <div className="bg-emerald-50/50 rounded-3xl p-6 md:p-8 border-2 border-emerald-100 max-w-3xl mx-auto shadow-sm min-h-[300px] flex items-center justify-center">
        <div className="text-emerald-700 font-medium animate-pulse">
          Loading game...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-emerald-50/60 rounded-3xl p-6 md:p-8 border-2 border-emerald-100/80 max-w-3xl mx-auto shadow-md relative overflow-hidden">
      {/* Game Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-emerald-200/60">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-emerald-200/80 text-emerald-900 mb-1">
            🎮 Interactive Game
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={handleReset}>
            🔄 Reset Game
          </Button>
        </div>
      </div>

      <p className="text-sm md:text-base text-slate-600 mb-6 font-medium">
        Drag and drop the steps into the correct sequence, or use the ⬆️ Move Up and ⬇️ Move Down buttons!
      </p>

      {/* Items List */}
      <div className="space-y-3 mb-8">
        {currentItems.map((item, index) => {
          const positionCorrect =
            isChecked && item.correctOrder === index + 1;
          const positionIncorrect =
            isChecked && item.correctOrder !== index + 1;

          let cardBorderBgClasses =
            "bg-white border-slate-200/90 hover:border-emerald-300 shadow-xs";
          if (positionCorrect) {
            cardBorderBgClasses =
              "bg-emerald-50/90 border-2 border-emerald-500 shadow-emerald-100 shadow-md";
          } else if (positionIncorrect) {
            cardBorderBgClasses =
              "bg-rose-50/90 border-2 border-rose-400 shadow-rose-100 shadow-md";
          }

          if (dragOverIndex === index && draggedIndex !== index) {
            cardBorderBgClasses += " border-2 border-dashed border-emerald-600 bg-emerald-100/50";
          }

          return (
            <div
              key={item.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, index)}
              onDragEnd={handleDragEnd}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-all duration-150 gap-3 ${cardBorderBgClasses} cursor-grab active:cursor-grabbing`}
            >
              {/* Left side: Drag handle, step number badge, item text */}
              <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                <span
                  className="text-slate-400 hover:text-emerald-600 cursor-grab active:cursor-grabbing text-lg select-none px-1"
                  title="Drag to reorder"
                >
                  ⋮⋮
                </span>

                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm shrink-0 ${
                    positionCorrect
                      ? "bg-emerald-600 text-white"
                      : positionIncorrect
                      ? "bg-rose-500 text-white"
                      : "bg-emerald-100 text-emerald-900"
                  }`}
                >
                  {index + 1}
                </div>

                <span className="text-slate-800 font-semibold text-base md:text-lg truncate sm:whitespace-normal">
                  {item.text}
                </span>
              </div>

              {/* Right side: Reorder controls for mobile accessibility & feedback icon */}
              <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                {isChecked && (
                  <span className="text-lg mr-1 select-none">
                    {positionCorrect ? "✅" : "❌"}
                  </span>
                )}

                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => moveItem(index, index - 1)}
                    disabled={index === 0}
                    aria-label={`Move "${item.text}" up`}
                    className="p-1.5 rounded-xl bg-slate-100 hover:bg-emerald-100 disabled:opacity-30 disabled:hover:bg-slate-100 text-slate-700 hover:text-emerald-800 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={() => moveItem(index, index + 1)}
                    disabled={index === currentItems.length - 1}
                    aria-label={`Move "${item.text}" down`}
                    className="p-1.5 rounded-xl bg-slate-100 hover:bg-emerald-100 disabled:opacity-30 disabled:hover:bg-slate-100 text-slate-700 hover:text-emerald-800 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-emerald-200/60">
        <div className="text-sm font-semibold text-slate-700">
          {isChecked && (
            <span
              className={
                isAllCorrect ? "text-emerald-700 font-extrabold" : "text-slate-700"
              }
            >
              Score: {correctCount} of {currentItems.length} correct
            </span>
          )}
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto shadow-emerald-600/30"
            onClick={handleCheckOrder}
          >
            Check Order ✨
          </Button>
        </div>
      </div>

      {/* Celebration Result Modal */}
      {isSuccessModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border-4 border-emerald-400 text-center transform transition-all scale-100">
            <div className="text-6xl mb-3 animate-bounce">🎉</div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              Masha'Allah! Perfect!
            </h3>
            <p className="text-slate-600 text-sm sm:text-base font-medium mb-4">
              You correctly arranged all steps in the right order!
            </p>

            {/* Star Rating */}
            <div className="flex justify-center items-center gap-1.5 text-3xl mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < starsCount
                      ? "text-amber-400 filter drop-shadow-xs"
                      : "text-slate-300"
                  }
                >
                  ★
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={handleReset}
              >
                Play Again 🔄
              </Button>
              <Button
                variant="ghost"
                size="md"
                className="w-full"
                onClick={() => setIsSuccessModalOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
