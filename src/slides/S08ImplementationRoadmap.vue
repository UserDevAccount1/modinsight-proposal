<script setup lang="ts">
import { ref } from 'vue'
import { roadmap } from '@/data/roadmap'
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-vue-next'

const expandedPhase = ref<number | null>(null)

const phaseColors = [
  'border-blue-500 bg-blue-500/10',
  'border-purple-500 bg-purple-500/10',
  'border-amber-500 bg-amber-500/10',
  'border-green-500 bg-green-500/10',
]
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="min-h-full py-16 px-8 max-w-6xl mx-auto">
      <p class="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Slide 08</p>
      <h2 class="text-4xl font-bold gradient-text mb-2">Implementation Roadmap</h2>
      <p class="text-text-muted mb-8">16-week phased delivery plan — but I propose starting with a 2-week pilot first</p>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-accent-500/50 to-transparent" />

        <div class="space-y-6">
          <div
            v-for="(phase, i) in roadmap"
            :key="phase.phase"
            class="relative pl-16 cursor-pointer"
            @click="expandedPhase = expandedPhase === i ? null : i"
          >
            <!-- Timeline dot -->
            <div
              class="absolute left-4 top-6 w-5 h-5 rounded-full border-2 flex items-center justify-center"
              :class="phaseColors[i]"
            >
              <div class="w-2 h-2 rounded-full bg-current" />
            </div>

            <div class="glass p-6 transition-all hover:bg-white/3" :class="expandedPhase === i ? 'border-primary-500/20' : ''">
              <div class="flex items-start justify-between">
                <div>
                  <div class="text-xs font-mono text-text-dim mb-1">Phase {{ phase.phase }}</div>
                  <h3 class="text-xl font-bold text-text-primary">{{ phase.title }}</h3>
                  <div class="text-sm text-primary-400 mt-1">{{ phase.duration }}</div>
                </div>
                <component :is="expandedPhase === i ? ChevronUp : ChevronDown" :size="20" class="text-text-dim" />
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-1.5 mt-3">
                <span
                  v-for="tag in phase.tags"
                  :key="tag"
                  class="px-2 py-0.5 text-[10px] rounded-full bg-surface-700 text-text-dim font-medium"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Expanded: Deliverables -->
              <transition name="expand">
                <div v-if="expandedPhase === i" class="mt-4 pt-4 border-t border-white/5">
                  <div class="text-xs font-semibold uppercase tracking-wider text-text-dim mb-3">Deliverables</div>
                  <div class="space-y-2">
                    <div v-for="d in phase.deliverables" :key="d" class="flex items-start gap-2">
                      <CheckCircle :size="14" class="text-success shrink-0 mt-0.5" />
                      <span class="text-sm text-text-muted">{{ d }}</span>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="glass p-4 mt-6 border-primary-500/10">
        <p class="text-xs text-text-dim">
          <strong class="text-primary-400">Summary:</strong> 4 phases over 16 weeks — Foundation (API, DB, CI/CD, Vue shell), Core Intelligence (contract pipeline, RAG, redlining, dashboard), AI Agents & Integration (multi-agent orchestration, ERP/email connectors, self-service portal), and Scale & Polish (analytics, compliance, security, documentation). However, I propose starting with a 2-week zero-risk pilot on any single system before committing to the full roadmap.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.expand-enter-active, .expand-leave-active { transition: all 0.3s ease; overflow: hidden; }
.expand-enter-from, .expand-leave-to { max-height: 0; opacity: 0; }
.expand-enter-to, .expand-leave-from { max-height: 300px; opacity: 1; }
</style>
