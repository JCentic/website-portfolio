<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="nav-header">
    <div class="nav-container">
      <div class="nav-row">
        
        <!-- Logo -->
        <div class="shrink-0">
          <a href="#" class="nav-logo hover-flicker" data-text="JCentic">
            JCentic
          </a>
        </div>

        <!-- Right Side: Navigation Links & Controls -->
        <div class="flex items-center gap-6 md:gap-8">
          <!-- Desktop Navigation -->
          <nav class="nav-desktop-menu">
            <a 
              v-for="link in navLinks" 
              :key="link.name" 
              :href="link.href" 
              class="nav-link"
            >
              {{ link.name }}
            </a>
          </nav>

          <!-- Controls: Theme Toggle & Hamburger -->
          <div class="nav-controls">
            <!-- Theme Toggle Button -->
            <button 
              @click="toggleTheme" 
              type="button"
              class="theme-btn"
              aria-label="Toggle theme"
            >
              <!-- Sun Icon (shown in dark mode) -->
              <svg v-if="isDark" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
              <!-- Moon Icon (shown in light mode) -->
              <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </button>

            <!-- Mobile Menu Button -->
            <button 
              @click="toggleMenu" 
              type="button"
              class="mobile-toggle-btn"
              aria-label="Toggle navigation menu"
            >
              <!-- Open Menu Icon (three bars) -->
              <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <!-- Close Menu Icon (X) -->
              <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-show="isMenuOpen" class="mobile-menu">
        <a 
          v-for="link in navLinks" 
          :key="link.name" 
          :href="link.href" 
          @click="isMenuOpen = false"
          class="mobile-nav-link"
        >
          {{ link.name }}
        </a>
      </div>
    </transition>
  </header>
</template>

<style scoped src="../assets/css/components/navbar.css"></style>
