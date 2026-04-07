import type { FeatureAgentMapping, OperationalGap } from '@/types/slides'

// ─── ASSUMPTION BASELINE ───
// I assume ModInsight has ALREADY implemented all 37 publicly claimed features.
// This mapping predicts HOW they likely architected the AI agent system
// based on: (1) their public feature list, (2) the job description for Full Stack Developer,
// (3) their "Tech + Talent" model, and (4) standard patterns in legal-tech AI platforms.

export const featureAgentMap: FeatureAgentMapping[] = [
  // ══════ CORE PLATFORM ══════
  {
    featureId: '1.1', featureName: 'Private AI', category: 'core',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Tenant Isolation Agent', function: 'Ensures data segregation per client, manages encryption keys per tenant', type: 'monitoring' },
      { name: 'Model Router', function: 'Routes prompts to tenant-specific fine-tuned models or shared base models', type: 'routing' },
    ],
    assumedStatus: 'likely-built',
    reasoning: 'Core product claim — "private AI" implies tenant isolation is foundational. Kandji testimonial confirms per-client customization.',
  },
  {
    featureId: '1.2', featureName: 'Real-time Completion', category: 'core',
    orchestratorAgent: 'Backend Orchestrator Agent',
    subAgents: [
      { name: 'Stream Handler', function: 'Manages SSE/WebSocket streams for real-time AI response delivery', type: 'processing' },
      { name: 'Queue Priority Agent', function: 'Prioritizes real-time tasks over batch jobs in the task queue', type: 'routing' },
    ],
    assumedStatus: 'likely-built',
    reasoning: 'Explicitly claimed as "real time, not batch or delayed" — this is a differentiator they market.',
  },
  {
    featureId: '1.3', featureName: 'Workflow Matching', category: 'core',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Process Mining Agent', function: 'Learns client workflows from historical actions and adapts AI behavior', type: 'extraction' },
      { name: 'Workflow Adapter', function: 'Maps client-specific process steps to platform automation sequences', type: 'processing' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Kandji testimonial says system "learned and began processing" within days — implies adaptive workflow learning.',
  },
  {
    featureId: '1.4', featureName: '3x Efficiency Boost', category: 'core',
    orchestratorAgent: 'Full Stack Developer Agent',
    subAgents: [
      { name: 'Efficiency Metrics Tracker', function: 'Measures time-saved, throughput, and automation rate per workflow', type: 'monitoring' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Marketing claim backed by Kandji numbers (90% response time reduction, 20hrs/month saved). Likely has dashboards.',
  },
  {
    featureId: '1.5', featureName: 'Faster Response Times', category: 'core',
    orchestratorAgent: 'Backend Orchestrator Agent',
    subAgents: [
      { name: 'Latency Monitor', function: 'Tracks P50/P95/P99 response times and triggers alerts on degradation', type: 'monitoring' },
      { name: 'Cache Warming Agent', function: 'Pre-caches frequently accessed contracts and common query results', type: 'self-healing' },
    ],
    assumedStatus: 'likely-built',
    reasoning: 'Kandji claims 90% reduction in response times — requires performance monitoring infrastructure.',
  },
  {
    featureId: '1.6', featureName: 'Request Coverage', category: 'core',
    orchestratorAgent: 'Backend Orchestrator Agent',
    subAgents: [
      { name: 'Request Classifier', function: 'Classifies incoming requests by type, urgency, and required agent', type: 'routing' },
      { name: 'Fallback Handler', function: 'Routes unclassifiable requests to human operators with context summary', type: 'self-healing' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Coverage implies classification + routing. The "Tech + Talent" model suggests fallback to humans.',
  },

  // ══════ SALES PROCESS ══════
  {
    featureId: '2.1', featureName: 'Contract Sales Deal Review', category: 'sales',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Clause Comparator', function: 'Compares deal terms against company playbook standards', type: 'extraction' },
      { name: 'Risk Scorer', function: 'Assigns risk scores to non-standard clauses', type: 'processing' },
      { name: 'Approval Router', function: 'Routes flagged deals to appropriate approvers based on risk level', type: 'routing' },
    ],
    assumedStatus: 'likely-built',
    reasoning: 'Core sales feature — "uphold company standards, every time." This is the bread and butter of a legal-tech AI.',
  },
  {
    featureId: '2.2', featureName: 'Non-standard Term Approval', category: 'sales',
    orchestratorAgent: 'Backend Orchestrator Agent',
    subAgents: [
      { name: 'Exception Analyzer', function: 'Evaluates non-standard terms against precedent database', type: 'extraction' },
      { name: 'Escalation Agent', function: 'Auto-escalates based on term severity and dollar value thresholds', type: 'routing' },
    ],
    assumedStatus: 'likely-built',
    reasoning: 'Explicitly claimed for "rapid deal closure" — requires automated approval workflows.',
  },
  {
    featureId: '2.3', featureName: 'One-click Signature', category: 'sales',
    orchestratorAgent: 'Integration Ops Agent',
    subAgents: [
      { name: 'DocuSign Bridge', function: 'Manages e-signature envelope creation, routing, and status tracking', type: 'sync' },
      { name: 'Signature Status Watcher', function: 'Monitors signature status and triggers follow-up actions on completion', type: 'monitoring' },
    ],
    assumedStatus: 'likely-built',
    reasoning: 'One-click implies deep integration with e-signature services. Standard legal-tech feature.',
  },
  {
    featureId: '2.4', featureName: 'Repository Storage', category: 'sales',
    orchestratorAgent: 'Data Engineering Agent',
    subAgents: [
      { name: 'Document Indexer', function: 'Indexes signed contracts for full-text and semantic search', type: 'processing' },
      { name: 'Metadata Extractor', function: 'Extracts key dates, parties, values from signed documents', type: 'extraction' },
    ],
    assumedStatus: 'likely-built',
    reasoning: 'Repository is fundamental. Feature 4.2 (AI chat over contracts) depends on this.',
  },
  {
    featureId: '2.5', featureName: 'Shorten Contract Cycles', category: 'sales',
    orchestratorAgent: 'Full Stack Developer Agent',
    subAgents: [
      { name: 'Bottleneck Detector', function: 'Identifies slowest stages in the contract lifecycle and suggests optimizations', type: 'monitoring' },
      { name: 'SLA Tracker', function: 'Tracks turnaround time per stage and alerts on SLA breaches', type: 'monitoring' },
    ],
    assumedStatus: 'probably-built',
    reasoning: '"10 days" is a specific, measurable claim — requires cycle time tracking and analytics.',
  },

  // ══════ FINANCE ══════
  {
    featureId: '3.1', featureName: 'Intelligent Vendor Processing', category: 'finance',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Vendor Document Classifier', function: 'Classifies vendor documents (invoices, W-9s, contracts) by type', type: 'extraction' },
      { name: 'Vendor Onboarding Agent', function: 'Orchestrates multi-step vendor onboarding: docs → review → approval → setup', type: 'processing' },
      { name: 'Duplicate Detector', function: 'Detects duplicate vendor submissions or conflicting records', type: 'quality' },
    ],
    assumedStatus: 'likely-built',
    reasoning: '"Start to finish" implies end-to-end pipeline. Kandji testimonial references vendor legal requests.',
  },
  {
    featureId: '3.2', featureName: 'Finance Inbox Management', category: 'finance',
    orchestratorAgent: 'Integration Ops Agent',
    subAgents: [
      { name: 'Email Parser', function: 'Extracts structured data from finance-related emails (invoices, POs, inquiries)', type: 'extraction' },
      { name: 'Auto-responder', function: 'Generates and sends templated responses for routine finance requests', type: 'generation' },
      { name: 'Triage Agent', function: 'Classifies urgency and routes to appropriate finance workflow', type: 'routing' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Inbox management requires email integration + classification. Complex but achievable with LLM.',
  },
  {
    featureId: '3.3', featureName: 'Compliance Questionnaires', category: 'finance',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Questionnaire Parser', function: 'Parses incoming questionnaire formats (PDF, DOCX, web forms)', type: 'extraction' },
      { name: 'Answer Generator', function: 'Generates answers from knowledge base using RAG', type: 'generation' },
      { name: 'Answer Reviewer', function: 'Flags low-confidence answers for human review before submission', type: 'quality' },
    ],
    assumedStatus: 'probably-built',
    reasoning: '"Instantly handles" implies automated response generation. RAG over past questionnaires is standard.',
  },
  {
    featureId: '3.4', featureName: 'Audit Handling', category: 'finance',
    orchestratorAgent: 'Data Engineering Agent',
    subAgents: [
      { name: 'Audit Evidence Collector', function: 'Assembles required documents and logs for audit requests', type: 'extraction' },
      { name: 'Trail Integrity Agent', function: 'Validates audit trail completeness and flags gaps', type: 'quality' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Audit handling requires comprehensive logging and evidence assembly.',
  },
  {
    featureId: '3.5', featureName: 'Dunning Letter Handling', category: 'finance',
    orchestratorAgent: 'Integration Ops Agent',
    subAgents: [
      { name: 'Dunning Classifier', function: 'Identifies dunning letters from inbound mail and extracts key details', type: 'extraction' },
      { name: 'Response Drafter', function: 'Drafts appropriate responses based on payment status and history', type: 'generation' },
    ],
    assumedStatus: 'possibly-built',
    reasoning: 'Niche feature. May be partially automated with templated responses.',
  },
  {
    featureId: '3.6', featureName: '90% Operations Impact', category: 'finance',
    orchestratorAgent: 'Full Stack Developer Agent',
    subAgents: [
      { name: 'Impact Dashboard Agent', function: 'Calculates and visualizes operational impact metrics in real-time', type: 'monitoring' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Specific percentage claim requires measurement infrastructure.',
  },

  // ══════ COMPLIANCE & LEGAL ══════
  {
    featureId: '4.1', featureName: 'Redline Contracts', category: 'compliance',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Playbook Engine', function: 'Loads client-specific contract playbooks and acceptable term ranges', type: 'processing' },
      { name: 'Redline Generator', function: 'Generates tracked changes markup against playbook standards', type: 'generation' },
      { name: 'Language Normalizer', function: 'Standardizes legal language to preferred client terminology', type: 'processing' },
      { name: 'Self-healing Playbook Updater', function: 'Updates playbook rules when human reviewers consistently override AI suggestions', type: 'self-healing' },
    ],
    assumedStatus: 'likely-built',
    reasoning: 'Core differentiator — "auto-markup to your standards." This is what ModCounsel does manually, now automated.',
  },
  {
    featureId: '4.2', featureName: 'Intelligent Repository', category: 'compliance',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Embedding Pipeline', function: 'Chunks, embeds, and indexes contracts into vector store', type: 'processing' },
      { name: 'Chat Retriever', function: 'Retrieves relevant contract sections for conversational queries', type: 'extraction' },
      { name: 'Citation Agent', function: 'Provides exact clause references and page numbers in chat responses', type: 'quality' },
    ],
    assumedStatus: 'likely-built',
    reasoning: '"AI chat over stored contracts" — classic RAG application. Likely their most developed AI feature.',
  },
  {
    featureId: '4.3', featureName: 'Repository Reporting', category: 'compliance',
    orchestratorAgent: 'Data Engineering Agent',
    subAgents: [
      { name: 'Report Generator', function: 'Generates scheduled and ad-hoc reports from repository data', type: 'generation' },
      { name: 'Trend Analyzer', function: 'Identifies trends in contract terms, deal values, and turnaround times', type: 'extraction' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Reporting is a standard enterprise feature. Likely exists in some form.',
  },
  {
    featureId: '4.4', featureName: 'Deep Analysis', category: 'compliance',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Cross-contract Analyzer', function: 'Compares terms, obligations, and risks across multiple contracts', type: 'extraction' },
      { name: 'Anomaly Detector', function: 'Flags unusual terms or deviations from portfolio norms', type: 'quality' },
    ],
    assumedStatus: 'probably-built',
    reasoning: '"Deep analysis" suggests multi-document comparison capabilities.',
  },
  {
    featureId: '4.5', featureName: 'HR Self-service Portal', category: 'compliance',
    orchestratorAgent: 'Frontend Architect Agent',
    subAgents: [
      { name: 'HR FAQ Agent', function: 'Answers common HR questions from policy knowledge base', type: 'generation' },
      { name: 'Request Router', function: 'Routes complex HR requests to appropriate human handlers', type: 'routing' },
    ],
    assumedStatus: 'possibly-built',
    reasoning: 'Self-service portals are listed but less core than contract features.',
  },
  {
    featureId: '4.6', featureName: 'Legal Self-service', category: 'compliance',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Legal FAQ Agent', function: 'Answers routine legal questions using playbook and precedent data', type: 'generation' },
      { name: 'Template Selector', function: 'Recommends appropriate contract templates based on request type', type: 'routing' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Legal self-service is core to ModCounsel\'s operational model of reducing repetitive requests.',
  },
  {
    featureId: '4.7', featureName: 'Compliance Self-service', category: 'compliance',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Compliance Knowledge Agent', function: 'Serves compliance policies, regulations, and requirements on demand', type: 'generation' },
      { name: 'Policy Change Monitor', function: 'Tracks regulatory changes and updates compliance knowledge base', type: 'self-healing' },
    ],
    assumedStatus: 'possibly-built',
    reasoning: 'Similar to legal self-service but more specialized. May share infrastructure.',
  },
  {
    featureId: '4.8', featureName: 'Due Diligence Extraction', category: 'compliance',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Entity Extractor', function: 'Extracts parties, dates, obligations, payment terms from contracts', type: 'extraction' },
      { name: 'Risk Mapper', function: 'Maps extracted data to risk categories for diligence review', type: 'processing' },
      { name: 'Gap Identifier', function: 'Flags missing clauses or data points required for due diligence', type: 'quality' },
    ],
    assumedStatus: 'likely-built',
    reasoning: '"Full visibility" implies structured extraction. Essential for the legal operations workflow.',
  },
  {
    featureId: '4.9', featureName: 'Audit Extraction', category: 'compliance',
    orchestratorAgent: 'Data Engineering Agent',
    subAgents: [
      { name: 'Audit Data Packager', function: 'Packages extracted contract data into audit-ready formats', type: 'processing' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Extends due diligence extraction with audit-specific formatting.',
  },

  // ══════ BACK OFFICE ══════
  {
    featureId: '5.1', featureName: 'Auto-complete Forms', category: 'backoffice',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Form Field Mapper', function: 'Maps data from contracts/knowledge base to form fields', type: 'extraction' },
      { name: 'Autofill Engine', function: 'Populates form fields with extracted or predicted values', type: 'generation' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Form auto-completion is a natural extension of data extraction capabilities.',
  },
  {
    featureId: '5.2', featureName: 'Draft Emails', category: 'backoffice',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Context Assembler', function: 'Gathers relevant context (deal history, client profile) for email drafting', type: 'extraction' },
      { name: 'Draft Generator', function: 'Generates email drafts with appropriate tone and content', type: 'generation' },
      { name: 'Tone Calibrator', function: 'Adjusts email tone based on recipient relationship and urgency', type: 'quality' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Email drafting with LLMs is well-established. Likely uses client-specific templates.',
  },
  {
    featureId: '5.3', featureName: 'Post Journal Entries', category: 'backoffice',
    orchestratorAgent: 'Integration Ops Agent',
    subAgents: [
      { name: 'Journal Mapper', function: 'Maps financial data to chart of accounts entries', type: 'processing' },
      { name: 'ERP Poster', function: 'Posts validated journal entries to connected accounting systems', type: 'sync' },
      { name: 'Reconciliation Checker', function: 'Validates posted entries match source data', type: 'quality' },
    ],
    assumedStatus: 'possibly-built',
    reasoning: 'Requires deep ERP integration. May be limited to specific accounting systems.',
  },
  {
    featureId: '5.4', featureName: 'Flag Legal Risks', category: 'backoffice',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Risk Pattern Matcher', function: 'Identifies known risk patterns in contract language', type: 'extraction' },
      { name: 'Severity Classifier', function: 'Classifies flagged risks by severity and business impact', type: 'processing' },
      { name: 'Self-healing Risk Model', function: 'Updates risk patterns based on human feedback on false positives/negatives', type: 'self-healing' },
    ],
    assumedStatus: 'likely-built',
    reasoning: 'Legal risk flagging is core to contract review. Likely uses fine-tuned models.',
  },
  {
    featureId: '5.5', featureName: 'Coach on Calls', category: 'backoffice',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Speech-to-text Agent', function: 'Transcribes call audio in real-time', type: 'processing' },
      { name: 'Coaching Suggester', function: 'Generates real-time suggestions based on conversation context', type: 'generation' },
      { name: 'Objection Handler', function: 'Identifies objections and suggests counter-arguments from playbook', type: 'generation' },
    ],
    assumedStatus: 'uncertain',
    reasoning: 'Most complex feature claimed. Real-time call coaching requires speech-to-text + low-latency LLM inference. May be early-stage.',
  },
  {
    featureId: '5.6', featureName: 'Prioritize Operational Risks', category: 'backoffice',
    orchestratorAgent: 'AI Intelligence Agent',
    subAgents: [
      { name: 'Risk Aggregator', function: 'Aggregates risks across all operations into a prioritized queue', type: 'processing' },
      { name: 'Escalation Engine', function: 'Auto-escalates high-priority risks to appropriate stakeholders', type: 'routing' },
    ],
    assumedStatus: 'probably-built',
    reasoning: 'Risk prioritization is a natural output of the risk flagging system.',
  },
]

// ─── Operational Gaps — What a Full-Stack Dev Can Still Contribute ───
// Even assuming everything above is already built, these operational gaps
// represent areas where additional engineering effort strengthens ModCounsel operations.

export const operationalGaps: OperationalGap[] = [
  {
    area: 'Post-signature Obligation Tracking',
    currentState: 'Contracts are stored after signing, but renewal dates, payment milestones, and obligation deadlines are not tracked proactively',
    opportunity: 'Build an obligation monitoring service that extracts key dates from signed contracts and triggers proactive alerts before deadlines',
    impact: 'high',
    forModCounsel: true,
  },
  {
    area: 'Cross-client Intelligence & Benchmarking',
    currentState: 'Each client operates in isolation — no aggregated insights across the portfolio',
    opportunity: 'Build anonymized cross-client analytics: benchmark turnaround times, common risk patterns, negotiation outcomes across clients',
    impact: 'high',
    forModCounsel: true,
  },
  {
    area: 'Agent Self-healing & Feedback Loops',
    currentState: 'AI agents likely require manual prompt tuning when accuracy degrades',
    opportunity: 'Implement automated feedback loops: when humans override AI suggestions, feed corrections back to improve agent accuracy over time',
    impact: 'high',
    forModCounsel: false,
  },
  {
    area: 'Integration Health & Circuit Breakers',
    currentState: 'External integrations (ERP, email, e-sign) may fail silently',
    opportunity: 'Build integration health dashboard with circuit breakers, retry queues, and dead-letter handling for failed sync operations',
    impact: 'medium',
    forModCounsel: true,
  },
  {
    area: 'Client Onboarding Automation',
    currentState: 'New client onboarding likely requires manual setup of playbooks, templates, and workflow configurations',
    opportunity: 'Build a guided onboarding wizard that auto-configures the platform from sample contracts and existing client playbooks',
    impact: 'medium',
    forModCounsel: true,
  },
  {
    area: 'Proactive Compliance Monitoring',
    currentState: 'System responds to compliance requests but doesn\'t proactively flag regulatory changes',
    opportunity: 'Build a regulatory change monitoring service that alerts clients when new regulations affect their existing contracts',
    impact: 'medium',
    forModCounsel: true,
  },
  {
    area: 'Performance & Cost Optimization',
    currentState: 'LLM API costs grow linearly with usage; no caching or prompt optimization layer',
    opportunity: 'Build semantic caching for repeated queries, prompt compression, and model routing to minimize cost while maintaining quality',
    impact: 'medium',
    forModCounsel: false,
  },
  {
    area: 'White-label Portal for ModCounsel Clients',
    currentState: 'ModCounsel clients access ModInsight directly — no branded experience',
    opportunity: 'Build a white-label portal system so ModCounsel can offer branded AI-powered legal services to their clients',
    impact: 'high',
    forModCounsel: true,
  },
]
