import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Cloud Security and DevOps Blog | Chirag Gulati',
    description: 'Insights on cloud architecture, DevSecOps, Kubernetes, and scalable system design from a Senior Software Engineer.',
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en</language>`,
  });
}