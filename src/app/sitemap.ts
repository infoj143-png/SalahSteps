import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/salah-for-kids",
    "/how-to-teach-kids-salah",
    "/wudu-for-kids",
    "/2-rakat-salah",
    "/3-rakat-salah",
    "/4-rakat-salah",
    "/what-to-say-in-salah",
    "/salah-duas-for-kids",
    "/salah-chart-for-kids",
    "/wudu-chart-for-kids",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
