<template>
  <PModal :overlay="true">
    <template #title>
      <div class="flex items-center gap-2">
        <FolderKanbanIcon class="text-primary-600 h-5 w-5" />
        <h1>Criar Novo Workspace</h1>
      </div>
    </template>

    <template #description>
      <span>Crie e organize seu workspace</span>
    </template>

    <template #body>
      <PForm
        :schema="createWorkspaceSchema"
        :state="state"
        @submit="handleCreateWorkspace"
      >
        <div class="space-y-4">
          <PFormField class="space-y-1 text-base" name="name">
            <PInput
              v-model="state.name"
              type="text"
              icon="i-lucide-folder-kanban"
              placeholder="Digite o nome do seu workspace"
              class="flex w-full"
              variant="default"
              size="default"
            />
          </PFormField>

          <PButton
            type="submit"
            label="Criar"
            size="default"
            icon="i-lucide-move-right"
            loading-icon="i-lucide-loader-2"
            :loading="isSubmitting"
            :disabled="isSubmitting"
            class="bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl p-4 text-base font-bold text-neutral-100 transition-colors disabled:cursor-not-allowed"
          />
        </div>
      </PForm>
    </template>
  </PModal>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from '@nuxt/ui'
import { FolderKanbanIcon } from 'lucide-vue-next'
import {
  createWorkspaceSchema,
  type CreateWorkspaceForm,
} from '~/schemas/workspace'

import WorkspaceService from '~/services/api/workspace'

const state = reactive<CreateWorkspaceForm>({
  name: '',
})

const isSubmitting = ref(false)
const toast = useToast()
const emit = defineEmits(['close'])

async function handleCreateWorkspace(
  event: FormSubmitEvent<CreateWorkspaceForm>,
) {
  event.preventDefault()
  isSubmitting.value = true

  try {
    const response = await WorkspaceService.createWorkspace(event.data)
    isSubmitting.value = false

    toast.add({
      title: response.message.title,
      color: 'success',
    })

    emit('close')
  } catch (error: any) {
    isSubmitting.value = false

    toast.add({
      title: error.data.message.title,
      description: error.data.message.description,
      color: 'error',
    })
  }
}
</script>
