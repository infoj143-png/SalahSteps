"use client";

import { useState, useEffect, useCallback } from "react";

export interface UseProgressReturn {
  isCompleted: boolean;
  toggleComplete: () => void;
}

export function useProgress(lessonId: string): UseProgressReturn {
  const key = `salahsteps_progress_${lessonId}`;
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined" || !lessonId) return;

    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) {
        setIsCompleted(JSON.parse(stored) === true);
      }
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
    }
  }, [key, lessonId]);

  const toggleComplete = useCallback(() => {
    setIsCompleted((prev) => {
      const nextState = !prev;
      if (typeof window !== "undefined" && lessonId) {
        try {
          localStorage.setItem(key, JSON.stringify(nextState));
        } catch (error) {
          console.error(`Error updating localStorage key "${key}":`, error);
        }
      }
      return nextState;
    });
  }, [key, lessonId]);

  return { isCompleted, toggleComplete };
}

export default useProgress;
