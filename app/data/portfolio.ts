export interface WhyHireMeItem {
  icon: string
  title: string
  description: string
}

export const whyHireMe: WhyHireMeItem[] = [
  {
    icon: 'i-lucide-server',
    title: 'Reliability at scale',
    description:
      'Core services for a payment gateway processing 100M+ transactions a year, deployed with Docker and AWS and tuned for high-traffic events.',
  },
  {
    icon: 'i-lucide-shield-check',
    title: 'Quality as a habit',
    description:
      'Test-driven development and rigorous code review that cut technical debt and critical production bugs.',
  },
  {
    icon: 'i-lucide-users',
    title: 'APIs and people',
    description:
      'Secure, documented REST APIs for Mobile teams and financial partners, plus an internal PHP Bootcamp I designed and led.',
  },
]

export const careerStart = new Date('2021-05-01')

export function yearsSince(start: Date, now = new Date()): number {
  return Math.floor((now.getTime() - start.getTime()) / (365.25 * 24 * 60 * 60 * 1000))
}

export interface Experience {
  role: string
  company: string
  period: string
  location: string
  summary: string
  achievements: { title: string, description: string }[]
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer',
    company: 'Evertec · PlacetoPay',
    period: 'May 2021 – Present',
    location: 'Remote',
    summary:
      'Backend engineer for PlacetoPay, a leading Fintech payment gateway in LATAM. I architect and maintain the critical backend services that keep financial operations highly available.',
    achievements: [
      {
        title: 'High-scale engineering',
        description: 'Core backend solutions processing over 100 million annual transactions.',
      },
      {
        title: 'Quality & TDD',
        description:
          'Reduced technical debt and critical production bugs by championing TDD and rigorous code review.',
      },
      {
        title: 'Cloud & infrastructure',
        description:
          'Optimized deployment workflows with Docker and AWS (CI/CD), improving scalability during high-traffic events.',
      },
      {
        title: 'Technical leadership',
        description:
          'Designed and led the internal PHP Bootcamp, training junior developers in Clean Code and SOLID.',
      },
      {
        title: 'API strategy',
        description:
          'Designed secure, documented RESTful APIs for Mobile teams and third-party financial institutions.',
      },
      {
        title: 'Collaboration',
        description:
          'Work in Agile/Scrum with QA, Product and Mobile teams to deliver and maintain high-availability backend services.',
      },
    ],
  },
  {
    role: 'Full Stack PHP Developer (Internship)',
    company: 'Public sector · Aguascalientes',
    period: 'Jan 2020 – Sep 2020',
    location: 'Hybrid',
    summary: 'Digital transformation of public-sector services.',
    achievements: [
      {
        title: 'Web performance',
        description:
          'Revamped the official public portal, achieving a 70% increase in web traffic through UI/UX and SEO improvements.',
      },
      {
        title: 'Internal tools',
        description:
          'Built a custom Intranet/CMS from scratch with Laravel and Vue.js, streamlining content management for internal staff.',
      },
    ],
  },
  {
    role: 'Web Developer (Social service)',
    company: 'Instituto Tecnológico de Aguascalientes',
    period: 'Jan 2019 – Aug 2019',
    location: 'On-site',
    summary: 'Led a student team that built a digital product for an innovation project.',
    achievements: [
      {
        title: 'Leadership',
        description:
          'Managed the full lifecycle from requirement gathering to the deployment of the MVP.',
      },
      {
        title: 'Cloud architecture',
        description:
          'Implemented a serverless backend on Firebase with real-time data synchronization.',
      },
    ],
  },
]

export interface SkillGroup {
  title: string
  icon: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'i-lucide-server',
    skills: ['PHP 8', 'Laravel', 'Node.js', 'NestJS', 'Python', 'FastAPI'],
  },
  {
    title: 'APIs & Data',
    icon: 'i-lucide-database',
    skills: ['REST APIs', 'GraphQL', 'OpenAPI/Swagger', 'MySQL', 'Redis', 'MongoDB', 'Postman'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'i-lucide-cloud',
    skills: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Git', 'Bitbucket'],
  },
  {
    title: 'Testing & Practices',
    icon: 'i-lucide-flask-conical',
    skills: ['TDD', 'PHPUnit', 'PHPStan', 'Xdebug', 'Agile/Scrum', 'Code Review', 'Clean Code', 'SOLID'],
  },
  {
    title: 'Frontend',
    icon: 'i-lucide-layout-dashboard',
    skills: ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Tailwind CSS'],
  },
  {
    title: 'AI-assisted development',
    icon: 'i-lucide-sparkles',
    skills: ['GitHub Copilot', 'Claude'],
  },
]

export interface Project {
  role: string
  name: string
  description: string
  link: string
  tags: string[]
}

export const projects: Project[] = [
  {
    role: 'Software Engineer · 2021 – Present',
    name: 'PlacetoPay',
    description:
      'Online payment solutions for Latin America, supporting many payment methods and recurring payments. Backend services in PHP (Laravel) focused on high performance and reliability.',
    link: 'https://placetopay.dev/en',
    tags: ['PHP', 'Laravel', 'AWS', 'Payments'],
  },
  {
    role: 'PHP Backend Developer',
    name: 'Laravel API Quotes',
    description:
      'Progressive Laravel project with authentication, Redis queues, task scheduling, and GraphQL. Focused on code quality with PHPStan, Rector, and PHP Insights, achieving 95% test coverage.',
    link: 'https://github.com/mascam97/laravel-api-quotes',
    tags: ['Laravel', 'Redis', 'GraphQL', 'PHPStan', '95% coverage'],
  },
  {
    role: 'PHP Full Stack Developer',
    name: 'Laravel Livewire Publications',
    description:
      'Technical interview project using Laravel Jetstream, Livewire, and TailwindCSS. Focused on dynamic components, state patterns, and queue-based notifications, with extensive PHPUnit testing.',
    link: 'https://github.com/mascam97/laravel-livewire-publications',
    tags: ['Livewire', 'Jetstream', 'Tailwind', 'PHPUnit'],
  },
  {
    role: 'PHP Backend Developer',
    name: 'Symfony Job Board',
    description:
      'Job board where companies post offers and candidates apply, built with Symfony and Docker as a framework-agnostic PHP exercise beyond Laravel.',
    link: 'https://github.com/mascam97/symfony-job-board',
    tags: ['Symfony', 'Docker', 'PHP'],
  },
  {
    role: 'Developer Tooling',
    name: 'dev-forge',
    description:
      'Development toolkit with fail-fast project automation, advanced Git workflows, and high-performance Bash utilities.',
    link: 'https://github.com/mascam97/dev-forge',
    tags: ['Bash', 'Git', 'Automation'],
  },
  {
    role: 'JavaScript Backend Developer',
    name: 'NestJS API Store',
    description:
      'NestJS and TypeScript project focused on API design, JWT authentication, MongoDB, Swagger documentation, and e2e testing with PactumJS.',
    link: 'https://github.com/mascam97/nestjs-api-store',
    tags: ['NestJS', 'TypeScript', 'MongoDB', 'JWT'],
  },
]

export interface Certification {
  name: string
  icon: string
  href: string
}

export const certifications: Certification[] = [
  {
    name: 'AWS Cloud Practitioner',
    icon: 'simple-icons:amazonaws',
    href: 'https://www.credly.com/badges/1dbc9979-0ff5-4858-818f-e768b0c1f91c',
  },
  {
    name: 'English B2',
    icon: 'i-lucide-languages',
    href: 'https://www.efset.org/cert/SEbR4W',
  },
  {
    name: 'Laravel',
    icon: 'simple-icons:laravel',
    href: 'https://platzi.com/p/mascam97/curso/1959-course/diploma/detalle/',
  },
  {
    name: 'PHP',
    icon: 'simple-icons:php',
    href: 'https://platzi.com/p/mascam97/ruta/10-desarrollo-php/diploma/detalle/',
  },
  {
    name: 'Docker',
    icon: 'simple-icons:docker',
    href: 'https://platzi.com/p/mascam97/course/2066-docker/diploma/detalle/',
  },
  {
    name: 'Git',
    icon: 'simple-icons:git',
    href: 'https://www.udemy.com/certificate/UC-YH5M1UDR/',
  },
  {
    name: 'MySQL',
    icon: 'simple-icons:mysql',
    href: 'https://platzi.com/p/mascam97/curso/1566-fundamentos-db/diploma/detalle/',
  },
]

export interface SocialLink {
  label: string
  icon: string
  href: string
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    href: 'https://github.com/mascam97',
  },
  {
    label: 'LinkedIn',
    icon: 'i-simple-icons-linkedin',
    href: 'https://www.linkedin.com/in/mascam97',
  },
]

export const contactEmail = 'mascam97@gmail.com'
export const mailtoLink = `mailto:${contactEmail}`

export const siteUrl = 'https://mascam97.com'
export const handle = 'mascam97'
export const fullName = 'Martín Campos'
export const jobTitle = 'Software Engineer'
export const homeLocation = { country: 'MX' }
export const siteDescription =
  'Software Engineer with 5+ years designing and operating high-volume payment systems in PHP/Laravel on AWS. REST APIs, TDD, Vue, React, Node.js. Available for remote roles.'

// The PDF must exist at public/resume-martin-campos.pdf; set to null to hide the resume buttons.
export const resumeUrl: string | null = '/resume-martin-campos.pdf'

export interface NavLink {
  label: string
  to: string
}

export const navLinks: NavLink[] = [
  { label: 'Experience', to: '#experience' },
  { label: 'Skills', to: '#skills' },
  { label: 'Projects', to: '#projects' },
  { label: 'Contact', to: '#contact' },
]

export interface Metric {
  value: string
  label: string
}

export const metrics: Metric[] = [
  { value: '100M+', label: 'annual transactions processed by the platform I engineer' },
  { value: '5+', label: 'years of production backend engineering in Fintech' },
  { value: '+70%', label: 'traffic growth on a public-sector portal I redesigned' },
  { value: 'AWS', label: 'Certified Cloud Practitioner' },
]

export interface GlanceItem {
  icon: string
  label: string
  value: string
}

export const atAGlance: GlanceItem[] = [
  { icon: 'i-lucide-map-pin', label: 'Based in', value: 'Mexico \u00b7 UTC-6' },
  { icon: 'i-lucide-globe', label: 'Works', value: 'Remote, across time zones' },
  { icon: 'i-lucide-languages', label: 'Languages', value: 'English (B2) \u00b7 Spanish (native)' },
  { icon: 'i-lucide-building-2', label: 'Now at', value: 'Evertec \u00b7 PlacetoPay' },
]

export const heroStack = ['PHP', 'Laravel', 'Vue.js', 'React', 'Node.js', 'AWS', 'Docker', 'REST APIs', 'TDD']
