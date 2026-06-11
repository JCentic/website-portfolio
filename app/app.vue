<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Navbar from '~/components/Navbar.vue'

const isLoading = ref(true)
const isLoaded = ref(false)

const handleLoadingFinished = () => {
  isLoading.value = false
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
  // Complete unmounting after exit transition completes
  setTimeout(() => {
    isLoaded.value = true
  }, 400)
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    // Reset scroll position immediately on page load/refresh
    window.scrollTo({ top: 0, behavior: 'instant' })
  }
})
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 transition-colors duration-300 relative overflow-x-hidden">
    <!-- Fullscreen Cyber-Boot Preloader -->
    <LoadingScreen v-if="!isLoaded" @finished="handleLoadingFinished" />

    <!-- Navbar is independent of the zoom-transition content wrapper -->
    <Navbar 
      :class="{ 
        'opacity-0 pointer-events-none': isLoading, 
        'opacity-100 transition-opacity duration-700 ease-out': !isLoading 
      }"
    />

    <!-- Main Content Wrapper with entry scale-zoom and fade animation -->
    <div 
      class="pt-0"
      :class="{ 
        'opacity-0 scale-[0.98] pointer-events-none': isLoading, 
        'opacity-100 scale-100 transition-all duration-750ms ease-out': !isLoading 
      }"
    >
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  </div>
</template>
