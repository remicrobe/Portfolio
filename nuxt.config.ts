// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  css: [
    'vuetify/lib/styles/main.sass',
    "@mdi/font/css/materialdesignicons.css",
  ],
  build: {
    transpile: ['vuetify']
  },
  modules: [
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins ||= [];
        config.plugins.push(vuetify());
      });
    },
    '@nuxtjs/i18n'],
  devtools: {enabled: true},
  ssr: false,
  target: 'static'
});
