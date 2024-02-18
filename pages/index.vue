<script setup>
import cc from '@/components/About.vue';
import { useAllStore } from '~/stores/all';

const { data } = await useFetch("https://jsonplaceholder.typicode.com/posts", {
 onRequest({ request, options }) {
   // 設置 request headers
   options.headers = options.headers || {};
   options.headers.authorization = `Bearer token`;
 },
 onResponse({ request, response, options }) {
   // 處理回傳資料
   return response._data;
 },
});

// const { count, addCount } = useAddCount()
const { $hello } = useNuxtApp();
const store = useAllStore();
const time = new Date();
const selectedDate = ref(time);

const fetchApi = async () => {
  const res = await fetch('/api/hello').then((res) => res.json());
  console.log(res);
};
</script>

<template>
  <div>
    <h1>點擊增加現的數字 : {{ store.number }}</h1>
    <NuxtLink to="/axiosGet">axiosGet</NuxtLink>
    <button @click="fetchApi">get hello api</button>
    <NuxtLink to="/about">about</NuxtLink>
    <ClientOnly>
      <h2>{{ $hello('神人') }}</h2>
    </ClientOnly>
    <NuxtLink to="/user">連結</NuxtLink>
    <h2 v-timeFormat="time.getTime()"></h2>
    <VDatePicker v-model="selectedDate" />
    <button @click="store.plus">點擊</button>
    <Home />

    <cc />
  </div>
</template>

<style scoped></style>
