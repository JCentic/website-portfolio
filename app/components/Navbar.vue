<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const activeSection = ref('home')

const handleScroll = () => {
  if (typeof window === 'undefined') return
  
  const sections = ['home', 'about', 'projects', 'contact']
  const scrollPosition = window.scrollY + window.innerHeight / 3

  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const top = el.offsetTop
      const height = el.offsetHeight
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', handleScroll)
  }
})
</script>

<template>
  <div>
    <!-- Mobile Bottom Navigation Bar -->
    <div class="nav-mobile-bottom">
      <!-- Home Link -->
      <a 
        href="#home" 
        class="nav-mobile-link" 
        :class="{ 'is-active': activeSection === 'home' }"
        aria-label="Home"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      </a>

      <!-- About Link -->
      <a 
        href="#about" 
        class="nav-mobile-link" 
        :class="{ 'is-active': activeSection === 'about' }"
        aria-label="About Me"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </a>

      <!-- Projects Link -->
      <a 
        href="#projects" 
        class="nav-mobile-link" 
        :class="{ 'is-active': activeSection === 'projects' }"
        aria-label="Projects"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </a>

      <!-- Contact Link -->
      <a 
        href="#contact" 
        class="nav-mobile-link" 
        :class="{ 'is-active': activeSection === 'contact' }"
        aria-label="Contact"
      >
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </a>

      <div class="nav-mobile-divider"></div>

      <!-- Theme Toggle Link -->
      <button 
        @click="toggleTheme" 
        type="button"
        class="nav-mobile-theme-btn"
        aria-label="Toggle theme"
      >
        <svg v-if="isDark" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
        <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
    </div>

    <!-- Desktop Side Floating Navigation Bar -->
    <div class="nav-side-floating">
      <!-- Logo/Brand at the top -->
      <a href="#home" class="nav-side-logo hover-flicker" data-text="JCentic">
        <span class="logo-short">JC</span><span class="logo-full">entic</span>
      </a>
      
      <div class="nav-side-divider"></div>
      
      <!-- Vertical Navigation Links -->
      <nav class="nav-side-menu">
        <!-- Home Link -->
        <a 
          href="#home" 
          class="nav-side-link" 
          :class="{ 'is-active': activeSection === 'home' }"
          aria-label="Home"
        >
          <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span class="nav-side-label">Home</span>
        </a>

        <!-- About Link -->
        <a 
          href="#about" 
          class="nav-side-link" 
          :class="{ 'is-active': activeSection === 'about' }"
          aria-label="About Me"
        >
          <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span class="nav-side-label">About</span>
        </a>

        <!-- Projects Link -->
        <a 
          href="#projects" 
          class="nav-side-link" 
          :class="{ 'is-active': activeSection === 'projects' }"
          aria-label="Projects"
        >
          <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span class="nav-side-label">Projects</span>
        </a>

        <!-- Contact Link -->
        <a 
          href="#contact" 
          class="nav-side-link" 
          :class="{ 'is-active': activeSection === 'contact' }"
          aria-label="Contact"
        >
          <svg class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span class="nav-side-label">Contact</span>
        </a>
      </nav>
      
      <div class="nav-side-divider"></div>
      
      <!-- Theme Toggle at the bottom -->
      <button 
        @click="toggleTheme" 
        type="button"
        class="nav-side-theme-btn"
        aria-label="Toggle theme"
      >
        <svg v-if="isDark" class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
        <svg v-else class="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
        <span class="theme-label">{{ isDark ? 'Light' : 'Dark' }}</span>
      </button>
    </div>
  </div>
</template>

<style scoped src="../assets/css/components/navbar.css"></style>
