import type { MetadataRoute } from "next";

const baseUrl = "https://grillzoneoriginal.co.uk";

const routes = ["", "/menu", "/about", "/gallery", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/menu" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/menu" ? 0.9 : 0.7
  }));
}
