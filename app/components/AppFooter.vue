<script setup lang="ts">
import { socialLinks } from '~/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-default">
    <UContainer class="flex flex-col items-center gap-4 py-10 sm:flex-row sm:justify-between">
      <p class="text-sm text-muted">
        &copy; {{ year }} Mart&iacute;n Campos. All rights reserved.
      </p>
      <div class="flex items-center gap-2">
        <UButton
          v-for="link in socialLinks"
          :key="link.label"
          :icon="link.icon"
          :to="link.href"
          target="_blank"
          color="neutral"
          variant="ghost"
          :aria-label="link.label"
        />
      </div>
    </UContainer>
  </footer>
</template>
