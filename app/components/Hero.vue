<template>
  <section class="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center overflow-hidden px-4 py-28 text-center">
    
    <!-- Animated background grid -->
    <div class="absolute inset-0 bg-dot-grid animate-grid-pan -z-20"></div>
    
    <!-- Background fade overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-zinc-950 dark:via-transparent dark:to-zinc-950 -z-10 pointer-events-none"></div>
    
    <!-- Glowing glassmorphism orbs (monochromatic grey/silver) -->
    <div class="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      <div class="absolute -top-[20%] left-[10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-zinc-300/10 dark:bg-white/5 blur-[80px] sm:blur-[120px] animate-pulse duration-[8s] ease-in-out infinite"></div>
      <div class="absolute top-[40%] right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-zinc-400/10 dark:bg-zinc-300/5 blur-[70px] sm:blur-[100px] animate-pulse duration-[12s] ease-in-out infinite"></div>
    </div>

    <div class="max-w-4xl mx-auto flex flex-col items-center mb-12">
      
      <!-- Available for Hire Tag -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-md mb-8 hover:scale-[1.02] transition-transform duration-300">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Available for New Opportunities
      </div>

      <!-- Main Headline -->
      <h1 class="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.05] transition-colors duration-300">
        Designing Premium <br class="hidden sm:inline" />
        <span class="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 dark:from-white dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(255,255,255,0.05)]">
          Web Experiences
        </span>
      </h1>

      <!-- Subheadline -->
      <p class="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mt-8 leading-relaxed transition-colors duration-300">
        Hi, I'm <span class="font-semibold text-zinc-900 dark:text-zinc-100">Joseph Claire L. Paquinol</span>, a Web Developer specializing in building high-performance, responsive web applications with Nuxt 4 and Tailwind CSS.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full sm:w-auto">
        
        <!-- Primary button -->
        <a 
          href="#projects" 
          class="relative group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 font-semibold shadow-lg shadow-zinc-500/10 hover:shadow-zinc-500/20 dark:shadow-white/5 dark:hover:shadow-white/10 hover:scale-[1.02] transition-all duration-300 active:scale-98 flex items-center justify-center gap-2"
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
          class="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-black dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-600 transition-all duration-300 active:scale-98 flex items-center justify-center"
        >
          Contact Me
        </a>

      </div>

    </div>

    <!-- SVG Wave Separator -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[1px] select-none pointer-events-none">
      <svg class="relative block w-full h-[40px] sm:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,16.22,83.1,22.81,168.66,42.74,258.31,64.21,321.39,56.44Z" 
              class="fill-zinc-50 dark:fill-zinc-900 transition-colors duration-300"></path>
      </svg>
    </div>

  </section>
</template>
