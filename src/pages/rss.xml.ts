import type { APIRoute } from "astro";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ params, request, site = "https://example.com" }) => {
  const blogPosts = await getCollection("blog");

  return rss({
    // stylesheet: "/styles/rss.xsl",
    title: "Astro RSS Feed",
    description: "Un simple blog de pruebas sobre mi con astro",
    site: site,
    items: blogPosts.map(({ data, slug }) => ({
      title: data.title,
      pubDate: data.date,
      description: data.description,
      link: `posts/${slug}`,
    })),
    customData: `<language>es-mx</language>`,
  });
};
