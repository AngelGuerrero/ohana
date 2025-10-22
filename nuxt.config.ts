// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      title: 'Ohana - Postres, Frappés & Café',
      titleTemplate: '%s',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Ohana - Endulza tus momentos con nuestros postres artesanales, frappés, cafés y crepas deliciosas.',
        },
        {
          name: 'keywords',
          content: 'ohana, postres, frappés, café, crepas, dulces, bebidas',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/fonts',
    'nuxt-lodash',
    '@nuxt/image',
  ],

  fonts: {
    families: [
      { name: 'Poppins', provider: 'google', weights: [300, 400, 500, 600, 700, 800] },
    ],
  },
});
