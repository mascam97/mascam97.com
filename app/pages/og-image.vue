<script setup lang="ts">
import { fullName, handle } from '~/data/portfolio'
</script>

<template>
  <div
    class="flex h-[630px] w-[1200px] items-center justify-between bg-[#0b1120] px-[72px] text-white"
    style="font-family: 'Inter', ui-sans-serif, system-ui, sans-serif"
  >
    <div class="flex max-w-[640px] flex-col gap-5">
      <span class="font-mono text-[22px] font-semibold text-[#f87171]">
        Open to work &middot; Remote &middot; Mexico
      </span>
      <h1 class="text-[72px] font-extrabold leading-[1.05] tracking-tight">
        {{ fullName }}
      </h1>
      <p class="text-[28px] leading-snug text-[#cbd5e1]">
        Software Engineer (PHP/Laravel) &mdash; Fintech High-Volume Systems &mdash; AWS Cloud
      </p>
      <div class="mt-4 flex items-center gap-3 font-mono text-[24px] text-[#94a3b8]">
        <span class="text-[#f87171]">@{{ handle }}</span>
        <span>&middot;</span>
        <span>mascam97.com</span>
      </div>
    </div>

    <div class="relative shrink-0">
      <div class="absolute inset-0 rounded-full bg-[#f87171]/20 blur-2xl" />
      <img
        src="/photo.jpg"
        alt=""
        class="relative size-[420px] rounded-full border-[6px] border-[#f87171]/40 object-cover"
      >
    </div>
  </div>
</template>
