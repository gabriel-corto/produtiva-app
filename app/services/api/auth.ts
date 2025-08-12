import type { SignInData, SignUpData } from '~/types/forms'
import type { SignUpResponse } from '~/types/api'

const PREFIX = '/auth'

async function signUp(data: SignUpData) {
  const apiClient = useApiClient()

  const response = await apiClient(`${PREFIX}/sign-up`, {
    method: 'POST',
    body: data,
    credentials: 'include',
  })

  return response as SignUpResponse
}

async function signIn(data: SignInData) {
  const apiClient = useApiClient()

  const response = await apiClient(`${PREFIX}/sign-in`, {
    method: 'POST',
    body: data,
    credentials: 'include',
  })

  return response as SignUpResponse
}

async function signOut() {
  const apiClient = useApiClient()

  await apiClient(`${PREFIX}/sign-out`, {
    method: 'POST',
    credentials: 'include',
  })
}

export default { signIn, signUp, signOut }
