<script setup lang="ts">
import AnimatedCounter from './AnimatedCounter.vue'

defineProps<{
  label: string
  value: number
  prefix?: string
  suffix?: string
  description?: string
}>()
</script>

<template>
  <div class="glass glow-card p-6 text-center group hover:scale-105 transition-transform duration-300">
    <div class="relative z-10">
      <div class="text-3xl font-bold gradient-text mb-1">
        <AnimatedCounter :target="value" :prefix="prefix" :suffix="suffix" />
      </div>
      <div class="text-sm font-medium text-text-primary mb-1">{{ label }}</div>
      <div v-if="description" class="text-xs text-text-dim">{{ description }}</div>
    </div>
  </div>
</template>
