export const skills = [
  {
    category: 'Full-Stack Development',
    items: ['Vue 3 / TypeScript (4 yrs)', 'Python / FastAPI / Django', 'PostgreSQL / Supabase', 'Node.js / Express', 'Docker / GitHub Actions CI/CD'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'AI & Agent Systems',
    items: ['Claude API / MCP Servers', 'LangChain / CrewAI / LlamaIndex', 'RAG Pipelines / Vector DBs', 'n8n / Zapier / Make Automation', 'Multi-agent Orchestration'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    category: 'Marketing & Business Automation',
    items: ['GoHighLevel (GHL) Pipelines', 'Lead Gen / Nurturing Funnels', 'AI Content Generation Engines', 'CRM Integration (HubSpot/Zoho)', 'SEO Automation & Analytics'],
    color: 'from-amber-500 to-orange-500',
  },
  {
    category: 'DevOps & Infrastructure',
    items: ['Docker Compose / Microservices', 'Vercel / Cloudflare / AWS / GCP', 'Nginx / Reverse Proxy', 'Health Monitoring / Self-healing', 'Playwright / Automated Testing'],
    color: 'from-green-500 to-emerald-500',
  },
]

export const proofPoints = [
  {
    title: 'Autonomous AI Content Platform',
    description: 'Built a system that replaced 10+ content roles with 6 AI agents. Produces 5 SEO-optimized articles in 25-30 minutes with auto-publishing and self-healing capabilities.',
    relevance: 'Proves I can build autonomous AI agent systems that replace entire workflows — directly applicable to ModInsight\'s "Tech + Talent" model.',
  },
  {
    title: 'Full Business Ecosystem (Web + Mobile + Automation)',
    description: 'Delivered end-to-end: Vue.js management dashboard, Flutter mobile app with AI chatbot, GoHighLevel pipeline, n8n automation workflows, and automated client onboarding.',
    relevance: 'Full-stack + marketing automation + mobile — the breadth ModCounsel needs across their teams.',
  },
  {
    title: 'Lead Automation Engine',
    description: 'Built lead follow-up and appointment booking workflows. Reduced manual scheduling by 60%, boosted conversion by 45%, cut response delays by 70%.',
    relevance: 'Directly applicable to ModCounsel\'s business development and client acquisition pipeline.',
  },
  {
    title: 'MCP Server Suite & AI Agent Orchestrator',
    description: 'Built custom MCP servers for AI assistants and multi-agent systems using CrewAI and LangChain for automated research and task delegation.',
    relevance: 'Can extend ModInsight\'s AI infrastructure with custom MCP tools and agent capabilities.',
  },
]

export const valueProps = [
  { metric: '$474K+', label: 'Annual Savings', detail: 'From one AI automation project' },
  { metric: '10+', label: 'Roles Replaced', detail: 'With 6 autonomous AI agents' },
  { metric: '45%', label: 'Conversion Boost', detail: 'Lead automation pipeline' },
  { metric: '8+', label: 'Years Experience', detail: 'Full-stack + AI + automation' },
]

// ─── Systems I Can Build for Each ModCounsel Role ───

export interface RoleSystem {
  roleTitle: string
  department: string
  systemName: string
  description: string
  capabilities: string[]
  myExperience: string
  stack: string[]
}

export const roleSystems: RoleSystem[] = [
  {
    roleTitle: 'Content & Growth Lead / Marketing Manager',
    department: 'Marketing',
    systemName: 'AI-Powered Lead Generation & Content Engine',
    description: 'Autonomous marketing pipeline: AI generates SEO-optimized content, distributes across channels, captures leads, scores them, and nurtures through automated email/SMS sequences until conversion.',
    capabilities: [
      'AI content generation (blog, social, email) with SEO scoring',
      'Multi-channel lead capture (website, social, referral)',
      'Lead scoring with AI-based intent analysis',
      'Automated nurturing sequences (email, SMS, retargeting)',
      'Pipeline tracking dashboard with conversion analytics',
      'GoHighLevel / HubSpot / Zoho CRM integration',
    ],
    myExperience: 'Built autonomous content engines with 6 AI agents and lead automation pipelines that boosted conversion by 45% with 60% less manual work',
    stack: ['n8n', 'Vue 3', 'GHL API', 'Claude API', 'Supabase', 'WordPress'],
  },
  {
    roleTitle: 'Contract Manager',
    department: 'Legal Operations',
    systemName: 'Contract Lifecycle Intelligence System',
    description: 'End-to-end contract management: intake, AI-powered review, redlining, approval workflows, e-signature routing, repository storage, and obligation tracking with proactive deadline alerts.',
    capabilities: [
      'Contract intake with AI classification and metadata extraction',
      'Automated redlining against client playbooks',
      'Approval workflow engine with escalation rules',
      'Post-signature obligation and renewal tracking',
      'AI chat over contract repository (RAG)',
      'Risk scoring and anomaly detection',
    ],
    myExperience: 'Built RAG systems with vector search (Pinecone, ChromaDB), document processing pipelines, and multi-agent orchestration with LangChain/CrewAI',
    stack: ['Python', 'FastAPI', 'Claude API', 'Pinecone', 'Vue 3', 'DocuSign API'],
  },
  {
    roleTitle: 'Legal Operations Associate',
    department: 'Legal Operations',
    systemName: 'Legal Operations Command Center',
    description: 'Centralized dashboard for tracking all legal requests, SLA compliance, workload distribution, and performance metrics. AI-powered triage routes requests to the right specialist automatically.',
    capabilities: [
      'Request intake portal with AI auto-classification',
      'SLA tracking with proactive breach alerts',
      'Workload balancing across team members',
      'Self-service knowledge base for routine legal questions',
      'Automated compliance questionnaire responses (RAG)',
      'Real-time operations dashboard with KPIs',
    ],
    myExperience: 'Built management dashboards with Vue 3 + Supabase, real-time monitoring systems, and automated routing workflows with n8n',
    stack: ['Vue 3', 'Supabase', 'n8n', 'Claude API', 'WebSocket', 'Chart.js'],
  },
  {
    roleTitle: 'Program Manager, Commercial Delivery',
    department: 'Delivery',
    systemName: 'Commercial Delivery Tracker & Client Health Monitor',
    description: 'Project management system tracking all client engagements, deliverables, timelines, and client satisfaction. AI flags at-risk accounts and predicts churn before it happens.',
    capabilities: [
      'Client engagement tracking with milestone management',
      'Automated status reports and client health scoring',
      'AI-powered churn prediction and risk alerts',
      'Resource allocation and capacity planning',
      'Client satisfaction surveys with sentiment analysis',
      'Integration with billing and contract systems',
    ],
    myExperience: 'Built project tracking dashboards, billing systems with real-time updates, and AI-powered analytics with predictive models',
    stack: ['Vue 3', 'PostgreSQL', 'Python', 'Chart.js', 'n8n', 'Claude API'],
  },
  {
    roleTitle: 'People & Culture / HR',
    department: 'Human Resources',
    systemName: 'HR Operations & Talent Platform',
    description: 'Unified HR system: employee onboarding automation, time tracking, performance reviews, AI-powered resume screening, and self-service employee portal.',
    capabilities: [
      'Automated employee onboarding workflows',
      'Time tracking and attendance management',
      'AI resume screening and candidate ranking',
      'Performance review automation with 360 feedback',
      'Employee self-service portal for HR requests',
      'HR analytics dashboard with retention predictions',
    ],
    myExperience: 'Built HR/Employee Dashboards, AI Resume Screening automation, and automated onboarding workflows',
    stack: ['Vue 3', 'Supabase', 'n8n', 'Claude API', 'Python', 'Flutter'],
  },
  {
    roleTitle: 'Business Development',
    department: 'Sales',
    systemName: 'Business Development Pipeline & AI Outreach',
    description: 'Automated prospecting, outreach, and deal tracking. AI researches target companies, generates personalized outreach, books meetings, and tracks deals through the pipeline.',
    capabilities: [
      'AI-powered company research and prospect scoring',
      'Personalized outreach sequence generation',
      'Automated meeting booking (CalendarBridge integration)',
      'Deal pipeline tracking with win probability scoring',
      'Competitive intelligence monitoring',
      'Weekly pipeline reports with AI insights',
    ],
    myExperience: 'Built lead follow-up automation (45% conversion boost), GoHighLevel pipeline integration, and AI agent orchestration for research tasks',
    stack: ['n8n', 'GHL API', 'Claude API', 'Vue 3', 'Supabase', 'CalendarBridge'],
  },
  {
    roleTitle: 'Business Enablement Delivery',
    department: 'Operations',
    systemName: 'Operational Excellence & Self-Healing Platform',
    description: 'A meta-system that monitors all other systems: tracks uptime, catches errors, auto-heals common failures, and provides a unified view of platform health. The AI DevOps engineer that never sleeps.',
    capabilities: [
      'Cross-system health monitoring dashboard',
      'Self-healing agents that detect and fix common failures',
      'Automated incident response and escalation',
      'Performance optimization recommendations',
      'Cost tracking across all AI API usage',
      'Automated deployment and rollback management',
    ],
    myExperience: 'Built self-healing systems with "Kill Switch Guard" patterns, Docker microservices with health monitoring, and GitHub Actions CI/CD pipelines',
    stack: ['Docker', 'n8n', 'Python', 'Redis', 'GitHub Actions', 'Prometheus'],
  },
]

// ─── Marketing Automation Pipeline (Visual Flow) ───

export interface PipelineNode {
  id: string
  label: string
  description: string
  type: 'trigger' | 'ai' | 'action' | 'decision' | 'output' | 'monitor'
  tools?: string[]
}

export const marketingPipeline: PipelineNode[] = [
  {
    id: '1',
    label: 'Content Generation',
    description: 'AI generates SEO blog posts, social media, and email content from legal industry topics',
    type: 'ai',
    tools: ['Claude API', 'SearXNG', 'SEO Scorer'],
  },
  {
    id: '2',
    label: 'Multi-Channel Publish',
    description: 'Auto-publishes to website, LinkedIn, email newsletter, and social channels',
    type: 'action',
    tools: ['WordPress API', 'LinkedIn API', 'Mailchimp'],
  },
  {
    id: '3',
    label: 'Lead Capture',
    description: 'Website forms, demo bookings, content downloads tracked and captured',
    type: 'trigger',
    tools: ['CalendarBridge', 'Webflow Forms', 'GHL'],
  },
  {
    id: '4',
    label: 'AI Lead Scoring',
    description: 'AI analyzes company size, industry, intent signals, and engagement to score leads 1-100',
    type: 'ai',
    tools: ['Claude API', 'Clearbit', 'LinkedIn API'],
  },
  {
    id: '5',
    label: 'Route & Segment',
    description: 'Hot leads → Sales. Warm leads → Nurture sequence. Cold → Long-term drip',
    type: 'decision',
    tools: ['n8n', 'GHL Pipeline'],
  },
  {
    id: '6',
    label: 'Nurture Sequences',
    description: 'Automated email/SMS sequences with personalized content based on lead profile and behavior',
    type: 'action',
    tools: ['GHL', 'SendGrid', 'Twilio'],
  },
  {
    id: '7',
    label: 'Meeting Booking',
    description: 'AI follow-up triggers meeting booking when engagement signals are strong',
    type: 'ai',
    tools: ['CalendarBridge', 'n8n', 'Claude API'],
  },
  {
    id: '8',
    label: 'Pipeline Dashboard',
    description: 'Real-time analytics: CAC, conversion rates, pipeline value, lead velocity, attribution',
    type: 'output',
    tools: ['Vue 3', 'Chart.js', 'Supabase'],
  },
  {
    id: '9',
    label: 'AI Monitor & Optimize',
    description: 'AI reviews pipeline performance weekly, suggests optimizations, A/B tests automatically',
    type: 'monitor',
    tools: ['Claude API', 'n8n', 'Analytics'],
  },
]

// ─── Pipeline 2: AI Content Generation Engine ───
// Inspired by Nate Herk's "Army of Media Agents" — but tailored for ModCounsel's legal content needs

export const contentEnginePipeline: PipelineNode[] = [
  {
    id: '1',
    label: 'Topic Research Agent',
    description: 'AI scrapes legal news, regulatory changes, and competitor content to identify high-value topics for ModCounsel',
    type: 'ai',
    tools: ['Claude API', 'SearXNG', 'Apify', 'RSS Feeds'],
  },
  {
    id: '2',
    label: 'SEO Keyword Agent',
    description: 'Analyzes search volume, competition, and intent for legal industry keywords. Picks winners.',
    type: 'ai',
    tools: ['Semrush MCP', 'SerpBear', 'Claude API'],
  },
  {
    id: '3',
    label: 'Writer Agent',
    description: 'Generates long-form blog articles, case studies, and whitepapers with legal accuracy and brand voice',
    type: 'ai',
    tools: ['Claude API', 'Brand Voice Profile', 'RAG Knowledge Base'],
  },
  {
    id: '4',
    label: 'Critic & Editor Agent',
    description: 'Reviews content for accuracy, tone, SEO score, and legal compliance. Rewrites weak sections.',
    type: 'ai',
    tools: ['Claude API', 'SEO Scorer', 'Grammarly API'],
  },
  {
    id: '5',
    label: 'Image & Media Agent',
    description: 'Generates featured images, social media graphics, and infographics for each content piece',
    type: 'ai',
    tools: ['DALL-E / Midjourney', 'Canva API', 'Cloudinary'],
  },
  {
    id: '6',
    label: 'Publishing Orchestrator',
    description: 'Schedules and publishes to WordPress, LinkedIn, email newsletter, and social channels automatically',
    type: 'action',
    tools: ['WordPress API', 'LinkedIn API', 'Buffer', 'Mailchimp'],
  },
  {
    id: '7',
    label: 'Social Repurpose Agent',
    description: 'Slices long-form content into LinkedIn posts, Twitter threads, email snippets, and video scripts',
    type: 'ai',
    tools: ['Claude API', 'n8n', 'Buffer API'],
  },
  {
    id: '8',
    label: 'Performance Tracker',
    description: 'Tracks views, engagement, shares, lead captures per content piece. Feeds data back to Topic Research Agent.',
    type: 'monitor',
    tools: ['Google Analytics', 'LinkedIn Analytics', 'Supabase'],
  },
  {
    id: '9',
    label: 'Self-Healing Loop',
    description: 'If content quality score drops below threshold or publishing fails, system auto-corrects and retries. Alerts on 3 consecutive failures.',
    type: 'monitor',
    tools: ['n8n', 'Slack Webhook', 'Kill Switch Guard'],
  },
]

// ─── Pipeline 3: Marketing Automation & Lead Boost Engine ───
// Full-stack growth machine: GHL + n8n + AI agents + Slack + GitHub CI/CD

export const marketingBoostPipeline: PipelineNode[] = [
  {
    id: '1',
    label: 'Website Visitor Tracking',
    description: 'Identifies companies visiting modcounsel.com using reverse IP lookup and enrichment APIs',
    type: 'trigger',
    tools: ['Clearbit Reveal', 'Google Tag', 'Supabase'],
  },
  {
    id: '2',
    label: 'AI Prospect Enrichment',
    description: 'Scrapes LinkedIn, website, and public data to build rich prospect profiles with company size, tech stack, and legal needs',
    type: 'ai',
    tools: ['Apify', 'Claude API', 'LinkedIn API', 'Clearbit'],
  },
  {
    id: '3',
    label: 'Ideal Client Scoring',
    description: 'AI scores prospects against ModCounsel ICP: growth-stage companies with 50-500 employees needing contract support',
    type: 'ai',
    tools: ['Claude API', 'Scoring Model', 'Supabase'],
  },
  {
    id: '4',
    label: 'GHL Pipeline Sync',
    description: 'High-score leads auto-created in GoHighLevel with full profile, tagged by segment, assigned to sales rep',
    type: 'action',
    tools: ['GHL API', 'n8n', 'Webhook'],
  },
  {
    id: '5',
    label: 'Personalized Outreach',
    description: 'AI generates hyper-personalized email sequences referencing prospect\'s industry, recent news, and specific legal pain points',
    type: 'ai',
    tools: ['Claude API', 'GHL Campaigns', 'SendGrid'],
  },
  {
    id: '6',
    label: 'Multi-touch Nurture',
    description: 'Email → LinkedIn connect → Case study share → Webinar invite → Free consultation offer. 7-touch sequence over 21 days.',
    type: 'action',
    tools: ['GHL Workflows', 'LinkedIn API', 'Calendly'],
  },
  {
    id: '7',
    label: 'Slack Deal Room',
    description: 'Hot leads trigger private Slack channels with prospect summary, AI-suggested talking points, and meeting prep',
    type: 'action',
    tools: ['Slack API', 'n8n', 'Claude API'],
  },
  {
    id: '8',
    label: 'Retargeting & Ads',
    description: 'Warm leads auto-added to Facebook/LinkedIn retargeting audiences. AI optimizes ad copy based on engagement data.',
    type: 'action',
    tools: ['Facebook Ads API', 'LinkedIn Ads', 'n8n'],
  },
  {
    id: '9',
    label: 'Conversion Tracker',
    description: 'Tracks full journey: first touch → demo booked → proposal sent → deal closed. Calculates true CAC and LTV.',
    type: 'output',
    tools: ['Vue 3 Dashboard', 'Supabase', 'Chart.js'],
  },
  {
    id: '10',
    label: 'AI Growth Optimizer',
    description: 'Weekly AI review: which channels convert best, which content drives leads, where to double down. Auto-adjusts budgets.',
    type: 'monitor',
    tools: ['Claude API', 'n8n', 'Google Sheets'],
  },
]

// ─── GitHub Repository Structure for Automation ───

export const githubRepoStructure = {
  repoName: 'modcounsel-automation-suite',
  description: 'Monorepo containing all AI automation pipelines, agents, and integration workflows for ModCounsel',
  structure: [
    { path: 'agents/', desc: 'AI agent definitions (Claude Agent SDK, CrewAI configs)' },
    { path: 'agents/content-engine/', desc: '6-agent content generation pipeline' },
    { path: 'agents/lead-scorer/', desc: 'AI lead scoring and enrichment agent' },
    { path: 'agents/contract-reviewer/', desc: 'Contract analysis and redlining agent' },
    { path: 'agents/self-healing/', desc: 'Kill Switch Guard + auto-heal monitors' },
    { path: 'workflows/', desc: 'n8n workflow JSON exports (version controlled)' },
    { path: 'workflows/lead-nurture.json', desc: 'GHL lead nurturing sequence' },
    { path: 'workflows/content-publish.json', desc: 'Auto-publish to WordPress + social' },
    { path: 'workflows/inbox-triage.json', desc: 'Finance inbox auto-routing' },
    { path: 'integrations/', desc: 'Connector modules for external services' },
    { path: 'integrations/ghl/', desc: 'GoHighLevel API wrapper + pipeline sync' },
    { path: 'integrations/slack/', desc: 'Slack deal room + notification bot' },
    { path: 'integrations/docusign/', desc: 'E-signature routing + status tracking' },
    { path: 'integrations/calendarbridge/', desc: 'Meeting booking + availability sync' },
    { path: 'dashboard/', desc: 'Vue 3 analytics dashboard (marketing + legal ops)' },
    { path: 'mcp-servers/', desc: 'Custom MCP servers for Claude Code integration' },
    { path: '.github/workflows/', desc: 'CI/CD: test → build → deploy → health check' },
    { path: 'docker-compose.yml', desc: 'Full local development environment' },
  ],
}

// ─── 3rd Party Platforms: Integrate or Build Better ───

export interface PlatformComparison {
  platform: string
  category: string
  monthlyPrice: string
  whatItDoes: string
  howIIntegrate: string
  howIBuildBetter: string
  customAdvantage: string
  status: 'integrate' | 'replace' | 'hybrid'
}

export const platformComparisons: PlatformComparison[] = [
  {
    platform: 'Semrush',
    category: 'SEO & Keyword Research',
    monthlyPrice: '$130-$500/mo',
    whatItDoes: 'Keyword research, competitor analysis, backlink tracking, site audit, rank tracking',
    howIIntegrate: 'Semrush MCP server — Claude Code can query keyword data, pull competitor reports, and track rankings directly from the AI pipeline',
    howIBuildBetter: 'Custom SEO Scoring Engine with Claude API + SerpBear (open-source rank tracker) + SearXNG (search scraping). Proprietary 24-criteria scoring system that evaluates content quality before publishing — something Semrush can\'t do.',
    customAdvantage: 'My custom scorer evaluates legal-specific SEO factors (jurisdiction mentions, regulatory citations, clause terminology) that generic tools miss entirely',
    status: 'hybrid',
  },
  {
    platform: 'Surfer SEO',
    category: 'Content Optimization',
    monthlyPrice: '$89-$219/mo',
    whatItDoes: 'On-page SEO optimization, content structure suggestions, NLP-based keyword density',
    howIIntegrate: 'Surfer API pulls content scores and optimization suggestions into the Writer Agent workflow via n8n',
    howIBuildBetter: 'Claude API + custom prompt chain that analyzes top 10 SERP results, extracts content patterns, and generates optimization rules specific to legal content. No monthly SaaS fee — just API costs.',
    customAdvantage: 'Custom-built optimizer understands legal terminology context — knows "clause" in a contract article needs different treatment than "Santa Claus"',
    status: 'replace',
  },
  {
    platform: 'Ahrefs',
    category: 'Backlink & Domain Analysis',
    monthlyPrice: '$99-$999/mo',
    whatItDoes: 'Backlink analysis, domain authority tracking, content gap analysis, keyword explorer',
    howIIntegrate: 'Ahrefs API for backlink data and domain metrics. Feed into the AI Prospect Enrichment agent for lead scoring.',
    howIBuildBetter: 'For ModCounsel\'s needs, I can build a lighter competitor monitoring agent using Apify scrapers + Claude analysis. Tracks competitor content, pricing changes, and new service offerings automatically.',
    customAdvantage: 'ModCounsel doesn\'t need Ahrefs\' full backlink database — they need competitor intelligence specific to legal services. Custom is 10x cheaper.',
    status: 'hybrid',
  },
  {
    platform: 'GoHighLevel (GHL)',
    category: 'CRM & Marketing Automation',
    monthlyPrice: '$97-$497/mo',
    whatItDoes: 'CRM, pipeline management, email/SMS campaigns, landing pages, appointment booking, workflows',
    howIIntegrate: 'GHL API is the backbone of the Lead Gen pipeline. Pipeline sync, campaign triggers, contact management, and workflow automation all flow through GHL.',
    howIBuildBetter: 'GHL is excellent and should be kept — but I can build AI-powered extensions on top: custom lead scoring that GHL can\'t do, AI-generated campaign content, smart routing based on Claude analysis, and Slack deal room integration.',
    customAdvantage: 'GHL + AI agents = the marketing team\'s best friend. GHL handles the CRM plumbing, my agents handle the intelligence layer.',
    status: 'integrate',
  },
  {
    platform: 'HubSpot',
    category: 'Inbound Marketing & CRM',
    monthlyPrice: '$0-$3,600/mo',
    whatItDoes: 'Full marketing suite: CRM, email marketing, landing pages, analytics, content management, chat',
    howIIntegrate: 'HubSpot API for contact sync, deal tracking, and marketing attribution. Bi-directional sync with ModInsight\'s contract data.',
    howIBuildBetter: 'For ModCounsel\'s scale, a custom Vue 3 dashboard + Supabase + n8n workflows can replace HubSpot\'s $800+/mo Marketing Hub while adding AI-powered insights HubSpot doesn\'t offer.',
    customAdvantage: 'Custom dashboard shows legal-specific metrics: contract cycle time, clause risk distribution, client health scores — data HubSpot has no concept of.',
    status: 'replace',
  },
  {
    platform: 'Clearbit / Apollo',
    category: 'Lead Enrichment & Prospecting',
    monthlyPrice: '$99-$499/mo',
    whatItDoes: 'Company data enrichment, technographic data, intent signals, contact database',
    howIIntegrate: 'Clearbit Reveal for website visitor identification. Apollo for contact discovery. Both feed into the AI Prospect Enrichment agent.',
    howIBuildBetter: 'Custom enrichment pipeline using Apify (LinkedIn/website scraping) + Claude API (entity extraction + company profiling). Builds richer profiles at a fraction of the cost.',
    customAdvantage: 'Custom enrichment asks legal-specific questions: "Does this company have in-house counsel?", "Are they in a regulated industry?", "Recent M&A activity?" — things generic tools don\'t capture.',
    status: 'hybrid',
  },
  {
    platform: 'Grammarly Business',
    category: 'Writing & Tone',
    monthlyPrice: '$15-$25/user/mo',
    whatItDoes: 'Grammar checking, tone detection, clarity suggestions, brand voice consistency',
    howIIntegrate: 'Grammarly API in the Critic & Editor Agent pipeline for final-pass quality checks',
    howIBuildBetter: 'Claude API with a custom brand voice profile + legal writing standards prompt chain. Handles legal terminology that Grammarly flags as errors (e.g., "herein", "notwithstanding", "indemnify").',
    customAdvantage: 'Legal writing has its own grammar rules — Grammarly tries to "fix" legal language. My custom editor understands it.',
    status: 'replace',
  },
  {
    platform: 'Buffer / Hootsuite',
    category: 'Social Media Scheduling',
    monthlyPrice: '$6-$100/mo',
    whatItDoes: 'Schedule posts, manage multiple social accounts, basic analytics',
    howIIntegrate: 'Buffer API for multi-channel scheduling in the Publishing Orchestrator node',
    howIBuildBetter: 'n8n + platform APIs directly. Schedule, post, and track engagement without a middleman. AI repurposes long-form content into platform-optimized formats automatically.',
    customAdvantage: 'Custom social agent doesn\'t just schedule — it adapts content for each platform (LinkedIn professional, Twitter concise, blog comprehensive) and generates platform-native visuals.',
    status: 'replace',
  },
  {
    platform: 'Zapier / Make',
    category: 'Workflow Automation',
    monthlyPrice: '$20-$600/mo',
    whatItDoes: 'Connect apps, trigger workflows, basic automation chains',
    howIIntegrate: 'Not needed — n8n replaces both entirely. Self-hosted, no per-task pricing, full control.',
    howIBuildBetter: 'n8n is open-source and self-hosted. No per-execution fees (Zapier charges $0.01-$0.05 per task). At ModCounsel\'s scale, this saves $200-$500/month and offers more powerful AI agent integration.',
    customAdvantage: 'n8n supports custom code nodes, Docker deployment, GitHub version control, and Claude API integration natively. Zapier/Make are black boxes.',
    status: 'replace',
  },
  {
    platform: 'Calendly',
    category: 'Meeting Scheduling',
    monthlyPrice: '$10-$16/user/mo',
    whatItDoes: 'Meeting booking, availability management, calendar sync',
    howIIntegrate: 'ModCounsel already uses CalendarBridge — integrate via API for the Meeting Booking agent node',
    howIBuildBetter: 'CalendarBridge + AI agent = smart booking. AI evaluates lead score before offering time slots — high-value prospects get priority slots with senior team members.',
    customAdvantage: 'AI-powered scheduling considers deal size, urgency, and team workload — not just calendar availability.',
    status: 'integrate',
  },
]

// Total monthly savings calculation
export const platformSavings = {
  totalIfAllPaid: '$1,500-$5,000+/mo',
  afterCustomBuild: '$200-$500/mo (API costs only)',
  annualSavings: '$15,000-$54,000/year',
  note: 'Custom-built systems outperform SaaS tools on legal-specific tasks while eliminating per-seat and per-task pricing entirely.',
}

// ─── Nate Herk Reference — Inspiration & Methodology ───

export const nateHerkReference = {
  name: 'Nate Herk',
  title: 'AI Automation & n8n Expert, Founder of Uppit AI',
  channel: 'https://www.youtube.com/@nateherk',
  community: 'AI Automation Society (275K+ members)',
  website: 'https://www.nateherk.com',
  relevance: 'My approach to building AI automation systems for ModCounsel is heavily inspired by Nate Herk\'s methodology: build once, automate forever, replace entire teams with AI agents, and use n8n as the orchestration backbone.',
  keyVideos: [
    {
      title: 'I Built a Marketing Team with 1 AI Agent and No Code',
      url: 'https://www.youtube.com/watch?v=fnaTZa0-S30',
      relevance: 'Exact blueprint for the ModCounsel Content & Growth Engine — one AI agent that writes, edits, designs, and publishes',
    },
    {
      title: 'I Built the Ultimate Army of Media Agents in n8n',
      url: 'https://www.youtube.com/@nateherk',
      relevance: 'Multi-agent media pipeline — same architecture I use for the Content Generation Engine with specialized sub-agents',
    },
    {
      title: 'Build and Sell n8n AI Agents — 8+ Hour Course',
      url: 'https://www.youtube.com/@nateherk',
      relevance: 'Comprehensive n8n agent development — the foundation for all automation workflows in this proposal',
    },
    {
      title: 'AI Lead Response Agent with Human-in-the-Loop',
      url: 'https://www.youtube.com/watch?v=fnaTZa0-S30',
      relevance: 'Lead automation with HITL — directly applicable to ModCounsel\'s sales pipeline and the "Tech + Talent" model',
    },
  ],
  methodology: [
    'Build AI agents that handle 90% of the work, humans handle the 10% that matters',
    'Use n8n as the central orchestration layer — no vendor lock-in, self-hosted, version-controlled',
    'Every workflow is a GitHub-tracked JSON export — reproducible, testable, deployable via CI/CD',
    'Self-healing patterns: kill switches, retry logic, fallback handlers, Slack alerts on failure',
    'Measure everything: track time saved, cost reduced, leads generated, deals closed',
  ],
}

// ─── High-Level System Ideas ───

export const systemIdeas = [
  {
    name: 'Legal Knowledge Library',
    description: 'A comprehensive, AI-searchable library of legal precedents, clause templates, regulatory updates, and best practices. Lawyers and contract managers can search naturally and get cited answers.',
    icon: 'BookOpen',
    impact: 'Reduces research time by 70%. New hires ramp up in days instead of months.',
  },
  {
    name: 'Self-Healing AI Operations Platform',
    description: 'A meta-AI system that monitors all ModInsight agents, detects accuracy drift, auto-retrains on human corrections, manages prompt versions, and self-heals when integrations fail.',
    icon: 'RefreshCw',
    impact: 'Zero-downtime AI operations. System improves continuously without manual intervention.',
  },
  {
    name: 'Client Onboarding Autopilot',
    description: 'Guided wizard that auto-configures ModInsight for new clients: imports sample contracts, builds playbook, sets up workflows, and trains the AI on client-specific language — all in under 1 hour.',
    icon: 'Rocket',
    impact: 'Cuts onboarding from weeks to hours. Scales ModCounsel without scaling headcount.',
  },
  {
    name: 'Marketing & Growth Engine',
    description: 'Full-funnel automation: AI content → multi-channel publish → lead capture → scoring → nurturing → meeting booking → deal tracking. The marketing team operates on autopilot.',
    icon: 'TrendingUp',
    impact: 'Supports the Content & Growth Lead with AI-powered pipeline. Measurable ROI from day one.',
  },
  {
    name: 'Cross-Client Intelligence Dashboard',
    description: 'Anonymized analytics across all ModCounsel clients: benchmark turnaround times, identify common risk patterns, predict deal outcomes, and surface market trends.',
    icon: 'BarChart3',
    impact: 'Transforms ModCounsel from a service provider into an insights company.',
  },
  {
    name: 'Modohana HR Deep System',
    description: 'If modOhana handles basic clock-in/clock-out, this builds the deep layer: performance analytics, automated scheduling, AI-powered talent matching, culture surveys, and retention prediction.',
    icon: 'Users',
    impact: 'Gives the People & Culture team predictive power over talent decisions.',
  },
]
