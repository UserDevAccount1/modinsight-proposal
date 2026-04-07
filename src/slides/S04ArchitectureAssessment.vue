<script setup lang="ts">
import { ref, computed } from 'vue'
import { architectureLayers, flowConnections, securityAgent, fullStackDevAgent } from '@/data/architecture'
import { featureAgentMap, operationalGaps } from '@/data/featureAgentMap'
import { categoryLabels } from '@/data/features'
import type { TierKey, FeatureCategory } from '@/types/slides'
import {
  AlertTriangle, ChevronDown, ChevronUp, CheckCircle2, Circle, Bot,
  ArrowDown, Shield, Layers, GitBranch, Workflow, Info, Lightbulb,
  Globe, Layout, Users, Smartphone,
  Server, Lock, Wrench, Database as DbIcon,
  Brain, Cpu, Search, PenTool,
  HardDrive, Zap, Boxes,
  Link, Mail, Calendar
} from 'lucide-vue-next'

// ─── Architecture layers state ───
const expandedLayer = ref<TierKey | null>(null)
const activeTab = ref<'checklist' | 'agent' | 'cicd'>('checklist')

function toggleLayer(id: TierKey) {
  expandedLayer.value = expandedLayer.value === id ? null : id
  activeTab.value = 'checklist'
}

// ─── Feature table state ───
const activeCategory = ref<FeatureCategory | 'all'>('all')
const expandedFeature = ref<string | null>(null)

const filteredMap = computed(() =>
  activeCategory.value === 'all'
    ? featureAgentMap
    : featureAgentMap.filter(f => f.category === activeCategory.value)
)

const subAgentTypeColors: Record<string, string> = {
  processing: 'bg-blue-500/15 text-blue-400',
  monitoring: 'bg-green-500/15 text-green-400',
  'self-healing': 'bg-pink-500/15 text-pink-400',
  quality: 'bg-amber-500/15 text-amber-400',
  routing: 'bg-cyan-500/15 text-cyan-400',
  extraction: 'bg-purple-500/15 text-purple-400',
  generation: 'bg-indigo-500/15 text-indigo-400',
  sync: 'bg-teal-500/15 text-teal-400',
}

const statusColors: Record<string, string> = {
  'likely-built': 'bg-green-500/15 text-green-400',
  'probably-built': 'bg-blue-500/15 text-blue-400',
  'possibly-built': 'bg-amber-500/15 text-amber-400',
  'uncertain': 'bg-red-500/15 text-red-400',
}

const statusLabels: Record<string, string> = {
  'likely-built': 'Likely Built',
  'probably-built': 'Probably Built',
  'possibly-built': 'Possibly Built',
  'uncertain': 'Uncertain',
}

const nodeIconMap: Record<string, any> = {
  Globe, Layout, Users, Smartphone,
  Server, Shield: Lock, GitBranch, Layers,
  Brain, Cpu, Search, Wrench,
  Database: DbIcon, Boxes, HardDrive, Zap,
  Link, Mail, PenTool, Calendar,
}

const opsColors: Record<string, string> = {
  DevOps: 'bg-blue-500/20 text-blue-400',
  MLOps: 'bg-purple-500/20 text-purple-400',
  DataOps: 'bg-amber-500/20 text-amber-400',
  SecOps: 'bg-red-500/20 text-red-400',
  FullStackOps: 'bg-green-500/20 text-green-400',
}

// Sections for scroll navigation
const activeSection = ref<'layers' | 'table' | 'gaps'>('layers')
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="min-h-full py-12 px-8 max-w-7xl mx-auto">
      <!-- ══════════════════════════════════════════ -->
      <!-- HEADER -->
      <!-- ══════════════════════════════════════════ -->
      <div class="mb-6">
        <p class="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Slide 04</p>
        <h2 class="text-4xl font-bold gradient-text mb-2">Predicted Architecture Assessment</h2>
        <p class="text-text-muted text-sm">
          Based on ModInsight's 37 public features, ModCounsel's service model, and the Full-Stack Developer job description
        </p>
      </div>

      <!-- ══════ CRITICAL DISCLAIMER ══════ -->
      <div class="glass p-5 mb-6 border-amber-500/20">
        <div class="flex items-start gap-3 mb-3">
          <AlertTriangle :size="20" class="text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div class="text-sm font-bold text-amber-400 mb-1">This Is a Predicted Assessment — Not an Actual Audit</div>
            <p class="text-xs text-text-muted mb-2">
              I <strong class="text-text-primary">assume ModInsight has already built all 37 claimed features</strong> and likely has
              sophisticated AI agents, Claude Code skills, MCP integrations, or custom automation in production.
              This assessment is a <strong class="text-text-primary">prediction</strong> of how their architecture might work based on:
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 ml-8">
          <div class="p-2 rounded bg-surface-900/50 text-[11px] text-text-dim text-center">
            The public feature list on modinsight.ai
          </div>
          <div class="p-2 rounded bg-surface-900/50 text-[11px] text-text-dim text-center">
            ModCounsel's service model and operations
          </div>
          <div class="p-2 rounded bg-surface-900/50 text-[11px] text-text-dim text-center">
            The Full-Stack Developer job description
          </div>
          <div class="p-2 rounded bg-surface-900/50 text-[11px] text-text-dim text-center">
            Standard legal-tech AI platform patterns
          </div>
        </div>
      </div>

      <!-- ══════ SECTION TABS ══════ -->
      <div class="flex gap-2 mb-6 sticky top-0 z-20 bg-surface-950/90 backdrop-blur-sm py-2 -mx-2 px-2">
        <button
          v-for="sec in ([
            { id: 'layers', label: 'Architecture Layers', count: '5 layers' },
            { id: 'table', label: 'Feature → Agent → Sub-agent Table', count: '37 features' },
            { id: 'gaps', label: 'What I Can Still Contribute', count: operationalGaps.length + ' opportunities' },
          ] as const)"
          :key="sec.id"
          @click="activeSection = sec.id"
          class="px-4 py-2 rounded-lg text-xs font-medium transition-all"
          :class="activeSection === sec.id
            ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
            : 'bg-surface-800 text-text-muted hover:bg-surface-700'"
        >
          {{ sec.label }}
          <span class="ml-1.5 opacity-60">({{ sec.count }})</span>
        </button>
      </div>

      <!-- ══════════════════════════════════════════ -->
      <!-- SECTION 1: ARCHITECTURE LAYERS -->
      <!-- ══════════════════════════════════════════ -->
      <div v-if="activeSection === 'layers'">
        <div class="space-y-3 mb-8">
          <div
            v-for="(layer, layerIdx) in architectureLayers"
            :key="layer.id"
            class="glass transition-all duration-300"
            :class="expandedLayer === layer.id ? 'border-primary-500/20' : ''"
          >
            <div
              class="p-4 cursor-pointer flex items-start gap-4 hover:bg-white/3 transition-colors"
              @click="toggleLayer(layer.id)"
            >
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
                :class="layer.color.replace('from-', 'bg-').split(' ')[0]"
              >
                {{ layerIdx + 1 }}
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1">
                  <h3 class="font-bold text-lg" :class="layer.textColor">{{ layer.label }}</h3>
                  <span :class="[opsColors[layer.agent.opsType], 'text-[10px] font-bold px-2 py-0.5 rounded-full']">
                    {{ layer.agent.opsType }}
                  </span>
                  <span class="text-[10px] italic text-text-dim ml-1">predicted</span>
                </div>
                <p class="text-xs text-text-muted mb-2">{{ layer.description }}</p>
                <div class="flex flex-wrap gap-1.5">
                  <div
                    v-for="node in layer.nodes"
                    :key="node.id"
                    class="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-800 text-[10px] text-text-dim"
                  >
                    <component :is="nodeIconMap[node.icon] || Globe" :size="10" />
                    {{ node.label }}
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <div class="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-surface-800 text-xs text-text-dim">
                  <Bot :size="12" class="text-primary-400" />
                  {{ layer.agent.name }}
                </div>
                <component :is="expandedLayer === layer.id ? ChevronUp : ChevronDown" :size="18" class="text-text-dim" />
              </div>
            </div>

            <transition name="expand">
              <div v-if="expandedLayer === layer.id" class="border-t border-white/5">
                <div class="flex border-b border-white/5">
                  <button
                    v-for="tab in (['checklist', 'agent', 'cicd'] as const)"
                    :key="tab"
                    @click="activeTab = tab"
                    class="px-4 py-2.5 text-xs font-medium transition-colors border-b-2"
                    :class="activeTab === tab
                      ? 'border-primary-400 text-primary-400'
                      : 'border-transparent text-text-dim hover:text-text-muted'"
                  >
                    {{ tab === 'checklist' ? 'Feature Checklist' : tab === 'agent' ? 'AI Agent (predicted)' : 'CI/CD Pipeline (predicted)' }}
                  </button>
                </div>

                <div class="p-5">
                  <div v-if="activeTab === 'checklist'">
                    <div class="space-y-2">
                      <div v-for="item in layer.checklist" :key="item.task" class="flex items-start gap-3 p-3 rounded-lg bg-surface-900/50">
                        <CheckCircle2 v-if="item.status === 'required'" :size="16" class="text-green-400 shrink-0 mt-0.5" />
                        <Circle v-else :size="16" :class="item.status === 'recommended' ? 'text-amber-400' : 'text-surface-500'" class="shrink-0 mt-0.5" />
                        <div class="flex-1 min-w-0">
                          <div class="text-sm font-medium text-text-primary">{{ item.task }}</div>
                          <div class="text-xs text-text-dim mt-0.5"><span class="text-text-muted">Handles:</span> {{ item.handles }}</div>
                        </div>
                        <span class="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded shrink-0"
                          :class="{ 'bg-green-500/15 text-green-400': item.status === 'required', 'bg-amber-500/15 text-amber-400': item.status === 'recommended', 'bg-surface-700 text-text-dim': item.status === 'optional' }">
                          {{ item.status }}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div v-if="activeTab === 'agent'">
                    <div class="flex items-start gap-4 mb-4">
                      <div class="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center shrink-0">
                        <Bot :size="24" class="text-primary-400" />
                      </div>
                      <div>
                        <h4 class="font-bold text-text-primary">{{ layer.agent.name }}</h4>
                        <p class="text-xs text-text-dim">{{ layer.agent.role }}</p>
                      </div>
                    </div>
                    <p class="text-sm text-text-muted mb-4">{{ layer.agent.description }}</p>
                    <div class="grid md:grid-cols-2 gap-1.5 mb-4">
                      <div v-for="r in layer.agent.responsibilities" :key="r" class="flex items-start gap-2 text-xs text-text-muted">
                        <CheckCircle2 :size="12" class="text-primary-400 shrink-0 mt-0.5" />
                        {{ r }}
                      </div>
                    </div>
                    <div class="p-3 rounded-lg bg-primary-600/5 border border-primary-500/10">
                      <div class="text-[10px] uppercase tracking-wider text-primary-400 mb-1">Job Description Alignment</div>
                      <p class="text-xs text-text-muted italic">{{ layer.agent.jobAlignment }}</p>
                    </div>
                  </div>

                  <div v-if="activeTab === 'cicd'">
                    <div class="flex items-center gap-2 mb-4">
                      <Workflow :size="18" class="text-primary-400" />
                      <h4 class="font-semibold text-text-primary text-sm">{{ layer.agent.opsType }} Pipeline (predicted)</h4>
                    </div>
                    <div class="space-y-2">
                      <div v-for="(task, i) in layer.agent.cicdTasks" :key="task" class="flex items-center gap-3 p-3 rounded-lg bg-surface-900/50">
                        <div class="w-6 h-6 rounded-full bg-surface-700 flex items-center justify-center text-[10px] font-bold text-text-dim shrink-0">{{ i + 1 }}</div>
                        <span class="text-sm text-text-muted">{{ task }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>

            <div v-if="layerIdx < architectureLayers.length - 1" class="flex justify-center -mb-1.5 -mt-1.5 relative z-10">
              <ArrowDown :size="16" class="text-surface-600" />
            </div>
          </div>
        </div>

        <!-- Data Flow -->
        <div class="glass p-5 mb-6">
          <h3 class="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
            <Workflow :size="16" class="text-primary-400" />
            Predicted Data Flow Connections
          </h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div v-for="conn in flowConnections" :key="`${conn.from}-${conn.to}`" class="flex items-center gap-2 p-2.5 rounded-lg bg-surface-900/50 text-xs">
              <span class="font-mono font-bold text-primary-400 uppercase">{{ conn.from }}</span>
              <ArrowDown :size="12" class="text-text-dim rotate-[-90deg]" />
              <span class="font-mono font-bold text-accent-400 uppercase">{{ conn.to }}</span>
              <span class="text-text-dim ml-auto">{{ conn.label }}</span>
            </div>
          </div>
        </div>

        <!-- Cross-cutting agents -->
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div class="glass p-5 border-red-500/10">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center"><Shield :size="20" class="text-red-400" /></div>
              <div>
                <h4 class="font-bold text-sm text-text-primary">{{ securityAgent.name }}</h4>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/20 text-red-400">{{ securityAgent.opsType }}</span>
              </div>
            </div>
            <p class="text-xs text-text-muted mb-3">{{ securityAgent.description }}</p>
          </div>
          <div class="glass p-5 border-green-500/10">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center"><Layers :size="20" class="text-green-400" /></div>
              <div>
                <h4 class="font-bold text-sm text-text-primary">{{ fullStackDevAgent.name }}</h4>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-500/20 text-green-400">{{ fullStackDevAgent.opsType }}</span>
              </div>
            </div>
            <p class="text-xs text-text-muted mb-3">{{ fullStackDevAgent.description }}</p>
          </div>
        </div>
      </div>

      <!-- ══════════════════════════════════════════ -->
      <!-- SECTION 2: FEATURE → AGENT → SUB-AGENT TABLE -->
      <!-- ══════════════════════════════════════════ -->
      <div v-if="activeSection === 'table'">
        <div class="glass p-4 mb-4 border-primary-500/10">
          <div class="flex items-start gap-3">
            <Info :size="18" class="text-primary-400 shrink-0 mt-0.5" />
            <div class="text-xs text-text-muted">
              <strong class="text-primary-400">Assumption:</strong> All 37 features are already implemented.
              This table maps each feature to its <strong class="text-text-primary">predicted orchestrator agent</strong>,
              <strong class="text-text-primary">possible AI sub-agents</strong> (including self-healing, quality assurance, and routing agents),
              and my <strong class="text-text-primary">confidence level</strong> in how they were likely built.
            </div>
          </div>
        </div>

        <!-- Category filter -->
        <div class="flex flex-wrap gap-2 mb-4">
          <button
            @click="activeCategory = 'all'"
            class="px-3 py-1 rounded-full text-xs font-medium transition-all"
            :class="activeCategory === 'all' ? 'bg-primary-600 text-white' : 'bg-surface-800 text-text-muted hover:bg-surface-700'"
          >
            All ({{ featureAgentMap.length }})
          </button>
          <button
            v-for="[key, label] in (Object.entries(categoryLabels) as [FeatureCategory, string][])"
            :key="key"
            @click="activeCategory = key"
            class="px-3 py-1 rounded-full text-xs font-medium transition-all"
            :class="activeCategory === key ? 'bg-primary-600 text-white' : 'bg-surface-800 text-text-muted hover:bg-surface-700'"
          >
            {{ label }}
          </button>
        </div>

        <!-- Legend -->
        <div class="flex flex-wrap gap-3 mb-4">
          <div class="text-[10px] text-text-dim">Sub-agent types:</div>
          <div v-for="(color, type) in subAgentTypeColors" :key="type" class="flex items-center gap-1">
            <span :class="[color, 'text-[9px] font-bold px-1.5 py-0.5 rounded']">{{ type }}</span>
          </div>
        </div>

        <!-- TABLE -->
        <div class="space-y-2">
          <div
            v-for="item in filteredMap"
            :key="item.featureId"
            class="glass transition-all duration-200"
            :class="expandedFeature === item.featureId ? 'border-primary-500/15' : ''"
          >
            <!-- Row header -->
            <div
              class="grid grid-cols-[60px_1fr_200px_120px_24px] gap-3 p-3 items-center cursor-pointer hover:bg-white/3 transition-colors"
              @click="expandedFeature = expandedFeature === item.featureId ? null : item.featureId"
            >
              <!-- Feature ID -->
              <span class="font-mono text-xs font-bold text-text-dim">{{ item.featureId }}</span>

              <!-- Feature Name -->
              <div>
                <span class="text-sm font-medium text-text-primary">{{ item.featureName }}</span>
              </div>

              <!-- Orchestrator Agent -->
              <div class="flex items-center gap-1.5">
                <Bot :size="12" class="text-primary-400 shrink-0" />
                <span class="text-xs text-primary-300 truncate">{{ item.orchestratorAgent }}</span>
              </div>

              <!-- Status -->
              <span :class="[statusColors[item.assumedStatus], 'text-[9px] font-bold px-2 py-0.5 rounded text-center']">
                {{ statusLabels[item.assumedStatus] }}
              </span>

              <!-- Expand -->
              <component :is="expandedFeature === item.featureId ? ChevronUp : ChevronDown" :size="14" class="text-text-dim" />
            </div>

            <!-- Expanded: Sub-agents + reasoning -->
            <transition name="expand">
              <div v-if="expandedFeature === item.featureId" class="px-3 pb-3 border-t border-white/5 pt-3">
                <!-- Sub-agents table -->
                <div class="text-[10px] uppercase tracking-wider text-text-dim mb-2">
                  Predicted Sub-agents ({{ item.subAgents.length }})
                </div>
                <div class="space-y-1.5 mb-3">
                  <div
                    v-for="sub in item.subAgents"
                    :key="sub.name"
                    class="flex items-start gap-3 p-2.5 rounded-lg bg-surface-900/50"
                  >
                    <span :class="[subAgentTypeColors[sub.type], 'text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 w-[72px] text-center']">
                      {{ sub.type }}
                    </span>
                    <div class="flex-1 min-w-0">
                      <div class="text-xs font-medium text-text-primary">{{ sub.name }}</div>
                      <div class="text-[11px] text-text-dim mt-0.5">{{ sub.function }}</div>
                    </div>
                  </div>
                </div>

                <!-- Reasoning -->
                <div class="p-2.5 rounded-lg bg-surface-800/50 border border-white/5">
                  <div class="text-[10px] uppercase tracking-wider text-text-dim mb-1">Why I predict this status</div>
                  <p class="text-xs text-text-muted italic">{{ item.reasoning }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <!-- Table column header (sticky reference) -->
        <div class="glass p-3 mt-4 text-[10px] text-text-dim">
          <div class="grid grid-cols-[60px_1fr_200px_120px_24px] gap-3">
            <span>ID</span>
            <span>Feature</span>
            <span>Predicted Orchestrator Agent</span>
            <span>Build Confidence</span>
            <span></span>
          </div>
        </div>
      </div>

      <!-- ══════════════════════════════════════════ -->
      <!-- SECTION 3: WHAT I CAN STILL CONTRIBUTE -->
      <!-- ══════════════════════════════════════════ -->
      <div v-if="activeSection === 'gaps'">
        <div class="glass p-4 mb-6 border-green-500/10">
          <div class="flex items-start gap-3">
            <Lightbulb :size="18" class="text-green-400 shrink-0 mt-0.5" />
            <div class="text-xs text-text-muted">
              <strong class="text-green-400">Even assuming everything is already built</strong>, these operational gaps represent
              areas where my full-stack engineering skills can strengthen ModCounsel's operations
              and extend ModInsight's platform capabilities. These are opportunities, not criticisms.
            </div>
          </div>
        </div>

        <div class="space-y-4">
          <div
            v-for="gap in operationalGaps"
            :key="gap.area"
            class="glass glow-card p-5"
          >
            <div class="relative z-10">
              <div class="flex items-start justify-between gap-3 mb-3">
                <h4 class="font-bold text-text-primary">{{ gap.area }}</h4>
                <div class="flex items-center gap-2 shrink-0">
                  <span
                    v-if="gap.forModCounsel"
                    class="text-[9px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-400"
                  >
                    ModCounsel Ops
                  </span>
                  <span
                    class="text-[9px] font-bold px-2 py-0.5 rounded"
                    :class="{
                      'bg-red-500/15 text-red-400': gap.impact === 'high',
                      'bg-amber-500/15 text-amber-400': gap.impact === 'medium',
                      'bg-surface-700 text-text-dim': gap.impact === 'low',
                    }"
                  >
                    {{ gap.impact }} impact
                  </span>
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-3">
                <div class="p-3 rounded-lg bg-surface-900/50">
                  <div class="text-[10px] uppercase tracking-wider text-text-dim mb-1">Current State (Assumed)</div>
                  <p class="text-xs text-text-muted">{{ gap.currentState }}</p>
                </div>
                <div class="p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                  <div class="text-[10px] uppercase tracking-wider text-green-400 mb-1">Opportunity</div>
                  <p class="text-xs text-text-muted">{{ gap.opportunity }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Summary -->
        <div class="glass p-5 mt-6 border-primary-500/10">
          <h3 class="text-sm font-bold text-primary-400 mb-3">Full-Stack Developer Value-Add Summary</h3>
          <div class="grid md:grid-cols-3 gap-3 text-xs">
            <div class="p-3 rounded bg-surface-900/50 text-center">
              <div class="text-2xl font-bold gradient-text mb-1">{{ operationalGaps.filter(g => g.forModCounsel).length }}</div>
              <div class="text-text-dim">Direct ModCounsel operations improvements</div>
            </div>
            <div class="p-3 rounded bg-surface-900/50 text-center">
              <div class="text-2xl font-bold gradient-text mb-1">{{ operationalGaps.filter(g => g.impact === 'high').length }}</div>
              <div class="text-text-dim">High-impact opportunities</div>
            </div>
            <div class="p-3 rounded bg-surface-900/50 text-center">
              <div class="text-2xl font-bold gradient-text mb-1">{{ operationalGaps.length }}</div>
              <div class="text-text-dim">Total areas for contribution</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.expand-enter-active, .expand-leave-active {
  transition: all 0.35s ease;
  overflow: hidden;
}
.expand-enter-from, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to, .expand-leave-from {
  max-height: 1200px;
  opacity: 1;
}
</style>
