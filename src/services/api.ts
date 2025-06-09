import axios from 'axios'
import router from '@/router'

const api = axios.create({
  baseURL: 'http://localhost:8000/api', withCredentials : true,
})

api.interceptors.request.use(
  (config) => {
    // List of URLs that should not have the Authorization header
    const publicUrls = ['/auth/login', '/auth/refresh'] // Add other public URLs if needed

    if (config.url && publicUrls.includes(config.url)) {
      return config // Don't add token for public URLs
    }

    const token = localStorage.getItem('accessToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

async function refreshAccessToken() {
  try {
    const response = await api.post('/auth/refresh')
    const accessToken = response.data.access
    localStorage.setItem('accessToken', accessToken)
    api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  } catch (error) {
    console.error(error)
  }
}

api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    const publicUrls = ['/auth/login', '/auth/refresh']
    const originalRequest = error.config
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !publicUrls.includes(originalRequest.url)
    ) {
      originalRequest._retry = true
      try {
        await refreshAccessToken()
        return api(originalRequest)
      } catch (error) {
        console.error(error)
        router.push('/login')
      }
    }
    router.push('/login')
    return Promise.reject(error)
  },
)

export default api
