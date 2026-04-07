import type { ArchitectureLayer, FlowConnection, ProposalItem } from '@/types/slides'

// ─── Full Architecture with Layer → Feature → Agent Mapping ───

export const architectureLayers: ArchitectureLayer[] = [
  // ═══════════════════════════════════════════════════
  // LAYER 1: PRESENTATION / FRONTEND
  // ═══════════════════════════════════════════════════
  {
    id: 'frontend',
    label: 'Presentation Layer',
    description: 'Client-facing UI, dashboards, self-service portals, and real-time interfaces',
    color: 'from-blue-500/20 to-blue-600/5',
    textColor: 'text-blue-400',
    nodes: [
      { id: 'marketing', label: 'Marketing Site', description: 'Webflow (current) — future Vue.js migration', icon: 'Globe', tier: 'frontend' },
      { id: 'app', label: 'Product Dashboard', description: 'Core platform UI with real-time status', icon: 'Layout', tier: 'frontend' },
      { id: 'portal', label: 'Self-service Portal', description: 'Client-facing request tracking & knowledge base', icon: 'Users', tier: 'frontend' },
      { id: 'mobile', label: 'Responsive Web App', description: 'Mobile-optimized PWA for on-the-go access', icon: 'Smartphone', tier: 'frontend' },
    ],
    checklist: [
      { task: 'Responsive dashboard with real-time WebSocket updates', handles: 'Contract status, deal pipeline, analytics visualizations', status: 'required' },
      { task: 'Self-service portal with auto-response UI', handles: 'HR, Legal, Compliance request intake (Features 4.5–4.7)', status: 'required' },
      { task: 'One-click signature routing interface', handles: 'Deal approval workflow UI (Feature 2.3)', status: 'required' },
      { task: 'Contract redline viewer with diff highlighting', handles: 'Visual markup display for auto-redlined contracts (Feature 4.1)', status: 'required' },
      { task: 'Intelligent repository search & chat UI', handles: 'Semantic search over contracts with conversational UI (Feature 4.2)', status: 'required' },
      { task: 'Analytics & reporting dashboards', handles: 'Repository reports, deep analysis charts (Features 4.3–4.4)', status: 'recommended' },
      { task: 'Call coaching overlay interface', handles: 'Real-time coaching panel during calls (Feature 5.5)', status: 'optional' },
    ],
    agent: {
      name: 'Frontend Architect Agent',
      role: 'UI/UX Development & Component Architecture',
      description: 'Manages the entire presentation layer — from component design to state management to responsive layouts. Ensures visual design aligns with business requirements and maintains design system consistency.',
      responsibilities: [
        'Vue 3 component architecture with Composition API',
        'Tailwind CSS design system and responsive breakpoints',
        'WebSocket integration for real-time UI updates',
        'Accessibility compliance (WCAG 2.1 AA)',
        'Performance optimization (lazy loading, code splitting)',
        'Cross-browser compatibility testing',
      ],
      enabledFeatures: ['1.2', '1.3', '2.3', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '5.5'],
      jobAlignment: 'JD: "Design and build the front-end of applications through appealing visual design" — "Proficiency in HTML, CSS, JavaScript" — "JavaScript frameworks such as Vue" — "A knack for visual design and utility"',
      opsType: 'DevOps',
      cicdTasks: [
        'Automated Lighthouse audits on every PR',
        'Visual regression testing with Playwright screenshots',
        'Component storybook auto-deploy for design review',
        'Bundle size monitoring with CI alerts',
      ],
    },
    flowIn: [],
    flowOut: ['api'],
  },

  // ═══════════════════════════════════════════════════
  // LAYER 2: API GATEWAY
  // ═══════════════════════════════════════════════════
  {
    id: 'api',
    label: 'API & Business Logic Layer',
    description: 'RESTful API gateway, authentication, authorization, request routing, and business rule enforcement',
    color: 'from-green-500/20 to-green-600/5',
    textColor: 'text-green-400',
    nodes: [
      { id: 'gateway', label: 'API Gateway', description: 'FastAPI with rate limiting, versioning, OpenAPI docs', icon: 'Server', tier: 'api' },
      { id: 'auth', label: 'Auth & RBAC', description: 'JWT + OAuth2 with role-based access control', icon: 'Shield', tier: 'api' },
      { id: 'workflow', label: 'Workflow Engine', description: 'Business process orchestration and deal routing', icon: 'GitBranch', tier: 'api' },
      { id: 'queue', label: 'Task Queue', description: 'Celery + Redis for async job processing', icon: 'Layers', tier: 'api' },
    ],
    checklist: [
      { task: 'RESTful API with JWT auth and RBAC', handles: 'Secure access control for all platform features', status: 'required' },
      { task: 'Workflow engine for deal routing and approvals', handles: 'Sales deal review, non-standard term approval (Features 2.1–2.2)', status: 'required' },
      { task: 'Async task queue for heavy processing', handles: 'Vendor processing, bulk operations (Feature 3.1)', status: 'required' },
      { task: 'Rate limiting and API versioning', handles: 'Scalable API serving multiple clients', status: 'required' },
      { task: 'Webhook system for external notifications', handles: 'Integration callbacks, proactive alert delivery', status: 'recommended' },
      { task: 'OpenAPI documentation auto-generation', handles: 'Developer portal and third-party integration docs', status: 'recommended' },
    ],
    agent: {
      name: 'Backend Orchestrator Agent',
      role: 'API Design, Business Logic & Service Coordination',
      description: 'Governs the server-side logic layer — designs APIs, enforces business rules, manages authentication flows, and coordinates between the frontend requests and the AI/data services behind them.',
      responsibilities: [
        'FastAPI endpoint design with Pydantic validation',
        'JWT/OAuth2 authentication and multi-tenant RBAC',
        'Business rule enforcement (deal approval chains)',
        'Async task orchestration with Celery workers',
        'API versioning and backward compatibility',
        'Error handling, logging, and request tracing',
      ],
      enabledFeatures: ['1.1', '1.2', '1.5', '1.6', '2.1', '2.2', '2.3', '2.4', '3.1', '3.2'],
      jobAlignment: 'JD: "Develop and manage well-functioning databases and applications, writing clean code on the back-end" — "Server-side languages like Python, Node.js" — "Create scalable and secure web applications that can handle large amounts of data"',
      opsType: 'DevOps',
      cicdTasks: [
        'Automated API contract testing on every commit',
        'Load testing with k6 before each release',
        'Security scanning (OWASP ZAP) in staging pipeline',
        'Database migration validation in CI',
      ],
    },
    flowIn: ['frontend'],
    flowOut: ['ai', 'data'],
  },

  // ═══════════════════════════════════════════════════
  // LAYER 3: AI / ML SERVICES
  // ═══════════════════════════════════════════════════
  {
    id: 'ai',
    label: 'AI / ML Intelligence Layer',
    description: 'LLM orchestration, RAG pipelines, specialized AI agents, document understanding, and real-time inference',
    color: 'from-purple-500/20 to-purple-600/5',
    textColor: 'text-purple-400',
    nodes: [
      { id: 'orchestrator', label: 'Agent Orchestrator', description: 'Multi-agent routing with Claude Agent SDK', icon: 'Brain', tier: 'ai' },
      { id: 'llm', label: 'LLM Gateway', description: 'Claude API with fallback models and prompt management', icon: 'Cpu', tier: 'ai' },
      { id: 'rag', label: 'RAG Pipeline', description: 'Document embeddings, vector search, context assembly', icon: 'Search', tier: 'ai' },
      { id: 'mcp', label: 'MCP Tool Layer', description: 'Model Context Protocol tools for external system access', icon: 'Wrench', tier: 'ai' },
    ],
    checklist: [
      { task: 'Contract redlining engine (auto-markup to standards)', handles: 'Feature 4.1 — redline contracts against playbook', status: 'required' },
      { task: 'RAG-based contract repository with semantic chat', handles: 'Feature 4.2 — AI chat over stored contracts', status: 'required' },
      { task: 'Due diligence and audit data extraction', handles: 'Features 4.8–4.9 — structured data from unstructured contracts', status: 'required' },
      { task: 'Legal risk flagging and scoring', handles: 'Feature 5.4 — automatic legal risk identification', status: 'required' },
      { task: 'Email and form auto-drafting', handles: 'Features 5.1–5.2 — contextual auto-completion', status: 'required' },
      { task: 'Compliance questionnaire auto-responder', handles: 'Features 3.3, 4.7 — instant questionnaire handling', status: 'required' },
      { task: 'Real-time call coaching inference', handles: 'Feature 5.5 — live coaching suggestions during calls', status: 'optional' },
      { task: 'Operational risk prioritization model', handles: 'Feature 5.6 — risk ranking and escalation triggers', status: 'recommended' },
    ],
    agent: {
      name: 'AI Intelligence Agent',
      role: 'LLM Orchestration, RAG Engineering & Model Ops',
      description: 'The brain of the platform. Manages all AI inference — from routing prompts to the right model, to building retrieval-augmented context, to running specialized sub-agents for contract review, compliance, and finance tasks. This agent also manages prompt versioning, model evaluation, and A/B testing of AI outputs.',
      responsibilities: [
        'Claude API integration with prompt management',
        'RAG pipeline: chunking, embedding, retrieval, reranking',
        'Multi-agent orchestration via Claude Agent SDK',
        'MCP tool registration and context assembly',
        'Model evaluation, A/B testing, and quality scoring',
        'Prompt versioning and regression detection',
      ],
      enabledFeatures: ['1.1', '1.2', '1.3', '4.1', '4.2', '4.8', '4.9', '5.1', '5.2', '5.4', '5.5', '5.6', '3.3', '3.4', '3.5'],
      jobAlignment: 'JD: "Ensuring seamless integration with the back-end infrastructure" — "Continuously participate in code reviews" — The AI layer IS the core differentiator. A full-stack dev who understands LLM orchestration, RAG, and agent systems is what makes "Tech + Talent = 3x" real.',
      opsType: 'MLOps',
      cicdTasks: [
        'Prompt regression testing on model updates',
        'RAG retrieval quality benchmarks (precision@k, recall@k)',
        'Agent response accuracy evaluation datasets',
        'Model latency and cost tracking dashboards',
        'Automated prompt versioning with git-tracked templates',
      ],
    },
    flowIn: ['api'],
    flowOut: ['data'],
  },

  // ═══════════════════════════════════════════════════
  // LAYER 4: DATA & STORAGE
  // ═══════════════════════════════════════════════════
  {
    id: 'data',
    label: 'Data & Storage Layer',
    description: 'Relational databases, vector stores, document storage, caching, and audit trails',
    color: 'from-amber-500/20 to-amber-600/5',
    textColor: 'text-amber-400',
    nodes: [
      { id: 'postgres', label: 'PostgreSQL', description: 'Primary relational DB for business data', icon: 'Database', tier: 'data' },
      { id: 'vector', label: 'Vector Store', description: 'Pinecone/pgvector for document embeddings', icon: 'Boxes', tier: 'data' },
      { id: 'storage', label: 'Object Storage', description: 'S3/GCS for contracts, files, and attachments', icon: 'HardDrive', tier: 'data' },
      { id: 'cache', label: 'Redis Cache', description: 'Session cache, rate limiting, task queue backend', icon: 'Zap', tier: 'data' },
    ],
    checklist: [
      { task: 'Multi-tenant PostgreSQL with row-level security', handles: 'Secure per-client data isolation', status: 'required' },
      { task: 'Contract repository with full-text + vector search', handles: 'Feature 2.4 — signed deal storage and retrieval', status: 'required' },
      { task: 'Audit trail logging for all operations', handles: 'Feature 3.4 — audit handling and compliance evidence', status: 'required' },
      { task: 'Document versioning and lifecycle tracking', handles: 'Contract version history, redline diffs', status: 'required' },
      { task: 'Vector embeddings store for semantic search', handles: 'Feature 4.2 — intelligent repository underpinning', status: 'required' },
      { task: 'Automated backup and disaster recovery', handles: 'Data protection and business continuity', status: 'required' },
      { task: 'Data retention policies and GDPR compliance', handles: 'Regulatory compliance for stored contracts', status: 'recommended' },
    ],
    agent: {
      name: 'Data Engineering Agent',
      role: 'Database Design, Migration Management & Data Pipeline Ops',
      description: 'Owns the entire data layer — from schema design and migration strategy to vector store optimization and backup automation. Ensures data integrity, query performance, and compliance-ready audit trails across all storage systems.',
      responsibilities: [
        'PostgreSQL schema design with migration versioning',
        'Vector store indexing and embedding pipeline management',
        'Redis caching strategy and invalidation logic',
        'S3 lifecycle policies and document versioning',
        'Query optimization and index tuning',
        'Backup automation and disaster recovery testing',
      ],
      enabledFeatures: ['2.4', '2.5', '3.4', '3.6', '4.2', '4.3', '4.4', '4.8', '4.9', '5.3'],
      jobAlignment: 'JD: "Solid understanding of database design and development" — "Database technology such as SQL, AWS, and MongoDB" — "Create scalable and secure web applications that can handle large amounts of data"',
      opsType: 'DataOps',
      cicdTasks: [
        'Migration dry-run validation before deploy',
        'Automated backup verification (restore + checksum)',
        'Query performance regression alerts',
        'Vector index quality metrics (embedding drift detection)',
        'Data anonymization pipeline for staging environments',
      ],
    },
    flowIn: ['api', 'ai'],
    flowOut: ['integration'],
  },

  // ═══════════════════════════════════════════════════
  // LAYER 5: INTEGRATIONS
  // ═══════════════════════════════════════════════════
  {
    id: 'integration',
    label: 'Integration & Connector Layer',
    description: 'ERP connectors, email/comms integrations, e-signature services, and third-party API bridges',
    color: 'from-cyan-500/20 to-cyan-600/5',
    textColor: 'text-cyan-400',
    nodes: [
      { id: 'erp', label: 'ERP Connectors', description: 'SAP, NetSuite, QuickBooks bi-directional sync', icon: 'Link', tier: 'integration' },
      { id: 'email', label: 'Email/Comms', description: 'Gmail, Outlook, Slack message processing', icon: 'Mail', tier: 'integration' },
      { id: 'esign', label: 'E-Signature', description: 'DocuSign, Adobe Sign for one-click signing', icon: 'PenTool', tier: 'integration' },
      { id: 'calendar', label: 'Calendar/Scheduling', description: 'CalendarBridge, Google Calendar for deal timelines', icon: 'Calendar', tier: 'integration' },
    ],
    checklist: [
      { task: 'Finance inbox ingestion and auto-routing', handles: 'Feature 3.2 — automated finance inbox management', status: 'required' },
      { task: 'E-signature service integration', handles: 'Feature 2.3 — one-click signature routing', status: 'required' },
      { task: 'Vendor processing pipeline connectors', handles: 'Feature 3.1 — start-to-finish vendor processing', status: 'required' },
      { task: 'Journal entry posting to accounting systems', handles: 'Feature 5.3 — automated journal entries', status: 'required' },
      { task: 'Dunning letter ingestion and response', handles: 'Feature 3.5 — automated dunning letter handling', status: 'recommended' },
      { task: 'OAuth2 connector framework for new integrations', handles: 'Pluggable architecture for future connectors', status: 'recommended' },
    ],
    agent: {
      name: 'Integration Ops Agent',
      role: 'External System Connectivity & Data Sync',
      description: 'Manages all external touchpoints — from ERP bi-directional sync to email inbox processing to e-signature routing. Handles OAuth flows, webhook management, retry logic, and data transformation between ModInsight and client systems.',
      responsibilities: [
        'OAuth2 flow management for external services',
        'Webhook registration and event processing',
        'Data transformation and mapping between systems',
        'Retry logic with exponential backoff',
        'Integration health monitoring and alerting',
        'Connector SDK for rapid new integration development',
      ],
      enabledFeatures: ['2.3', '2.4', '3.1', '3.2', '3.5', '5.2', '5.3'],
      jobAlignment: 'JD: "Experience with cloud technologies and modern human-computer interfaces, as well as web services and APIs" — "Collaborate with cross-functional teams to understand business requirements and translate them into technical specifications"',
      opsType: 'DevOps',
      cicdTasks: [
        'Integration contract testing with service mocks',
        'OAuth token refresh monitoring',
        'External API version compatibility checks',
        'Data sync reconciliation reports',
      ],
    },
    flowIn: ['data'],
    flowOut: [],
  },
]

// ─── Data Flow Connections ───

export const flowConnections: FlowConnection[] = [
  { from: 'frontend', to: 'api', label: 'User Actions', dataType: 'HTTP/WebSocket requests, form submissions, file uploads' },
  { from: 'api', to: 'ai', label: 'AI Requests', dataType: 'Contract text, queries, classification tasks, agent invocations' },
  { from: 'api', to: 'data', label: 'CRUD Operations', dataType: 'Business data, user records, workflow state, audit logs' },
  { from: 'ai', to: 'data', label: 'AI Outputs', dataType: 'Embeddings, extracted entities, risk scores, generated text' },
  { from: 'data', to: 'integration', label: 'Sync Events', dataType: 'Signed contracts, journal entries, vendor records, notifications' },
  { from: 'integration', to: 'api', label: 'External Events', dataType: 'Inbound emails, webhook callbacks, ERP updates, signature events' },
]

// ─── Cross-cutting Security Agent ───

export const securityAgent = {
  name: 'Security & Compliance Agent',
  role: 'Cross-layer Security Enforcement & Audit',
  description: 'Operates across ALL layers — enforces security policies, manages secrets rotation, monitors for vulnerabilities, ensures SOC 2 compliance evidence collection, and runs penetration testing schedules.',
  responsibilities: [
    'OWASP Top 10 vulnerability scanning across all layers',
    'Secret rotation and vault management (HashiCorp Vault)',
    'SOC 2 evidence collection automation',
    'Penetration testing coordination and remediation tracking',
    'Data encryption at rest and in transit verification',
    'Access control audit and privilege escalation detection',
  ],
  opsType: 'SecOps' as const,
  cicdTasks: [
    'Dependency vulnerability scanning (Snyk/Dependabot)',
    'Static code analysis (SonarQube) on every PR',
    'Secrets detection in commit history',
    'TLS certificate expiry monitoring',
    'RBAC policy validation against role definitions',
  ],
  jobAlignment: 'JD: "Create scalable and secure web applications" — "Implement best practices in coding standards" — Security is cross-cutting; it touches every layer and is never "done."',
}

// ─── Full Stack Developer Agent (The Unifier) ───

export const fullStackDevAgent = {
  name: 'Full Stack Developer Agent',
  role: 'The Orchestrator of Orchestrators',
  description: 'This is the human developer\'s AI counterpart — a meta-agent that coordinates all layer-specific agents. It sees the full picture: frontend component needs triggering API changes triggering AI pipeline updates triggering database migrations triggering integration connector updates. It ensures cross-layer consistency, manages the development workflow, and catches integration gaps before they reach production.',
  responsibilities: [
    'Cross-layer feature implementation coordination',
    'End-to-end integration testing orchestration',
    'Code review automation with context from all layers',
    'Development environment management (Docker Compose)',
    'Technical debt tracking and refactoring prioritization',
    'Documentation generation from code + API specs',
    'Sprint planning assistance with effort estimation',
  ],
  whyNecessary: [
    'ModInsight has 37 features across 5 architecture layers — no single-layer agent can see the full picture',
    'The job description explicitly asks for "conception to final product" vision — this agent embodies that',
    'A deal review (Feature 2.1) touches ALL layers: UI form → API workflow → AI analysis → DB storage → e-sign integration',
    'Without a unifying agent, layer agents optimize locally but miss cross-cutting concerns',
    'This mirrors how a senior full-stack developer actually works — context-switching across the entire stack to ship features end-to-end',
  ],
  opsType: 'FullStackOps' as const,
  cicdTasks: [
    'End-to-end test suites that span all layers',
    'Deployment orchestration (rolling updates across services)',
    'Feature flag management and gradual rollout',
    'Cross-service health check aggregation',
    'Release notes auto-generation from commit history',
  ],
  jobAlignment: 'JD: "Ability to see a project from conception to final product" — "Work collaboratively with cross-functional teams" — "Identify areas for improvement and generate solutions that are scalable and efficient" — This agent IS the full-stack developer, amplified by AI.',
}

// ─── Proposals (updated) ───

export const proposals: ProposalItem[] = [
  {
    title: 'API Infrastructure & Auth',
    description: 'RESTful API with JWT auth, RBAC, rate limiting, and OpenAPI documentation',
    effort: '2-3 weeks',
    priority: 'P0',
    stack: ['FastAPI', 'PostgreSQL', 'Redis', 'JWT'],
  },
  {
    title: 'Contract Intelligence Pipeline',
    description: 'RAG-based contract analysis with clause extraction, risk scoring, and comparison',
    effort: '3-4 weeks',
    priority: 'P0',
    stack: ['Claude API', 'Pinecone', 'LangChain', 'Python'],
  },
  {
    title: 'Real-time Dashboard',
    description: 'Vue.js dashboard with WebSocket updates, analytics charts, and contract status tracking',
    effort: '2-3 weeks',
    priority: 'P0',
    stack: ['Vue 3', 'Tailwind', 'Chart.js', 'WebSocket'],
  },
  {
    title: 'Document Processing Engine',
    description: 'Automated document intake, OCR, classification, and metadata extraction',
    effort: '2 weeks',
    priority: 'P1',
    stack: ['Python', 'Tesseract', 'Claude Vision', 'S3'],
  },
  {
    title: 'Integration Framework',
    description: 'Pluggable connector system for ERP, email, and third-party services',
    effort: '3 weeks',
    priority: 'P1',
    stack: ['FastAPI', 'Celery', 'Redis', 'OAuth2'],
  },
  {
    title: 'AI Agent Orchestration',
    description: 'Multi-agent system with specialized agents for contract review, compliance, and finance',
    effort: '4 weeks',
    priority: 'P1',
    stack: ['Claude Agent SDK', 'MCP', 'Python', 'Redis'],
  },
  {
    title: 'Compliance & Audit Module',
    description: 'SOC 2 readiness, audit trail logging, data retention policies, and compliance reporting',
    effort: '2-3 weeks',
    priority: 'P1',
    stack: ['PostgreSQL', 'Elasticsearch', 'Vue 3'],
  },
  {
    title: 'Self-service Portal',
    description: 'Client-facing portal with request tracking, knowledge base, and automated responses',
    effort: '3 weeks',
    priority: 'P2',
    stack: ['Vue 3', 'Supabase', 'Claude API'],
  },
  {
    title: 'Analytics & Reporting Engine',
    description: 'Cross-client analytics, benchmarking, trend analysis, and scheduled reports',
    effort: '2-3 weeks',
    priority: 'P2',
    stack: ['Python', 'Pandas', 'Chart.js', 'PostgreSQL'],
  },
  {
    title: 'Developer API & Documentation',
    description: 'Public API with SDK, webhook system, and interactive documentation portal',
    effort: '2 weeks',
    priority: 'P3',
    stack: ['FastAPI', 'OpenAPI', 'VitePress'],
  },
]
