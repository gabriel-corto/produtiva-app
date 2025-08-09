<template>
  <header
    class="sticky top-0 z-10 border-b border-neutral-100 bg-white/80 backdrop-blur-sm"
  >
    <div class="flex items-center justify-between p-4">
      <div class="flex items-center gap-2">
        <h2 class="text-xl font-semibold text-neutral-800">Meu Workspace</h2>
        <span class="text-neutral-400">/</span>
        <span class="text-sm text-neutral-500">Tarefas</span>
      </div>

      <div class="flex items-center gap-3">
        <PButton
          size="default"
          @click="openModal()"
          class="flex cursor-pointer items-center gap-1.5 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          <PlusIcon class="h-4 w-4" />
          <span class="hidden sm:inline">Criar</span>
        </PButton>

        <PAvatar
          class="md:hidden"
          alt="Gabriel Francisco"
          src="https://avatars.githubusercontent.com/u/105436166?v=4"
          size="sm"
        />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { PlusIcon } from 'lucide-vue-next'
import NewWorkspaceModal from '../pages/workspace/modals/NewWorkspaceModal.vue'

const overlay = useOverlay()
const modal = overlay.create(NewWorkspaceModal)

async function openModal() {
  modal.open()
}
</script>
