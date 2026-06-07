<template>
  <section class="hero-section">
    
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
        Designing Premium <br class="hidden sm:inline" />
        <span class="hero-title-gradient">
          Web Experiences
        </span>
      </h1>

      <!-- Subheadline -->
      <p class="hero-subtitle">
        Hi, I'm <span class="font-semibold text-zinc-900 dark:text-zinc-100">Joseph Claire L. Paquinol</span> A.K.A. CodeWithDevi, a Full-Stack Web and Game Developer.
      </p>

      <!-- CTA Buttons -->
      <div class="hero-cta-container">
        
        <!-- Primary button -->
        <a 
          href="#projects" 
          class="hero-btn-primary group"
        >
          View My Work
          <!-- Right Arrow SVG -->
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <!-- Secondary button -->
        <a 
          href="#contact" 
          class="hero-btn-secondary"
        >
          Contact Me
        </a>

      </div>

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
