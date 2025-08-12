import AuthService from '~/services/api/auth'

export async function useSignOut() {
  const router = useRouter()

  await AuthService.signOut()
  router.push('/sign-in')
}
