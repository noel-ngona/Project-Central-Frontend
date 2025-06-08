import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/api',
})

api.interceptors.request.use(
  (config) => {
    // List of URLs that should not have the Authorization header
    const publicUrls = ['/auth/login'] // Add other public URLs if needed

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

export default api
