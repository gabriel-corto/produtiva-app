<template>
  <main
    class="grid h-screen w-screen grid-cols-[auto_1fr] bg-white text-neutral-800"
  >
    <aside
      class="flex h-full w-64 flex-col justify-between border-r border-neutral-100 bg-white p-4 shadow-sm"
    >
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-2 p-2">
          <NuxtImg
            src="/logo.svg"
            class="h-8 w-8 transition-transform hover:scale-110"
            alt="Produtiva Logo"
          />
          <h1 class="text-xl font-bold text-neutral-800">
            <span
              class="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Produtiva
            </span>
          </h1>
        </div>

        <Navbar />
      </div>

      <AccountFooter />
    </aside>

    <div class="h-screen overflow-auto">
      <Header />

      <main class="p-6">
        <slot />
      </main>
    </div>
  </main>
</template>

<script setup lang="ts">
import Header from '~/components/shared/Header.vue'
import Navbar from '~/components/shared/Navbar.vue'

import AccountFooter from '~/components/shared/AccountFooter.vue'
import NewWorkspaceModal from '~/components/pages/workspace/modals/NewWorkspaceModal.vue'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | Produtiva` : 'Produtiva'
  },
})

const overlay = useOverlay()
const modal = overlay.create(NewWorkspaceModal)

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Abre o modal de cria o de workspace.
 *
 * @remarks
 * Use essa fun o para abrir o modal de cria o de workspace.
 */
/*******  fbec4ccb-39dc-4330-a711-4aee06e01781  *******/
async function openModal() {
  modal.open()
}
</script>
