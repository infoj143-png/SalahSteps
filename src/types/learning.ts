export type PostureIconType =
  | "niyyah"
  | "takbir"
  | "qiyam"
  | "ruku"
  | "rising"
  | "sujood"
  | "sitting"
  | "salam"
  | "wudu-hands"
  | "wudu-mouth"
  | "wudu-nose"
  | "wudu-face"
  | "wudu-arms"
  | "wudu-head"
  | "wudu-ears"
  | "wudu-feet"
  | "wudu-dua";

export interface StepItem {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  rakatLabel?: string; // e.g., "Preparation", "Rakat 1", "Rakat 2", "First Sitting", "Rakat 3", "Final Sitting"
  iconType: PostureIconType;
  illustrationDescription?: string;
  arabicText?: string;
  transliteration?: string;
  translation?: string;
  tips?: string[];
  whatToSayTitle?: string; // e.g. "What to say in Ruku"
}

export interface LessonData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "salah" | "wudu";
  totalSteps: number;
  rakatCount?: number;
  steps: StepItem[];
}
