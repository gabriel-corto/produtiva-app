<template>
  <PForm
    :schema="signUpSchema"
    :state="state"
    @submit="handleSignUp"
    class="fixed-height-form relative flex w-lg flex-col scroll-auto rounded-4xl border border-neutral-200 bg-white p-10 shadow-md max-sm:w-sm max-sm:border-0 max-sm:p-6 max-sm:shadow-none"
  >
    <div class="space-y-3 text-center">
      <h1 class="text-3xl font-extrabold text-neutral-800">Cadastre-se</h1>
      <p>
        Já possui uma conta
        <NuxtLink
          href="/sign-in"
          class="text-primary-400 hover:text-primary-500 font-semibold"
        >
          Fazer Login
        </NuxtLink>
      </p>
    </div>

    <div class="mt-4 space-y-4">
      <PFormField label="Seu Nome" class="space-y-1 text-base" name="name">
        <PInput
          type="text"
          v-model="state.name"
          icon="i-lucide-user"
          placeholder="João Thiago"
          class="flex w-full"
          variant="default"
          size="default"
        />
      </PFormField>

      <PFormField label="Email" class="space-y-1 text-base" name="email">
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
        class="space-y-1 text-base"
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

      <PButton
        type="submit"
        label="Finalizar Cadastro"
        :loading="isSubmitting"
        :disabled="isSubmitting"
        size="default"
        icon="i-lucide-user-plus"
        loading-icon="i-lucide-loader-2"
        class="bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl p-4 text-base font-bold text-neutral-100 transition-colors disabled:cursor-not-allowed"
      />

      <div class="flex items-center justify-center gap-2">
        <div class="h-px w-16 bg-neutral-200"></div>
        <span class="font-semibold text-neutral-400">Ou</span>
        <div class="h-px w-16 bg-neutral-200"></div>
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

useHead({
  title: 'Cadastro',
})

import type { FormSubmitEvent } from '@nuxt/ui'
import { type SignUpForm, signUpSchema } from '~/schemas/auth'

const state = reactive<SignUpForm>({
  name: '',
  email: '',
  password: '',
})

const isSubmitting = ref(false)
const toast = useToast()

async function handleSignUp(event: FormSubmitEvent<SignUpForm>) {
  event.preventDefault()
  isSubmitting.value = true

  await new Promise((resolve) => setTimeout(resolve, 1000))

  isSubmitting.value = false

  toast.add({
    title: 'Conta criada com sucesso',
    color: 'primary',
  })
}
</script>
