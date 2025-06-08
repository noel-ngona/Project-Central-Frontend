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
                console.log(response.data)

                localStorage.setItem('accessToken', accessToken)
                this.router.push('/')
                
            } catch (error) {
                console.error(error)
            }
        },
        async logout() {
            try{
                await api.post('/auth/logout')
                localStorage.removeItem('accessToken')
            }catch(error){
                console.error(error)
            }
        }
    }
})