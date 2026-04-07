<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  severity?: 'critical' | 'high' | 'medium'
}>()

const cardRef = ref<HTMLElement | null>(null)

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  cardRef.value.style.setProperty('--glow-x', `${x}%`)
  cardRef.value.style.setProperty('--glow-y', `${y}%`)
}
</script>

<template>
  <div
    ref="cardRef"
    @mousemove="handleMouseMove"
    class="glass glow-card p-5 transition-all duration-300 hover:border-white/10"
  >
    <div class="relative z-10">
      <div
        v-if="severity"
        class="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider mb-3"
        :class="{
          'bg-danger/20 text-red-400': severity === 'critical',
          'bg-warning/20 text-amber-400': severity === 'high',
          'bg-primary-500/20 text-primary-300': severity === 'medium',
        }"
      >
        {{ severity }}
      </div>
      <slot />
    </div>
  </div>
</template>
