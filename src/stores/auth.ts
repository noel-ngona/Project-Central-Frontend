import api from '@/services/api'
import {defineStore} from 'pinia'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', {
    state: () => ({
       router: useRouter(),
       user: {
        username: '',
        email : ''
       }
    }),
    actions: {
        async login(username: string, password: string) {
            try {
                const response = await api.post('/auth/login', { username, password })
                const accessToken = response.data.access
                this.user = response.data.user

                localStorage.setItem('accessToken', accessToken)
                this.router.push('/')
                
            } catch (error) {
                console.error(error)
                return error.response.data
            }
        },
        async logout() {
            try{
                await api.post('/auth/logout')
                localStorage.removeItem('accessToken')
                this.router.push('/login')
            }catch(error){
                console.error(error)
                }
        },
        async getUser() {
            if (this.user && this.user.username) {
                return this.user
            } else {
                const userData = await this.checkAuth()
                if (userData && userData.username) {
                    this.user = userData
                    return userData
                } else {
                    // Optionally handle unauthenticated state
                    return { username: '' }
                }
            }
        },
        async checkAuth() {
            try {
                const response = await api.get('/auth/me')
                return response.data
            } catch (error) {
                console.error(error)
                return null
            }
        }
    }
})