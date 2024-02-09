<script setup>
import cc from '@/components/About.vue';
import { useAllStore } from '~/stores/all';

// const { count, addCount } = useAddCount()
const { $hello } = useNuxtApp();
const store = useAllStore();
const time = new Date();
const selectedDate = ref(time);
</script>

<template>
  <div>
    <h1>點擊增加現的數字 : {{ store.number }}</h1>
    <ClientOnly>
      <h2>{{ $hello('神人') }}</h2>
    </ClientOnly>
    <h2 v-timeFormat="time.getTime()"></h2>
    <VDatePicker v-model="selectedDate" />
    <button @click="store.plus">點擊</button>
    <Home />

    <cc />
  </div>
</template>

<style scoped></style>
