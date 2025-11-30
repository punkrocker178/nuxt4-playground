// https://nuxt.com/docs/api/configuration/nuxt-config
import { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  build: { 
    transpile: ['vuetify'] 
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
