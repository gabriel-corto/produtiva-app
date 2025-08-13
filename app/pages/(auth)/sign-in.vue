<template>
  <PForm
    :schema="signInSchema"
    :state="state"
    @submit.prevent="handleSignIn"
    class="fixed-height-form relative flex w-lg flex-col scroll-auto rounded-4xl border border-neutral-200 bg-white p-10 shadow-md max-sm:w-sm max-sm:border-0 max-sm:p-6 max-sm:shadow-none"
  >
    <div class="space-y-3 text-center">
      <h1 class="text-3xl font-extrabold text-neutral-800">Fazer Login</h1>
      <p>
        Não possui uma conta
        <NuxtLink
          to="/sign-up"
          class="text-primary-400 hover:text-primary-500 font-semibold"
        >
          Cadastre-se
        </NuxtLink>
      </p>
    </div>

    <div class="mt-4 space-y-4">
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
        class="space-y-1 text-base text-neutral-700"
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
          to="/forgot-password"
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
        icon="i-lucide-move-right"
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
  title: 'Login',
})

import type { FormSubmitEvent } from '@nuxt/ui'
import { type SignInForm, signInSchema } from '~/schemas/auth'

import AuthService from '~/services/api/auth'

const state = reactive<SignInForm>({
  email: '',
  password: '',
})

const isSubmitting = ref(false)
const toast = useToast()
const router = useRouter()

async function handleSignIn(event: FormSubmitEvent<SignInForm>) {
  isSubmitting.value = true

  try {
    await AuthService.signIn(event.data)
    isSubmitting.value = false

    router.push('/')
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
