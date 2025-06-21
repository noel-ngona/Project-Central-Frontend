<script setup lang="ts">
import { reactive } from "vue"
import { useAuthStore } from "@/stores/auth"
import ClipLoader from "vue-spinner/src/ClipLoader.vue"
import { ref } from "vue"

const authStore = useAuthStore()

const obj = reactive({
    username: "",
    password: "",
    response: {
        error: ""
    }
})

const loading = ref(false)
async function login() {
   loading.value = true
   obj.response = await authStore.login(obj.username, obj.password)
   loading.value = false
}
</script>

<template>
  <div class="flex-1 flex items-center justify-center ">
      <div class="w-full max-w-md p-8">
        <h2 class="text-3xl font-semibold text-stone-600 mb-6 text-center">Login</h2>

        <form @submit.prevent="login">
          <!-- Email Field -->
          <div class="mb-4">
            <label for="email" class="block font-medium mb-2">Username</label>
            <input type="text" id="username" v-model="obj.username" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Enter your username" required>
          </div>

          <!-- Password Field -->
          <div class="mb-4">
            <label for="password" class="block font-medium mb-2">Password</label>
            <input type="password" id="password" v-model="obj.password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Enter your password" required>
          </div>
          
          <div v-if="obj.response.error" class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50">
            <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Error</span>
            <div>{{ obj.response.error }}</div>
          </div>

          <!-- Login Button -->
          <button type="submit" class="w-full bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-700 transition">
            <span class="flex items-center justify-center w-full h-full" v-if="loading">
              <ClipLoader size="20px" class="mt-1" />
            </span>
            <div v-else>
              Login
            </div>
          </button>
        </form>

        <!-- Footer Links -->
        <div class="mt-4 text-center">
          <p class="text-sm text-gray-600">
            Forgot your password?
            <router-link to="/forgot-password" class="text-cyan-600 hover:underline">Click here to reset</router-link>
          </p>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
