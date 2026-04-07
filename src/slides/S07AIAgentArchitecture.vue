<script setup lang="ts">
import { ref } from 'vue'
import { architectureLayers, securityAgent, fullStackDevAgent } from '@/data/architecture'
import {
  AlertTriangle, Bot, Brain, Shield, Layers, Workflow,
  CheckCircle2, ArrowRight, Cpu, Search, Wrench, ChevronDown, ChevronUp
} from 'lucide-vue-next'

const expandedAgent = ref<string | null>(null)

function toggle(id: string) {
  expandedAgent.value = expandedAgent.value === id ? null : id
}

const layerAgents = architectureLayers.map(l => ({
  id: l.id,
  ...l.agent,
  layerLabel: l.label,
  color: l.textColor,
}))

const allAgents = [
  ...layerAgents,
  {
    id: 'security',
    name: securityAgent.name,
    role: securityAgent.role,
    description: securityAgent.description,
    responsibilities: securityAgent.responsibilities,
    enabledFeatures: [] as string[],
    jobAlignment: securityAgent.jobAlignment,
    opsType: securityAgent.opsType,
    cicdTasks: securityAgent.cicdTasks,
    layerLabel: 'Cross-cutting (All Layers)',
    color: 'text-red-400',
  },
  {
    id: 'fullstack',
    name: fullStackDevAgent.name,
    role: fullStackDevAgent.role,
    description: fullStackDevAgent.description,
    responsibilities: fullStackDevAgent.responsibilities,
    enabledFeatures: [] as string[],
    jobAlignment: fullStackDevAgent.jobAlignment,
    opsType: fullStackDevAgent.opsType,
    cicdTasks: fullStackDevAgent.cicdTasks,
    layerLabel: 'Meta-agent (Orchestrates All)',
    color: 'text-green-400',
  },
]

const opsColors: Record<string, string> = {
  DevOps: 'bg-blue-500/20 text-blue-400',
  MLOps: 'bg-purple-500/20 text-purple-400',
  DataOps: 'bg-amber-500/20 text-amber-400',
  SecOps: 'bg-red-500/20 text-red-400',
  FullStackOps: 'bg-green-500/20 text-green-400',
}

const agentIcons: Record<string, any> = {
  frontend: Layers,
  api: Workflow,
  ai: Brain,
  data: Cpu,
  integration: ArrowRight,
  security: Shield,
  fullstack: Bot,
}
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="min-h-full py-12 px-8 max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-6">
        <p class="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Slide 07</p>
        <h2 class="text-4xl font-bold gradient-text mb-2">AI Agent Architecture</h2>
        <p class="text-text-muted">7 specialized agents — each layer has a dedicated AI agent aligned with CI/CD pipelines</p>
      </div>

      <!-- Caveat -->
      <div class="glass flex items-start gap-3 p-4 mb-6 border-amber-500/20">
        <AlertTriangle :size="18" class="text-amber-400 shrink-0 mt-0.5" />
        <div class="text-xs text-text-muted">
          <span class="font-medium text-amber-400">Acknowledgment:</span>
          ModInsight may already have AI agents, Claude Code skills (.md), MCP server integrations,
          or custom automation in production. This proposes a comprehensive agent architecture that maps
          each layer to a specialized AI agent with DevOps/MLOps/DataOps pipelines.
        </div>
      </div>

      <!-- ══════ ORCHESTRATOR (Full Stack Dev Agent) at top ══════ -->
      <div class="glass p-5 mb-4 border-green-500/20 text-center">
        <div class="flex items-center justify-center gap-3 mb-2">
          <div class="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
            <Bot :size="22" class="text-green-400" />
          </div>
          <div class="text-left">
            <h3 class="font-bold text-green-400">{{ fullStackDevAgent.name }}</h3>
            <p class="text-[10px] text-text-dim">{{ fullStackDevAgent.role }}</p>
          </div>
        </div>
        <p class="text-xs text-text-muted max-w-2xl mx-auto mb-3">
          {{ fullStackDevAgent.description }}
        </p>
        <div class="flex flex-wrap justify-center gap-1.5">
          <span
            v-for="reason in fullStackDevAgent.whyNecessary"
            :key="reason"
            class="text-[10px] px-2 py-1 rounded bg-green-500/10 text-green-300 max-w-xs text-left"
          >
            {{ reason }}
          </span>
        </div>
      </div>

      <!-- Connection arrows -->
      <div class="flex justify-center mb-4">
        <div class="flex gap-6">
          <div v-for="i in 5" :key="i" class="w-px h-6 bg-gradient-to-b from-green-500/30 to-primary-500/20" />
        </div>
      </div>

      <!-- ══════ LAYER AGENTS ══════ -->
      <div class="space-y-2 mb-6">
        <div
          v-for="agent in allAgents"
          :key="agent.id"
          class="glass transition-all duration-300 cursor-pointer"
          :class="expandedAgent === agent.id ? 'border-primary-500/15' : ''"
          @click="toggle(agent.id)"
        >
          <div class="p-4 flex items-start gap-3">
            <!-- Icon -->
            <div class="w-9 h-9 rounded-lg bg-surface-800 flex items-center justify-center shrink-0">
              <component :is="agentIcons[agent.id] || Bot" :size="18" :class="agent.color" />
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-0.5">
                <h4 class="font-bold text-sm" :class="agent.color">{{ agent.name }}</h4>
                <span :class="[opsColors[agent.opsType], 'text-[9px] font-bold px-1.5 py-0.5 rounded-full']">
                  {{ agent.opsType }}
                </span>
              </div>
              <p class="text-[11px] text-text-dim">{{ agent.layerLabel }} — {{ agent.role }}</p>
            </div>

            <!-- Feature count + expand -->
            <div class="flex items-center gap-2 shrink-0">
              <span v-if="agent.enabledFeatures.length" class="text-[10px] text-text-dim font-mono">
                {{ agent.enabledFeatures.length }} features
              </span>
              <component :is="expandedAgent === agent.id ? ChevronUp : ChevronDown" :size="16" class="text-text-dim" />
            </div>
          </div>

          <!-- Expanded -->
          <transition name="expand">
            <div v-if="expandedAgent === agent.id" class="px-4 pb-4 border-t border-white/5 pt-3">
              <p class="text-xs text-text-muted mb-3">{{ agent.description }}</p>

              <!-- Responsibilities -->
              <div class="grid md:grid-cols-2 gap-1.5 mb-3">
                <div v-for="r in agent.responsibilities" :key="r" class="flex items-start gap-2 text-xs text-text-dim">
                  <CheckCircle2 :size="11" class="text-primary-400 shrink-0 mt-0.5" />
                  {{ r }}
                </div>
              </div>

              <!-- CI/CD Tasks -->
              <div class="mb-3">
                <div class="text-[10px] uppercase tracking-wider text-text-dim mb-1.5">CI/CD Pipeline Tasks</div>
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="task in agent.cicdTasks"
                    :key="task"
                    class="text-[10px] px-2 py-0.5 rounded bg-surface-800 text-text-dim"
                  >
                    {{ task }}
                  </span>
                </div>
              </div>

              <!-- Features enabled -->
              <div v-if="agent.enabledFeatures.length">
                <div class="text-[10px] uppercase tracking-wider text-text-dim mb-1.5">Enables ModInsight Features</div>
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="fid in agent.enabledFeatures"
                    :key="fid"
                    class="px-1.5 py-0.5 text-[10px] rounded bg-primary-600/15 text-primary-300 font-mono"
                  >
                    {{ fid }}
                  </span>
                </div>
              </div>

              <!-- Job alignment -->
              <div class="mt-3 p-2.5 rounded-lg bg-primary-600/5 border border-primary-500/10">
                <div class="text-[9px] uppercase tracking-wider text-primary-400 mb-1">JD Alignment</div>
                <p class="text-[11px] text-text-muted italic">{{ agent.jobAlignment }}</p>
              </div>
            </div>
          </transition>
        </div>
      </div>

      <!-- ══════ WHY THIS AGENT ARCHITECTURE ══════ -->
      <div class="glass p-5">
        <h3 class="text-sm font-bold text-text-primary mb-3">Why This Agent Architecture is Necessary</h3>
        <div class="grid md:grid-cols-2 gap-3 text-xs">
          <div class="p-3 rounded-lg bg-surface-900/50">
            <div class="font-medium text-text-primary mb-1">Based on the Job Description</div>
            <p class="text-text-dim">
              The JD asks for "conception to final product" — a single developer cannot cover 37 features
              across 5 layers without AI-augmented agents handling layer-specific concerns.
            </p>
          </div>
          <div class="p-3 rounded-lg bg-surface-900/50">
            <div class="font-medium text-text-primary mb-1">Based on the Feature Set</div>
            <p class="text-text-dim">
              Contract redlining, RAG search, vendor processing, e-signature routing, and call coaching
              each require specialized AI — no single model prompt handles all.
            </p>
          </div>
          <div class="p-3 rounded-lg bg-surface-900/50">
            <div class="font-medium text-text-primary mb-1">Based on ModCounsel's Model</div>
            <p class="text-text-dim">
              "Tech + Talent = 3x" means human experts amplified by AI. Each agent mirrors a human specialist
              role: contract reviewer, compliance officer, data analyst.
            </p>
          </div>
          <div class="p-3 rounded-lg bg-surface-900/50">
            <div class="font-medium text-text-primary mb-1">Based on CI/CD Best Practices</div>
            <p class="text-text-dim">
              DevOps, MLOps, DataOps, and SecOps each have distinct pipeline requirements.
              Layer-specific agents ensure each pipeline is purpose-built.
            </p>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="glass p-4 mt-6 border-primary-500/10">
        <p class="text-xs text-text-dim">
          <strong class="text-primary-400">Summary:</strong> 7 predicted AI agents mapped across 5 architecture layers — Frontend Architect (DevOps), Backend Orchestrator (DevOps), AI Intelligence (MLOps), Data Engineering (DataOps), Integration Ops (DevOps), plus cross-cutting Security (SecOps) and Full Stack Developer (FullStackOps) agents. Each agent has specific features it enables, CI/CD pipeline tasks, and job description alignment. This is a predicted architecture — ModInsight may already have more advanced systems in production.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.expand-enter-active, .expand-leave-active { transition: all 0.3s ease; overflow: hidden; }
.expand-enter-from, .expand-leave-to { max-height: 0; opacity: 0; }
.expand-enter-to, .expand-leave-from { max-height: 800px; opacity: 1; }
</style>
