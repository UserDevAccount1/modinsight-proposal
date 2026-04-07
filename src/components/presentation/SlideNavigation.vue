<script setup lang="ts">
import { usePresentationStore } from '@/stores/presentation'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const store = usePresentationStore()
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex items-center gap-3">
    <span class="text-xs text-text-dim font-mono mr-2">
      {{ store.currentSlide + 1 }} / {{ store.totalSlides }}
    </span>

    <div class="flex gap-1.5">
      <button
        v-for="i in store.totalSlides"
        :key="i"
        @click="store.goTo(i - 1)"
        class="w-2 h-2 rounded-full transition-all duration-300"
        :class="[
          i - 1 === store.currentSlide
            ? 'bg-primary-400 w-6'
            : 'bg-surface-600 hover:bg-surface-500'
        ]"
      />
    </div>

    <div class="flex gap-1 ml-2">
      <button
        @click="store.prev()"
        :disabled="store.isFirst"
        class="p-1.5 rounded-lg glass transition-all hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronLeft :size="16" />
      </button>
      <button
        @click="store.next()"
        :disabled="store.isLast"
        class="p-1.5 rounded-lg glass transition-all hover:bg-white/10 disabled:opacity-20 disabled:cursor-not-allowed"
      >
        <ChevronRight :size="16" />
      </button>
    </div>
  </div>
</template>
