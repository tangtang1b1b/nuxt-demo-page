<script setup>
import axios from 'axios';

const { data } = await useAsyncData('banner', async () => {
  const res = await axios.get('https://api.github.com/orgs/nuxt');
  return res.data
});
</script>

<template>
  <div>
    <h1>{{ data }}</h1>
  </div>
</template>

<style scoped></style>
