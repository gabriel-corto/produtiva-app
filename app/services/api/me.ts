import type { Me } from '~/types/schema'

const PREFIX = '/me'

async function getMe() {
  const apiClient = useApiClient()

  const response: Me = await apiClient(`${PREFIX}`)

  return response
}

export default { getMe }
