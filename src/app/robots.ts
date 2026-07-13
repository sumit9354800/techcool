import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://mrtechycool.in/sitemap.xml",

    host: "https://mrtechycool.in",
  };
}
