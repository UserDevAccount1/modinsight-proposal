<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ChevronDown, Sparkles } from 'lucide-vue-next'
import { usePresentationStore } from '@/stores/presentation'

const store = usePresentationStore()
const show = ref(false)

onMounted(() => {
  setTimeout(() => { show.value = true }, 100)
})
</script>

<template>
  <div class="relative h-full w-full flex items-center justify-center animated-bg dot-grid overflow-hidden">
    <!-- Decorative orbs -->
    <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
    <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full blur-3xl" />

    <div class="relative z-10 text-center max-w-4xl px-8">
      <transition name="fade">
        <div v-if="show">
          <div class="flex items-center justify-center gap-2 mb-6">
            <Sparkles :size="20" class="text-primary-400" />
            <span class="text-sm font-medium tracking-widest uppercase text-primary-400">Full-Stack Developer Proposal</span>
            <Sparkles :size="20" class="text-primary-400" />
          </div>

          <h1 class="text-6xl md:text-8xl font-black tracking-tight mb-6">
            <span class="gradient-text">ModInsight</span>
          </h1>

          <p class="text-xl md:text-2xl text-text-muted font-light mb-4 max-w-2xl mx-auto">
            Deep Analysis. Technical Vision. Actionable Roadmap.
          </p>

          <p class="text-base text-text-dim mb-12">
            A comprehensive platform assessment and development proposal
          </p>

          <div class="flex items-center justify-center gap-4 mb-16">
            <div class="glass px-5 py-2.5 rounded-full text-sm">
              <span class="text-text-muted">by</span>
              <span class="text-text-primary font-semibold ml-1">Gabriel</span>
            </div>
            <div class="glass px-5 py-2.5 rounded-full text-sm text-text-muted">
              April 2026
            </div>
          </div>

          <button
            @click="store.next()"
            class="inline-flex items-center gap-2 text-text-dim hover:text-primary-400 transition-colors"
          >
            <span class="text-sm">Begin Presentation</span>
            <ChevronDown :size="18" class="pulse-soft" />
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active { transition: all 1s ease; }
.fade-enter-from { opacity: 0; transform: translateY(20px); }
</style>
