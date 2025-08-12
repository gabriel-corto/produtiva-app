import type { SignUpData } from '~/types/forms'
import type { SignUpResponse } from '~/types/api'

const PREFIX = '/auth'

export async function SignUp(data: SignUpData) {
  const apiClient = useApiClient()

  const response = await apiClient(`${PREFIX}/sign-up`, {
    method: 'POST',
    body: data,
    credentials: 'include',
  })

  return response as SignUpResponse
}
