import dayjs from 'dayjs'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('timeFormat',{
    mounted(el, binding){
      const time = dayjs(binding.value).format('YYYY年MM月DD日')
      el.textContent = `今天日期 ${time}`
    }
  })
});
