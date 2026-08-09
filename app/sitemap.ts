import type { MetadataRoute } from "next";

const siteUrl = "https://sreekhushitravels.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/tariffs",
    "/fleet",
    "/temple-tours",
    "/faq",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/services" || route === "/contact" ? 0.9 : 0.7,
  }));
}
