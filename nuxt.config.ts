// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'and period',
    },
  },
  devtools: { enabled: true },
  ssr: true,
  srcDir: 'src',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
});
