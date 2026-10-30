<script setup lang="ts">
import {
  whyHireMe,
  experience,
  metrics,
  atAGlance,
  heroStack,
  resumeUrl,
  skillGroups,
  careerStart,
  yearsSince,
  homeLocation,
  projects,
  certifications,
  socialLinks,
  mailtoLink,
  siteUrl,
  handle,
  fullName,
  jobTitle,
  siteDescription,
} from '~/data/portfolio'

const pageTitle = `${fullName} \u2014 Software Engineer \u00b7 PHP, Laravel, Vue, AWS`
const ogImage = `${siteUrl}/og.png`
const yearsExperience = yearsSince(careerStart)

const sectionUi = {
  title: 'text-4xl sm:text-5xl lg:text-6xl',
  description: 'text-lg sm:text-xl',
}

const heroLinks = [
  ...(resumeUrl
    ? [{ label: 'Download Resume', to: resumeUrl, target: '_blank', icon: 'i-lucide-download' }]
    : []),
  {
    label: 'Get in touch',
    to: mailtoLink,
    icon: 'i-lucide-mail',
    ...(resumeUrl ? { color: 'neutral' as const, variant: 'subtle' as const } : {}),
  },
  { label: 'LinkedIn', to: socialLinks[1].href, target: '_blank', icon: socialLinks[1].icon, color: 'neutral' as const, variant: 'ghost' as const },
  { label: 'GitHub', to: socialLinks[0].href, target: '_blank', icon: socialLinks[0].icon, color: 'neutral' as const, variant: 'ghost' as const },
]

useSeoMeta({
  title: pageTitle,
  description: siteDescription,
  ogTitle: pageTitle,
  ogDescription: siteDescription,
  ogUrl: siteUrl,
  ogSiteName: `${fullName} \u2014 ${handle}`,
  ogType: 'profile',
  ogLocale: 'en_US',
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${fullName} — ${jobTitle}`,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: siteDescription,
  twitterImage: ogImage,
})

useHead({
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: fullName,
        alternateName: handle,
        url: siteUrl,
        image: `${siteUrl}/photo.jpg`,
        jobTitle,
        description: siteDescription,
        worksFor: { '@type': 'Organization', name: 'Evertec · PlacetoPay' },
        address: {
          '@type': 'PostalAddress',
          addressCountry: homeLocation.country,
        },
        knowsAbout: skillGroups.flatMap(group => group.skills),
        knowsLanguage: ['es', 'en'],
        sameAs: socialLinks.map(link => link.href),
      }),
    },
  ],
})
</script>

<template>
  <div id="top">
    <AppHeader />

    <main>
      <!-- Hero -->
      <section class="hero-glow relative">
        <UContainer class="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:py-32">
          <div class="rise">
            <div class="flex items-center gap-3 sm:gap-4">
              <div
                role="img"
                aria-label="Mart&iacute;n Campos"
                class="size-20 shrink-0 rounded-full bg-no-repeat ring-2 ring-primary/50 ring-offset-2 ring-offset-default sm:size-24 lg:hidden"
                style="background-image: url(/photo.jpg); background-size: 145% auto; background-position: 35% 6%"
              />
              <p class="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-xs text-default sm:text-sm">
                <span class="relative flex size-2">
                  <span class="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                  <span class="relative inline-flex size-2 rounded-full bg-primary" />
                </span>
                <span>Available for new roles<span class="hidden sm:inline"> &middot; Remote</span></span>
              </p>
            </div>

            <h1 class="mt-6 text-6xl font-extrabold tracking-tight text-highlighted sm:text-7xl lg:text-8xl">
              Mart&iacute;n Campos
            </h1>
            <p class="mt-4 text-2xl font-semibold text-primary sm:text-3xl">
              Software Engineer &middot; Backend &amp; Full&nbsp;Stack
            </p>
            <p class="mt-6 max-w-2xl text-lg text-muted sm:text-xl lg:text-2xl lg:leading-snug">
              I design and operate payment systems that process <strong class="font-semibold text-highlighted">100M+ transactions a year</strong>.
              PHP/Laravel and AWS at the core; Vue and React where the product requires them.
            </p>

            <div class="mt-8 flex flex-wrap items-center gap-3">
              <UButton
                v-for="link in heroLinks"
                :key="link.label"
                v-bind="link"
                size="xl"
              />
            </div>

            <ul class="mt-8 flex flex-wrap gap-2" aria-label="Core technologies">
              <li v-for="tech in heroStack" :key="tech">
                <UBadge color="neutral" variant="outline" size="lg">
                  {{ tech }}
                </UBadge>
              </li>
            </ul>
          </div>

          <div class="rise flex flex-col items-start gap-6 lg:items-center" style="animation-delay: 0.15s">
            <UAvatar
              src="/photo.jpg"
              alt="Mart&iacute;n Campos"
              size="3xl"
              class="hidden size-72 ring-4 ring-primary/30 lg:flex xl:size-96"
            />
            <dl class="w-full max-w-md divide-y divide-default rounded-xl border border-default bg-elevated/50">
              <div v-for="item in atAGlance" :key="item.label" class="flex items-center gap-3 px-4 py-3">
                <UIcon :name="item.icon" class="size-5 shrink-0 text-primary" />
                <dt class="w-20 shrink-0 text-xs uppercase tracking-wide text-muted">{{ item.label }}</dt>
                <dd class="text-sm font-medium text-highlighted">{{ item.value }}</dd>
              </div>
            </dl>
          </div>
        </UContainer>
      </section>

      <!-- Results -->
      <section aria-label="Key results" class="border-y border-default bg-elevated/40">
        <UContainer class="grid grid-cols-2 gap-10 py-14 lg:grid-cols-4 lg:py-16">
          <div v-for="metric in metrics" :key="metric.value">
            <p class="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
              {{ metric.value }}
            </p>
            <p class="mt-2 text-sm text-muted">
              {{ metric.label }}
            </p>
          </div>
        </UContainer>
      </section>

      <!-- What I bring -->
      <UPageSection
        :ui="sectionUi"
        headline="What I bring"
        title="I keep high-volume systems reliable"
        :description="`Over ${yearsExperience} years building and maintaining backend services for platforms that cannot afford downtime.`"
        :features="whyHireMe"
      />

      <!-- Experience -->
      <UPageSection
        :ui="sectionUi"
        id="experience"
        headline="Experience"
        title="Professional experience"
        description="Production systems, from public-sector platforms to a payment gateway serving Latin America."
      >
        <div class="mx-auto flex max-w-4xl flex-col gap-6">
          <UPageCard
            v-for="(job, index) in experience"
            :key="job.company"
            :title="`${job.role} · ${job.company}`"
            :description="job.summary"
            :class="index === 0 ? 'ring-primary/40' : ''"
          >
            <template #header>
              <p class="font-mono text-sm text-muted">
                {{ job.period }} &middot; {{ job.location }}
              </p>
            </template>
            <ul class="mt-2 grid gap-4 sm:grid-cols-2">
              <li v-for="item in job.achievements" :key="item.title">
                <p class="text-sm font-semibold text-highlighted">
                  {{ item.title }}
                </p>
                <p class="mt-0.5 text-sm text-muted">
                  {{ item.description }}
                </p>
              </li>
            </ul>
          </UPageCard>
        </div>
      </UPageSection>

      <!-- Skills -->
      <UPageSection
        :ui="sectionUi"
        id="skills"
        headline="Skills"
        title="Technical skills"
        description="The technologies I use in production, and what I have built with them in personal projects."
      >
        <UPageGrid>
          <UPageCard
            v-for="group in skillGroups"
            :key="group.title"
            :title="group.title"
            :icon="group.icon"
          >
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in group.skills"
                :key="skill"
                color="neutral"
                variant="subtle"
              >
                {{ skill }}
              </UBadge>
            </div>
          </UPageCard>
        </UPageGrid>
      </UPageSection>

      <!-- Projects -->
      <UPageSection
        :ui="sectionUi"
        id="projects"
        headline="Selected work"
        title="Featured projects"
        description="Open-source contributions and personal projects, built with automated tests and documentation."
      >
        <UPageGrid>
          <UPageCard
            v-for="project in projects"
            :key="project.name"
            :title="project.name"
            :description="project.description"
            :to="project.link"
            target="_blank"
            spotlight
          >
            <template #header>
              <div class="flex w-full items-center justify-between gap-3">
                <UBadge color="neutral" variant="subtle" size="sm">
                  {{ project.role }}
                </UBadge>
                <UIcon name="i-lucide-arrow-up-right" class="size-5 text-muted" />
              </div>
            </template>
            <template #footer>
              <ul class="flex flex-wrap gap-1.5" aria-label="Technologies">
                <li v-for="tag in project.tags" :key="tag">
                  <UBadge color="primary" variant="subtle" size="md" class="text-red-700 dark:text-primary">
                    {{ tag }}
                  </UBadge>
                </li>
              </ul>
            </template>
          </UPageCard>
        </UPageGrid>
      </UPageSection>

      <!-- Certifications -->
      <UPageSection
        :ui="sectionUi"
        headline="Credentials"
        title="Certifications"
        description="Verifiable credentials backing my experience."
      >
        <div class="flex flex-wrap justify-center gap-3">
          <UButton
            v-for="cert in certifications"
            :key="cert.name"
            :icon="cert.icon"
            :label="cert.name"
            :to="cert.href"
            target="_blank"
            color="neutral"
            variant="subtle"
            size="lg"
          />
        </div>
      </UPageSection>

      <!-- Final CTA -->
      <div id="contact">
        <UPageCTA
          title="Let's build something that scales."
          description="Backend and full stack engineering for Fintech, payments and SaaS teams. Share the role and the problem you need solved."
          :ui="{ title: 'text-4xl sm:text-6xl' }"
          variant="subtle"
          :links="heroLinks.slice(0, resumeUrl ? 3 : 2).map(link => ({ ...link, size: 'xl' as const }))"
        />
      </div>
    </main>

    <AppFooter />
  </div>
</template>
