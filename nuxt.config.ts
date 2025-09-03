// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
  ],
  googleFonts: {
    families: {
      'Noto+Sans': [400, 700],
      Lato: [300, 400, 700, 900],
      Lora: [400, 500, 600, 700], 
    }, display: 'swap',
  },
  css: ['@/assets/style/main.css'],
})