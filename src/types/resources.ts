export type ResourceCategory = "salah" | "wudu" | "printable" | "parent" | "practice";

export type ResourceType =
  | "Guide"
  | "Printable Chart"
  | "Checklist"
  | "Flashcards"
  | "Practice Sheet";

export type ResourceAudience =
  | "Kids & Parents"
  | "Parents & Teachers"
  | "Young Learners (Ages 4-7)"
  | "Independent Learners (Ages 7+)";

export type ResourceStatus = "available" | "coming-soon";

export interface ResourceDetails {
  whatIsItFor: string;
  whoIsItFor: string;
  howToUse: string[];
  features?: string[];
}

export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  type: ResourceType;
  audience: ResourceAudience;
  status: ResourceStatus;
  isPrintable?: boolean;
  isDownloadable?: boolean;
  downloadUrl?: string; // Optional path to assets/pdf if available
  webRoute?: string;    // Interactive web route if applicable
  icon: string;
  tags: string[];
  details: ResourceDetails;
}
