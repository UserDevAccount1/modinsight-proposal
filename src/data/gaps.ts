import type { GapItem } from '@/types/slides'

export const gaps: GapItem[] = [
  {
    title: 'Learning from Human Feedback',
    visible: 'No claim that AI improves from user corrections',
    needed: 'Enterprise expects continuous model improvement via RLHF/feedback loops',
    severity: 'high',
  },
  {
    title: 'Security Certifications',
    visible: 'No SOC 2, GDPR, ISO badges displayed',
    needed: 'Enterprise buyers require compliance proof before procurement',
    severity: 'critical',
  },
  {
    title: 'API for External Developers',
    visible: 'No mention of API or developer portal',
    needed: 'Integration-first buyers need programmatic access',
    severity: 'high',
  },
  {
    title: 'Post-signature Tracking',
    visible: 'No renewal dates or payment term tracking after signing',
    needed: 'Full contract lifecycle management is table stakes',
    severity: 'high',
  },
  {
    title: 'Proactive Alerts',
    visible: 'System appears reactive (responds to requests only)',
    needed: 'Push alerts before deadlines, risk escalation, SLA warnings',
    severity: 'medium',
  },
  {
    title: 'Cross-client Analytics',
    visible: 'No aggregated intelligence across clients',
    needed: 'Benchmarking and trend analysis across portfolio',
    severity: 'medium',
  },
  {
    title: 'Two-way ERP Integration',
    visible: 'No claim of writing back to client ERPs',
    needed: 'Bi-directional sync with SAP, NetSuite, etc.',
    severity: 'high',
  },
  {
    title: 'White-label Client Portal',
    visible: 'No branded portal for end-clients',
    needed: 'Managed service providers need white-label options',
    severity: 'medium',
  },
]
