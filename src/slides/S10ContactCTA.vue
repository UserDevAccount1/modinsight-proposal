<script setup lang="ts">
import { ref } from 'vue'
import {
  FileText, Clock, AlertTriangle, CheckCircle2, ArrowRight, Target,
  Users, Bot, Briefcase, Shield, ChevronDown, ChevronUp, Sparkles, Zap
} from 'lucide-vue-next'

const activeSection = ref<'case' | 'proof' | 'offer' | 'video'>('case')
const videoUrl = ref('/Formal_offer.mp4')
const expandedTimeline = ref<number | null>(null)

const timeline = [
  { week: 'Week 1', date: 'March 10-16', event: 'Hired March 10. Ollama required strong GPU/RAM — my desktop insufficient. Proposed cloud alternatives (Azure Phi, Google Gemini). Nischay offered his laptop.', status: 'Blocked by hardware', color: 'text-red-400' },
  { week: 'Week 2', date: 'March 17-23', event: 'Attempted remote setup on Mac. VNC connection issues, black screens, screen sharing problems. Multiple troubleshooting sessions.', status: 'Blocked by connectivity', color: 'text-red-400' },
  { week: 'Week 3', date: 'March 24-30', event: 'Requested VNC account, Slack dev portal, iMessage account, Apple developer credentials. Waited days for responses and OTPs.', status: 'Blocked by access', color: 'text-amber-400' },
  { week: 'Week 4', date: 'March 31 - April 6', event: 'Partial access granted. Attempted to proceed. Asked to re-assess my role. Termination received April 6.', status: 'Terminated', color: 'text-red-400' },
]

const taskScope = [
  { component: 'Ollama Deployment', desc: 'Local LLM serving on MacOS with Docker containerization' },
  { component: 'Embedding Model', desc: 'Local embedding generator (nomic-embed-text) for dense vectors' },
  { component: 'FAISS Vector Database', desc: 'Persistent vector index with save/load from disk' },
  { component: 'Hybrid Retrieval', desc: 'Semantic (FAISS) + Keyword (BM25) search with RRF fusion' },
  { component: 'LangChain Orchestration', desc: 'Full pipeline: Input → Chunking → Embedding → Indexing → Query → Retrieval → LLM' },
  { component: 'iMessage Integration', desc: 'AppleScript + Python watcher on Messages DB' },
  { component: 'Slack Integration', desc: 'Dev portal API + bot responder' },
  { component: 'Remote Deployment', desc: 'Tailscale or Cloudflare Tunnel for external access' },
  { component: 'Web UI', desc: 'Chat interface with authentication (Open WebUI or custom Vue)' },
]

const proofSystems = [
  {
    system: 'Autonomous Content Platform',
    what: 'Replaced 10+ roles with 6 AI agents. 5 SEO articles in 25-30 minutes. Auto-publishes daily.',
    forModCounsel: 'Content & Growth Engine for the marketing team — AI-generated legal content, multi-channel publishing, SEO optimization.',
    savings: '$474K-$624K/year',
  },
  {
    system: 'Full Business Ecosystem',
    what: 'Vue.js dashboard + Flutter mobile app + AI chatbot + GHL pipeline + n8n automation + automated onboarding.',
    forModCounsel: 'Operations Command Center — unified dashboard for Contract Managers, Legal Ops, and Program Managers.',
    savings: 'End-to-end digital ecosystem',
  },
  {
    system: 'Lead Automation Engine',
    what: '45% conversion boost, 60% less manual scheduling, 70% faster response times using n8n + GHL.',
    forModCounsel: 'Business Development Pipeline — automated prospecting, outreach, and deal tracking for the sales team.',
    savings: '45% conversion boost',
  },
  {
    system: 'MCP Servers & AI Agent Orchestrator',
    what: 'Custom MCP servers for Claude Code + multi-agent systems with CrewAI and LangChain.',
    forModCounsel: 'Extend ModInsight\'s AI with custom MCP tools — contract analysis, compliance checks, risk scoring.',
    savings: 'AI infrastructure',
  },
]

const roleOpportunities = [
  {
    title: 'Contract Specialist',
    opening: 'Current opening at ModCounsel',
    aiSystem: 'Contract Lifecycle Intelligence System — AI-powered review, redlining, obligation tracking, and risk scoring',
    myValue: 'I build the AI tools that make Contract Specialists 3x more productive. Every contract reviewed by AI before human eyes touch it.',
  },
  {
    title: 'Sales Development Representative',
    opening: 'Current opening — drive growth for AI-enabled legal model',
    aiSystem: 'Business Development Pipeline — AI prospect enrichment, personalized outreach sequences, GHL pipeline automation, Slack deal rooms',
    myValue: 'I build the automation that generates and nurtures leads on autopilot — the SDR focuses on closing, not prospecting.',
  },
  {
    title: 'Content & Growth Lead',
    opening: 'Current role held by team member',
    aiSystem: 'Full Marketing & Growth Automation — AI-powered content creation (social media, blog, email, video scripts), multi-channel publishing, lead generation funnels, nurture sequences, GHL pipeline automation, and conversion tracking',
    myValue: 'The growth lead gets a complete AI-powered marketing machine: automated social media content, lead gen funnels, nurturing workflows, retargeting, and pipeline analytics — not just content, but the entire growth engine from first touch to closed deal.',
  },
  {
    title: 'People & Culture / HR',
    opening: 'Current role held by team member',
    aiSystem: 'Full-Stack HR System — clock-in/clock-out, time tracking, leave management, payroll integration, AI resume screening, automated onboarding, performance analytics, retention prediction, and culture surveys',
    myValue: 'I can build the complete HR platform from ground up: a production-grade time & attendance system with mobile clock-in/out, plus the AI deep layer on top — talent matching, scheduling optimization, and predictive retention.',
  },
  {
    title: 'Legal Operations Associate',
    opening: 'Current role held by team member',
    aiSystem: 'Legal Ops Command Center — request triage, SLA tracking, workload balancing, compliance auto-responder',
    myValue: 'Every routine legal request handled by AI first. The Legal Ops team focuses on complex cases, not FAQs.',
  },
  {
    title: 'Program Manager, Commercial Delivery',
    opening: 'Current role held by team member',
    aiSystem: 'Client Health Monitor — engagement tracking, churn prediction, automated status reports, satisfaction analysis',
    myValue: 'AI flags at-risk accounts before the PM even notices. Proactive client retention, not reactive firefighting.',
  },
]
</script>

<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="min-h-full py-12 px-8 max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-6">
        <p class="text-xs font-semibold tracking-widest text-primary-400 uppercase mb-2">Slide 10</p>
        <h2 class="text-4xl font-bold mb-2">
          <span class="gradient-text">My Case & Formal Offer</span>
        </h2>
        <p class="text-text-muted text-sm">
          Prepared for Nischay (Founding Engineer, modInsight) — by Gabriel Alvin Aquino — April 2026
        </p>
      </div>

      <!-- Section Tabs -->
      <div class="flex gap-2 mb-6 sticky top-0 z-20 bg-surface-950/90 backdrop-blur-sm py-2 -mx-2 px-2">
        <button
          v-for="sec in ([
            { id: 'case', label: 'What Happened & Scope Reality' },
            { id: 'proof', label: 'What I Built & How It Maps' },
            { id: 'offer', label: 'My Offer & Pilot Proposal' },
            { id: 'video', label: 'Role Reposition Statement' },
          ] as const)"
          :key="sec.id"
          @click="activeSection = sec.id"
          class="px-4 py-2 rounded-lg text-xs font-medium transition-all"
          :class="activeSection === sec.id
            ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
            : 'bg-surface-800 text-text-muted hover:bg-surface-700'"
        >
          {{ sec.label }}
        </button>
      </div>

      <!-- ══════ SECTION 1: WHAT HAPPENED ══════ -->
      <div v-if="activeSection === 'case'">
        <!-- Formal Statement -->
        <div class="glass p-5 mb-6 border-primary-500/10">
          <div class="flex items-start gap-3">
            <FileText :size="20" class="text-primary-400 shrink-0 mt-0.5" />
            <div>
              <h3 class="font-bold text-text-primary mb-2">Formal Statement</h3>
              <p class="text-sm text-text-muted">
                I was hired as a Full-Stack Developer on March 10, 2026. Over four weeks, I spent more time
                waiting for access than actually coding. I never touched ModInsight's real codebase — the contract engine,
                repository, finance automation, or compliance systems. On April 6, I was terminated.
                This presentation is not a complaint. It is a demonstration of what I can actually build.
              </p>
            </div>
          </div>
        </div>

        <!-- Timeline -->
        <div class="mb-6">
          <h3 class="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
            <Clock :size="16" class="text-primary-400" />
            Factual Timeline
          </h3>
          <div class="relative">
            <div class="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-red-500/30 to-transparent" />
            <div class="space-y-3">
              <div
                v-for="(t, i) in timeline"
                :key="t.week"
                class="relative pl-12 cursor-pointer"
                @click="expandedTimeline = expandedTimeline === i ? null : i"
              >
                <div class="absolute left-3 top-4 w-4 h-4 rounded-full border-2 border-surface-600 bg-surface-900 flex items-center justify-center">
                  <div class="w-1.5 h-1.5 rounded-full" :class="t.color.replace('text-', 'bg-')" />
                </div>
                <div class="glass p-4 hover:bg-white/3 transition-colors">
                  <div class="flex items-center justify-between mb-1">
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-bold text-text-primary">{{ t.week }}</span>
                      <span class="text-[10px] text-text-dim">({{ t.date }})</span>
                    </div>
                    <span :class="[t.color, 'text-[10px] font-bold px-2 py-0.5 rounded bg-surface-800']">
                      {{ t.status }}
                    </span>
                  </div>
                  <p v-if="expandedTimeline === i" class="text-xs text-text-muted mt-2">{{ t.event }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Task Scope -->
        <div class="glass p-5 mb-6">
          <h3 class="text-sm font-bold text-text-primary mb-1 flex items-center gap-2">
            <AlertTriangle :size="16" class="text-amber-400" />
            The Task Scope — Enterprise-Grade Requirements
          </h3>
          <p class="text-xs text-text-dim mb-3">
            This is what was asked of a single developer. In a traditional team, this is 2-3 engineers over 4-6 weeks.
          </p>
          <div class="grid md:grid-cols-3 gap-1.5">
            <div v-for="(task, i) in taskScope" :key="task.component" class="flex items-start gap-2 p-2 rounded bg-surface-900/50">
              <span class="text-[10px] font-mono text-text-dim w-4 shrink-0">{{ i + 1 }}</span>
              <div>
                <div class="text-xs font-medium text-text-primary">{{ task.component }}</div>
                <div class="text-[10px] text-text-dim">{{ task.desc }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- AI-Assisted Development -->
        <div class="glass p-5 border-green-500/10">
          <h3 class="text-sm font-bold text-green-400 mb-3 flex items-center gap-2">
            <Bot :size="16" />
            Why This Scope Is Achievable — AI-Assisted Engineering
          </h3>
          <div class="grid md:grid-cols-2 gap-3">
            <div class="p-3 rounded-lg bg-surface-900/50">
              <div class="text-xs font-bold text-red-400 mb-1">Without AI Assistance</div>
              <div class="text-[10px] text-text-dim space-y-1">
                <div>2-3 person team, 4-6 weeks</div>
                <div>Manual boilerplate coding</div>
                <div>Slower iteration cycles</div>
              </div>
            </div>
            <div class="p-3 rounded-lg bg-green-500/5 border border-green-500/10">
              <div class="text-xs font-bold text-green-400 mb-1">With AI (Claude Code, MCP)</div>
              <div class="text-[10px] text-text-muted space-y-1">
                <div>1 engineer, 2-3 weeks</div>
                <div>AI generates patterns, engineer reviews</div>
                <div>Rapid prototyping and refinement</div>
              </div>
            </div>
          </div>
          <p class="text-[10px] text-text-dim mt-3 italic">
            "An AI agent in a terminal is a reasoning engine — not infrastructure. Infrastructure requires engineers.
            AI agents increase the need for system architects and automation engineers."
          </p>
        </div>
      </div>

      <!-- ══════ SECTION 2: PROOF & MAPPING ══════ -->
      <div v-if="activeSection === 'proof'">
        <div class="glass p-4 mb-4 border-primary-500/10">
          <p class="text-xs text-text-muted">
            These are production systems I've shipped. Each one maps directly to something I can build for ModCounsel.
          </p>
        </div>

        <div class="space-y-4 mb-8">
          <div v-for="proof in proofSystems" :key="proof.system" class="glass p-5">
            <div class="flex items-start justify-between gap-4 mb-3">
              <h4 class="font-bold text-text-primary">{{ proof.system }}</h4>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-green-500/15 text-green-400 shrink-0">
                {{ proof.savings }}
              </span>
            </div>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="p-3 rounded-lg bg-surface-900/50">
                <div class="text-[10px] uppercase tracking-wider text-text-dim mb-1">What I Built</div>
                <p class="text-xs text-text-muted">{{ proof.what }}</p>
              </div>
              <div class="p-3 rounded-lg bg-primary-600/5 border border-primary-500/10">
                <div class="text-[10px] uppercase tracking-wider text-primary-400 mb-1">For ModCounsel</div>
                <p class="text-xs text-text-muted">{{ proof.forModCounsel }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Role Opportunities -->
        <div class="glass p-3 mb-4 border-amber-500/10">
          <p class="text-xs text-text-muted">
            <strong class="text-amber-400">Note:</strong> The Founding Engineer likely already covers much of this scope.
            I'm not claiming these don't exist — I'm showing I'm willing to step up to a different role
            and contribute wherever there's a gap, whether it's a current opening or supporting existing team members.
          </p>
        </div>
        <h3 class="text-sm font-bold text-text-primary mb-3 flex items-center gap-2">
          <Users :size="16" class="text-primary-400" />
          AI Systems I Can Build for Every Role at ModCounsel
        </h3>
        <div class="space-y-2">
          <div v-for="role in roleOpportunities" :key="role.title" class="glass p-4">
            <div class="flex items-center gap-2 mb-2">
              <h4 class="text-sm font-bold text-text-primary">{{ role.title }}</h4>
              <span v-if="role.opening.includes('opening')" class="text-[9px] font-bold px-2 py-0.5 rounded bg-green-500/15 text-green-400">
                Open Position
              </span>
              <span v-else class="text-[9px] text-text-dim px-2 py-0.5 rounded bg-surface-700">
                {{ role.opening }}
              </span>
            </div>
            <div class="grid md:grid-cols-2 gap-2">
              <div class="text-xs text-text-muted">
                <span class="text-primary-400 font-medium">AI System:</span> {{ role.aiSystem }}
              </div>
              <div class="text-xs text-text-muted">
                <span class="text-green-400 font-medium">My Value:</span> {{ role.myValue }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ══════ SECTION 3: MY OFFER ══════ -->
      <div v-if="activeSection === 'offer'">
        <!-- The Offer -->
        <div class="glass p-6 mb-6 border-primary-500/20">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center">
              <Target :size="24" class="text-primary-400" />
            </div>
            <div>
              <h3 class="font-bold text-xl text-text-primary">My Offer: Business Automation Engineer</h3>
              <p class="text-xs text-text-dim">Not just Full-Stack — AI Systems + Marketing Automation + DevOps</p>
            </div>
          </div>
          <p class="text-sm text-text-muted mb-4">
            Instead of reassigning me to the same full-stack role, I propose repositioning as a
            <strong class="text-primary-400">Business Automation Engineer</strong> — building the AI agent infrastructure,
            marketing automation pipelines, and operational systems that multiply every team member's output.
          </p>
          <div class="grid md:grid-cols-3 gap-3">
            <div class="p-3 rounded-lg bg-surface-900/50 text-center">
              <div class="text-lg font-bold gradient-text">7</div>
              <div class="text-[10px] text-text-dim">Systems I can build for each role</div>
            </div>
            <div class="p-3 rounded-lg bg-surface-900/50 text-center">
              <div class="text-lg font-bold gradient-text">3</div>
              <div class="text-[10px] text-text-dim">Automation pipelines ready to deploy</div>
            </div>
            <div class="p-3 rounded-lg bg-surface-900/50 text-center">
              <div class="text-lg font-bold gradient-text">$54K+</div>
              <div class="text-[10px] text-text-dim">Potential annual savings</div>
            </div>
          </div>
        </div>

        <!-- Pilot Proposal -->
        <div class="glass p-6 mb-6 border-green-500/10">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
              <Shield :size="24" class="text-green-400" />
            </div>
            <div>
              <h3 class="font-bold text-lg text-green-400">2-Week Pilot — Zero Risk</h3>
              <p class="text-xs text-text-dim">Let me prove it. Pick one system. I build it in 2 weeks.</p>
            </div>
          </div>

          <div class="space-y-3 mb-4">
            <div class="flex items-start gap-3 p-3 rounded-lg bg-surface-900/50">
              <div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] font-bold text-green-400 shrink-0">1</div>
              <div>
                <div class="text-sm font-medium text-text-primary">Pick any system from this presentation</div>
                <div class="text-xs text-text-dim">Marketing pipeline, content engine, legal ops dashboard, contract AI, HR platform — your choice</div>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-lg bg-surface-900/50">
              <div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] font-bold text-green-400 shrink-0">2</div>
              <div>
                <div class="text-sm font-medium text-text-primary">I build a working MVP in 2 weeks</div>
                <div class="text-xs text-text-dim">Deployed in Docker, documented in GitHub, tested with real data. Not a demo — a production-ready system.</div>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 rounded-lg bg-surface-900/50">
              <div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-[10px] font-bold text-green-400 shrink-0">3</div>
              <div>
                <div class="text-sm font-medium text-text-primary">You evaluate the output — then decide</div>
                <div class="text-xs text-text-dim">If the system delivers value, we continue. If not, no hard feelings. The code is yours either way.</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Innovator Vision -->
        <div class="glass p-6 mb-6 border-purple-500/10">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
              <Sparkles :size="24" class="text-purple-400" />
            </div>
            <div>
              <h3 class="font-bold text-lg text-purple-400">What I Uniquely Bring — The Innovator's Vision</h3>
              <p class="text-xs text-text-dim">How I would expand ModCounsel beyond what exists today</p>
            </div>
          </div>

          <p class="text-sm text-text-muted mb-4">
            ModCounsel is an <strong class="text-text-primary">outsourced legal department</strong> for growing companies.
            Instead of hiring a full in-house legal team, businesses contract ModCounsel for contract review,
            corporate paperwork, risk advisory, and compliance — all on a <strong class="text-text-primary">fixed-price model</strong>.
            Here's what I see as the next evolution:
          </p>

          <div class="space-y-3 mb-4">
            <div class="p-4 rounded-lg bg-surface-900/50 border-l-2 border-purple-500/50">
              <h4 class="text-sm font-bold text-text-primary mb-1">Accelerate ModInsight — The Platform ModCounsel Is Already Building</h4>
              <p class="text-xs text-text-muted">
                ModCounsel is already transforming into a platform through ModInsight — that's the vision.
                I can help <strong class="text-primary-400">accelerate that transition</strong> by building the automation layers
                that turn ModInsight from an internal tool into a client-facing product: self-service contract review,
                AI-powered compliance checks, and automated request handling — so ModCounsel's experts focus on
                high-value work while ModInsight handles the rest at scale.
              </p>
            </div>
            <div class="p-4 rounded-lg bg-surface-900/50 border-l-2 border-blue-500/50">
              <h4 class="text-sm font-bold text-text-primary mb-1">Create a Legal Intelligence Marketplace</h4>
              <p class="text-xs text-text-muted">
                Aggregate anonymized insights across all clients into a <strong class="text-primary-400">legal intelligence product</strong>.
                Benchmarking data, risk trend reports, contract negotiation patterns, and industry-specific playbooks.
                This transforms ModCounsel from a service provider into a <strong class="text-primary-400">data company</strong> that happens to do legal work.
              </p>
            </div>
            <div class="p-4 rounded-lg bg-surface-900/50 border-l-2 border-green-500/50">
              <h4 class="text-sm font-bold text-text-primary mb-1">Automated Client Acquisition Machine</h4>
              <p class="text-xs text-text-muted">
                I can build the full marketing engine: AI content targeting growth companies, lead scoring against
                ModCounsel's ideal client profile, personalized outreach sequences, and automated nurturing.
                The Content & Growth Lead gets an <strong class="text-primary-400">AI-powered growth team</strong> that runs 24/7.
              </p>
            </div>
            <div class="p-4 rounded-lg bg-surface-900/50 border-l-2 border-amber-500/50">
              <h4 class="text-sm font-bold text-text-primary mb-1">White-Label AI Legal Tools for Clients</h4>
              <p class="text-xs text-text-muted">
                Package ModInsight's AI capabilities as a <strong class="text-primary-400">white-label product</strong>
                that ModCounsel's clients can use independently. Each client gets their own branded portal with
                contract review, compliance checks, and risk monitoring. New revenue stream, zero additional legal headcount.
              </p>
            </div>
          </div>

          <div class="p-3 rounded-lg bg-purple-500/5 border border-purple-500/10 text-center">
            <p class="text-xs text-text-muted italic">
              "ModCounsel has 88-96% client referral rates and $600K+ in negotiated savings.
              Imagine what happens when every process that generates those numbers is amplified by AI —
              and when the intelligence from 3,000+ contracts becomes a product itself."
            </p>
          </div>
        </div>

        <!-- Final CTA -->
        <div class="relative glass p-8 text-center border-primary-500/10 overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
          <div class="flex items-center justify-center gap-2 mb-4">
            <Sparkles :size="20" class="text-primary-400" />
            <h3 class="text-lg font-bold gradient-text">Let's Build This Together</h3>
            <Sparkles :size="20" class="text-primary-400" />
          </div>
          <p class="text-sm text-text-muted max-w-2xl mx-auto mb-6">
            I don't just write code — I build autonomous systems that expand businesses.
            ModCounsel has the legal expertise. ModInsight has the AI vision.
            I bring the engineering, the automation, and the innovator mindset
            to turn both into something bigger than the sum of their parts.
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <a href="mailto:gabrielalvin.info@gmail.com" class="glass px-5 py-2.5 rounded-full text-sm hover:bg-white/5 transition-colors">
              <span class="text-text-dim">Email:</span>
              <span class="text-primary-400 font-medium ml-1">gabrielalvin.info@gmail.com</span>
            </a>
            <a href="https://neuralyx.ai.dev-environment.site/" target="_blank" class="glass px-5 py-2.5 rounded-full text-sm hover:bg-white/5 transition-colors">
              <span class="text-text-dim">Portfolio:</span>
              <span class="text-primary-400 font-medium ml-1">neuralyx.ai</span>
            </a>
          </div>
          <p class="text-xs text-text-dim mt-4">
            Built with Vue 3 + Tailwind + TypeScript + Docker — this presentation is the proof.
          </p>
        </div>
      </div>

      <!-- ══════ SECTION 4: VIDEO PRESENTATION ══════ -->
      <div v-if="activeSection === 'video'">
        <div class="glass p-6 mb-6 border-primary-500/10">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 rounded-xl bg-primary-600/20 flex items-center justify-center">
              <Zap :size="24" class="text-primary-400" />
            </div>
            <div>
              <h3 class="font-bold text-lg text-text-primary">Role Reposition Statement</h3>
              <p class="text-xs text-text-dim">My formal case for repositioning — in my own words</p>
            </div>
          </div>

          <!-- Video Player Frame -->
          <div class="relative w-full rounded-xl overflow-hidden bg-surface-900 border border-white/5" style="aspect-ratio: 16/9;">
            <div v-if="!videoUrl" class="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <div class="w-20 h-20 rounded-full bg-primary-600/20 flex items-center justify-center mb-4">
                <svg class="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h4 class="text-lg font-bold text-text-primary mb-2">Video Coming Soon</h4>
              <p class="text-sm text-text-dim max-w-md">
                My recorded statement on why I'm repositioning — and what I bring to modCounsel in a different capacity.
              </p>
            </div>
            <video
              v-else
              :src="videoUrl"
              controls
              class="w-full h-full object-contain"
              preload="metadata"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
