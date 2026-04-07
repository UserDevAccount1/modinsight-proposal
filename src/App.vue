<script setup lang="ts">
import { defineAsyncComponent, computed, ref, watch, nextTick } from 'vue'
import { useSlideNavigation } from '@/composables/useSlideNavigation'
import ProgressBar from '@/components/presentation/ProgressBar.vue'
import SlideNavigation from '@/components/presentation/SlideNavigation.vue'
import { ChevronDown } from 'lucide-vue-next'

const store = useSlideNavigation()

const slides = [
  defineAsyncComponent(() => import('@/slides/S01CoverSlide.vue')),
  defineAsyncComponent(() => import('@/slides/S02BusinessAnalysis.vue')),
  defineAsyncComponent(() => import('@/slides/S03ProductDeepDive.vue')),
  defineAsyncComponent(() => import('@/slides/S04ArchitectureAssessment.vue')),
  defineAsyncComponent(() => import('@/slides/S05GapAnalysis.vue')),
  defineAsyncComponent(() => import('@/slides/S06TechnicalProposal.vue')),
  defineAsyncComponent(() => import('@/slides/S07AIAgentArchitecture.vue')),
  defineAsyncComponent(() => import('@/slides/S08ImplementationRoadmap.vue')),
  defineAsyncComponent(() => import('@/slides/S09WhyMe.vue')),
  defineAsyncComponent(() => import('@/slides/S10ContactCTA.vue')),
]

const transitionName = computed(() =>
  store.direction === 'forward' ? 'slide-forward' : 'slide-backward'
)

// Scroll indicator: show when slide has more content below
const hasMoreContent = ref(false)
const slideContainer = ref<HTMLElement | null>(null)

function checkScroll() {
  const el = slideContainer.value?.querySelector('[class*="overflow-y-auto"]') as HTMLElement | null
  if (el) {
    hasMoreContent.value = el.scrollHeight > el.clientHeight + 10 && el.scrollTop < el.scrollHeight - el.clientHeight - 20
  } else {
    hasMoreContent.value = false
  }
}

watch(() => store.currentSlide, () => {
  hasMoreContent.value = false
  nextTick(() => {
    setTimeout(checkScroll, 300)
  })
})

function onSlideScroll() {
  checkScroll()
}
</script>

<template>
  <div class="fixed inset-0 flex flex-col bg-surface-950">
    <ProgressBar />

    <div class="flex-1 relative overflow-hidden" ref="slideContainer">
      <Transition :name="transitionName" mode="out-in">
        <div
          :key="store.currentSlide"
          class="absolute inset-0"
          @scroll.capture="onSlideScroll"
        >
          <component :is="slides[store.currentSlide]" />
        </div>
      </Transition>

      <!-- Scroll down indicator -->
      <Transition name="fade">
        <div
          v-if="hasMoreContent"
          class="absolute bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-1 pointer-events-none"
        >
          <span class="text-[10px] text-text-dim tracking-wider uppercase">Scroll down</span>
          <ChevronDown :size="16" class="text-primary-400 pulse-soft" />
        </div>
      </Transition>
    </div>

    <SlideNavigation />
  </div>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
