export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      hello: (msg) => `哈囉${msg}先生`,
    },
  };
});
