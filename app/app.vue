<template>
  <div class="min-h-screen bg-white dark:bg-zinc-950 text-zinc-800 dark:text-zinc-100 transition-colors duration-300">
    <Navbar />
    
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-4 text-center">
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
        Tailwind CSS v4 + Nuxt 4
      </h1>
      <p class="text-zinc-600 dark:text-zinc-450 text-lg max-w-lg">
        Premium development environment configured. The Navbar and Theme toggle are fully functional.
      </p>
      <div class="flex gap-3 mt-4">
        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">Nuxt 4.x</span>
        <span class="px-3 py-1 text-xs font-semibold rounded-full bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20">Tailwind CSS 4.0</span>
      </div>
    </main>
  </div>
</template>

