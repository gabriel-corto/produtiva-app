export default defineNuxtRouteMiddleware((to, _) => {
  const authToken = useCookie('authToken').value

  const publicRoutes = ['/sign-in', '/sign-up']
  const isPublicRoute = publicRoutes.includes(to.path)

  if (import.meta.client) return

  if (!authToken && !isPublicRoute) {
    return navigateTo('/sign-in')
  }

  if (authToken && isPublicRoute) {
    return navigateTo('/')
  }
})
