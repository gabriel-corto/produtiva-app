<template>
  <PForm
    :schema="signInSchema"
    :state="state"
    @submit="handleSignIn"
    class="flex w-lg flex-col rounded-xl bg-neutral-950 p-10"
  >
    <div class="space-y-3 text-center">
      <h1 class="text-3xl font-extrabold">Fazer Login</h1>
      <p>
        Não possui uma conta
        <NuxtLink
          href="/sign-up"
          class="text-primary-400 hover:text-primary-500 font-semibold"
        >
          Cadastre-se
        </NuxtLink>
      </p>
    </div>

    <div class="mt-4 space-y-4">
      <PFormField
        label="Email"
        class="space-y-1 text-base text-neutral-300"
        name="email"
      >
        <PInput
          type="email"
          v-model="state.email"
          icon="i-lucide-mail"
          placeholder="seu@email.com"
          class="flex w-full"
          variant="default"
          size="default"
        />
      </PFormField>

      <PFormField
        label="Palavra Passe"
        class="space-y-1 text-base text-neutral-300"
        name="password"
      >
        <PInput
          type="password"
          v-model="state.password"
          placeholder="******"
          icon="i-lucide-lock"
          class="flex w-full"
          variant="default"
          size="default"
        />
      </PFormField>

      <div>
        <NuxtLink
          href="/forgot-password"
          class="text-primary-400 hover:text-primary-500 font-semibold"
          >Recuperar Credenciais</NuxtLink
        >
      </div>

      <PButton
        type="submit"
        label="Entrar"
        :loading="isSubmitting"
        :disabled="isSubmitting"
        size="default"
        icon="i-lucide-arrow-right"
        loading-icon="i-lucide-loader-2"
        class="bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl p-4 text-base font-bold text-neutral-100 transition-colors disabled:cursor-not-allowed"
      />

      <div class="flex items-center justify-center gap-2">
        <div class="h-px w-16 bg-neutral-700"></div>
        <span class="font-semibold text-neutral-400">Ou</span>
        <div class="h-px w-16 bg-neutral-700"></div>
      </div>

      <SharedButtonsGoogleAuth />
      <SharedButtonsGithubAuth />
    </div>
  </PForm>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})

import type { FormSubmitEvent } from '@nuxt/ui'
import { type SignInForm, signInSchema } from '~/schemas/auth'

const state = reactive<SignInForm>({
  email: '',
  password: '',
})

const isSubmitting = ref(false)
const toast = useToast()

async function handleSignIn(event: FormSubmitEvent<SignInForm>) {
  event.preventDefault()
  isSubmitting.value = true

  await new Promise((resolve) => setTimeout(resolve, 1000))

  isSubmitting.value = false

  toast.add({
    title: 'Login realizado com sucesso',
    color: 'primary',
  })
}
</script>
