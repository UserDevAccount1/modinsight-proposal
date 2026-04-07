<script setup lang="ts">
import { ref } from 'vue'
import {
  roleSystems, marketingPipeline, contentEnginePipeline, marketingBoostPipeline,
  systemIdeas, githubRepoStructure, nateHerkReference,
  platformComparisons, platformSavings
} from '@/data/developer'
import type { PipelineNode } from '@/data/developer'
import {
  ChevronDown, ChevronUp, CheckCircle2, Bot, ArrowRight,
  BookOpen, RefreshCw, Rocket, TrendingUp, BarChart3, Users, Zap,
  FolderGit2, ExternalLink, Youtube, GitBranch, Plug, DollarSign
} from 'lucide-vue-next'

const activeSection = ref<'roles' | 'pipelines' | 'platforms' | 'ideas' | 'reference'>('roles')
const expandedPlatform = ref<string | null>(null)
const statusColors: Record<string, string> = {
  integrate: 'bg-green-500/15 text-green-400',
  replace: 'bg-red-500/15 text-red-400',
  hybrid: 'bg-amber-500/15 text-amber-400',
}
const statusLabels: Record<string, string> = {
  integrate: 'Keep & Integrate',
  replace: 'Build Better',
  hybrid: 'Integrate + Extend',
}
const expandedRole = ref<string | null>(null)
const activePipeline = ref<'lead' | 'content' | 'boost'>('lead')

const iconMap: Record<string, any> = { BookOpen, RefreshCw, Rocket, TrendingUp, BarChart3, Users }

const pipelineTypeColors: Record<string, string> = {
  trigger: 'bg-green-500/20 border-green-500/30 text-green-400',
  ai: 'bg-purple-500/20 border-purple-500/30 text-purple-400',
  action: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
  decision: 'bg-amber-500/20 border-amber-500/30 text-amber-400',
  output: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-400',
  monitor: 'bg-pink-500/20 border-pink-500/30 text-pink-400',
}

const deptColors: Record<string, string> = {
  Marketing: 'bg-pink-500/15 text-pink-400',
  'Legal Operations': 'bg-blue-500/15 text-blue-400',
  Delivery: 'bg-green-500/15 text-green-400',
  'Human Resources': 'bg-amber-500/15 text-amber-400',
  Sales: 'bg-cyan-500/15 text-cyan-400',
  Operations: 'bg-purple-500/15 text-purple-400',
}

const pipelineOptions: { id: 'lead' | 'content' | 'boost', label: string, data: PipelineNode[], desc: string }[] = [
  { id: 'lead', label: 'Lead Gen & Nurture', data: marketingPipeline, desc: 'Full-funnel: content → capture → score → nurture → convert' },
  { id: 'content', label: 'Content Generation Engine', data: contentEnginePipeline, desc: '6-agent AI content factory with self-healing & auto-publish' },
  { id: 'boost', label: 'Marketing Boost Engine', data: marketingBoostPipeline, desc: 'Visitor tracking → enrichment → GHL → Slack deal rooms → retargeting' },
]

const currentPipeline = ref(pipelineOptions[0]!)
function setPipeline(id: 'lead' | 'content' | 'boost') {
  activePipeline.value = id
  currentPipeline.value = pipelineOptions.find(p => p.id === id)!
}
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="min-h-full py-12 px-8 max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-6">
        <p class="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Slide 06</p>
        <h2 class="text-4xl font-bold gradient-text mb-2">What I Can Build</h2>
        <p class="text-text-muted">Role-specific systems, 3 automation pipelines, GitHub architecture, and methodology</p>
      </div>

      <!-- Section Tabs -->
      <div class="flex flex-wrap gap-2 mb-6 sticky top-0 z-20 bg-surface-950/90 backdrop-blur-sm py-2 -mx-2 px-2">
        <button
          v-for="sec in ([
            { id: 'roles', label: 'Systems by Role', count: '7' },
            { id: 'pipelines', label: 'Automation Pipelines', count: '3' },
            { id: 'platforms', label: '3rd Party Platforms', count: '10' },
            { id: 'ideas', label: 'High-Level Ideas', count: '6' },
            { id: 'reference', label: 'Methodology & Reference', count: '' },
          ] as const)"
          :key="sec.id"
          @click="activeSection = sec.id"
          class="px-4 py-2 rounded-lg text-xs font-medium transition-all"
          :class="activeSection === sec.id
            ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
            : 'bg-surface-800 text-text-muted hover:bg-surface-700'"
        >
          {{ sec.label }}
          <span v-if="sec.count" class="ml-1 opacity-60">({{ sec.count }})</span>
        </button>
      </div>

      <!-- ══════ SECTION 1: SYSTEMS BY ROLE ══════ -->
      <div v-if="activeSection === 'roles'">
        <div class="glass p-4 mb-4 border-primary-500/10">
          <p class="text-xs text-text-muted">
            <strong class="text-primary-400">Assuming ModCounsel already has systems in place</strong> —
            these are specific platforms I can build or enhance for each team member, based on systems
            I've already shipped in production.
          </p>
        </div>

        <div class="space-y-3">
          <div
            v-for="role in roleSystems"
            :key="role.roleTitle"
            class="glass transition-all duration-300 cursor-pointer"
            :class="expandedRole === role.roleTitle ? 'border-primary-500/15' : ''"
            @click="expandedRole = expandedRole === role.roleTitle ? null : role.roleTitle"
          >
            <div class="p-4 flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-primary-600/15 flex items-center justify-center shrink-0">
                <Bot :size="20" class="text-primary-400" />
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-1 flex-wrap">
                  <h4 class="font-bold text-sm text-text-primary">{{ role.systemName }}</h4>
                  <span :class="[deptColors[role.department], 'text-[9px] font-bold px-2 py-0.5 rounded-full']">
                    {{ role.department }}
                  </span>
                </div>
                <p class="text-xs text-text-dim">For: {{ role.roleTitle }}</p>
              </div>
              <component :is="expandedRole === role.roleTitle ? ChevronUp : ChevronDown" :size="18" class="text-text-dim shrink-0" />
            </div>
            <transition name="expand">
              <div v-if="expandedRole === role.roleTitle" class="px-4 pb-4 border-t border-white/5 pt-3">
                <p class="text-sm text-text-muted mb-3">{{ role.description }}</p>
                <div class="grid md:grid-cols-2 gap-1.5 mb-3">
                  <div v-for="cap in role.capabilities" :key="cap" class="flex items-start gap-2 text-xs text-text-muted">
                    <CheckCircle2 :size="12" class="text-green-400 shrink-0 mt-0.5" />
                    {{ cap }}
                  </div>
                </div>
                <div class="p-3 rounded-lg bg-primary-600/5 border border-primary-500/10 mb-3">
                  <div class="text-[10px] uppercase tracking-wider text-primary-400 mb-1">My Proven Experience</div>
                  <p class="text-xs text-text-muted italic">{{ role.myExperience }}</p>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  <span v-for="tech in role.stack" :key="tech" class="px-2 py-0.5 text-[10px] rounded-full bg-primary-600/15 text-primary-300 font-medium">{{ tech }}</span>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- ══════ SECTION 2: AUTOMATION PIPELINES (3 pipelines) ══════ -->
      <div v-if="activeSection === 'pipelines'">
        <!-- Pipeline Selector -->
        <div class="flex gap-2 mb-4">
          <button
            v-for="p in pipelineOptions"
            :key="p.id"
            @click="setPipeline(p.id)"
            class="px-3 py-2 rounded-lg text-xs font-medium transition-all flex-1 text-left"
            :class="activePipeline === p.id
              ? 'bg-primary-600/20 border border-primary-500/30 text-primary-300'
              : 'bg-surface-800 text-text-muted hover:bg-surface-700'"
          >
            <div class="font-bold mb-0.5">{{ p.label }}</div>
            <div class="text-[10px] opacity-70">{{ p.desc }}</div>
          </button>
        </div>

        <!-- Pipeline Info Banner -->
        <div class="glass p-3 mb-4 border-purple-500/10">
          <p class="text-xs text-text-muted">
            <strong class="text-purple-400">Each node = an AI agent or sub-agent</strong> with its own tools, prompts, and self-healing logic.
            All workflows are version-controlled in GitHub, orchestrated via n8n, and integrate with GHL, Slack, and ModInsight's existing stack.
          </p>
        </div>

        <!-- Horizontal Pipeline Flow -->
        <div class="overflow-x-auto pb-4 mb-6">
          <div class="flex gap-3 min-w-max px-2">
            <div
              v-for="(node, i) in currentPipeline.data"
              :key="node.id"
              class="flex items-center gap-3"
            >
              <div
                class="w-[200px] p-4 rounded-xl border glass shrink-0"
                :class="pipelineTypeColors[node.type]"
              >
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-6 h-6 rounded-full bg-surface-800 flex items-center justify-center text-[10px] font-bold">
                    {{ node.id }}
                  </div>
                  <span class="text-[9px] font-bold uppercase tracking-wider opacity-70">{{ node.type }}</span>
                </div>
                <h4 class="text-sm font-bold mb-1">{{ node.label }}</h4>
                <p class="text-[10px] text-text-dim mb-2 leading-relaxed">{{ node.description }}</p>
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="tool in node.tools"
                    :key="tool"
                    class="px-1.5 py-0.5 text-[8px] rounded bg-surface-800/80 text-text-dim font-medium"
                  >
                    {{ tool }}
                  </span>
                </div>
              </div>
              <ArrowRight v-if="i < currentPipeline.data.length - 1" :size="16" class="text-surface-600 shrink-0" />
            </div>
          </div>
        </div>

        <!-- Legend -->
        <div class="flex flex-wrap gap-2 mb-6">
          <div v-for="(color, type) in pipelineTypeColors" :key="type" class="flex items-center gap-1.5">
            <div :class="[color, 'w-3 h-3 rounded border']" />
            <span class="text-[10px] text-text-dim capitalize">{{ type }}</span>
          </div>
        </div>

        <!-- GitHub Repo Structure -->
        <div class="glass p-5 mb-4">
          <h3 class="text-sm font-bold text-text-primary mb-1 flex items-center gap-2">
            <FolderGit2 :size="16" class="text-primary-400" />
            {{ githubRepoStructure.repoName }}
          </h3>
          <p class="text-xs text-text-dim mb-3">{{ githubRepoStructure.description }}</p>
          <div class="grid md:grid-cols-2 gap-1">
            <div
              v-for="item in githubRepoStructure.structure"
              :key="item.path"
              class="flex items-start gap-2 p-1.5 rounded hover:bg-surface-800/50 transition-colors"
            >
              <GitBranch :size="10" class="text-green-400 shrink-0 mt-1" />
              <div>
                <code class="text-[10px] text-primary-300 font-mono">{{ item.path }}</code>
                <span class="text-[10px] text-text-dim ml-1">{{ item.desc }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Impact Metrics -->
        <div class="glass p-5">
          <h3 class="text-sm font-bold text-text-primary mb-4 flex items-center gap-2">
            <Zap :size="16" class="text-primary-400" />
            Pipeline Impact Metrics (Based on My Previous Implementations)
          </h3>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="p-3 rounded-lg bg-surface-900/50 text-center">
              <div class="text-xl font-bold gradient-text">45%</div>
              <div class="text-[10px] text-text-dim">Conversion Boost</div>
            </div>
            <div class="p-3 rounded-lg bg-surface-900/50 text-center">
              <div class="text-xl font-bold gradient-text">70%</div>
              <div class="text-[10px] text-text-dim">Faster Response</div>
            </div>
            <div class="p-3 rounded-lg bg-surface-900/50 text-center">
              <div class="text-xl font-bold gradient-text">60%</div>
              <div class="text-[10px] text-text-dim">Less Manual Work</div>
            </div>
            <div class="p-3 rounded-lg bg-surface-900/50 text-center">
              <div class="text-xl font-bold gradient-text">5/day</div>
              <div class="text-[10px] text-text-dim">AI Blog Posts</div>
            </div>
          </div>
        </div>
      </div>

      <!-- ══════ SECTION 3: 3RD PARTY PLATFORMS ══════ -->
      <div v-if="activeSection === 'platforms'">
        <!-- Savings Banner -->
        <div class="glass p-5 mb-4 border-green-500/10">
          <div class="flex items-start gap-3">
            <DollarSign :size="20" class="text-green-400 shrink-0 mt-0.5" />
            <div>
              <div class="text-sm font-bold text-green-400 mb-1">
                Potential savings: {{ platformSavings.annualSavings }}
              </div>
              <p class="text-xs text-text-muted">
                Instead of paying <strong class="text-text-primary">{{ platformSavings.totalIfAllPaid }}</strong> for SaaS subscriptions,
                I can build custom automation that outperforms these tools on legal-specific tasks
                for just <strong class="text-text-primary">{{ platformSavings.afterCustomBuild }}</strong> in API costs.
                {{ platformSavings.note }}
              </p>
            </div>
          </div>
        </div>

        <!-- Legend -->
        <div class="flex gap-3 mb-4">
          <div v-for="(color, status) in statusColors" :key="status" class="flex items-center gap-1.5">
            <span :class="[color, 'text-[9px] font-bold px-2 py-0.5 rounded']">{{ statusLabels[status] }}</span>
          </div>
        </div>

        <!-- Platform Cards -->
        <div class="space-y-2">
          <div
            v-for="p in platformComparisons"
            :key="p.platform"
            class="glass transition-all duration-300 cursor-pointer"
            :class="expandedPlatform === p.platform ? 'border-primary-500/15' : ''"
            @click="expandedPlatform = expandedPlatform === p.platform ? null : p.platform"
          >
            <div class="p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-surface-800 flex items-center justify-center shrink-0">
                <Plug :size="18" class="text-primary-400" />
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2 mb-0.5 flex-wrap">
                  <h4 class="font-bold text-sm text-text-primary">{{ p.platform }}</h4>
                  <span class="text-[9px] text-text-dim px-1.5 py-0.5 rounded bg-surface-700">{{ p.category }}</span>
                  <span :class="[statusColors[p.status], 'text-[9px] font-bold px-2 py-0.5 rounded']">
                    {{ statusLabels[p.status] }}
                  </span>
                </div>
                <p class="text-xs text-text-dim">{{ p.monthlyPrice }}</p>
              </div>
              <component :is="expandedPlatform === p.platform ? ChevronUp : ChevronDown" :size="16" class="text-text-dim shrink-0" />
            </div>

            <transition name="expand">
              <div v-if="expandedPlatform === p.platform" class="px-4 pb-4 border-t border-white/5 pt-3">
                <div class="grid md:grid-cols-3 gap-3 mb-3">
                  <div class="p-3 rounded-lg bg-surface-900/50">
                    <div class="text-[10px] uppercase tracking-wider text-text-dim mb-1">What It Does</div>
                    <p class="text-xs text-text-muted">{{ p.whatItDoes }}</p>
                  </div>
                  <div class="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10">
                    <div class="text-[10px] uppercase tracking-wider text-blue-400 mb-1">How I Integrate</div>
                    <p class="text-xs text-text-muted">{{ p.howIIntegrate }}</p>
                  </div>
                  <div class="p-3 rounded-lg bg-green-500/5 border border-green-500/10">
                    <div class="text-[10px] uppercase tracking-wider text-green-400 mb-1">How I Build Better</div>
                    <p class="text-xs text-text-muted">{{ p.howIBuildBetter }}</p>
                  </div>
                </div>
                <div class="p-3 rounded-lg bg-primary-600/5 border border-primary-500/10">
                  <div class="text-[9px] uppercase tracking-wider text-primary-400 mb-1">Legal-Specific Advantage</div>
                  <p class="text-xs text-text-muted italic">{{ p.customAdvantage }}</p>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- ══════ HIGH-LEVEL IDEAS ══════ -->
      <div v-if="activeSection === 'ideas'">
        <div class="grid md:grid-cols-2 gap-4">
          <div
            v-for="idea in systemIdeas"
            :key="idea.name"
            class="glass glow-card p-5"
          >
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-3">
                <div class="w-10 h-10 rounded-xl bg-primary-600/15 flex items-center justify-center">
                  <component :is="iconMap[idea.icon] || Zap" :size="20" class="text-primary-400" />
                </div>
                <h4 class="font-bold text-text-primary">{{ idea.name }}</h4>
              </div>
              <p class="text-xs text-text-muted mb-3">{{ idea.description }}</p>
              <div class="p-2.5 rounded-lg bg-green-500/5 border border-green-500/10">
                <div class="text-[9px] uppercase tracking-wider text-green-400 mb-0.5">Impact</div>
                <p class="text-xs text-text-muted">{{ idea.impact }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ══════ SECTION 4: METHODOLOGY & REFERENCE ══════ -->
      <div v-if="activeSection === 'reference'">
        <!-- Nate Herk Reference -->
        <div class="glass p-6 mb-6 border-red-500/10">
          <div class="flex items-start gap-4 mb-4">
            <div class="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
              <Youtube :size="24" class="text-red-400" />
            </div>
            <div>
              <h3 class="font-bold text-lg text-text-primary">{{ nateHerkReference.name }}</h3>
              <p class="text-xs text-text-dim">{{ nateHerkReference.title }}</p>
              <div class="flex items-center gap-3 mt-1">
                <a :href="nateHerkReference.channel" target="_blank" class="text-xs text-red-400 hover:underline flex items-center gap-1">
                  <Youtube :size="12" /> YouTube (550K+ subs)
                </a>
                <a :href="nateHerkReference.website" target="_blank" class="text-xs text-primary-400 hover:underline flex items-center gap-1">
                  <ExternalLink :size="12" /> nateherk.com
                </a>
              </div>
            </div>
          </div>

          <p class="text-sm text-text-muted mb-4 italic">
            "{{ nateHerkReference.relevance }}"
          </p>

          <!-- Key Videos -->
          <div class="text-[10px] uppercase tracking-wider text-text-dim mb-2">Key Reference Videos</div>
          <div class="space-y-2 mb-4">
            <a
              v-for="video in nateHerkReference.keyVideos"
              :key="video.title"
              :href="video.url"
              target="_blank"
              class="flex items-start gap-3 p-3 rounded-lg bg-surface-900/50 hover:bg-surface-800/80 transition-colors group"
            >
              <div class="w-8 h-8 rounded bg-red-500/20 flex items-center justify-center shrink-0">
                <Youtube :size="14" class="text-red-400" />
              </div>
              <div class="flex-1 min-w-0">
                <div class="text-sm font-medium text-text-primary group-hover:text-primary-400 transition-colors">{{ video.title }}</div>
                <div class="text-xs text-text-dim mt-0.5">{{ video.relevance }}</div>
              </div>
              <ExternalLink :size="12" class="text-text-dim shrink-0 mt-1" />
            </a>
          </div>
        </div>

        <!-- Methodology -->
        <div class="glass p-5 mb-6">
          <h3 class="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
            <Zap :size="16" class="text-primary-400" />
            My Automation Methodology
          </h3>
          <div class="space-y-2">
            <div
              v-for="(method, i) in nateHerkReference.methodology"
              :key="method"
              class="flex items-start gap-3 p-3 rounded-lg bg-surface-900/50"
            >
              <div class="w-6 h-6 rounded-full bg-primary-600/20 flex items-center justify-center text-[10px] font-bold text-primary-400 shrink-0">
                {{ i + 1 }}
              </div>
              <span class="text-sm text-text-muted">{{ method }}</span>
            </div>
          </div>
        </div>

        <!-- Tech Stack Integration Map -->
        <div class="glass p-5">
          <h3 class="text-sm font-bold text-text-primary mb-3">How This Integrates with ModInsight's Stack</h3>
          <div class="grid md:grid-cols-3 gap-3 text-xs">
            <div class="p-3 rounded-lg bg-surface-900/50">
              <div class="font-bold text-purple-400 mb-1">AI Layer</div>
              <div class="text-text-dim">Claude API + MCP Servers + RAG pipelines power all AI agents. Sub-agents handle specialized tasks (redlining, scoring, drafting).</div>
            </div>
            <div class="p-3 rounded-lg bg-surface-900/50">
              <div class="font-bold text-blue-400 mb-1">Orchestration</div>
              <div class="text-text-dim">n8n self-hosted for all workflows. Version-controlled JSON exports in GitHub. CI/CD deploys workflow changes automatically.</div>
            </div>
            <div class="p-3 rounded-lg bg-surface-900/50">
              <div class="font-bold text-green-400 mb-1">Integrations</div>
              <div class="text-text-dim">GHL for CRM/pipelines. Slack for deal rooms. DocuSign for e-signatures. CalendarBridge for bookings. All connected via n8n.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.expand-enter-active, .expand-leave-active { transition: all 0.3s ease; overflow: hidden; }
.expand-enter-from, .expand-leave-to { max-height: 0; opacity: 0; }
.expand-enter-to, .expand-leave-from { max-height: 600px; opacity: 1; }
</style>
