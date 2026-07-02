import type { MetadataRoute } from "next";
import { chapters } from "@/content/chapters";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/quiz", "/method", "/about"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
  const chapterPages = chapters.map((c) => ({
    url: `${site.url}/chapters/${c.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...staticPages, ...chapterPages];
}
