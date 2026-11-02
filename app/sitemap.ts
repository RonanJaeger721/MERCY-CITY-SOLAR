import type { MetadataRoute } from "next";
import { business } from "@/lib/business";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/projects", "/contact", "/privacy"].map(
    (path) => ({
      url: `${business.origin}${path}`,
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    }),
  );
}
