<template>
  <nav class="flex flex-col gap-4">
    <NuxtLink
      to="/"
      class="group hover:border-primary-400 hover:bg-primary-50 hover:text-primary-600 flex max-w-48 items-center gap-3 rounded-lg border border-white p-2 transition-all hover:border"
      active-class="bg-primary-50 border border-primary-400 text-primary-600 font-medium"
    >
      <FolderKanbanIcon class="group-hover:text-primary-600 h-5 w-5" />
      <span class="text">Workspaces</span>
    </NuxtLink>

    <NuxtLink
      to="/tasks"
      class="group flex max-w-48 items-center gap-3 rounded-lg border border-transparent p-2 transition-all hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-600"
      active-class="bg-emerald-50 border border-emerald-400 text-emerald-600 font-medium"
    >
      <LayersIcon class="h-5 w-5 group-hover:text-emerald-600" />
      <span class="text">Tarefas</span>
    </NuxtLink>

    <NuxtLink
      to="/pomodoro"
      class="group flex max-w-48 items-center gap-3 rounded-lg border border-transparent p-2 transition-all hover:border-rose-400 hover:bg-rose-50 hover:text-rose-600"
      active-class="bg-rose-50 border border-rose-400 text-rose-600 font-medium"
    >
      <TimerIcon class="h-5 w-5 group-hover:text-rose-600" />
      <span class="text">Pomodoro</span>
    </NuxtLink>

    <NuxtLink
      to="/saved"
      class="group flex max-w-48 items-center gap-3 rounded-lg border border-transparent p-2 transition-all hover:border-amber-400 hover:bg-amber-50 hover:text-amber-600"
      active-class="bg-amber-50 border border-amber-400 text-amber-600 font-medium"
    >
      <BookmarkIcon class="h-5 w-5 group-hover:text-amber-600" />
      <span class="text">Guardados</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import {
  BookmarkIcon,
  FolderKanbanIcon,
  LayersIcon,
  TimerIcon,
} from 'lucide-vue-next'
</script>
