<script setup lang="ts">
import { ref } from 'vue'
import { skills, valueProps } from '@/data/developer'
import { CheckCircle, Zap, ExternalLink, Award, Newspaper, Briefcase } from 'lucide-vue-next'

const activeTab = ref<'skills' | 'proof' | 'toolkit'>('skills')

const proofWithCompanies = [
  {
    company: 'Wonder Group Pty Ltd',
    project: 'LIVITI AI Content Studio',
    what: 'Replaced 10+ content roles with 6 AI agents. 5 SEO articles in 25-30 minutes. Auto-publishes daily at 6 AM. Saved $474K-$624K/year.',
    relevance: 'Same autonomous agent architecture needed for ModInsight\'s "Tech + Talent" model.',
  },
  {
    company: 'GcorpCleans',
    project: 'Full Business Ecosystem',
    what: 'Vue.js management dashboard + Flutter mobile app with AI chatbot + GoHighLevel pipeline + n8n automation + automated client onboarding.',
    relevance: 'Full-stack + marketing automation + mobile — the exact breadth ModCounsel needs.',
  },
  {
    company: 'Revaya Company',
    project: 'Lead Automation Engine',
    what: '45% conversion boost, 60% less manual scheduling, 70% faster response times using n8n + GoHighLevel.',
    relevance: 'Directly applicable to ModCounsel\'s business development and client acquisition.',
  },
  {
    company: 'Access Insurance Underwrite LLC',
    project: 'AI Chatbot & Marketing System',
    what: 'Custom chatbot with Heygen, Synthesia, OpenAI. Avatar-based email marketing. SEO optimization. RingCentral call management.',
    relevance: 'AI-powered client engagement — applicable to ModCounsel\'s client-facing interactions.',
  },
  {
    company: 'Speech Improvement Center',
    project: 'HR/Employee Dashboard',
    what: 'PHP-based analytics database. Reduced data access time by 40%, increased DB performance by 25%, cut patient wait times by 15%.',
    relevance: 'HR operations experience — directly maps to modOhana and People & Culture needs.',
  },
]

const toolkitHighlights = [
  {
    name: 'LLM Wiki — Karpathy Pattern',
    tag: 'AI',
    desc: 'Instead of RAG, have an LLM incrementally build a persistent wiki that compounds with every source you add. Perfect for ModCounsel\'s legal knowledge base — every contract reviewed makes the system smarter.',
    integration: 'Replace static document storage with a living, AI-maintained legal knowledge graph.',
  },
  {
    name: '20 SEO & GEO Skills for Claude Code',
    tag: 'SKILLS',
    desc: 'Specialized Claude Code skills for keyword research, site audits, content writing, and rank tracking. I use these to power the Content Generation Engine\'s SEO Keyword Agent.',
    integration: 'Plug directly into the marketing pipeline for automated SEO optimization.',
  },
  {
    name: 'CLI-Anything — GUI Automation',
    tag: 'AUTOMATION',
    desc: 'AI agents that interact with ANY desktop application through natural language commands. Bridges GUI-only software into automation pipelines.',
    integration: 'Automate legacy legal tools that don\'t have APIs — contract management systems, court filing portals, compliance platforms.',
  },
  {
    name: 'Trigger.dev — Managed AI Agents',
    tag: 'PLATFORM',
    desc: 'Build long-running, production-grade AI agents that run reliably in the cloud. No infrastructure pain.',
    integration: 'Deploy ModInsight\'s AI agents as managed cloud services — self-healing, auto-scaling, zero maintenance.',
  },
  {
    name: 'Context Mode — MCP Privacy Layer',
    tag: 'MCP',
    desc: 'Virtualization layer that controls exactly what context gets shared with AI tools. Critical for legal work where confidentiality is everything.',
    integration: 'Ensure ModCounsel\'s client data never leaks through AI tool context — privacy-first MCP layer for all agents.',
  },
  {
    name: '1273+ Agentic Skills Library',
    tag: 'SKILLS',
    desc: 'Over 1273 installable agentic skills for Claude Code — pre-built capabilities for research, writing, analysis, code review, and more.',
    integration: 'Accelerate development by 5x — every ModInsight feature can leverage pre-built agent skills.',
  },
  {
    name: 'claude-mem — Session Memory',
    tag: 'TOOL',
    desc: 'Auto-captures everything Claude does during coding sessions, compresses with AI, and injects relevant context into future sessions.',
    integration: 'Persistent AI memory across development sessions — no context lost when switching between ModInsight modules.',
  },
  {
    name: 'WorldMonitor — Intelligence Dashboard',
    tag: 'AI-AGENT',
    desc: 'Real-time global intelligence dashboard with AI-powered news aggregation and monitoring. 47K+ stars on GitHub.',
    integration: 'Template for ModCounsel\'s regulatory monitoring — track legal changes across jurisdictions in real-time.',
  },
]

const tagColors: Record<string, string> = {
  AI: 'bg-purple-500/15 text-purple-400',
  SKILLS: 'bg-blue-500/15 text-blue-400',
  AUTOMATION: 'bg-green-500/15 text-green-400',
  PLATFORM: 'bg-amber-500/15 text-amber-400',
  MCP: 'bg-cyan-500/15 text-cyan-400',
  TOOL: 'bg-pink-500/15 text-pink-400',
  'AI-AGENT': 'bg-red-500/15 text-red-400',
}
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="min-h-full py-12 px-8 max-w-6xl mx-auto">
      <div class="mb-6">
        <p class="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Slide 09</p>
        <h2 class="text-4xl font-bold gradient-text mb-2">Why Me</h2>
        <p class="text-text-muted">8+ years | 5 companies | 45 curated AI tools | Production-proven systems</p>
      </div>

      <!-- Value Props -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div v-for="v in valueProps" :key="v.label" class="glass p-4 text-center">
          <div class="text-2xl font-black gradient-text mb-1">{{ v.metric }}</div>
          <div class="text-sm font-medium text-text-primary">{{ v.label }}</div>
          <div class="text-xs text-text-dim">{{ v.detail }}</div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="flex gap-2 mb-6">
        <button
          v-for="tab in ([
            { id: 'skills', label: 'Skills & Stack' },
            { id: 'proof', label: 'Companies & Projects' },
            { id: 'toolkit', label: 'My AI Toolkit (from Portfolio)' },
          ] as const)"
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-4 py-2 rounded-lg text-xs font-medium transition-all"
          :class="activeTab === tab.id
            ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
            : 'bg-surface-800 text-text-muted hover:bg-surface-700'"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- TAB: Skills -->
      <div v-if="activeTab === 'skills'">
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div v-for="skill in skills" :key="skill.category" class="glass p-5">
            <div class="text-sm font-bold mb-3" :class="`bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`">
              {{ skill.category }}
            </div>
            <div class="space-y-1.5">
              <div v-for="item in skill.items" :key="item" class="flex items-center gap-2">
                <CheckCircle :size="12" class="text-success shrink-0" />
                <span class="text-sm text-text-muted">{{ item }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB: Companies & Projects -->
      <div v-if="activeTab === 'proof'">
        <div class="space-y-3">
          <div v-for="p in proofWithCompanies" :key="p.company" class="glass p-5">
            <div class="flex items-center gap-2 mb-2">
              <Briefcase :size="14" class="text-primary-400" />
              <h4 class="font-bold text-text-primary text-sm">{{ p.company }}</h4>
              <span class="text-[10px] text-text-dim px-2 py-0.5 rounded bg-surface-700">{{ p.project }}</span>
            </div>
            <p class="text-xs text-text-muted mb-2">{{ p.what }}</p>
            <div class="flex items-start gap-1.5">
              <ExternalLink :size="12" class="text-primary-400 shrink-0 mt-0.5" />
              <span class="text-xs text-primary-400">{{ p.relevance }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- TAB: AI Toolkit from Portfolio News -->
      <div v-if="activeTab === 'toolkit'">
        <div class="glass p-4 mb-4 border-primary-500/10">
          <div class="flex items-start gap-2">
            <Newspaper :size="16" class="text-primary-400 shrink-0 mt-0.5" />
            <p class="text-xs text-text-muted">
              From my <strong class="text-primary-400">45 curated articles</strong> at neuralyx.ai — these are the tools and repos
              I actively track and can integrate into ModCounsel's automation stack.
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-2 gap-3">
          <div v-for="tool in toolkitHighlights" :key="tool.name" class="glass glow-card p-4">
            <div class="relative z-10">
              <div class="flex items-center gap-2 mb-2">
                <span :class="[tagColors[tool.tag], 'text-[9px] font-bold px-2 py-0.5 rounded']">{{ tool.tag }}</span>
                <h4 class="font-bold text-sm text-text-primary">{{ tool.name }}</h4>
              </div>
              <p class="text-[11px] text-text-muted mb-2">{{ tool.desc }}</p>
              <div class="p-2 rounded bg-green-500/5 border border-green-500/10">
                <div class="text-[9px] uppercase tracking-wider text-green-400 mb-0.5">For ModCounsel</div>
                <p class="text-[11px] text-text-muted">{{ tool.integration }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="glass p-5 border-primary-500/10 text-center mt-6">
        <div class="flex items-center justify-center gap-2 mb-2">
          <Award :size="18" class="text-primary-400" />
          <h3 class="text-sm font-bold text-primary-400">What Sets Me Apart</h3>
        </div>
        <p class="text-xs text-text-muted max-w-2xl mx-auto">
          I don't just write code — I build autonomous systems that replace entire workflows.
          From Wonder Group to GcorpCleans to Revaya, I've shipped AI content engines, lead automation pipelines,
          and full business ecosystems as a solo developer. I actively curate 45+ AI tools and integrate them
          into production systems. I bring this entire toolkit to ModInsight.
        </p>
      </div>
    </div>
  </div>
</template>
