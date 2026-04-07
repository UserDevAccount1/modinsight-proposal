<script setup lang="ts">
import { gaps } from '@/data/gaps'
import GlowCard from '@/components/ui/GlowCard.vue'
import { Eye, Target, Info } from 'lucide-vue-next'
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="min-h-full py-16 px-8 max-w-6xl mx-auto">
      <h2 class="text-4xl font-bold gradient-text mb-2">Gap Analysis</h2>
      <p class="text-text-muted mb-4">What's not on the website vs. what enterprise clients expect</p>

      <div class="glass flex items-start gap-3 p-4 mb-8 border-primary-500/20">
        <Info :size="18" class="text-primary-400 shrink-0 mt-0.5" />
        <p class="text-xs text-text-muted">
          These are observations based solely on publicly available information, not criticisms.
          ModInsight may already address these internally or have them on their roadmap.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-4">
        <GlowCard v-for="gap in gaps" :key="gap.title" :severity="gap.severity">
          <h4 class="font-semibold text-sm text-text-primary mb-3">{{ gap.title }}</h4>
          <div class="space-y-2">
            <div class="flex items-start gap-2">
              <Eye :size="14" class="text-text-dim shrink-0 mt-0.5" />
              <div>
                <div class="text-[10px] uppercase tracking-wider text-text-dim mb-0.5">What's Visible</div>
                <div class="text-xs text-text-muted">{{ gap.visible }}</div>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <Target :size="14" class="text-primary-400 shrink-0 mt-0.5" />
              <div>
                <div class="text-[10px] uppercase tracking-wider text-text-dim mb-0.5">What's Needed</div>
                <div class="text-xs text-text-muted">{{ gap.needed }}</div>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </div>
  </div>
</template>
