import React from "react";
import Link from "next/link";
import { ResourceCard } from "./ResourceCard";
import { ResourceItem } from "@/types/resources";

interface PrintableResourceCardProps {
  title: string;
  description: string;
  format?: string;
  href?: string;
  status?: "available" | "coming-soon";
}

export function PrintableResourceCard({
  title,
  description,
  format = "Printable Chart",
  href,
  status = "available",
}: PrintableResourceCardProps) {
  const isAvailable = status === "available" && Boolean(href) && href !== "#";

  const syntheticResource: ResourceItem = {
    id: title.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    slug: href ? href.replace(/^\//, "") : title.toLowerCase().replace(/[^a-z0-9]/g, "-"),
    title,
    description,
    category: "printable",
    type: (format as any) || "Printable Chart",
    audience: "Kids & Parents",
    status,
    isPrintable: true,
    isDownloadable: status === "coming-soon",
    webRoute: href,
    icon: "📄",
    tags: ["Printable", "Chart"],
    details: {
      whatIsItFor: description,
      whoIsItFor: "Kids learning Salah and Wudu.",
      howToUse: ["Print directly from browser or view page."],
    },
  };

  return <ResourceCard resource={syntheticResource} />;
}
