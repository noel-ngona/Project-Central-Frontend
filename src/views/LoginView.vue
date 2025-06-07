<script setup lang="ts">
const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<template>
    <div class="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-6">
        <div class="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full space-y-6 transform hover:scale-105 transition-transform">
            <h1 class="text-4xl font-bold text-center text-gray-800 mb-8 animate-pulse">
                Test Page
            </h1>
            <div class="space-y-4">
                <div class="bg-yellow-200 p-4 rounded-md hover:bg-yellow-300">
                    <p class="text-sm font-semibold text-gray-700">
                        If you can see styled elements, Tailwind is working! 🎉
                    </p>
                </div>
                <button 
                    @click="handleClick" 
                    class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Fancy Button
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>