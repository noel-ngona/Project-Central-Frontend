<script setup lang="ts">
// import Avatar from '@/assets/images/Leonardo_Kino_XL_A_professional_picture_of_a_black_person_1.jpg'
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()

import { ref, onMounted } from 'vue'

const user = ref({ username: '' })

onMounted(async () => {
  user.value = await authStore.getUser()
})


</script>

<template>
  <header class="bg-slate-50  px-6 py-4 flex justify-between items-center">
    <div class=" flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 md:hidden block">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <h1 class="text-lg md:text-xl font-semibold">Welcome, {{ user.username }}</h1>
    </div>

    <div class="flex items-center space-x-4">
      <div class="text-cyan-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="md:size-8 size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>

      </div>
      <div class="flex items-center space-x-4">
        <!-- <img :src="Avatar" class=" h-8 md:h-12 2-8 md:w-12 rounded-full" /> -->
        <div class="flex flex-col hidden md:block">

          <div class="text-base">
            {{ user.username }}
          </div>
          <div class="text-stone-400 text-sm">
            25th March 2025
          </div>

        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
