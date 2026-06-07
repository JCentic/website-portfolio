<script setup lang="ts">
import { ref, computed } from 'vue'

interface Project {
  id: number
  title: string
  description: string
  category: 'Full-Stack' | 'Frontend' | 'Backend/Libraries'
  tags: string[]
  githubUrl: string
  demoUrl: string
  imageUrl: string
}

const categories = ['All', 'Full-Stack', 'Frontend', 'Backend/Libraries'] as const
type CategoryFilter = typeof categories[number]

const activeCategory = ref<CategoryFilter>('All')

const projects: Project[] = [
  {
    id: 1,
    title: 'CyberMorph (Capstone)',
    description: 'An AI-powered cybersecurity simulation mobile game designed for interactive security training, featuring cloud integration and dynamic network topologies.',
    category: 'Full-Stack',
    tags: ['Vue.js', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Godot'],
    githubUrl: 'https://github.com/CodeWithDevi0',
    demoUrl: 'https://example.com',
    imageUrl: '/images/projects/cybermorph.png'
  },
  {
    id: 2,
    title: 'NeonSync Engine',
    description: 'A high-performance synchronization utility designed to replicate data states between serverless Neon database pools and local caching nodes in real-time.',
    category: 'Backend/Libraries',
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    githubUrl: 'https://github.com/CodeWithDevi0',
    demoUrl: 'https://example.com',
    imageUrl: '/images/projects/neonsync.png'
  },
  {
    id: 3,
    title: 'GlassyUI Kit',
    description: 'A premium component design system library featuring responsive, glassmorphic UI components crafted specifically for Nuxt 3 and Vue 3 applications.',
    category: 'Frontend',
    tags: ['Vue 3', 'Nuxt 3', 'Tailwind CSS', 'TypeScript'],
    githubUrl: 'https://github.com/CodeWithDevi0',
    demoUrl: 'https://example.com',
    imageUrl: '/images/projects/glassyui.png'
  },
  {
    id: 4,
    title: 'AuthGate',
    description: 'A high-throughput microservice authentication API Gateway with built-in token signature verification, rate-limiting, and client proxy routing.',
    category: 'Backend/Libraries',
    tags: ['Python', 'FastAPI', 'Redis', 'Docker', 'JWT'],
    githubUrl: 'https://github.com/CodeWithDevi0',
    demoUrl: 'https://example.com',
    imageUrl: '/images/projects/authgate.png'
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projects.filter(project => project.category === activeCategory.value)
})

const setCategory = (category: CategoryFilter) => {
  activeCategory.value = category
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">
      
      <!-- Section Header -->
      <div class="projects-header">
        <h2 class="projects-title">
          Featured Projects
        </h2>
        <p class="projects-subtitle">
          A collection of web applications, database synchronizers, and libraries I have developed.
        </p>
      </div>

      <!-- Filter Controls -->
      <div class="filter-bar">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="setCategory(cat)"
          type="button"
          :class="activeCategory === cat ? 'filter-btn-active' : 'filter-btn'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="project-card"
        >
          <!-- Project Preview Image (Easy to replace later) -->
          <div class="project-image-wrapper">
            <img 
              :src="project.imageUrl" 
              :alt="project.title" 
              class="project-image"
              loading="lazy"
            />
          </div>

          <!-- Card Content -->
          <div class="project-body">
            <div class="project-meta">
              <h3 class="project-title">
                {{ project.title }}
              </h3>
              <p class="project-desc">
                {{ project.description }}
              </p>
              
              <!-- Technical Tags -->
              <div class="project-tags">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag" 
                  class="project-tag"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Links & Actions -->
            <div class="project-actions">
              <a 
                :href="project.githubUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="project-link-github"
              >
                <!-- GitHub Icon -->
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
                Repository
              </a>

              <a 
                :href="project.demoUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="project-link-demo group/demo"
              >
                Live Demo
                <svg class="demo-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- SVG Wave Separator at the Bottom -->
    <div class="project-wave-wrapper">
      <svg class="project-wave-svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,16.22,83.1,22.81,168.66,42.74,258.31,64.21,321.39,56.44Z" 
              class="project-wave-path"></path>
      </svg>
    </div>
  </section>
</template>

<style scoped src="../assets/css/components/projects.css"></style>
