export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "bg-[#f6ece1]!",
    iconName: "mysql",
  },
  wordpress: {
    name: "Wordpress",
    iconName: "wordpress",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  kubernetes: {
    name: "Kubernetes",
    iconName: "code",
  },
  bash: {
    name: "Bash",
    iconName: "code",
  },
  yaml: {
    name: "YAML",
    iconName: "markdown",
  },
  golang: {
    name: "GoLang",
    iconName: "code",
  },
  react: {
    name: "React",
    iconName: "code",
  },
  docker: {
    name: "Docker",
    iconName: "code",
  },
  aws: {
    name: "AWS",
    iconName: "cloudflare",
  },
  terraform: {
    name: "Terraform",
    iconName: "code",
  },
  postgresql: {
    name: "PostgreSQL",
    iconName: "mysql",
  },
  redis: {
    name: "Redis",
    iconName: "code",
  },
  jenkins: {
    name: "Jenkins",
    iconName: "code",
  },
  gitlab: {
    name: "GitLab",
    iconName: "git",
  },
  github: {
    name: "GitHub",
    iconName: "github",
  },
  fastapi: {
    name: "FastAPI",
    iconName: "python",
  },
  django: {
    name: "Django",
    iconName: "python",
  },
  flask: {
    name: "Flask",
    iconName: "python",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || { name: lang, iconName: "code" };
}; 