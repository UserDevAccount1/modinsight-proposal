export interface SlideConfig {
  id: string
  title: string
  subtitle?: string
  icon?: string
}

export type FeatureCategory =
  | 'core'
  | 'sales'
  | 'finance'
  | 'compliance'
  | 'backoffice'
  | 'output'

export interface Feature {
  id: string
  name: string
  category: FeatureCategory
  description: string
  techStack?: string[]
  priority: 'P0' | 'P1' | 'P2' | 'P3'
}

export interface Metric {
  label: string
  value: number
  suffix?: string
  prefix?: string
  description?: string
}

export interface GapItem {
  title: string
  visible: string
  needed: string
  severity: 'critical' | 'high' | 'medium'
}

export interface RoadmapPhase {
  phase: number
  title: string
  duration: string
  deliverables: string[]
  tags: string[]
}

export interface ArchitectureNode {
  id: string
  label: string
  description: string
  icon: string
  tier: 'frontend' | 'api' | 'ai' | 'data' | 'integration'
}

export interface ProposalItem {
  title: string
  description: string
  effort: string
  priority: 'P0' | 'P1' | 'P2' | 'P3'
  stack: string[]
}

// ─── Enhanced Architecture Types ───

export type TierKey = 'frontend' | 'api' | 'ai' | 'data' | 'integration'

export interface LayerAgent {
  name: string
  role: string
  description: string
  responsibilities: string[]
  enabledFeatures: string[]    // feature IDs from the 37-feature list
  jobAlignment: string         // how this maps to the job description
  opsType: 'DevOps' | 'MLOps' | 'DataOps' | 'SecOps' | 'FullStackOps'
  cicdTasks: string[]
}

export interface ArchitectureLayer {
  id: TierKey
  label: string
  description: string
  color: string
  textColor: string
  nodes: ArchitectureNode[]
  checklist: LayerChecklist[]
  agent: LayerAgent
  flowIn: string[]     // which layers feed into this
  flowOut: string[]    // which layers this feeds
}

export interface LayerChecklist {
  task: string
  handles: string
  status: 'required' | 'recommended' | 'optional'
}

export interface FlowConnection {
  from: TierKey
  to: TierKey
  label: string
  dataType: string
}

// ─── Feature → Agent → Sub-agent Table Mapping ───

export interface FeatureAgentMapping {
  featureId: string
  featureName: string
  category: FeatureCategory
  orchestratorAgent: string        // primary agent that owns this feature
  subAgents: SubAgent[]            // specialized sub-agents handling granular tasks
  assumedStatus: 'likely-built' | 'probably-built' | 'possibly-built' | 'uncertain'
  reasoning: string                // why we assume this status
}

export interface SubAgent {
  name: string
  function: string
  type: 'processing' | 'monitoring' | 'self-healing' | 'quality' | 'routing' | 'extraction' | 'generation' | 'sync'
}

export interface OperationalGap {
  area: string
  currentState: string
  opportunity: string
  impact: 'high' | 'medium' | 'low'
  forModCounsel: boolean           // relevant to ModCounsel operations specifically
}
