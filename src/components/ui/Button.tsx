import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

  const sizeClasses = {
    sm: "px-3.5 py-2 text-xs shadow-2xs gap-1.5",
    md: "px-5 py-2.5 text-sm shadow-xs gap-2",
    lg: "px-7 py-3.5 text-base shadow-sm gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-700/20 active:bg-emerald-800",
    secondary:
      "bg-sky-600 hover:bg-sky-700 text-white shadow-sky-600/20 active:bg-sky-800",
    outline:
      "border-2 border-emerald-600 text-emerald-800 bg-emerald-50/50 hover:bg-emerald-100/70 focus:ring-emerald-600",
    ghost:
      "text-slate-700 hover:bg-slate-100 hover:text-slate-900 bg-transparent",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
