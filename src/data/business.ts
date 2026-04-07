import type { Metric } from '@/types/slides'

export const modCounselMetrics: Metric[] = [
  { label: 'Client Referral Rate', value: 96, suffix: '%', description: 'Highest reported referral rate' },
  { label: 'Contracts Reviewed', value: 3000, suffix: '+', description: 'Total contracts processed' },
  { label: 'Client Savings', value: 600, prefix: '$', suffix: 'K+', description: 'From expert negotiations' },
  { label: 'Turnaround', value: 24, suffix: 'hr', description: 'Under 24-hour response time' },
]

export const modCounselServices = [
  {
    title: 'Contract Enablement',
    description: 'Ongoing contract support embedded with Legal, Sales, Procurement, Sourcing, Security, and Finance teams.',
    icon: 'FileText',
  },
  {
    title: 'Contract Negotiations',
    description: 'On-demand expert negotiators to clear backlogs, handle high-volume periods, and manage redlines.',
    icon: 'Handshake',
  },
  {
    title: 'Business Operations',
    description: 'Tech-enabled framework for designing, implementing, and managing operational systems.',
    icon: 'Settings',
  },
]

export const evolutionTimeline = [
  { year: '2020', event: 'ModCounsel founded', detail: 'Legal outsourcing firm with fixed-fee model' },
  { year: '2022', event: 'AI-enabled operations', detail: 'Internal tooling for contract processing' },
  { year: '2024', event: 'ModInsight.ai launched', detail: 'Product spin-off from internal tooling' },
  { year: '2025', event: 'Platform expansion', detail: 'Finance, compliance, and back-office automation' },
  { year: '2026', event: 'Growth phase', detail: 'Enterprise pipeline, hiring full-stack developers' },
]

export const companyFacts = {
  headquarters: 'Lafayette, CA / San Francisco Bay Area',
  offices: ['San Francisco Bay Area', 'Manila, Philippines', 'Los Angeles, CA', 'Buenos Aires, Argentina'],
  teamSize: '11-50 employees',
  founded: '~2020',
  coFounders: [
    { name: 'Alzeena Schwarzmeier', role: 'CEO (appointed Jan 2026)' },
    { name: 'Ronak Ray', role: 'Co-Founder' },
  ],
  pricingModel: 'Fixed monthly fees (not hourly)',
  entryPoint: '90-day pilot program',
}
