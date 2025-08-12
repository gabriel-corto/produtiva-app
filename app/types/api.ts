type codeType = 'UNAUTHORIZED' | 'FORBIDDEN' | 'AUTHENTICATED'

export interface SignUpResponse {
  success: boolean
  message: {
    title: string
    description: string
  }
}

export interface SignInResponse {
  success: boolean
  code: codeType
}
