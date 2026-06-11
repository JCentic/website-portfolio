<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useReveal } from '~/composables/useReveal'

const avatarSrc = '/images/avatar.png'
const hasAvatarError = ref(false)
const isOnline = ref(false)

useReveal()

const checkOnlineStatus = () => {
  try {
    const manilaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })
    const manilaHour = new Date(manilaTime).getHours()
    isOnline.value = manilaHour >= 18 && manilaHour < 22
  } catch (_) {
    const hour = new Date().getHours()
    isOnline.value = hour >= 18 && hour < 22
  }
}

let checkInterval: any = null

const handleMouseMove = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}

onMounted(() => {
  checkOnlineStatus()
  checkInterval = setInterval(checkOnlineStatus, 60000)
})

onUnmounted(() => {
  if (checkInterval) {
    clearInterval(checkInterval)
  }
})
</script>

<template>
  <section id="about" class="about-section">
    
    <div class="about-container">
      
      <!-- Section Header -->
      <div class="about-header">
        <h2 class="about-title hover-flicker" data-text="About Me">
          About Me
        </h2>
        <p class="about-subtitle">
          An overview about myself.
        </p>
      </div>

      <!-- Bento Grid 1 (About Me) -->
      <div class="bento-grid mb-20">
        
        <!-- Card 1: Player Description (Bio) - Spans 2 columns -->
        <div class="profile-card spotlight-card reveal-hidden" style="transition-delay: 0ms" @mousemove="handleMouseMove">
          <div>
            <h3 class="profile-title">
              Player Description
            </h3>
            <p class="profile-bio">
              I am a BSIT student and freelance junior developer focused on building clean, responsive, and functional websites, web apps, and software solutions for both mobile and desktop platforms. I mainly work with FastAPI, PostgreSQL, MySQL, Vue.js, Nuxt 3, HTML, CSS, JavaScript, and Git to create responsive interfaces, interactive dashboards, and basic management systems.
            </p>
            <p class="profile-bio-extra">
              Outside of web development, I build game projects with the Godot Engine, set up and manage databases, and help plan how systems are structured. I also focus on finding and fixing code bugs, writing clear documentation, and troubleshooting IT issues to make sure everything works correctly.
            </p>
          </div>

          <div class="hud-panel">
            <div>
              <span class="hud-label">Location</span>
              <span class="hud-val">Davao del Norte, Philippines</span>
            </div>
            <div>
              <span class="hud-label">Education</span>
              <span class="hud-val">BSIT (DNSC)</span>
            </div>
            <div>
              <span class="hud-label">Availability</span>
              <span class="hud-val">Freelance & Internships</span>
            </div>
          </div>
        </div>

        <!-- Card 2: Player Profile - Spans 1 column -->
        <div class="portrait-card spotlight-card reveal-hidden" style="transition-delay: 100ms" @mousemove="handleMouseMove">
          <h3 class="portrait-title">
            Player Profile
          </h3>
          
          <div class="portrait-image-container">
            <div class="portrait-image-wrapper">
              <!-- Fallback SVG silhouette if image fails to load or doesn't exist -->
              <svg v-if="hasAvatarError" class="portrait-placeholder" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <img 
                v-else 
                :src="avatarSrc" 
                alt="Character Portrait" 
                class="portrait-image"
                @error="hasAvatarError = true"
              />
              <!-- Pulsing online/offline status indicator -->
              <span class="status-indicator" :class="isOnline ? 'is-online' : 'is-offline'">
                <span v-if="isOnline" class="status-pulse"></span>
                <span class="status-dot" :class="isOnline ? 'is-online' : 'is-offline'"></span>
                {{ isOnline ? 'ONLINE' : 'OFFLINE' }}
              </span>
            </div>
          </div>

          <div class="portrait-stats">
            <div class="stat-item">
              <span class="stat-label">FullName</span>
              <span class="stat-val font-pixel">Joseph Claire L. Paquinol</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Class</span>
              <span class="stat-val">Web & Game Developer</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">Status</span>
              <span 
                class="stat-val font-mono tracking-wider transition-colors duration-200"
                :class="isOnline ? 'text-emerald-500 dark:text-emerald-400' : 'text-zinc-400 dark:text-zinc-500'"
              >
                {{ isOnline ? 'AVAILABLE' : 'RESTING' }}
              </span>
            </div>
          </div>
        </div>

      </div>

      <!-- Section Header: My Tech Stack -->
      <div class="about-header">
        <h2 class="about-title hover-flicker" data-text="My Tech Stack">
          My Tech Stack
        </h2>
        <p class="about-subtitle">
          Tools, languages, and frameworks in my inventory.
        </p>
      </div>

      <!-- Bento Grid 2 (My Tech Stack) -->
      <div class="bento-grid mb-20">

        <!-- Card 3: Frontend Inventory - Spans 1 column -->
        <div class="inventory-card spotlight-card reveal-hidden" style="transition-delay: 200ms" @mousemove="handleMouseMove">
          <div>
            <h3 class="inventory-title">
              Frontend
            </h3>
            <p class="inventory-desc">
              Client languages and reactive layout engines.
            </p>
          </div>
          <div class="inventory-badges">
            <span class="badge">HTML / CSS</span>
            <span class="badge">JavaScript</span>
            <span class="badge">Vue.js</span>
            <span class="badge-highlight">Nuxt 3</span>
            <span class="badge-highlight">Tailwind CSS</span>
            <span class="badge-highlight">React Native</span>
          </div>
        </div>

        <!-- Card 4: Backend & DB Inventory - Spans 1 column -->
        <div class="inventory-card spotlight-card reveal-hidden" style="transition-delay: 300ms" @mousemove="handleMouseMove">
          <div>
            <h3 class="inventory-title">
              Backend & Database
            </h3>
            <p class="inventory-desc">
              API development frameworks and relational query stores.
            </p>
          </div>
          <div class="inventory-badges">
            <span class="badge">Python</span>
            <span class="badge">FastAPI</span>
            <span class="badge">PHP</span>
            <span class="badge">Laravel</span>
            <span class="badge">PostgreSQL</span>
            <span class="badge">MySQL</span>
            <span class="badge">SQLite</span>
            <span class="badge-highlight">NodeJS</span>
          </div>
        </div>

        <!-- Card 5: Tools & Platforms - Spans 1 column -->
        <div class="inventory-card spotlight-card reveal-hidden" style="transition-delay: 400ms" @mousemove="handleMouseMove">
          <div>
            <h3 class="inventory-title">
              Tools & Platforms
            </h3>
            <p class="inventory-desc">
              Cloud distribution and control pipelines.
            </p>
          </div>
          <div class="inventory-badges">
            <span class="badge">Git / GitHub</span>
            <span class="badge">Vercel</span>
            <span class="badge">Neon DB</span>
            <span class="badge">Render</span>
            <span class="badge">VS Code</span>
            <span class="badge">Godot Engine</span>
          </div>
        </div>

      </div>

      <!-- Section Header: Currently Learning -->
      <div class="about-header">
        <h2 class="about-title hover-flicker" data-text="Currently Learning">
          Currently Learning
        </h2>
        <p class="about-subtitle">
          Technologies and development methodologies I am actively exploring.
        </p>
      </div>

      <!-- Bento Grid 3 (Currently Learning) -->
      <div class="bento-grid">

        <!-- Card 6: Active Quests - Spans 3 columns -->
        <div class="quests-card spotlight-card reveal-hidden" style="transition-delay: 500ms" @mousemove="handleMouseMove">
          <h3 class="quests-title">
            Active Quests
          </h3>
          
          <div class="quests-grid">
            
            <!-- Quest 1 -->
            <div class="quest-card">
              <div>
                <div class="quest-header">
                  <div class="quest-icon-wrapper">
                    <!-- Mobile Device SVG icon for CyberMorph Mobile Simulation -->
                    <svg class="quest-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="quest-label">Main Quest</h4>
                </div>
                <h5 class="quest-title">CyberMorph (Capstone)</h5>
                <p class="quest-desc">
                  Build an AI-based cybersecurity mobile simulation game with cloud integration using Vue.js, FastAPI, SQLAlchemy, PostgreSQL, and Godot.
                </p>
              </div>
              <div class="quest-status">
                <span class="status-dot"></span>
                <span class="status-label">Active</span>
              </div>
            </div>

            <!-- Quest 2 -->
            <div class="quest-card">
              <div>
                <div class="quest-header">
                  <div class="quest-icon-wrapper">
                    <!-- Database SVG icon -->
                    <svg class="quest-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h4 class="quest-label">Side Quest</h4>
                </div>
                <h5 class="quest-title">ORMs & Databases</h5>
                <p class="quest-desc">
                  Integrate SQL data structures using SQLAlchemy (Python) and Sequelize (Node.js).
                </p>
              </div>
              <div class="quest-status">
                <span class="status-dot"></span>
                <span class="status-label">Active</span>
              </div>
            </div>

            <!-- Quest 3 -->
            <div class="quest-card">
              <div>
                <div class="quest-header">
                  <div class="quest-icon-wrapper">
                    <!-- Code Bracket SVG icon -->
                    <svg class="quest-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 class="quest-label">Side Quest</h4>
                </div>
                <h5 class="quest-title">Design Patterns</h5>
                <p class="quest-desc">
                  Implement patterns like MVC, Singleton, and Factory across frontend/backend stacks.
                </p>
              </div>
              <div class="quest-status">
                <span class="status-dot"></span>
                <span class="status-label">Active</span>
              </div>
            </div>

            <!-- Quest 4 -->
            <div class="quest-card">
              <div>
                <div class="quest-header">
                  <div class="quest-icon-wrapper">
                    <!-- Terminal SVG icon -->
                    <svg class="quest-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="quest-label">Learning Journey</h4>
                </div>
                <h5 class="quest-title">Agentic Engineering</h5>
                <p class="quest-desc">
                  Master agentic workflows, intent-first prompt schemas, and structured context isolation.
                </p>
              </div>
              <div class="quest-status">
                <span class="status-dot"></span>
                <span class="status-label">Active</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>

    <!-- SVG Wave Separator at the Bottom -->
    <div class="about-wave-wrapper">
      <svg class="about-wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,16.22,83.1,22.81,168.66,42.74,258.31,64.21,321.39,56.44Z" 
              class="about-wave-path"></path>
      </svg>
    </div>

  </section>
</template>

<style scoped src="../assets/css/components/about.css"></style>
