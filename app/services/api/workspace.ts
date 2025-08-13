import type { ApiResponse } from '~/types/api'
import type { CreateWorkspaceData } from '~/types/forms'

const PREFIX = '/workspace'

async function createWorkspace(data: CreateWorkspaceData) {
  const apiClient = useApiClient()

  const response = await apiClient(`${PREFIX}/new`, {
    method: 'POST',
    body: data,
  })

  return response as ApiResponse
}

export default { createWorkspace }
