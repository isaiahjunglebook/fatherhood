import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    id: "/",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#f6f2ea",
    theme_color: "#f6f2ea",
    categories: ["education", "lifestyle", "health"],
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icons/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    shortcuts: [
      {
        name: "Chapters",
        url: "/chapters",
        description: "Continue working through the six chapters",
      },
      {
        name: "Readiness quiz",
        url: "/quiz",
        description: "Take the 11-question readiness quiz",
      },
    ],
  };
}
