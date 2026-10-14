export interface WhyHireMeItem {
  icon: string
  title: string
  description: string
}

export const whyHireMe: WhyHireMeItem[] = [
  {
    icon: 'i-lucide-server',
    title: 'High Availability',
    description:
      'Maintaining critical services for Fintech platforms that support a volume of over 100 million transactions per year.',
  },
  {
    icon: 'i-lucide-layers',
    title: 'Architecture & Resilience',
    description:
      'Reducing technical debt through test-driven development (TDD) and the design of scalable, robust APIs deployed on AWS infrastructure.',
  },
  {
    icon: 'i-lucide-users',
    title: 'Technical Leadership',
    description:
      'Active collaboration with QA, Product, and Mobile teams, complemented by creating and mentoring internal PHP bootcamps.',
  },
]

export interface Project {
  role: string
  name: string
  description: string
  link: string
}

export const projects: Project[] = [
  {
    role: 'Senior Software Engineer (past experience)',
    name: 'Placetopay',
    description:
      'Online payment solutions for Latin America, supporting many payment methods and recurring payments. Built backend services in PHP (Laravel), focused on high performance and reliability.',
    link: 'https://placetopay.dev/en',
  },
  {
    role: 'PHP Backend Developer',
    name: 'Laravel API Quotes',
    description:
      'Progressive Laravel project with authentication, Redis queues, task scheduling, and GraphQL. Focused on code quality with PHPStan, Rector, and PHP Insights, achieving 95% test coverage.',
    link: 'https://github.com/mascam97/laravel-api-quotes',
  },
  {
    role: 'PHP Full Stack Developer',
    name: 'Laravel Livewire Publications',
    description:
      'Technical interview project using Laravel Jetstream, Livewire, and TailwindCSS. Focused on dynamic components, state patterns, and queue-based notifications, with extensive PHPUnit testing.',
    link: 'https://github.com/mascam97/laravel-livewire-publications',
  },
  {
    role: 'JavaScript Backend Developer',
    name: 'NestJS API Store',
    description:
      'NestJS and TypeScript project focused on API design, JWT authentication, MongoDB, Swagger documentation, and e2e testing with PactumJS.',
    link: 'https://github.com/mascam97/nestjs-api-store',
  },
]

export interface Certification {
  name: string
  icon: string
  href: string
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified',
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
