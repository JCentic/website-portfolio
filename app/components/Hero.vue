<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const roles = ['Web Developer', 'Game Developer'] as const
const currentRole = ref<string>('Web Developer')
const isGlitching = ref(false)

const chars = '!<>-_\\/[]{}—=+*^?#________'
let roleIndex = 0
let animationFrameId: number | null = null
let intervalId: any = null

interface QueueItem {
  from: string
  to: string
  start: number
  end: number
  char?: string
}

const scrambleText = (targetText: string) => {
  let frame = 0
  const queue: QueueItem[] = []
  const oldText = currentRole.value
  const length = Math.max(oldText.length, targetText.length)
  
  for (let i = 0; i < length; i++) {
    const from = oldText.charAt(i)
    const to = targetText.charAt(i)
    const start = Math.floor(Math.random() * 10)
    const end = start + Math.floor(Math.random() * 15)
    queue.push({ from, to, start, end })
  }
  
  const update = () => {
    let output = ''
    let complete = 0
    
    for (const item of queue) {
      if (frame >= item.end) {
        complete++
        output += item.to
      } else if (frame >= item.start) {
        if (!item.char || Math.random() < 0.28) {
          item.char = chars.charAt(Math.floor(Math.random() * chars.length))
        }
        output += item.char
      } else {
        output += item.from
      }
    }
    
    currentRole.value = output
    
    if (complete === queue.length) {
      isGlitching.value = false
    } else {
      frame++
      animationFrameId = requestAnimationFrame(update)
    }
  }
  
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
  }
  
  isGlitching.value = true
  update()
}

onMounted(() => {
  intervalId = setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length
    const nextRole = roles[roleIndex] ?? roles[0]
    scrambleText(nextRole)
  }, 4000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
  if (animationFrameId !== null) cancelAnimationFrame(animationFrameId)
})
</script>

<template>
  <section id="home" class="hero-section">
    
    <!-- Animated background grid -->
    <div class="hero-background-grid"></div>
    
    <!-- Background fade overlay -->
    <div class="hero-fade-overlay"></div>
    
    <!-- Glowing glassmorphism orbs (monochromatic grey/silver) -->
    <div class="hero-orbs-container">
      <div class="hero-orb-1"></div>
      <div class="hero-orb-2"></div>
    </div>

    <div class="hero-content-wrapper">
      
      <!-- Main Headline -->
      <h1 class="hero-title">
        <span class="hover-flicker block" data-text="Building Modern">Building Modern</span>
        <span class="hero-title-gradient hover-flicker block sm:inline-block" data-text="Web Applications">
          Web Applications
        </span>
      </h1>

      <!-- Subheadline -->
      <p class="hero-subtitle">
        Hi, I am <span class="font-semibold text-zinc-900 dark:text-zinc-100">Joseph Claire L. Paquinol</span> a.k.a. <span class="font-semibold text-zinc-900 dark:text-zinc-100">JCentic</span>, a 3rd year BSIT Student from DNSC, a <span class="hero-role-value" :class="{ 'glitch-active': isGlitching }" :data-text="currentRole">{{ currentRole }}</span>.
      </p>

    </div>

    <!-- SVG Wave Separator -->
    <div class="hero-wave-wrapper">
      <svg class="hero-wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,16.22,83.1,22.81,168.66,42.74,258.31,64.21,321.39,56.44Z" 
              class="hero-wave-path"></path>
      </svg>
    </div>

  </section>
</template>

<style scoped src="../assets/css/components/hero.css"></style>
