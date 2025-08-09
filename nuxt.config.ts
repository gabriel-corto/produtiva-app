// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxt/fonts'],

  css: ['~/css/main.css'],
  ui: {
    colorMode: true,
    theme: {
      defaultVariants: {
        color: 'neutral',
        size: 'sm',
      },
    },
    prefix: 'P',
  },

  devServer: {
    port: 4000,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap',
        },
      ],
    },
  },
})
