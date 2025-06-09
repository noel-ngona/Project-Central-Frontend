<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import api from '@/services/api'

const authStore = useAuthStore()

api.get('/auth/me').then((response) => {
  authStore.user = response.data
})


async function logout() {
  await authStore.logout()
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
    <div class="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
      <h1 class="text-2xl font-semibold text-gray-800 mb-4">Welcome {{ authStore.user.username }} to the app.</h1>
      <p class="text-gray-600 mb-6">
        Your Email is <span class="font-medium text-indigo-600">{{ authStore.user.email }}</span>.
      </p>
      <form @submit.prevent="logout">
        <button
          class="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          type="submit"
        >
          Logout
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
