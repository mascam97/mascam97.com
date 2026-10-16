<script setup lang="ts">
import { handle } from '~/data/portfolio'
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-default bg-default/80 backdrop-blur">
    <UContainer class="flex h-16 items-center justify-between">
      <a href="#top" class="flex items-baseline gap-2">
        <span class="font-mono text-sm text-muted">@{{ handle }}</span>
      </a>
      <UColorModeButton />
    </UContainer>
  </header>
</template>
