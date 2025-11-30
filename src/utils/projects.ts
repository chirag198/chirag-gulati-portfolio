export interface Project {
  title: string;
  description: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Trinity RGMx Platform - Reckitt',
    description: 'Enterprise Revenue Growth Management system deployed across 100 countries for FMCG operations. Architected 15 microservices on Kubernetes with PostgreSQL, integrated Gurobi optimization for promotional simulations, and embedded security (CNAPP/CSPM) with PCAS token authentication and RBAC.',
  },
  {
    title: 'AccuKnox Cloud Security Solution',
    description: 'Comprehensive cloud security solution offering CSPM for Kubernetes and cloud accounts. Integrated open-source tools (MacCEY, Trivy, AWS Security Hub) for continuous monitoring, vulnerability detection, and proactive remediation across cloud providers.',
  },
  {
    title: 'DevOps Pipeline Implementation',
    description: 'Built a comprehensive CI/CD pipeline using GitLab/GitHub Actions, enabling 100+ deployments per day with zero-downtime releases.',
  },
];
