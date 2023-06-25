import { serverQueryContent } from '#content/server';
import { SitemapStream, streamToPromise } from 'sitemap';
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const docs = await serverQueryContent(event).find();
  const sitemap = new SitemapStream({
    hostname: 'https://www.and-period.co.jp/',
  });

  for (const doc of docs) {
    sitemap.write({
      url: doc._path,
      changefreq: 'monthly',
    });
  }
  sitemap.end();

  return streamToPromise(sitemap);
});
