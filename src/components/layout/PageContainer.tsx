import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdfbf7]">
      <Header />
      <main className={`flex-1 ${className}`}>{children}</main>
      <Footer />
    </div>
  );
}
