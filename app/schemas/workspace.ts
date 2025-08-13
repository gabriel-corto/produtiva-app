import * as z from 'zod'

export const createWorkspaceSchema = z.object({
  name: z
    .string({ message: 'O nome é obrigatório' })
    .min(2, 'O nome é obrigatório'),
})

export type CreateWorkspaceForm = z.infer<typeof createWorkspaceSchema>
