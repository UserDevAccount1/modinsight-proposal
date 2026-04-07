<script setup lang="ts">
import { modCounselMetrics, modCounselServices, evolutionTimeline, companyFacts } from '@/data/business'
import MetricCard from '@/components/ui/MetricCard.vue'
import { ArrowRight, MapPin, Users, Calendar, DollarSign } from 'lucide-vue-next'
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="min-h-full flex flex-col justify-start py-16 px-8 max-w-6xl mx-auto">
      <div class="mb-10">
        <h2 class="text-4xl font-bold mb-2">
          <span class="gradient-text">ModCounsel</span>
          <ArrowRight :size="28" class="inline mx-3 text-text-dim" />
          <span class="gradient-text">ModInsight</span>
        </h2>
        <p class="text-text-muted">From legal services firm to AI-powered platform</p>
      </div>

      <!-- Metrics Row -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <MetricCard
          v-for="m in modCounselMetrics"
          :key="m.label"
          :label="m.label"
          :value="m.value"
          :prefix="m.prefix"
          :suffix="m.suffix"
          :description="m.description"
        />
      </div>

      <!-- Two Columns: Services + Company Facts -->
      <div class="grid md:grid-cols-2 gap-6 mb-10">
        <!-- Services -->
        <div class="glass p-6">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Three Service Pillars</h3>
          <div class="space-y-4">
            <div v-for="s in modCounselServices" :key="s.title" class="flex gap-3">
              <div class="w-2 h-2 mt-2 rounded-full bg-primary-400 shrink-0" />
              <div>
                <div class="font-medium text-text-primary">{{ s.title }}</div>
                <div class="text-sm text-text-muted">{{ s.description }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Company Facts -->
        <div class="glass p-6">
          <h3 class="text-lg font-semibold mb-4 text-text-primary">Company Profile</h3>
          <div class="space-y-3 text-sm">
            <div class="flex items-start gap-3">
              <MapPin :size="16" class="text-primary-400 mt-0.5 shrink-0" />
              <div>
                <div class="text-text-muted">Global Presence</div>
                <div class="text-text-primary">{{ companyFacts.offices.join(' / ') }}</div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Users :size="16" class="text-primary-400 mt-0.5 shrink-0" />
              <div>
                <div class="text-text-muted">Team</div>
                <div class="text-text-primary">{{ companyFacts.teamSize }}</div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <DollarSign :size="16" class="text-primary-400 mt-0.5 shrink-0" />
              <div>
                <div class="text-text-muted">Pricing</div>
                <div class="text-text-primary">{{ companyFacts.pricingModel }}</div>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <Calendar :size="16" class="text-primary-400 mt-0.5 shrink-0" />
              <div>
                <div class="text-text-muted">Entry Point</div>
                <div class="text-text-primary">{{ companyFacts.entryPoint }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Evolution Timeline -->
      <div class="glass p-6">
        <h3 class="text-lg font-semibold mb-4 text-text-primary">Evolution Timeline</h3>
        <div class="flex flex-wrap gap-3">
          <div
            v-for="(t, i) in evolutionTimeline"
            :key="t.year"
            class="flex items-center gap-3"
          >
            <div class="glass px-4 py-3 hover:bg-white/5 transition-colors">
              <div class="text-primary-400 font-bold text-sm">{{ t.year }}</div>
              <div class="text-text-primary text-sm font-medium">{{ t.event }}</div>
              <div class="text-text-dim text-xs">{{ t.detail }}</div>
            </div>
            <ArrowRight v-if="i < evolutionTimeline.length - 1" :size="16" class="text-surface-600 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
