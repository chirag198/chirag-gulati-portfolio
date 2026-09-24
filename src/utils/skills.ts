export const skillGroups: { label: string; items: string[] }[] = [
  {
    label: 'ai',
    items: ['Agentic AI', 'Multi-Agent Orchestration', 'LangGraph', 'LangChain', 'Claude / Anthropic API', 'OpenAI API', 'MCP', 'Claude Code (Agents, Skills, Hooks)', 'Ollama', 'Prompt Engineering', 'LLM Evals', 'Model Routing']
  },
  {
    label: 'backend',
    items: ['Python', 'GoLang', 'FastAPI', 'Django', 'Flask', 'Celery', 'NodeJS', 'PostgreSQL', 'Redis', 'Neo4j', 'Gurobi', 'Microservices']
  },
  {
    label: 'infra',
    items: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'Observability']
  },
  {
    label: 'security',
    items: ['Cloud Security', 'DevSecOps', 'CSPM', 'CNAPP', 'AI-SPM', 'RBAC', 'EU AI Act / NIST AI RMF']
  },
  {
    label: 'frontend',
    items: ['React', 'Next.js', 'Astro', 'Svelte', 'TypeScript', 'Playwright']
  },
  {
    label: 'leadership',
    items: ['System Design', 'Tech Leadership', 'Code Review', 'Mentorship', 'Hiring', 'Algorithmic Trading']
  }
];

export const skills = skillGroups.flatMap((group) => group.items);

export const achievements = [
  'Architected Raven, an EPAM-incubated agentic AI security platform with LangGraph-coordinated remediation agents',
  'Contributed to AccuKnox AI-SPM, securing LLM workloads and agentic-AI runtimes',
  'Built Avengers, a 10-agent Claude Code orchestrator with per-role model routing and guarded writes',
  'Shipped production websites for a listed company (NHC Foods) and a Pilates studio platform',
  'Designed an upskilling track bringing new engineers to production-readiness in 6 weeks',
  'Led team of 8+ engineers in successful cloud migration project',
  'Architected 15+ microservices handling 100+ countries for Fortune 500 company (Reckitt)',
  'Built CSPM solution securing Kubernetes clusters and cloud accounts',
  'Implemented automated testing framework increasing code coverage by 60%',
  'Designed ETL pipelines handling multi-TB datasets with zero-downtime migrations',
  'Resolved critical production issues ensuring global uptime for enterprise systems',
  'Integrated CNAPP/CSPM security into CI/CD pipelines',
  'Developed financial forecasting systems handling 500,000+ record datasets',
  'Recognized as Top Performer for 3 consecutive years',
  'AWS Certified Solutions Architect',
  'Kubernetes (CKAD) Certified',
];
