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
        { name: 'robots', content: 'index, follow' },
        { name: 'author', content: 'Ohana' },
        { name: 'theme-color', content: '#111827' },
        { property: 'og:title', content: 'Ohana - Postres, Frappés & Café' },
        {
          property: 'og:description',
          content:
            'Endulza tus momentos con postres artesanales, crepas deliciosas y bebidas especiales.',
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'es' },
        { property: 'og:site_name', content: 'Ohana' },
        { property: 'og:image', content: '/img/store_front.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ohana - Postres, Frappés & Café' },
        {
          name: 'twitter:description',
          content:
            'Endulza tus momentos con postres artesanales, crepas deliciosas y bebidas especiales.',
        },
        { name: 'twitter:image', content: '/img/store_front.jpg' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Ohana',
            image: '/img/store_front.jpg',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Calle Corregidora 168, Centro histórico, Querétaro, Qro.',
            },
            servesCuisine: ['Postres', 'Crepas', 'Café'],
          }),
        },
      ],
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
