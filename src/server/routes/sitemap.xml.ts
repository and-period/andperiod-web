import { serverQueryContent } from '#content/server';
import { SitemapStream, streamToPromise } from 'sitemap';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: 'https://www.and-period.co.jp/',
  });

  const pages = [
    { url: '/' },
    { url: '/about' },
    { url: '/contact' },
    { url: '/news' },
    { url: '/services' },
  ];

  for (const page of pages) {
    sitemap.write({ ...page });
  }

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
