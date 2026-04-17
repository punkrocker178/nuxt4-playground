// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  runtimeConfig: {
    // Override via NUXT_AWS_REGION, NUXT_AWS_ACCESS_KEY_ID, etc. in .env
    awsRegion: 'ap-southeast-1',
    awsAccessKeyId: '',
    awsSecretAccessKey: '',
    sesFromAddress: '',
  },

  devtools: { enabled: true },

  build: { 
    transpile: ['vuetify'] 
  },

  vite: {
    plugins: [
      vuetify({ autoImport: true }),
    ],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  modules: ['@nuxt/eslint'],
});