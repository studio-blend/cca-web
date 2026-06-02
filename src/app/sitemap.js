export default async function sitemap() {
  const baseUrl = "https://crystalclearacademy.in";

  // Static routes
  const routes = [
    "",
    "/foundations",
    "/aspire",
    "/launchpad",
    "/pathways",
    "/about",
    "/blog",
    "/resources",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  return [...routes];
}
