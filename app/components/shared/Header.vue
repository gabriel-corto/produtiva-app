<template>
  <header
    class="sticky top-0 z-10 border-b border-neutral-100 bg-white/80 backdrop-blur-sm"
  >
    <div class="flex items-center justify-between p-4">
      <div
        class="bg-primary-50 hover:bg-primary-100 border-primary-300 flex cursor-pointer items-center gap-2 rounded-full border px-4 py-1 transition-all duration-150"
      >
        <FolderKanban class="text-primary-500" />
        <h2 class="text-primary-500 text-lg font-semibold">Meu Workspace</h2>
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
import { FolderKanban, PlusIcon } from 'lucide-vue-next'
import NewWorkspaceModal from '../pages/workspace/modals/NewWorkspaceModal.vue'

const overlay = useOverlay()

function openModal() {
  overlay.create(NewWorkspaceModal, {
    defaultOpen: true,
  })
}
</script>
