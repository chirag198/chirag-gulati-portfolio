// Site Configuration
export const config = {
  name: 'Chirag Gulati',
  title: 'Senior Architect & Tech Consultant',
  description: 'Building agentic AI platforms, cloud security & scalable systems',
  location: 'Bengaluru, India',
  bio: 'I am a product-minded Senior Architect and Tech Consultant based in Bengaluru, India, specialising in agentic AI systems. I architected Raven, an EPAM-incubated AI security platform, lead full-stack work on Trinity RGMx (live in 100+ countries), and work as a Forward Deployed Engineer at AISquare Studio. With 6+ years across cloud architecture, DevSecOps, and scalable system design, I build robust solutions that drive business impact. My passion lies in mentoring teams, optimizing system performance, and leveraging cutting-edge technologies to solve complex challenges.',
  email: 'cgulati198@gmail.com',
  linkedIn: 'https://www.linkedin.com/in/chirag-gulati-695620149/',
  github: 'https://github.com/chirag198',
  resumeDownloadUrl: 'https://drive.google.com/file/d/19Hv_dJ4oDMVqE2sBNFsfPUwm3S5V74BB/view?usp=drive_link',
  headline: 'Senior Architect & Tech Consultant building agentic AI platforms.',
  summary: 'Forward Deployed Engineer at AISquare Studio, architect of Raven at EPAM, and tech lead on Trinity RGMx (live in 100+ countries). Six years of backend platforms, cloud security, and teams that ship.',
  stats: [
    { value: '6+', label: 'years shipping backend platforms' },
    { value: '100+', label: 'countries on Trinity RGMx' },
    { value: '15+', label: 'microservices architected' },
    { value: '10', label: 'agents in the Avengers orchestrator' },
  ],
  year: new Date().getFullYear(),
};

export type SiteConfig = typeof config;
