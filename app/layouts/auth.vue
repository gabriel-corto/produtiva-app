<template>
  <main
    class="flex h-screen items-center justify-center bg-black text-neutral-100"
  >
    <div class="grid grid-cols-2 gap-24">
      <div class="flex flex-col gap-6">
        <SLogo />

        <div class="mt-4 flex flex-col gap-6">
          <h1 class="text-5xl leading-tight font-bold">
            Menos papel, <br />
            <span
              class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            >
              mais produtividade
            </span>
          </h1>
        </div>
      </div>

      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import SLogo from '~/components/shared/logo.vue'

useHead({
  title: 'produtiva',
})
</script>
