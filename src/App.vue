<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import DefaultLayout from '@/layouts/PublicLayout.vue'
import { computed } from 'vue'

const layouts = {
  AppLayout,
  DefaultLayout,
}

const route = useRoute()

const layout = computed(() => {
  const layoutName = route.meta.layout as keyof typeof layouts
  return layouts[layoutName] || DefaultLayout
})
</script>

<template>
 <component :is="layout">
    <RouterView />
 </component>
</template>


