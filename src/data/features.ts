import type { Feature, FeatureCategory } from '@/types/slides'

export const categoryLabels: Record<FeatureCategory, string> = {
  core: 'Core Platform',
  sales: 'Sales Process',
  finance: 'Finance',
  compliance: 'Compliance & Legal',
  backoffice: 'Back Office',
  output: 'Output Claims',
}

export const features: Feature[] = [
  // Core Platform
  { id: '1.1', name: 'Private AI', category: 'core', description: 'A private AI that completes complex back office work in real time', priority: 'P0' },
  { id: '1.2', name: 'Real-time Completion', category: 'core', description: 'Completes work in real time, not batch or delayed', priority: 'P0' },
  { id: '1.3', name: 'Workflow Matching', category: 'core', description: 'Adapts to existing processes and matches how you work', priority: 'P1' },
  { id: '1.4', name: '3x Efficiency Boost', category: 'core', description: 'Tech + Talent = 3x boost in efficiency', priority: 'P1' },
  { id: '1.5', name: 'Faster Response Times', category: 'core', description: 'Significantly reduced response times across operations', priority: 'P0' },
  { id: '1.6', name: 'Request Coverage', category: 'core', description: 'Full coverage of incoming requests with automated routing', priority: 'P1' },

  // Sales Process
  { id: '2.1', name: 'Contract Sales Deal Review', category: 'sales', description: 'Automates sales deal review to uphold company standards every time', priority: 'P0' },
  { id: '2.2', name: 'Non-standard Term Approval', category: 'sales', description: 'Expedites non-standard terms for rapid deal closure', priority: 'P1' },
  { id: '2.3', name: 'One-click Signature', category: 'sales', description: 'Routes and signs deals instantly with one click', priority: 'P1' },
  { id: '2.4', name: 'Repository Storage', category: 'sales', description: 'Secures signed deals in your repository', priority: 'P2' },
  { id: '2.5', name: 'Shorten Contract Cycles', category: 'sales', description: 'Shortens contract cycles by 10 days on average', priority: 'P0' },

  // Finance
  { id: '3.1', name: 'Intelligent Vendor Processing', category: 'finance', description: 'End-to-end vendor processing from start to finish', priority: 'P0' },
  { id: '3.2', name: 'Finance Inbox Management', category: 'finance', description: 'Automates finance inboxes for all routine requests', priority: 'P1' },
  { id: '3.3', name: 'Compliance Questionnaires', category: 'finance', description: 'Instantly handles compliance questionnaires', priority: 'P1' },
  { id: '3.4', name: 'Audit Handling', category: 'finance', description: 'Instantly handles audit requests and documentation', priority: 'P1' },
  { id: '3.5', name: 'Dunning Letter Handling', category: 'finance', description: 'Automatically processes and responds to dunning letters', priority: 'P2' },
  { id: '3.6', name: '90% Operations Impact', category: 'finance', description: 'Boosts operations impact by 90%', priority: 'P0' },

  // Compliance & Legal
  { id: '4.1', name: 'Redline Contracts', category: 'compliance', description: 'Auto-markup contracts to your standards', priority: 'P0' },
  { id: '4.2', name: 'Intelligent Repository', category: 'compliance', description: 'AI-powered chat over stored contracts', priority: 'P0' },
  { id: '4.3', name: 'Repository Reporting', category: 'compliance', description: 'Generate reports from repository contents', priority: 'P1' },
  { id: '4.4', name: 'Deep Analysis', category: 'compliance', description: 'Deep analysis of repository contents for insights', priority: 'P1' },
  { id: '4.5', name: 'HR Self-service Portal', category: 'compliance', description: 'Auto-responds to HR requests', priority: 'P2' },
  { id: '4.6', name: 'Legal Self-service', category: 'compliance', description: 'Auto-responds to legal requests', priority: 'P1' },
  { id: '4.7', name: 'Compliance Self-service', category: 'compliance', description: 'Auto-responds to compliance requests', priority: 'P1' },
  { id: '4.8', name: 'Due Diligence Extraction', category: 'compliance', description: 'Extracts data from contracts for full visibility', priority: 'P0' },
  { id: '4.9', name: 'Audit Extraction', category: 'compliance', description: 'Extracts contract data for audit purposes', priority: 'P1' },

  // Back Office
  { id: '5.1', name: 'Auto-complete Forms', category: 'backoffice', description: 'Automatically completes forms with intelligent data', priority: 'P1' },
  { id: '5.2', name: 'Draft Emails', category: 'backoffice', description: 'Automatically drafts contextual emails', priority: 'P1' },
  { id: '5.3', name: 'Post Journal Entries', category: 'backoffice', description: 'Automatically posts journal entries to accounting systems', priority: 'P2' },
  { id: '5.4', name: 'Flag Legal Risks', category: 'backoffice', description: 'Automatically flags potential legal risks', priority: 'P0' },
  { id: '5.5', name: 'Coach on Calls', category: 'backoffice', description: 'Provides real-time coaching during calls', priority: 'P2' },
  { id: '5.6', name: 'Prioritize Operational Risks', category: 'backoffice', description: 'Prioritizes operational risks with automation', priority: 'P1' },

  // Output Claims
  { id: '6.1', name: '3x Efficiency Boost', category: 'output', description: 'Tech + Talent = 3x boost in efficiency', priority: 'P1' },
  { id: '6.2', name: '10 Days Saved', category: 'output', description: 'Shortens contract cycles by 10 days', priority: 'P0' },
  { id: '6.3', name: '90% Operations Boost', category: 'output', description: 'Boosts operations impact by 90%', priority: 'P0' },
  { id: '6.4', name: 'Meet Endless Demand', category: 'output', description: 'Empower teams to meet endless demand', priority: 'P1' },
  { id: '6.5', name: 'Effortless Operations', category: 'output', description: 'You lead. We make it effortless.', priority: 'P1' },
]

export const featureCounts: Record<FeatureCategory, number> = {
  core: 6,
  sales: 5,
  finance: 6,
  compliance: 9,
  backoffice: 6,
  output: 5,
}
