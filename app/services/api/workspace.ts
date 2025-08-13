import type { ApiResponse } from '~/types/api'
import type { CreateWorkspaceData } from '~/types/forms'
import type { Workspace } from '~/types/schema'

const PREFIX = '/workspaces'

async function createWorkspace(data: CreateWorkspaceData) {
  const apiClient = useApiClient()

  const response = await apiClient(`${PREFIX}/new`, {
    method: 'POST',
    body: data,
  })

  return response as ApiResponse
}

async function getWorkspaces() {
  const apiClient = useApiClient()

  const response: Workspace[] = await apiClient(`${PREFIX}/my`)

  return response
}

async function getCurrentWorkspace() {
  const apiClient = useApiClient()

  const response: Workspace = await apiClient(`${PREFIX}/current`)

  return response
}

export default { createWorkspace, getCurrentWorkspace, getWorkspaces }
