import type { RoadmapPhase } from '@/types/slides'

export const roadmap: RoadmapPhase[] = [
  {
    phase: 1,
    title: 'Foundation',
    duration: 'Weeks 1-4',
    deliverables: [
      'API infrastructure with auth and RBAC',
      'Database schema and migration system',
      'CI/CD pipeline with automated testing',
      'Development environment and tooling',
      'Core Vue.js application shell',
    ],
    tags: ['FastAPI', 'PostgreSQL', 'Vue 3', 'Docker', 'GitHub Actions'],
  },
  {
    phase: 2,
    title: 'Core Intelligence',
    duration: 'Weeks 5-8',
    deliverables: [
      'Contract processing pipeline (intake, OCR, classification)',
      'RAG-based contract analysis with Claude',
      'Intelligent repository with semantic search',
      'Real-time dashboard with contract status',
      'Automated redlining engine',
    ],
    tags: ['Claude API', 'Pinecone', 'LangChain', 'WebSocket'],
  },
  {
    phase: 3,
    title: 'AI Agents & Integration',
    duration: 'Weeks 9-12',
    deliverables: [
      'Multi-agent orchestration system',
      'ERP and email integration connectors',
      'Finance automation workflows',
      'Self-service portal MVP',
      'Compliance questionnaire automation',
    ],
    tags: ['Claude Agent SDK', 'MCP', 'Celery', 'OAuth2'],
  },
  {
    phase: 4,
    title: 'Scale & Polish',
    duration: 'Weeks 13-16',
    deliverables: [
      'Analytics and reporting engine',
      'Audit trail and compliance module',
      'Performance optimization and caching',
      'Security hardening and penetration testing',
      'Documentation and developer portal',
    ],
    tags: ['Elasticsearch', 'Redis', 'OpenAPI', 'SOC 2'],
  },
]
