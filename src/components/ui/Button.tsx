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
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs shadow-xs",
    md: "px-4 py-2.5 text-sm shadow-xs",
    lg: "px-6 py-3.5 text-base shadow-sm",
  };

  const variantClasses = {
    primary:
      "bg-emerald-700 text-white hover:bg-emerald-800 focus:ring-emerald-600 active:bg-emerald-900",
    secondary:
      "bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500 active:bg-sky-800",
    outline:
      "border-2 border-emerald-700 text-emerald-800 bg-transparent hover:bg-emerald-50 focus:ring-emerald-600",
    ghost:
      "text-slate-700 hover:bg-slate-100 focus:ring-slate-400 bg-transparent",
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
