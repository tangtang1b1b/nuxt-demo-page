// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      viewport: 'width=500, initial-scale=1',
      title: 'Nuxt3 爽爽攻略',
      meta: [
        { name: 'description', content: '這是 Eric 的 Nuxt3 爽爽攻略' },
        { property: 'og:title', content: 'Nuxt3 爽爽攻略' },
        { property: 'og:url', content: 'http://localhost:3000/' },
        { property: 'og:description', content: '這是 Eric 的 Nuxt3 爽爽攻略' },
      ],
    },
  },
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true,
      },
    ],
  },
  imports: {
    dirs: ['stores'],
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
});
