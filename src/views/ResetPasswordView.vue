<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter, useRoute } from 'vue-router'

const route = useRoute()
const token = route.params.token
const identity = route.params.identity

const obj = ref({
    identity: identity,
    password: "",
    password_confirmation: "",
    token: token,
    loading : false,
    response: {
        error: "",
        message: ""
    }
})

const validate = () => {
    if (obj.value.password !== obj.value.password_confirmation) {
        obj.value.response.error = "Passwords do not match"
        return false
    }

    if(obj.value.password.length < 8){
        obj.value.response.error = "Password should have least 8 characters"
        return false
    }

    obj.value.response.error = ""
    return true
}

const authStore = useAuthStore()

const resetPassword = async () => {
    if (validate()) {
        obj.value.loading = true
        obj.value.response = await authStore.resetPasswordConfirmation(obj.value.identity, obj.value.token, obj.value.password)
        obj.value.loading = false
    }
}

</script>

<template>
 <div class="flex-1 flex items-center justify-center ">
      <div class="w-full max-w-md p-8">
        <h2 class="text-3xl font-semibold text-stone-600 mb-6 text-center">Reset Password</h2>

        <form @submit.prevent="resetPassword">
          <!-- Email Field -->
          <div class="mb-4">
            <label for="password" class="block font-medium mb-2">Password</label>
            <input @change="validate" type="password" id="username" v-model="obj.password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Enter Password" required>
          </div>

          <div class="mb-4">
            <label for="password_confirmation" class="block font-medium mb-2">Password Confirmation</label>
            <input @change="validate" type="password" id="password_confirmation" v-model="obj.password_confirmation" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="Enter password confirmation" required>
          </div>

          <input type="hidden" id="token" v-model="obj.token">
          <input type="hidden" id="identity" v-model="obj.identity">

         
          
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
              Reset Password
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