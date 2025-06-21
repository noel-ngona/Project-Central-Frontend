<script setup lang="ts">
import { RouterView } from 'vue-router'
import projectManger from "@/assets/images/project_central_homepage.jpg"
</script>

<template>
        <div class="h-screen flex">


    <RouterView />

    <!-- Left Side (Image/Welcome Section) -->
    <div class="flex-1 bg-cover bg-center m-6 rounded-xl hidden lg:block" >
      <img :src="projectManger" alt="">
    </div>
  </div>
</template>