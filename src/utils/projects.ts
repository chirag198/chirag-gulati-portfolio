export interface Project {
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  featured?: boolean;
  details?: string[];
  category: 'work' | 'hobby';
}

export const projects: Project[] = [
  // Work & client projects
  {
    title: 'Raven Engine - Agentic AI Security Remediation',
    description: 'EPAM-incubated AI security platform delivering end-to-end vulnerability remediation through specialised agents (Scanner, Mitigator, Orchestrator, Execution) coordinated by a LangGraph workflow.',
    technologies: ['LangGraph', 'LangChain', 'FastAPI', 'Ollama', 'Redis', 'Docker SDK', 'CodeQL', 'nmap'],
    featured: true,
    category: 'work',
    link: 'https://github.com/chirag198/raven-engine',
    details: [
      'Context-aware LLM commands: detects target facts (firewall tool, package manager, OS) before generating remediation',
      'Integrations with nmap + NSE, nikto, CodeQL, and GitHub PR mitigation',
      'Dry-run and rollback for idempotent, safe remediation',
      'Local Ollama inference keeps costs and data on-prem'
    ]
  },
  {
    title: 'AISquare Explainability SDK',
    description: 'Explainability and governance stack for AI agents. Captures execution traces from any Python agent (Agno, LangChain, plain Python), ingests them through a FastAPI gateway, and projects them into a Neo4j graph with semantic analysis and policy detection.',
    technologies: ['Python', 'FastAPI', 'Neo4j', 'PostgreSQL', 'OpenTelemetry', 'React', 'TypeScript'],
    featured: true,
    category: 'work',
    details: [
      'Local SQLite inbox keeps the gateway out of the agent hot path',
      'Signed workspace webhooks relayed to customer endpoints',
      'Signed run evidence with human sign-off in the Studio UI'
    ]
  },
  {
    title: 'Trinity RGMx Platform - Reckitt Benckiser',
    description: 'Enterprise-wide Revenue Growth Management system deployed across 100+ countries powering pricing optimization, promotional planning, lifecycle supply management, and profitability simulations for global FMCG operations.',
    technologies: ['Kubernetes', 'Docker', 'PostgreSQL', 'Python', 'Gurobi', 'React', 'CNAPP', 'CSPM', 'RBAC', 'Microservices'],
    featured: true,
    category: 'work',
    link: 'https://www.reckitt.com/',
    details: [
      'Microservices-based ecosystem with 15+ services running on Kubernetes',
      'Gurobi optimization engine for large-scale promotional simulations',
      'Predicts profitability, ROI, demand shifts, and supply chain KPIs',
      'PCAS token-based authentication with enterprise SSL management',
      'Policy-as-code pipelines for continuous security enforcement',
      'Multi-TB ETL pipelines with zero-downtime migrations'
    ]
  },
  {
    title: 'AccuKnox Cloud Security Solution',
    description: 'Comprehensive Cloud Security Posture Management (CSPM) platform delivering robust protection for cloud accounts and Kubernetes clusters with continuous monitoring and automated remediation.',
    technologies: ['Kubernetes', 'AWS', 'Python', 'CSPM', 'Trivy', 'MacCEY', 'CloudSploit', 'Security Hub', 'SaltStack'],
    featured: true,
    category: 'work',
    link: 'https://www.accuknox.com/',
    details: [
      'Continuous monitoring and vulnerability detection',
      'Proactive automated remediation capabilities',
      'Integration with major cloud providers (AWS, Azure, GCP)',
      'Centralized security management and automation',
      'Multi-tenancy with comprehensive RBAC',
      'Open-source security tools integration'
    ]
  },
  {
    title: 'NHC Foods - Corporate Website',
    description: 'Production website for NHC Foods Limited, a listed agri-commodity exporter (est. 1960): a searchable 206-product catalog, an investor-relations disclosure library, media gallery, and an admin panel for content and image uploads.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vercel'],
    featured: true,
    category: 'work',
    link: 'https://nhcgroup.com'
  },
  {
    title: 'Pulse Pilates Platform',
    description: 'Full platform for the Pulse Pilates studio: marketing site, member web app, studio admin panel, and brand site from one responsive codebase, plus a FastAPI backend and a Capacitor mobile shell.',
    technologies: ['Astro', 'Svelte', 'FastAPI', 'SQLModel', 'Capacitor', 'OpenAPI'],
    featured: true,
    category: 'work',
    link: 'https://pulsepilatesindia.com'
  },
  {
    title: 'ScreenPro - Mobile Repair Service',
    description: 'Revolutionary mobile repair service platform providing convenient and hassle-free smartphone screen repairs with on-site technician services, eliminating the need for customers to leave their homes.',
    technologies: ['Django', 'Python', 'AWS', 'PostgreSQL', 'Google Maps API', 'Payment Gateway Integration'],
    featured: false,
    category: 'work'
  },
  {
    title: 'PhoneShop - Business Management App',
    description: 'Comprehensive Made-in-India app designed to help phone shop owners digitize their business operations. Provides virtual platform for sales, inventory management, expense tracking, GST handling, and marketplace participation.',
    technologies: ['Django', 'Python', 'AWS', 'Redis', 'PostgreSQL', 'Payment APIs', 'REST APIs'],
    featured: false,
    category: 'work',
    details: [
      'Virtual storefront for online sales',
      'Inventory and expense management',
      'GST and tax system handling',
      'Refurbished phone marketplace with bidding',
      'Payment collection automation',
      'Marketing and analytics tools'
    ]
  },
  {
    title: 'Pectus Finance Platform',
    description: 'Enterprise financial data analysis and reporting platform with serverless architecture. Features custom KPI builders, financial forecasting, and hierarchical accounting data management.',
    technologies: ['Python', 'NumPy', 'Pandas', 'AWS Lambda', 'Serverless', 'Financial APIs'],
    featured: false,
    category: 'work',
    link: 'https://www.pectus.de/',
    details: [
      'Upload manager handling 500,000+ record datasets',
      'Custom KPI Builder for company-specific metrics',
      'Prediction micro-service for financial forecasting',
      'Hierarchical accounting data management',
      'Real-time actuals and budget data integration'
    ]
  },

  // Hobby builds
  {
    title: 'Avengers - Multi-Agent Orchestrator for Claude Code',
    description: 'One command, any task: "avengers <task | GitHub issue | PR>" assembles a team of 10 specialised Claude Code agents led by Cap, who plans, dispatches, verifies, and debriefs but never writes code.',
    technologies: ['Claude Code', 'Multi-Agent', 'Python', 'Hooks', 'cmux', 'MCP'],
    featured: true,
    category: 'hobby',
    details: [
      'Heroes with one job each: recon (Black Widow), research (Shuri), architecture (Ironheart), pre-mortem review (Nick Fury), tests (Hawkeye), build (Iron Man), adversarial review (Doctor Strange), security (Black Panther), records (Jarvis)',
      'Per-role model routing: top model for research and architecture, cheaper models for lookups and summaries',
      'Settings-level guard hook confines each hero to its allowed writes and blocks commits, pushes, and PRs without human approval',
      'Architects loop: draft, pre-mortem, revise, sign-off, with escalation to the human after two rounds',
      'HQ workspace with a live heroes pane, a local tokenised dashboard, and resumable mission logs that survive crashed sessions'
    ]
  },
  {
    title: 'Job-Agent - Multi-Agent Job Search',
    description: 'Eight specialised agents (Discovery, Filter, Research, Tailoring, Notification, Application, Tracker, Orchestrator) scraping 30+ portals daily, with explicit cost-vs-quality trade-offs per task.',
    technologies: ['Claude API', 'Playwright', 'Python', 'SQLite', 'Telegram'],
    featured: true,
    category: 'hobby',
    link: 'https://github.com/chirag198/job-agent',
    details: [
      'Model routing as a product decision: Haiku for batch scoring, Opus for tailoring, Sonnet for follow-ups',
      'One-tap Telegram approval gate for irreversible actions'
    ]
  },
  {
    title: 'Autonomous Crypto Trading Bot',
    description: 'Multi-agent trading bot for crypto perpetuals: Analyst, Validator, and Reflector agents on Claude, with HMM regime detection (bull / bear / sideways) and a post-trade reflection loop that feeds future decisions.',
    technologies: ['Python', 'Claude API', 'HMM', 'asyncio', 'Telegram'],
    featured: true,
    category: 'hobby',
    details: [
      'Multi-modal inputs: OHLCV, derivatives (funding, OI, long/short ratio), and sentiment',
      'Five confidence gates before any trade executes',
      'Three-layer circuit breaker with ATR-based stop-loss / take-profit and trailing stops'
    ]
  },
  {
    title: 'Groww AI Trading Bot',
    description: 'Telegram-controlled AI trading bot for Indian F&O options with a two-stage Haiku → Opus analysis pipeline, a concurrent three-tier market scanner, and a self-improvement engine that learns from losing trades.',
    technologies: ['Python', 'Claude API', 'Groww SDK', 'SQLite', 'Telegram'],
    featured: false,
    category: 'hobby',
    link: 'https://github.com/chirag198/groww-bot'
  },
  {
    title: 'NIFTY Options Algo Trading System',
    description: 'Algorithmic NIFTY options system that reads market conditions in real time (ATR, ADX, RSI), auto-selects a strategy for the current volatility and trend, and manages positions with dynamic targets and stop-losses.',
    technologies: ['Python', 'Groww API', 'Technical Analysis'],
    featured: false,
    category: 'hobby',
    link: 'https://github.com/chirag198/nifty-options-strategy'
  },
  {
    title: 'Nifty AI Trader',
    description: 'AI-powered stock tracking and Buy/Sell/Hold recommendations for Indian Nifty stocks, with smart alerts and a Telegram bot. Built to a 6-stage roadmap published before code, with a $5/month cost ceiling.',
    technologies: ['Django', 'Celery', 'Redis', 'PostgreSQL', 'Claude API', 'Telegram'],
    featured: false,
    category: 'hobby',
    link: 'https://github.com/chirag198/nifty-ai-trader'
  },
  {
    title: 'India Trading Skills',
    description: 'Claude skill library for the Indian equity and F&O market: 13 skills covering portfolio management, options strategy, technical analysis, FII/DII flows, market breadth, and earnings and economic calendars.',
    technologies: ['Claude Skills', 'Python', 'NSE/BSE Data'],
    featured: false,
    category: 'hobby',
    link: 'https://github.com/chirag198/india-trading-skills'
  },
  {
    title: 'PyKube-Shield',
    description: 'Open-source AI-powered Kubernetes security scanner (Apache 2.0). Explains findings in plain English, answers questions about cluster security, and uses ML anomaly detection to flag unusual patterns.',
    technologies: ['Python', 'Kubernetes', 'LLMs', 'Machine Learning'],
    featured: false,
    category: 'hobby',
    link: 'https://github.com/chirag198/pykube-shield'
  },
  {
    title: 'Autofill Copilot - Browser Extension',
    description: 'Chrome/Edge extension that learns your answers on any web form, suggests them inline next time, and can autofill, advance, and submit, with an optional LLM fallback for fields it cannot infer. Local-first storage.',
    technologies: ['TypeScript', 'Chrome Extensions', 'OpenAI / Anthropic APIs'],
    featured: false,
    category: 'hobby'
  },
  {
    title: 'Adaptive Web Automation Agent',
    description: 'Self-learning agent that automates web form filling with progressive autonomy. Semantic question matching and aggressive caching cut LLM token usage by 80-90%.',
    technologies: ['Python', 'LLMs', 'Playwright'],
    featured: false,
    category: 'hobby',
    link: 'https://github.com/chirag198/adaptive-web-agent'
  }
];
