"use client";

import React from "react";

interface PrintButtonProps {
  label?: string;
  className?: string;
}

export function PrintButton({
  label = "Print Chart / Poster 🖨️",
  className = "",
}: PrintButtonProps) {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <button
      onClick={handlePrint}
      type="button"
      className={`inline-flex items-center justify-center px-5 py-2.5 text-xs md:text-sm font-bold rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs hover:shadow-md transition-all duration-150 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${className}`}
    >
      <span>{label}</span>
    </button>
  );
}
