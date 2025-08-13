<template>
  <footer class="border-t border-neutral-100 pt-4">
    <PDropdownMenu
      v-if="meData"
      :items="items"
      :ui="{
        content: 'w-46',
      }"
    >
      <PButton
        label="Open"
        color="neutral"
        variant="ghost"
        class="flex cursor-pointer items-center gap-2 rounded-lg bg-neutral-50 p-2 text-neutral-500 hover:bg-neutral-100"
      >
        <PAvatar
          :alt="meData.name"
          :src="meData.avatarUrl"
          size="xl"
          class="border border-neutral-100 bg-neutral-100 text-sm"
        />
        <div class="flex-1 truncate text-left">
          <p class="text-sm font-medium">{{ meData.name }}</p>
          <p class="text-xs">{{ meData.email }}</p>
        </div>
      </PButton>
    </PDropdownMenu>

    <AccountMenuSkeleton v-else />
  </footer>
</template>

<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

import MeService from '@/services/api/me'
import AccountMenuSkeleton from '../pages/workspace/skeleton/AccountMenuSkeleton.vue'

const { data: me } = useAsyncData('get-me', () => MeService.getMe())
const meData = computed(() => me.value)

const items: DropdownMenuItem[] = [
  {
    label: 'Meu Perfil',
    icon: 'i-lucide-user',
    class: 'cursor-pointer',
  },
  {
    label: 'Terminar Sessão',
    icon: 'i-lucide-log-out',
    color: 'error',
    class: 'cursor-pointer',
    onSelect: async () => {
      await useSignOut()
    },
  },
]
</script>
