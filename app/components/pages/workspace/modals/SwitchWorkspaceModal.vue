<template>
  <PModal :overlay="true" size="md">
    <template #title>
      <div class="flex items-center gap-2">
        <FolderKanbanIcon class="text-primary-600 h-5 w-5" />
        <h1 class="text-lg font-semibold">Selecione Seu Workspace</h1>
      </div>
    </template>

    <template #description>
      <span class="text-sm text-gray-500"
        >Selecione o workspace que deseja trabalhar</span
      >
    </template>

    <template #body>
      <div class="space-y-3">
        <div class="relative">
          <input
            type="text"
            placeholder="Pesquisar workspaces..."
            class="focus:border-primary-500 focus:ring-primary-500 w-full rounded-lg border-2 border-gray-300 py-2 pr-4 pl-10 text-sm focus:outline-0"
          />
          <SearchIcon class="absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
        </div>

        <div class="max-h-96 overflow-y-auto">
          <div
            v-for="workspace in workspaces"
            :key="workspace.id"
            class="group hover:bg-primary-50 flex cursor-pointer items-center gap-3 rounded-lg p-3"
          >
            <div class="relative">
              <div
                class="bg-primary-100 text-primary-600 flex h-10 w-10 items-center justify-center rounded-full"
              >
                <FolderKanbanIcon class="h-5 w-5" />
              </div>
              <span
                v-if="workspace.isDefault"
                class="absolute right-0 bottom-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white"
              ></span>
            </div>
            <div class="flex-1">
              <h3
                class="group-hover:text-primary-700 font-medium text-gray-900"
              >
                {{ workspace.name }}
              </h3>
              <p class="text-xs text-gray-500">
                <span>0 membros • Última atividade </span>
                <span>2 horas atrás</span>
              </p>
            </div>
            <ChevronRightIcon
              class="group-hover:text-primary-600 h-4 w-4 text-gray-400"
            />
          </div>
        </div>
      </div>
    </template>
  </PModal>
</template>

<script setup lang="ts">
import { FolderKanbanIcon, SearchIcon, ChevronRightIcon } from 'lucide-vue-next'

import WorkspaceService from '~/services/api/workspace'
import type { Workspace } from '~/types/schema'

const workspaces = ref<Workspace[] | null>(null)

onMounted(async () => {
  const data = await WorkspaceService.getWorkspaces()
  workspaces.value = data
})
</script>
