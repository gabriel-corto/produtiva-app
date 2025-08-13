<template>
  <div>
    <div
      v-if="workspace"
      @click="openSwitchWorkspaceModal"
      class="bg-primary-50 hover:bg-primary-100 border-primary-300 relative flex cursor-pointer items-center gap-2 rounded-full border px-5 py-1 transition-all duration-150"
    >
      <FolderKanban class="text-primary-500" />
      <h2 class="text-primary-500 text-lg font-semibold">
        {{ workspace.name }}
      </h2>

      <span
        class="absolute top-3.5 left-1.5 h-2 w-2 rounded-full bg-emerald-400"
      ></span>
    </div>

    <WorkspaceSwitchSkeleton v-else />
  </div>
</template>

<script setup lang="ts">
import { FolderKanban } from 'lucide-vue-next'
import WorkspaceService from '~/services/api/workspace'

import type { Workspace } from '~/types/schema'
import WorkspaceSwitchSkeleton from '@/components/pages/workspace/skeleton/WorkspaceSwicthSkeleton.vue'
import SwitchWorkspaceModal from '@/components/pages/workspace/modals/SwitchWorkspaceModal.vue'

const workspace = ref<Workspace | null>(null)

onMounted(async () => {
  const data = await WorkspaceService.getCurrentWorkspace()
  workspace.value = data
})

const overlay = useOverlay()

function openSwitchWorkspaceModal() {
  overlay.create(SwitchWorkspaceModal, {
    defaultOpen: true,
  })
}
</script>
