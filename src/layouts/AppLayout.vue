<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from '@/components/SidebarItem.vue'
import Navbar from '@/components/NavbarItem.vue'
</script>

<template><div class="flex h-screen max-w-full w-full">
    <!-- Sidebar -->
    <Sidebar class=" hidden  md:block" />

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Top Navbar -->
      <Navbar />

      <!-- Page Content -->
      <main class="p-6 flex-1 w-full max-w-full md:h-full">
        <RouterView />
      </main>
    </div>
  </div>
</template>


