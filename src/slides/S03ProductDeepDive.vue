<script setup lang="ts">
import { ref, computed } from 'vue'
import { features, categoryLabels, featureCounts } from '@/data/features'
import type { FeatureCategory } from '@/types/slides'
import CategoryPill from '@/components/ui/CategoryPill.vue'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

const activeCategory = ref<FeatureCategory | 'all'>('all')
const expandedId = ref<string | null>(null)

const categories: (FeatureCategory | 'all')[] = ['all', 'core', 'sales', 'finance', 'compliance', 'backoffice', 'output']

const filteredFeatures = computed(() =>
  activeCategory.value === 'all'
    ? features
    : features.filter(f => f.category === activeCategory.value)
)

function toggleExpand(id: string) {
  expandedId.value = expandedId.value === id ? null : id
}

function getCategoryLabel(c: FeatureCategory | 'all') {
  return c === 'all' ? 'All Features' : categoryLabels[c]
}

const priorityColors: Record<string, string> = {
  P0: 'bg-red-500/20 text-red-400',
  P1: 'bg-amber-500/20 text-amber-400',
  P2: 'bg-blue-500/20 text-blue-400',
  P3: 'bg-surface-700 text-text-dim',
}
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="min-h-full py-16 px-8 max-w-6xl mx-auto">
      <div class="flex items-end justify-between mb-4">
        <div>
          <p class="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Slide 03</p>
          <h2 class="text-4xl font-bold gradient-text mb-2">Product Deep Dive</h2>
          <p class="text-text-muted">37 publicly <strong class="text-amber-400">claimed</strong> features from modInsight.ai — as of April 2026</p>
        </div>
        <div class="text-5xl font-black gradient-text">
          <AnimatedCounter :target="37" />
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="glass p-3 mb-6 border-amber-500/10">
        <p class="text-xs text-text-muted">
          <strong class="text-amber-400">Source:</strong> These features are extracted directly from
          <strong class="text-text-primary">modinsight.ai</strong> public website. They represent what ModInsight
          claims to offer — not an internal audit. Actual implementation may differ or be more advanced.
        </p>
      </div>

      <!-- Category Tabs -->
      <div class="flex flex-wrap gap-2 mb-8">
        <CategoryPill
          v-for="c in categories"
          :key="c"
          :label="getCategoryLabel(c)"
          :active="activeCategory === c"
          @click="activeCategory = c"
        />
      </div>

      <!-- Feature Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div
          v-for="f in filteredFeatures"
          :key="f.id"
          class="glass glow-card cursor-pointer transition-all duration-300 hover:border-white/10"
          @click="toggleExpand(f.id)"
        >
          <div class="p-4 relative z-10">
            <div class="flex items-start justify-between mb-2">
              <span class="text-xs font-mono text-text-dim">{{ f.id }}</span>
              <span :class="[priorityColors[f.priority], 'text-[10px] font-bold px-1.5 py-0.5 rounded']">
                {{ f.priority }}
              </span>
            </div>
            <h4 class="font-semibold text-sm text-text-primary mb-1">{{ f.name }}</h4>

            <transition name="expand">
              <div v-if="expandedId === f.id" class="mt-2 pt-2 border-t border-white/5">
                <p class="text-xs text-text-muted">{{ f.description }}</p>
                <div class="mt-2">
                  <span class="text-[10px] px-2 py-0.5 rounded-full bg-surface-700 text-text-dim">
                    {{ categoryLabels[f.category] }}
                  </span>
                </div>
              </div>
            </transition>

            <component :is="expandedId === f.id ? ChevronUp : ChevronDown" :size="14" class="text-text-dim mt-2" />
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="glass p-4 mt-6 mb-4 border-primary-500/10">
        <p class="text-xs text-text-dim">
          <strong class="text-primary-400">Summary:</strong> ModInsight publicly claims 37 features across 6 categories — Core Platform (6), Sales Process (5), Finance (6), Compliance & Legal (9), Back Office (6), and Output Claims (5). These are marketing claims from their website, not verified capabilities. The strongest claims include contract redlining, intelligent repository with AI chat, and a 90% operations impact boost backed by the Kandji testimonial.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to, .expand-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
