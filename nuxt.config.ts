// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '株式会社アンドピリオド and period',
      meta: [
        {
          name: 'description',
          content:
            'and periodはライブ配信で全国の「ふるさと」を感じながら新しい購買体験が可能となるオンラインマルシェサービス「ふるマル」を中心としたシステム開発事業・販路開拓事業・フードロス対策事業など生産者・消費者双方に寄り添ったサービスの展開を行っています。',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'and period' },
        {
          property: 'og:image',
          content: 'https://www.and-period.co.jp/img/ogp.png',
        },
      ],
    },
  },
  devtools: { enabled: true },
  ssr: true,
  srcDir: 'src',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
});
