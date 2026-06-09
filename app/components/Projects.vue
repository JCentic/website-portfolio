<script setup lang="ts">
import { ref, computed } from 'vue'
import { useReveal } from '~/composables/useReveal'

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  githubUrl: string
  demoUrl: string
  imageUrl: string
  category: 'programming' | 'academic'
}

useReveal()

const projects: Project[] = [
  {
    id: 1,
    title: 'CyberMorph (Capstone)',
    description: 'An AI-powered cybersecurity simulation mobile game designed for interactive security training, featuring cloud integration and dynamic network topologies.',
    tags: ['3rd Year', 'Vue.js', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Godot', 'Render', 'Vercel', 'PostgreSQL', 'Neon', 'Reinforcement Learning'],
    githubUrl: 'https://github.com/CodeWithDevi0',
    demoUrl: 'https://cyber-morph-portal.vercel.app/',
    imageUrl: '/images/projects/cybermorph.png',
    category: 'programming'
  },
  {
    id: 2,
    title: 'Sari-sari Store Management System',
    description: 'An application I created to help local stores track inventory, daily sales, and print receipts.',
    tags: ['3rd Year', 'React-Native', 'React-Expo', 'Tailwind CSS', 'JavaScript', 'SQLite', 'Self Project'],
    githubUrl: 'https://github.com/CodeWithDevi0/store-management',
    demoUrl: '',
    imageUrl: '/images/projects/store-management.png',
    category: 'programming'
  },
  {
    id: 3,
    title: 'DNSC Clothing Store',
    description: 'An E-commerce Platform (Customer & Admin) for DNSC Clothing Store, featuring an Inventory Management System for monitoring sales, new stocks, and store inventory.',
    tags: ['2nd Year', 'PHP', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/YuKennnn/DNSC_SMS',
    demoUrl: '',
    imageUrl: '/images/projects/dnsc-store.png',
    category: 'programming'
  },
  {
    id: 4,
    title: 'PEasy Builder',
    description: 'A custom PC builder web application that lets users select components, check part compatibility, and shop for parts.',
    tags: ['2nd Year', 'PHP', 'JavaScript', 'CSS', 'XAMPP', 'MySQL'],
    githubUrl: 'https://github.com/CodeWithDevi0/PeasyShopBuilder',
    demoUrl: '',
    imageUrl: '/images/projects/peasy-builder.png',
    category: 'programming'
  },
  {
    id: 5,
    title: 'Taskenture',
    description: 'A gamified task management system that transforms daily chores into an adventure.',
    tags: ['2nd Year', 'Laravel', 'Javascript', 'Bootstrap', 'HTML', 'CSS'],
    githubUrl: 'https://github.com/panzerweb/taskentureui',
    demoUrl: '',
    imageUrl: '/images/projects/taskenture.png',
    category: 'programming'
  },
  {
    id: 6,
    title: 'Lakbay Plus',
    description: 'An Ai Travel Planning Application that will help you Plan your trip.',    
    tags: ['3rd Year','Top 9 Overall - School Technopreneurship Competition', 'FastAPI', 'VueJs', 'PostgreSQL', 'Neon'],
    githubUrl: '', // No github url for academic projects
    demoUrl: '', // No demo url for academic projects
    imageUrl: '/images/projects/techno.png',
    category: 'academic'
  },
  {
    id: 7,
    title: 'Blood Drive',
    description: 'A Short Film about a group of spies tasked together on a mission to bring down a certain enemy, only to discover a big secret',    
    tags: ['1st Year', 'English', 'Capcut', 'Short Film', 'Video Editor', 'Actor'],
    githubUrl: '', // No github url for academic projects
    demoUrl: '', // No demo url for academic projects
    imageUrl: '/images/projects/short-filmv1.png',
    category: 'academic'
  },
  {
    id: 8,
    title: 'Noche Buena (Skusta Clee Parody)',
    description: "A MTV Spoof of Skusta Clee's Noche Buena. Produced for class requirements.",
    tags: ['1st Year', 'Filipino', 'Capcut', 'Short Film', 'Video Editor', 'Actor'],
    githubUrl: '', // No github url for academic projects
    demoUrl: '', // No demo url for academic projects
    imageUrl: '/images/projects/mtv-spoof.png',
    category: 'academic'
  },
  {
    id: 9,
    title: 'Business Stocks and Finance Management System',
    description: "This is our final presentation on Web Systems and Technologies. We are tasked with making a website with a semi-functional UI using HTML, CSS, and JS. Our website is a management system to help run businesses and manage their stocks and finances. We designed this website for small and big business owners, and we also publish it on GitHub.",
    tags: ['2nd Year', 'HTML', 'CSS', 'JavaScript'],
    githubUrl: '', // No github url for academic projects
    demoUrl: '', // No demo url for academic projects
    imageUrl: '/images/projects/finalv1.png',
    category: 'programming'
  },
  {
    id: 10,
    title: 'School Store Management System',
    description: "Our final project for IT121 was to make a fully functional system with a UI and database. We use Java and MySQL in our system. Our system this time was to help the school manage the institutes clothing's and school accessories in a system shop style. After all, we succeed in defending our proposal to our instructor, Sir Jerson M. Viagedor.",
    tags: ['1st Year', 'Java', 'Drag & Drop', 'GUI', 'Netbeans', 'MySQL', 'CRUD'],
    githubUrl: '', // No github url for academic projects
    demoUrl: '', // No demo url for academic projects
    imageUrl: '/images/projects/crudv1.png',
    category: 'programming'
  },
  {
    id: 11,
    title: 'Daily Savings Tracker',
    description: "This project was under the subject of Computer Programming 2, or IT121, and we were tasked with making a GUI design. Our GUI's purpose was a system that will help a person to track their Daily Savings.",
    tags: ['1st Year', 'Java', 'Drag & Drop', 'GUI', 'Netbeans'],
    githubUrl: '', // No github url for academic projects
    demoUrl: '', // No demo url for academic projects
    imageUrl: '/images/projects/guiv1.png',
    category: 'programming'
  },
  {
    id: 12,
    title: 'Cry of Balintawak',
    description: "SS112 - Reading in Philippine History. Directed and story written by Christial Misal. Final project of RPH. A short dramatic act of the Cry of Balintawak.",
    tags: ['1st Year', 'Short Film', 'Filipino', 'Video Editor', 'Actor'],
    githubUrl: '', // No github url for academic projects
    demoUrl: '', // No demo url for academic projects
    imageUrl: '/images/projects/short-filmv2.png',
    category: 'academic'
  },
]

const activeCategory = ref<'programming' | 'academic'>('programming')
const isGlitching = ref(false)
const imageErrors = ref<Record<number, boolean>>({})

const toastMessage = ref('')
const toastActive = ref(false)
const toastType = ref<'error' | 'warning'>('warning')
let toastTimeout: any = null

const showToast = (message: string, type: 'error' | 'warning' = 'warning') => {
  if (toastTimeout) clearTimeout(toastTimeout)
  toastMessage.value = message
  toastType.value = type
  toastActive.value = true
  toastTimeout = setTimeout(() => {
    toastActive.value = false
  }, 3000)
}

const handleLinkClick = (e: MouseEvent, url: string, type: 'github' | 'demo') => {
  if (!url) {
    e.preventDefault()
    const message = type === 'github'
      ? 'SYSTEM: No Github Repository'
      : 'SYSTEM: No Live Demo'
    showToast(message, 'warning')
  }
}

const filterCategory = (category: 'programming' | 'academic') => {
  if (activeCategory.value === category) return
  isGlitching.value = true
  activeCategory.value = category
  setTimeout(() => {
    isGlitching.value = false
  }, 300)
}

const filteredProjects = computed(() => {
  return projects.filter(p => p.category === activeCategory.value)
})

const handleImageError = (id: number) => {
  imageErrors.value[id] = true
}

const handleMouseMove = (e: MouseEvent) => {
  const card = e.currentTarget as HTMLElement
  if (!card) return
  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  card.style.setProperty('--mouse-x', `${x}px`)
  card.style.setProperty('--mouse-y', `${y}px`)
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="projects-container">
      
      <!-- Section Header & Action Wrapper -->
      <div class="projects-header-wrapper">
        <div class="projects-header">
          <h2 class="projects-title hover-flicker" data-text="Featured Projects">
            Featured Projects
          </h2>
          <p class="projects-subtitle">
            A collection of web applications, database synchronizers, and libraries I have developed.
          </p>
        </div>

        <!-- Filter tabs selector -->
        <div class="filter-tabs">
          <button 
            class="filter-tab"
            :class="{ 'is-active': activeCategory === 'programming' }"
            @click="filterCategory('programming')"
          >
            Programming Projects
          </button>
          <button 
            class="filter-tab"
            :class="{ 'is-active': activeCategory === 'academic' }"
            @click="filterCategory('academic')"
          >
            Academic Projects
          </button>
        </div>
      </div>

      <!-- Projects Grid Wrapper (Observer Target) -->
      <div class="reveal-hidden">
        <div class="projects-grid" :class="{ 'is-glitching': isGlitching }">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="project-card spotlight-card"
            @mousemove="handleMouseMove"
          >
          <!-- Project Preview Image (Easy to replace later) -->
          <div class="project-image-wrapper">
            <img 
              v-if="!imageErrors[project.id]"
              :src="project.imageUrl" 
              :alt="project.title" 
              class="project-image"
              loading="lazy"
              @error="handleImageError(project.id)"
            />
            <div v-else class="project-placeholder-fallback">
              <!-- Dynamic SVG representation based on category/tags -->
              <svg v-if="project.tags.includes('IoT') || project.tags.includes('Hardware')" class="fallback-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
              <svg v-else-if="project.tags.includes('Video Production') || project.tags.includes('Video Editing') || project.tags.includes('Motion Graphics')" class="fallback-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <svg v-else class="fallback-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span class="fallback-text">{{ project.category === 'academic' ? 'Academic Project' : 'Programming Project' }}</span>
            </div>
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
                :href="project.githubUrl || 'javascript:void(0)'" 
                :target="project.githubUrl ? '_blank' : '_self'" 
                rel="noopener noreferrer"
                class="project-link-github"
                :class="{ 'is-disabled': !project.githubUrl }"
                @click="handleLinkClick($event, project.githubUrl, 'github')"
              >
                <!-- GitHub Icon -->
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
                Repository
              </a>

              <a 
                :href="project.demoUrl || 'javascript:void(0)'" 
                :target="project.demoUrl ? '_blank' : '_self'" 
                rel="noopener noreferrer"
                class="project-link-demo group/demo"
                :class="{ 'is-disabled': !project.demoUrl }"
                @click="handleLinkClick($event, project.demoUrl, 'demo')"
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

    </div>

    <!-- Cyber Toast Feedback -->
    <Transition name="cyber-toast">
      <div v-if="toastActive" class="cyber-toast" :class="toastType">
        <div class="cyber-toast-content animate-shake">
          <svg class="cyber-toast-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <span class="cyber-toast-text">{{ toastMessage }}</span>
        </div>
        <div class="cyber-toast-bar"></div>
      </div>
    </Transition>

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
