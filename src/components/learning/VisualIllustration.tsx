import React from "react";
import { PostureIconType } from "@/types/learning";

interface VisualIllustrationProps {
  iconType: PostureIconType;
  description?: string;
  className?: string;
}

export function VisualIllustration({
  iconType,
  description,
  className = "",
}: VisualIllustrationProps) {
  // Render visual badges & child-friendly SVG illustrations for posture/action
  const renderGraphic = () => {
    switch (iconType) {
      case "niyyah":
        return (
          <svg className="w-16 h-16 text-emerald-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="18" r="8" fill="currentColor" fillOpacity="0.15" />
            <path d="M22 50c0-10 10-12 10-12s10 2 10 12" />
            <path d="M26 36c2 2 4 3 6 3s4-1 6-3" />
            <path d="M32 8v4M22 10l2 3M42 10l-2 3" />
          </svg>
        );

      case "takbir":
        return (
          <svg className="w-16 h-16 text-emerald-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="16" r="7" fill="currentColor" fillOpacity="0.15" />
            <path d="M18 28l6-6 4 4" />
            <path d="M46 28l-6-6-4 4" />
            <path d="M26 50v-16c0-2 2-4 6-4s6 2 6 4v16" />
          </svg>
        );

      case "qiyam":
        return (
          <svg className="w-16 h-16 text-emerald-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="16" r="7" fill="currentColor" fillOpacity="0.15" />
            <path d="M24 32c4-1 12-1 16 0" />
            <path d="M28 32v18" />
            <path d="M36 32v18" />
            <path d="M26 26c0 0 3 3 6 3s6-3 6-3" />
          </svg>
        );

      case "ruku":
        return (
          <svg className="w-16 h-16 text-emerald-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="20" cy="24" r="7" fill="currentColor" fillOpacity="0.15" />
            <path d="M20 31l20 0" />
            <path d="M40 31v19" />
            <path d="M36 31v19" />
            <path d="M28 31l-4 10" />
          </svg>
        );

      case "rising":
        return (
          <svg className="w-16 h-16 text-emerald-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="16" r="7" fill="currentColor" fillOpacity="0.15" />
            <path d="M26 32h12" />
            <path d="M28 32v18" />
            <path d="M36 32v18" />
            <path d="M32 6v-4M22 8l-3-3M42 8l3-3" />
          </svg>
        );

      case "sujood":
        return (
          <svg className="w-16 h-16 text-emerald-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="16" cy="40" r="6" fill="currentColor" fillOpacity="0.15" />
            <path d="M16 46h32" />
            <path d="M22 42c6-10 12-10 18-4" />
            <path d="M40 38l6 8" />
          </svg>
        );

      case "sitting":
        return (
          <svg className="w-16 h-16 text-emerald-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="28" cy="22" r="7" fill="currentColor" fillOpacity="0.15" />
            <path d="M28 29v12" />
            <path d="M20 45h20" />
            <path d="M28 35l6 2" />
          </svg>
        );

      case "salam":
        return (
          <svg className="w-16 h-16 text-emerald-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="20" r="7" fill="currentColor" fillOpacity="0.15" />
            <path d="M32 27v14" />
            <path d="M24 41h16" />
            <path d="M36 20l6-2M42 18l3 3" />
          </svg>
        );

      case "wudu-hands":
        return (
          <svg className="w-16 h-16 text-sky-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 40c2-8 6-12 12-12s10 4 12 12" />
            <path d="M24 24c0 0 3-8 8-8s8 8 8 8" fill="currentColor" fillOpacity="0.1" />
            <circle cx="32" cy="12" r="2" fill="currentColor" />
            <circle cx="26" cy="18" r="1.5" fill="currentColor" />
            <circle cx="38" cy="18" r="1.5" fill="currentColor" />
          </svg>
        );

      case "wudu-mouth":
      case "wudu-nose":
        return (
          <svg className="w-16 h-16 text-sky-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="24" r="12" fill="currentColor" fillOpacity="0.15" />
            <path d="M28 28c2 2 6 2 8 0" />
            <path d="M32 38v10" />
            <circle cx="32" cy="52" r="3" />
          </svg>
        );

      case "wudu-face":
        return (
          <svg className="w-16 h-16 text-sky-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="32" cy="28" rx="14" ry="18" fill="currentColor" fillOpacity="0.15" />
            <path d="M20 20c4-4 20-4 24 0" />
            <path d="M14 28c-4 0-4 12 0 12" />
            <path d="M50 28c4 0 4 12 0 12" />
          </svg>
        );

      case "wudu-arms":
        return (
          <svg className="w-16 h-16 text-sky-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 20l24 16v12l-24-16z" fill="currentColor" fillOpacity="0.15" />
            <path d="M40 36l8 12" />
            <path d="M20 16l4 4" />
          </svg>
        );

      case "wudu-head":
      case "wudu-ears":
        return (
          <svg className="w-16 h-16 text-sky-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="30" r="14" fill="currentColor" fillOpacity="0.15" />
            <path d="M18 24c6-8 22-8 28 0" />
            <path d="M22 18c4-4 16-4 20 0" strokeDasharray="3 3" />
          </svg>
        );

      case "wudu-feet":
        return (
          <svg className="w-16 h-16 text-sky-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 18v22l18 6 6-4-10-8V18z" fill="currentColor" fillOpacity="0.15" />
            <circle cx="28" cy="48" r="2" fill="currentColor" />
            <circle cx="34" cy="46" r="2" fill="currentColor" />
          </svg>
        );

      case "wudu-dua":
      default:
        return (
          <svg className="w-16 h-16 text-emerald-600" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 42c0-8 6-12 12-12s12 4 12 12" fill="currentColor" fillOpacity="0.1" />
            <path d="M24 24l4 4 12-12" />
          </svg>
        );
    }
  };

  const isWudu = iconType.startsWith("wudu");

  return (
    <div className={`w-full aspect-4/3 rounded-2xl ${isWudu ? 'bg-gradient-to-br from-sky-50 via-teal-50/50 to-blue-50/30 border-sky-100' : 'bg-gradient-to-br from-emerald-50 via-teal-50/50 to-amber-50/30 border-emerald-100'} border flex flex-col items-center justify-center p-4 text-center shadow-2xs relative group overflow-hidden ${className}`}>
      <div className="w-20 h-20 rounded-2xl bg-white/90 shadow-xs flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
        {renderGraphic()}
      </div>
      {description && (
        <span className={`text-xs ${isWudu ? 'text-sky-950/80' : 'text-emerald-950/80'} font-medium px-2.5 py-0.5 rounded-md bg-white/80 backdrop-blur-xs`}>
          {description}
        </span>
      )}
    </div>
  );
}
