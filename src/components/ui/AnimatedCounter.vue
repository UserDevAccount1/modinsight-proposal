<script setup lang="ts">
import { useCountUp } from '@/composables/useCountUp'
import { useAnimateOnVisible } from '@/composables/useAnimateOnVisible'

const props = withDefaults(defineProps<{
  target: number
  prefix?: string
  suffix?: string
  duration?: number
}>(), {
  prefix: '',
  suffix: '',
  duration: 2000,
})

const { elementRef, isVisible } = useAnimateOnVisible()
const count = useCountUp(props.target, isVisible, props.duration)
</script>

<template>
  <span ref="elementRef" class="counter-glow tabular-nums">
    {{ prefix }}{{ count.toLocaleString() }}{{ suffix }}
  </span>
</template>
