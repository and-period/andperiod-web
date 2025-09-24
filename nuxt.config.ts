// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityVersion: 4,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: '株式会社アンドピリオド and period',
      meta: [
        {
          name: 'theme-color',
          content: '#64C4D7',
        },
        {
          name: 'description',
          content:
            '株式会社アンドピリオド（and period）はライブ配信で全国の「ふるさと」を感じながら新しい購買体験が可能となるオンラインマルシェサービス「ふるマル」を中心としたシステム開発事業・販路開拓事業・フードロス対策事業など生産者・消費者双方に寄り添ったサービスの展開を行っています。',
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
    preset: 'aws-amplify',
    prerender: {
      routes: ['/sitemap.xml'],
    },
    awsAmplify: {
      runtime: 'nodejs20.x',
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ['@vitejs/plugin-vue']
    },
    build: {
      rollupOptions: {
        external: [/^\/img\//]
      }
    }
  },
})
