<script setup lang="ts">
import { handle, navLinks, resumeUrl, mailtoLink } from '~/data/portfolio'
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-default bg-default/80 backdrop-blur">
    <UContainer class="flex h-16 items-center justify-between gap-4">
      <a href="#top" aria-label="Back to top" class="font-mono text-sm text-muted hover:text-default">
        @{{ handle }}
      </a>

      <nav aria-label="Sections" class="hidden items-center gap-6 md:flex">
        <a
          v-for="link in navLinks"
          :key="link.to"
          :href="link.to"
          class="text-sm text-muted transition-colors hover:text-highlighted"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="flex items-center gap-2">
        <UButton
          v-if="resumeUrl"
          :to="resumeUrl"
          target="_blank"
          label="Resume"
          icon="i-lucide-download"
          color="neutral"
          variant="subtle"
          size="sm"
          class="hidden sm:inline-flex"
        />
        <UButton :to="mailtoLink" label="Contact" icon="i-lucide-mail" size="sm" />
        <UColorModeButton />
      </div>
    </UContainer>
  </header>
</template>
