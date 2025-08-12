<template>
  <main
    class="bg-primary-50 flex h-screen items-center justify-center text-neutral-800"
  >
    <div class="grid grid-cols-2 gap-16 max-xl:grid-cols-1 max-xl:gap-0">
      <div class="flex flex-col gap-6 max-xl:hidden">
        <Logo />

        <div class="mt-4 flex flex-col gap-6 max-xl:hidden">
          <h1 class="text-5xl leading-tight font-bold text-neutral-700">
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
import Logo from '~/components/shared/Logo.vue'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Produtiva` : 'Produtiva'
  },
})
</script>
