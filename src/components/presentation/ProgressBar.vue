<script setup lang="ts">
import { usePresentationStore } from '@/stores/presentation'

const store = usePresentationStore()
</script>

<template>
  <div class="fixed top-0 left-0 right-0 z-50 h-[3px] bg-surface-900">
    <div
      class="h-full transition-all duration-500 ease-out"
      :style="{
        width: `${store.progress}%`,
        background: 'linear-gradient(90deg, var(--color-primary-500), var(--color-accent-500))'
      }"
    />
  </div>
</template>
