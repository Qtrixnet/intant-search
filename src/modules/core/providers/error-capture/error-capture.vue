<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'
import { ErrorTemplate } from '@core/components'

const isErrorShown = ref(false)

const reloadPage = () => window.location.reload()

onErrorCaptured(() => {
  isErrorShown.value = true
  return false
})
</script>

<template>
  <div v-if="isErrorShown" class="min-h-dvh flex items-center justify-center">
    <ErrorTemplate
      title="Что-то пошло не так..."
      error="500"
      text="Мы столкнулись с проблемой. Пожалуйста, попробуйте обновить страницу или вернитесь позже."
      buttonText="Обновить страницу"
      :buttonHandler="reloadPage"
    />
  </div>
  <slot v-else />
</template>
