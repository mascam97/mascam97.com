<script setup lang="ts">
import {
  whyHireMe,
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

const pageTitle = `${fullName} \u2014 Software Engineer (PHP/Laravel, AWS)`
const ogImage = `${siteUrl}/og.png`

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
        sameAs: [socialLinks[0].href, socialLinks[1].href],
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
      <UPageHero
        headline="Open to work &middot; Remote &middot; Mexico"
        title="Mart&iacute;n Campos"
        description="Software Engineer (PHP/Laravel) building high-volume Fintech systems on AWS Cloud. I design resilient, scalable APIs and keep critical payment platforms running."
        orientation="horizontal"
        reverse
        :links="[
          { label: 'Let\'s talk', to: mailtoLink, icon: 'i-lucide-mail', size: 'xl' },
          { label: 'View GitHub', to: 'https://github.com/mascam97', target: '_blank', icon: 'i-simple-icons-github', color: 'neutral', variant: 'subtle', size: 'xl' },
        ]"
      >
        <template #headline>
          <span>Open to work &middot; Remote &middot; Mexico</span>
        </template>

        <div class="flex justify-center">
          <UAvatar
            src="/photo.jpg"
            alt="Mart\u00edn Campos"
            size="3xl"
            class="size-56 ring-4 ring-primary/20 sm:size-72"
          />
        </div>
      </UPageHero>

      <!-- Why hire me -->
      <UPageSection
        headline="Why hire me"
        title="I keep Fintech systems reliable at scale"
        description="Nearly 5 years building and maintaining backend services for platforms that cannot afford downtime."
        :features="whyHireMe"
      />

      <!-- Projects -->
      <UPageSection
        headline="Portfolio"
        title="Featured projects"
        description="A selection of backend-focused work across Fintech and personal projects."
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
              <UBadge color="neutral" variant="subtle" size="sm">
                {{ project.role }}
              </UBadge>
            </template>
          </UPageCard>
        </UPageGrid>
      </UPageSection>

      <!-- Certifications -->
      <UPageSection
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
      <UPageCTA
        title="Let's build something reliable together"
        description="Open to Software Engineer roles focused on backend, Fintech, and cloud architecture."
        variant="subtle"
        :links="[
          { label: 'Email me', to: mailtoLink, icon: 'i-lucide-mail', size: 'xl' },
          { label: 'LinkedIn', to: socialLinks[1].href, target: '_blank', icon: socialLinks[1].icon, color: 'neutral', variant: 'subtle', size: 'xl' },
        ]"
      />
    </main>

    <AppFooter />
  </div>
</template>
