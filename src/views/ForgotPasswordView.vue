<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

const obj = reactive({
  email : '',
  response: {
    error: "",
    message: ""
  }
})

const authStore = useAuthStore()


const loading = ref(false)
async function resetPassword() {
   loading.value = true
   obj.response = await authStore.resetPassword(obj.email)
   loading.value = false
}
</script>

<template>
  <div class="flex-1 flex items-center justify-center ">
      <div class="w-full max-w-md p-8">
        <h2 class="text-3xl font-semibold text-stone-600 mb-6 text-center">Reset Password</h2>

        <form @submit.prevent="resetPassword">
          <!-- Email Field -->
          <div class="mb-4">
            <label for="email" class="block font-medium mb-2">Email</label>
            <input type="text" id="username" v-model="obj.email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Enter your username" required>
          </div>

         
          
          <div v-if="obj.response.error" class="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50">
            <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Error</span>
            <div>{{ obj.response.error }}</div>
          </div>
          <div v-if="obj.response.message" class="flex items-center p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50">
            <svg class="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span class="sr-only">Success</span>
            <div>{{ obj.response.message }}</div>
          </div>
          <button type="submit" class="w-full bg-cyan-700 text-white py-2 rounded-lg hover:bg-cyan-700 transition">
            <span class="flex items-center justify-center w-full h-full" v-if="loading">
              <ClipLoader size="20px" class="mt-1" />
            </span>
            <div v-else>
              Request Password Reset
            </div>
          </button>
        </form>

        <!-- Footer Links -->
        <div class="mt-4 text-center">
          <p class="text-sm text-gray-600">
            <router-link to="/login" class="text-cyan-600 hover:underline">Back to Login</router-link>
          </p>
        </div>
      </div>
    </div>
</template>



<style>

</style>