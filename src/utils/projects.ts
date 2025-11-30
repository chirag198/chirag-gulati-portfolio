export interface Project {
  title: string;
  description: string;
  technologies?: string[];
  link?: string;
  featured?: boolean;
  details?: string[];
}

export const projects: Project[] = [
  {
    title: 'Trinity RGMx Platform - Reckitt Benckiser',
    description: 'Enterprise-wide Revenue Growth Management system deployed across 100+ countries powering pricing optimization, promotional planning, lifecycle supply management, and profitability simulations for global FMCG operations.',
    technologies: ['Kubernetes', 'Docker', 'PostgreSQL', 'Python', 'Gurobi', 'React', 'CNAPP', 'CSPM', 'RBAC', 'Microservices'],
    featured: true,
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
    title: 'ScreenPro - Mobile Repair Service',
    description: 'Revolutionary mobile repair service platform providing convenient and hassle-free smartphone screen repairs with on-site technician services, eliminating the need for customers to leave their homes.',
    technologies: ['Django', 'Python', 'AWS', 'PostgreSQL', 'Google Maps API', 'Payment Gateway Integration'],
    featured: false
  },
  {
    title: 'PhoneShop - Business Management App',
    description: 'Comprehensive Made-in-India app designed to help phone shop owners digitize their business operations. Provides virtual platform for sales, inventory management, expense tracking, GST handling, and marketplace participation.',
    technologies: ['Django', 'Python', 'AWS', 'Redis', 'PostgreSQL', 'Payment APIs', 'REST APIs'],
    featured: false,
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
    link: 'https://www.pectus.de/',
    details: [
      'Upload manager handling 500,000+ record datasets',
      'Custom KPI Builder for company-specific metrics',
      'Prediction micro-service for financial forecasting',
      'Hierarchical accounting data management',
      'Real-time actuals and budget data integration'
    ]
  }
];
