<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue'

// Form state interfaces
interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

interface TouchedFields {
  name: boolean
  email: boolean
  subject: boolean
  message: boolean
}

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

// Reactive state
const form = reactive<FormFields>({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const touched = reactive<TouchedFields>({
  name: false,
  email: false,
  subject: false,
  message: false
})

const status = ref<SubmissionStatus>('idle')
const errorMessage = ref<string>('')

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Validation computed properties
const errors = computed(() => {
  return {
    name: form.name.trim().length < 2 ? 'Name must be at least 2 characters.' : '',
    email: !emailRegex.test(form.email) ? 'Please enter a valid email address.' : '',
    subject: form.subject.trim().length < 3 ? 'Subject must be at least 3 characters.' : '',
    message: form.message.trim().length < 10 ? 'Message must be at least 10 characters.' : ''
  }
})

// Check if form is completely valid
const isFormValid = computed(() => {
  return !errors.value.name && !errors.value.email && !errors.value.subject && !errors.value.message
})

// Touch helper
const touchField = (field: keyof TouchedFields) => {
  touched[field] = true
}

// Handle form submission
const handleSubmit = async () => {
  // Mark all fields as touched to trigger validation messages
  touched.name = true
  touched.email = true
  touched.subject = true
  touched.message = true

  // Prevent submission if invalid
  if (!isFormValid.value) return

  status.value = 'submitting'
  errorMessage.value = ''

  try {
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: {
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message
      }
    })

    status.value = 'success'
    resetFormValues()
  } catch (err: any) {
    status.value = 'error'
    errorMessage.value = err.data?.message || 'Something went wrong. Please try again.'
  }
}

// Reset values after success or on retry
const resetFormValues = () => {
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
  
  // Reset touched flags
  touched.name = false
  touched.email = false
  touched.subject = false
  touched.message = false
}

const handleRetry = () => {
  status.value = 'idle'
}

// Clock / Timezone availability state
const localTime = ref('')
let timer: any = null

const updateTime = () => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Manila',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }
  localTime.value = new Intl.DateTimeFormat([], options).format(new Date())
}

const isActive = computed(() => {
  try {
    const manilaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Manila' })
    const manilaHour = new Date(manilaTime).getHours()
    // Available between 8:00 AM (8) and 10:00 PM (22)
    return manilaHour >= 18 && manilaHour < 22
  } catch (_) {
    // Fallback if formatting fails: check local system hour
    const hour = new Date().getHours()
    return hour >= 18 && hour < 22
  }
})

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-container">
      
      <!-- Section Header -->
      <div class="contact-header">
        <h2 class="contact-title">
          Get in Touch
        </h2>
        <p class="contact-subtitle">
          Have a quest proposal, a job opening, or want to collaborate? Send a message directly.
        </p>
      </div>

      <!-- Main Contact Grid -->
      <div class="contact-grid">
        
        <!-- Left Panel: Profile Contact Info -->
        <div class="contact-info-panel">
          <div>
            <h3 class="info-title">
              Contact Hub
            </h3>
            <p class="info-desc">
              I am open to new frontend, full-stack, or backend development roles. Let's create something modern, premium, and performant together.
            </p>

            <div class="contact-details-list">
              <!-- Detail: Email -->
              <div class="contact-detail-item">
                <div class="contact-detail-icon-wrapper">
                  <!-- Envelope Icon -->
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span class="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">Email</span>
                  <a href="mailto:jpaquinol44@gmail.com" class="contact-detail-link">jpaquinol44@gmail.com</a>
                </div>
              </div>

              <!-- Detail: Location -->
              <div class="contact-detail-item">
                <div class="contact-detail-icon-wrapper">
                  <!-- Map Pin Icon -->
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span class="block text-[10px] font-bold uppercase tracking-wider text-zinc-400">Location</span>
                  <span class="font-medium text-zinc-800 dark:text-zinc-200">Philippines</span>
                </div>
              </div>
            </div>

            <!-- Socials Grid -->
            <div class="socials-grid">
              <a href="https://github.com/CodeWithDevi0" target="_blank" rel="noopener noreferrer" class="social-card group">
                <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
                GitHub
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="social-card group">
                <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" class="social-card group">
                <svg class="social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/>
                </svg>
                Discord
              </a>
              <a href="mailto:jpaquinol44@gmail.com" class="social-card group">
                <svg class="social-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>

            <!-- Timezone Clock HUD Panel -->
            <div class="status-panel">
              <div class="status-header">
                <div>
                  <span class="clock-title">Manila Local Time</span>
                  <div class="clock-display">{{ localTime || 'Loading...' }}</div>
                </div>
              </div>
              <div class="status-pulse-wrapper">
                <span :class="isActive ? 'pulse-dot-green' : 'pulse-dot-amber'"></span>
                <span class="status-pulse-label">
                  {{ isActive ? 'Active / Available Now' : 'Away / Offline (Rest Mode)' }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Panel: Form Handler -->
        <div class="contact-form-panel">
          
          <!-- Idle / Submitting states -->
          <form v-if="status === 'idle' || status === 'submitting'" @submit.prevent="handleSubmit" novalidate>
            <div class="form-group-grid">
              
              <!-- Input: Name -->
              <div class="form-group">
                <label for="name" class="form-label">Your Name</label>
                <input
                  id="name"
                  type="text"
                  v-model="form.name"
                  @blur="touchField('name')"
                  @input="touched.name && touchField('name')"
                  class="form-input"
                  :class="{ 'form-input-error': touched.name && errors.name }"
                  placeholder="e.g. Jane Doe"
                  :disabled="status === 'submitting'"
                />
                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1"
                >
                  <span v-if="touched.name && errors.name" class="error-text">
                    {{ errors.name }}
                  </span>
                </transition>
              </div>

              <!-- Input: Email -->
              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input
                  id="email"
                  type="email"
                  v-model="form.email"
                  @blur="touchField('email')"
                  @input="touched.email && touchField('email')"
                  class="form-input"
                  :class="{ 'form-input-error': touched.email && errors.email }"
                  placeholder="e.g. jane@example.com"
                  :disabled="status === 'submitting'"
                />
                <transition
                  enter-active-class="transition duration-200 ease-out"
                  enter-from-class="opacity-0 -translate-y-1"
                  enter-to-class="opacity-100 translate-y-0"
                  leave-active-class="transition duration-150 ease-in"
                  leave-from-class="opacity-100 translate-y-0"
                  leave-to-class="opacity-0 -translate-y-1"
                >
                  <span v-if="touched.email && errors.email" class="error-text">
                    {{ errors.email }}
                  </span>
                </transition>
              </div>

            </div>

            <!-- Input: Subject -->
            <div class="form-group mb-6">
              <label for="subject" class="form-label">Subject</label>
              <input
                id="subject"
                type="text"
                v-model="form.subject"
                @blur="touchField('subject')"
                @input="touched.subject && touchField('subject')"
                class="form-input"
                :class="{ 'form-input-error': touched.subject && errors.subject }"
                placeholder="e.g. Project Proposal"
                :disabled="status === 'submitting'"
              />
              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <span v-if="touched.subject && errors.subject" class="error-text">
                  {{ errors.subject }}
                </span>
              </transition>
            </div>

            <!-- Input: Message -->
            <div class="form-group mb-8">
              <label for="message" class="form-label">Message Details</label>
              <textarea
                id="message"
                v-model="form.message"
                @blur="touchField('message')"
                @input="touched.message && touchField('message')"
                class="form-input form-textarea"
                :class="{ 'form-input-error': touched.message && errors.message }"
                placeholder="Describe your project, timeline, or open role..."
                :disabled="status === 'submitting'"
              ></textarea>
              <transition
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="opacity-100 translate-y-0"
                leave-to-class="opacity-0 -translate-y-1"
              >
                <span v-if="touched.message && errors.message" class="error-text">
                  {{ errors.message }}
                </span>
              </transition>
            </div>

            <!-- Submit Button -->
            <button
              id="contact-submit-btn"
              type="submit"
              class="submit-btn"
              :disabled="status === 'submitting' || (Object.values(touched).some(v => v) && !isFormValid)"
            >
              <template v-if="status === 'submitting'">
                <svg class="spinner" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending Message...
              </template>
              <template v-else>
                Send Message
              </template>
            </button>
          </form>

          <!-- Success state view -->
          <div v-else-if="status === 'success'" class="feedback-container">
            <div class="feedback-icon-wrapper-success">
              <svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="feedback-title">Message Delivered!</h3>
            <p class="feedback-desc">
              Thank you for reaching out. Your message has been successfully transmitted, and I'll get back to you within 24 hours.
            </p>
            <button @click="handleRetry" class="feedback-btn" type="button">
              Send Another Message
            </button>
          </div>

          <!-- Error state view -->
          <div v-else-if="status === 'error'" class="feedback-container">
            <div class="feedback-icon-wrapper-error">
              <svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 class="feedback-title">Transmission Failed</h3>
            <p class="feedback-desc">
              {{ errorMessage }}
            </p>
            <button @click="handleRetry" class="feedback-btn" type="button">
              Try Again
            </button>
          </div>

        </div>

      </div>

      <!-- Persistent Footer copyright section -->
      <footer class="footer-wrapper">
        <div>
          &copy; {{ new Date().getFullYear() }} Joseph Claire L. Paquinol. All rights reserved.
        </div>
        <nav class="footer-nav">
          <a href="https://github.com/CodeWithDevi0" target="_blank" rel="noopener noreferrer" class="footer-nav-link">
            GitHub
          </a>
          <a href="mailto:jpaquinol44@gmail.com" class="footer-nav-link">
            Contact
          </a>
        </nav>
      </footer>

    </div>
  </section>
</template>

<style scoped src="../assets/css/components/contact.css"></style>
