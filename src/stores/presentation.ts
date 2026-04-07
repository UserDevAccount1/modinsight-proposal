import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const usePresentationStore = defineStore('presentation', () => {
  const totalSlides = ref(10)
  const currentSlide = ref(0)
  const direction = ref<'forward' | 'backward'>('forward')
  const isTransitioning = ref(false)

  const progress = computed(() =>
    totalSlides.value > 1 ? (currentSlide.value / (totalSlides.value - 1)) * 100 : 0
  )

  const isFirst = computed(() => currentSlide.value === 0)
  const isLast = computed(() => currentSlide.value === totalSlides.value - 1)

  function goTo(index: number) {
    if (isTransitioning.value) return
    if (index < 0 || index >= totalSlides.value) return
    if (index === currentSlide.value) return

    direction.value = index > currentSlide.value ? 'forward' : 'backward'
    isTransitioning.value = true
    currentSlide.value = index

    setTimeout(() => {
      isTransitioning.value = false
    }, 550)
  }

  function next() {
    goTo(currentSlide.value + 1)
  }

  function prev() {
    goTo(currentSlide.value - 1)
  }

  function goFirst() {
    goTo(0)
  }

  function goLast() {
    goTo(totalSlides.value - 1)
  }

  return {
    totalSlides,
    currentSlide,
    direction,
    isTransitioning,
    progress,
    isFirst,
    isLast,
    goTo,
    next,
    prev,
    goFirst,
    goLast,
  }
})
