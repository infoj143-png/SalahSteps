import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "default" | "muted" | "primary" | "card";
}

export function Section({
  children,
  className = "",
  id,
  background = "default",
}: SectionProps) {
  const bgClasses = {
    default: "bg-[#fdfbf7]",
    muted: "bg-teal-50/40",
    primary: "bg-emerald-800 text-white",
    card: "bg-white border-y border-slate-100",
  };

  return (
    <section
      id={id}
      className={`py-12 md:py-16 ${bgClasses[background]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
