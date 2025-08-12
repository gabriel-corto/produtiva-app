export const useApiClient = () => {
  const config = useRuntimeConfig();

  const apiClient = $fetch.create({
    baseURL: config.public.apiBaseURL,
  });

  return apiClient;
};
