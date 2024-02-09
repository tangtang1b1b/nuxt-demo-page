import { defineStore } from 'pinia';

export const useAllStore = defineStore('all', () => {
  const number = ref(0);

  const plus = () => {
    number.value++;
  };

  return{
    number,
    plus
  }
});
