// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxt/ui',
    '@nuxt/icon/module',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
})
