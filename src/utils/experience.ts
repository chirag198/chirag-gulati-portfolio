export interface Experience {
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    company: 'EPAM Systems',
    position: 'Senior Software Engineer',
    location: 'Bengaluru, India',
    period: 'October 2024 — Present',
    description: 'Lead engineer for Trinity RGMx Platform, a global Revenue Growth Management system used across all Reckitt markets for pricing, promotions, supply chain, and profitability simulations.',
    highlights: [
      'Architected 15+ microservices (Pricing, Promo, LSM – Lifecycle Supply Management, Simulation) on Kubernetes, Docker, PostgreSQL, with full CI/CD automation',
      'Built large-scale promo simulations with Gurobi, running on massive retail datasets to forecast profitability, ROI, and KPIs for FMCG operations',
      'Resolved complex production issues — cascading SSL handshake failures, cross-service API auth breakdowns, and PostgreSQL bottlenecks under high load',
      'Integrated CNAPP and CSPM security into pipelines, embedding image scanning, RBAC, secrets management, policy-as-code, and compliance checks across microservices',
      'Implemented secure auth systems using PCAS tokens and enterprise-wide SSL certificate management',
      'Designed ETL pipelines for TPM and category data, handling multi-TB datasets with zero-downtime migrations',
      'Mentored teams globally on containerization, security, and coding best practices'
    ],
    technologies: ['Kubernetes', 'Docker', 'PostgreSQL', 'Python', 'Gurobi', 'React', 'CI/CD', 'CNAPP', 'CSPM', 'RBAC']
  },
  {
    company: 'AccuKnox',
    position: 'Senior Software Engineer',
    location: 'Cupertino, CA (Remote)',
    period: 'November 2022 — October 2024',
    description: 'Lead the development, DevOps, and team management for AccuKnox\'s Cloud Security Posture Management (CSPM) solution, with a strong focus on Kubernetes security and Linux DevSecOps.',
    highlights: [
      'Drove technical leadership by conducting regular code reviews, ensuring adherence to best practices, and maintaining high code quality',
      'Played an instrumental role in the hiring process, identifying and onboarding top talent',
      'Actively mentored and guided junior and senior developers, leading the Python team',
      'Architected a robust on-premises multi-tenancy user management system for AccuKnox SaaS, implementing comprehensive RBAC features',
      'Spearheaded the architectural design and production-level implementation of new features, emphasizing security best practices',
      'Integrated platform with AWS Security Hub, CloudSploit, and Trivy, strengthening cloud account security'
    ],
    technologies: ['Python', 'Kubernetes', 'AWS', 'CSPM', 'Trivy', 'Security Hub', 'CloudSploit', 'Docker', 'DevSecOps']
  },
  {
    company: 'Pectus Finance GMBH',
    position: 'Senior Software Engineer',
    location: 'Berlin, Germany (Remote)',
    period: 'June 2022 — November 2022',
    description: 'Developed serverless financial technology solutions for enterprise financial data analysis and reporting.',
    highlights: [
      'Developed serverless APIs using Python, NumPy, and Pandas to enhance financial data analysis and reporting capabilities',
      'Designed and implemented an upload manager for processing large financial datasets (500,000+ records)',
      'Created a custom KPI Builder to generate company-specific KPIs, enabling data-driven financial decision-making',
      'Developed a prediction micro-service for financial forecasting, leveraging real-time actuals and budget data',
      'Built micro-services for managing hierarchical accounting data, supporting customized financial reports'
    ],
    technologies: ['Python', 'NumPy', 'Pandas', 'AWS Lambda', 'Serverless', 'Microservices', 'Financial APIs']
  },
  {
    company: 'Cashify',
    position: 'Senior Software Engineer',
    location: 'Gurugram, India',
    period: 'October 2019 — June 2022',
    description: 'Led the end-to-end development of scalable, robust systems for India\'s largest re-commerce platform.',
    highlights: [
      'Built and deployed Django Rest Framework projects from scratch, integrating cloud services with a focus on AWS infrastructure',
      'Integrated Docker for containerization, Jenkins for CI/CD, and AWS services (Route 53, Fargate, RDS, Redshift)',
      'Developed RESTful APIs for authentication, OTP-based user registration, and secure session/token management',
      'Integrated third-party APIs for payment gateways, UPI transactions, Google Maps, and OTP verifications'
    ],
    technologies: ['Django', 'Python', 'AWS', 'Docker', 'Jenkins', 'PostgreSQL', 'Redis', 'REST APIs']
  }
];

export const education = {
  degree: 'Bachelor of Technology',
  field: 'Computer Science Engineering',
  university: 'Guru Gobind Singh Indraprastha University',
  location: 'New Delhi, India',
  year: '2019',
  cgpa: '8.5'
};
