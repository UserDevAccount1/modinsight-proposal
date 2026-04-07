<script setup lang="ts">
defineProps<{
  label: string
  active?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>

<template>
  <button
    @click="$emit('click')"
    class="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300"
    :class="[
      active
        ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
        : 'bg-surface-800 text-text-muted hover:bg-surface-700 hover:text-text-primary'
    ]"
  >
    {{ label }}
  </button>
</template>
