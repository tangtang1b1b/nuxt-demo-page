<script setup>
const res = await useFetch('https://vue-lessons-api.vercel.app/seo/about');

useServerSeoMeta({
  title: () => `${res.data.value.title} - Nuxt3`,
  ogTitle: () => `${res.data.value.title} - Nuxt3`,
  description: () => `${res.data.value.description} - Nuxt3`,
  ogDescription: () => `${res.data.value.description} - Nuxt3`,
});

useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    },
  ],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js',
      async: true,
      tagPosition: 'bodyClose',
    },
  ],
});
const title = computed(() => res.data.value.title);
const description = computed(() => res.data.value.description);
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="description" />
    <Link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  </Head>
  <div>Page: about</div>
</template>

<style scoped></style>
