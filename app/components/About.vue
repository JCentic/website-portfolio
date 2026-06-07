<template>
  <section id="about" class="relative py-28 bg-zinc-100 dark:bg-zinc-900 transition-colors duration-300">
    
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Section Header -->
      <div class="text-center md:text-left mb-16">
        <h2 class="text-3xl sm:text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-50">
          Profile & Attributes
        </h2>
        <p class="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 mt-2">
          A bento-grid overview of my technical stack, milestones, and development values.
        </p>
      </div>

      <!-- Bento Grid Container -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <!-- Card 1: Player Profile (Bio) - Spans 2 columns -->
        <div class="md:col-span-2 bg-white/70 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-350 dark:hover:border-zinc-700/80 transition-all duration-300 group flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-4 flex items-center gap-2">
              Player Profile
            </h3>
            <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I am a web developer focused on building modern full-stack web applications. What started as an academic milestone has evolved into a dedicated career path where I design and implement responsive user interfaces alongside robust database systems and secure backends.
            </p>
            <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
              I treat web engineering like system design in a game: balancing optimal API performance, secure query processing, and fluid responsive styling to create a seamless user experience.
            </p>

            <!-- Core Engineering Areas -->
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-50/50 dark:bg-zinc-900/20 border border-zinc-200/20 dark:border-zinc-800/20 rounded-2xl p-5">
              
              <!-- Area 1: Backend Engineering -->
              <div class="flex items-start gap-3">
                <div class="p-1.5 bg-zinc-200/60 dark:bg-zinc-800/60 rounded-lg shrink-0 mt-0.5">
                  <!-- Server/API SVG icon -->
                  <svg class="w-4 h-4 text-zinc-800 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">Backend Engineering</h4>
                  <p class="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    Designing scalable REST APIs, secure routing, and database pooling configurations using FastAPI and Python.
                  </p>
                </div>
              </div>

              <!-- Area 2: Database Architecture -->
              <div class="flex items-start gap-3">
                <div class="p-1.5 bg-zinc-200/60 dark:bg-zinc-800/60 rounded-lg shrink-0 mt-0.5">
                  <!-- Database Stack SVG icon -->
                  <svg class="w-4 h-4 text-zinc-800 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">Database Architecture</h4>
                  <p class="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    Structuring relational schemas, writing optimized SQL queries, and managing migrations in PostgreSQL and MySQL.
                  </p>
                </div>
              </div>

              <!-- Area 3: Frontend Development -->
              <div class="flex items-start gap-3">
                <div class="p-1.5 bg-zinc-200/60 dark:bg-zinc-800/60 rounded-lg shrink-0 mt-0.5">
                  <!-- Code brackets SVG icon -->
                  <svg class="w-4 h-4 text-zinc-800 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">Frontend Development</h4>
                  <p class="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    Building component-driven layouts, reactive states, and responsive interface styling using Vue.js and Nuxt.
                  </p>
                </div>
              </div>

              <!-- Area 4: Deployment & CI/CD -->
              <div class="flex items-start gap-3">
                <div class="p-1.5 bg-zinc-200/60 dark:bg-zinc-800/60 rounded-lg shrink-0 mt-0.5">
                  <!-- Cloud Upload SVG icon -->
                  <svg class="w-4 h-4 text-zinc-800 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <h4 class="text-xs font-bold text-zinc-800 dark:text-zinc-200 uppercase tracking-wider">Deployment & CI/CD</h4>
                  <p class="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1 leading-relaxed">
                    Configuring automated Git-flow integrations, serverless distribution, and hosting setups on Vercel and Render.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          <!-- Gamer HUD / Stats Panel -->
          <div class="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-6 mt-8 grid grid-cols-3 gap-4 text-left">
            <div>
              <span class="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550">Class</span>
              <span class="text-sm font-semibold text-zinc-855 dark:text-zinc-200">Full-Stack Dev</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550">Specialty</span>
              <span class="text-sm font-semibold text-zinc-855 dark:text-zinc-200">Nuxt 3 & APIs</span>
            </div>
            <div>
              <span class="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550">Database</span>
              <span class="text-sm font-semibold text-zinc-855 dark:text-zinc-200">PostgreSQL / SQL</span>
            </div>
          </div>
        </div>

        <!-- Card 2: Skill Tree (Timeline) - Spans 1 column -->
        <div class="bg-white/70 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-350 dark:hover:border-zinc-700/80 transition-all duration-300 flex flex-col">
          <h3 class="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">
            Skill Tree Path
          </h3>
          
          <div class="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 flex-1 space-y-8 pb-4">
            
            <!-- Checkpoint 1 -->
            <div class="relative pl-8 group/node">
              <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-zinc-900 dark:border-zinc-105 bg-white dark:bg-zinc-950 group-hover/node:scale-125 transition-transform duration-200"></div>
              <time class="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550">Checkpoint 01</time>
              <h4 class="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-1">Academic Foundation</h4>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                Learned structured database systems (SQL, PostgreSQL) and core programming methodologies to fulfill academic guidelines.
              </p>
            </div>

            <!-- Checkpoint 2 -->
            <div class="relative pl-8 group/node">
              <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-zinc-900 dark:border-zinc-105 bg-white dark:bg-zinc-950 group-hover/node:scale-125 transition-transform duration-200"></div>
              <time class="block text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550">Checkpoint 02</time>
              <h4 class="text-sm font-bold text-zinc-800 dark:text-zinc-200 mt-1">Full-Stack Expansion</h4>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                Built backend services using FastAPI and configured modern frontend reactive templates with Vue and Nuxt.
              </p>
            </div>

            <!-- Checkpoint 3 -->
            <div class="relative pl-8 group/node">
              <div class="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full border-2 border-zinc-900 dark:border-white bg-zinc-900 dark:bg-white animate-pulse"></div>
              <time class="block text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Current Node</time>
              <h4 class="text-sm font-bold text-zinc-900 dark:text-zinc-50 mt-1">Serverless Deployment</h4>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                Deploying production-grade frontends on Vercel, databases on Neon, and backends on Render using Git flow.
              </p>
            </div>

          </div>
        </div>

        <!-- Card 3: Frontend Inventory - Spans 1 column -->
        <div class="bg-white/70 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-355 dark:hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Frontend Inventory
            </h3>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
              Client languages and reactive layout engines.
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">HTML / CSS</span>
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">JavaScript</span>
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">TypeScript</span>
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">Vue.js</span>
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-850 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">Nuxt 3</span>
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-850 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">Tailwind CSS</span>
          </div>
        </div>

        <!-- Card 4: Backend & DB Inventory - Spans 1 column -->
        <div class="bg-white/70 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-355 dark:hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Backend & Database
            </h3>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
              API development frameworks and relational query stores.
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">FastAPI</span>
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">PostgreSQL</span>
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">MySQL</span>
          </div>
        </div>

        <!-- Card 5: Tools & Platforms - Spans 1 column -->
        <div class="bg-white/70 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-355 dark:hover:border-zinc-700/80 transition-all duration-300 flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-4">
              Tools & Platforms
            </h3>
            <p class="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
              Cloud distribution and control pipelines.
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">Git / GitHub</span>
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">Vercel</span>
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">Neon DB</span>
            <span class="px-2.5 py-1 text-xs font-semibold rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200/30 dark:border-zinc-800/30 hover:border-zinc-400 dark:hover:border-zinc-500 hover:shadow-xs transition-all duration-200 select-none cursor-default">Render</span>
          </div>
        </div>

        <!-- Card 6: Active Quests - Spans 3 columns -->
        <div class="md:col-span-3 bg-white/70 dark:bg-zinc-950/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-3xl p-8 hover:border-zinc-355 dark:hover:border-zinc-700/80 transition-all duration-300">
          <h3 class="text-lg font-bold text-zinc-900 dark:text-zinc-50 mb-6">
            Active Quests
          </h3>
          
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <!-- Quest 1 -->
            <div class="flex flex-col justify-between h-full bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/20 dark:border-zinc-800/20 rounded-2xl p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200">
              <div>
                <div class="flex items-center gap-2">
                  <div class="p-1.5 bg-zinc-200/60 dark:bg-zinc-800/60 rounded-lg">
                    <!-- Mobile Device SVG icon for CyberMorph Mobile Simulation -->
                    <svg class="w-4 h-4 text-zinc-800 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">Main Quest</h4>
                </div>
                <h5 class="text-xs font-extrabold text-zinc-800 dark:text-zinc-200 mt-3">CyberMorph (Capstone)</h5>
                <p class="text-[11px] text-zinc-505 dark:text-zinc-400 mt-2 leading-relaxed">
                  Build an AI-based cybersecurity mobile simulation game with cloud integration using Vue.js, FastAPI, SQLAlchemy, PostgreSQL, and Godot.
                </p>
              </div>
              <div class="mt-4 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-pulse"></span>
                <span class="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-450">Active</span>
              </div>
            </div>

            <!-- Quest 2 -->
            <div class="flex flex-col justify-between h-full bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/20 dark:border-zinc-800/20 rounded-2xl p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200">
              <div>
                <div class="flex items-center gap-2">
                  <div class="p-1.5 bg-zinc-200/60 dark:bg-zinc-800/60 rounded-lg">
                    <!-- Database SVG icon -->
                    <svg class="w-4 h-4 text-zinc-800 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550">Side Quest</h4>
                </div>
                <h5 class="text-xs font-extrabold text-zinc-800 dark:text-zinc-200 mt-3">ORMs & Databases</h5>
                <p class="text-[11px] text-zinc-505 dark:text-zinc-400 mt-2 leading-relaxed">
                  Integrate SQL data structures using SQLAlchemy (Python) and Sequelize (Node.js).
                </p>
              </div>
              <div class="mt-4 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-pulse"></span>
                <span class="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-450">Active</span>
              </div>
            </div>

            <!-- Quest 3 -->
            <div class="flex flex-col justify-between h-full bg-zinc-50/50 dark:bg-zinc-900/30 border border-zinc-200/20 dark:border-zinc-800/20 rounded-2xl p-5 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-200">
              <div>
                <div class="flex items-center gap-2">
                  <div class="p-1.5 bg-zinc-200/60 dark:bg-zinc-800/60 rounded-lg">
                    <!-- Code Bracket SVG icon -->
                    <svg class="w-4 h-4 text-zinc-800 dark:text-zinc-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 class="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-550">Side Quest</h4>
                </div>
                <h5 class="text-xs font-extrabold text-zinc-800 dark:text-zinc-200 mt-3">Design Patterns</h5>
                <p class="text-[11px] text-zinc-505 dark:text-zinc-400 mt-2 leading-relaxed">
                  Implement patterns like MVC, Singleton, and Factory across frontend/backend stacks.
                </p>
              </div>
              <div class="mt-4 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 animate-pulse"></span>
                <span class="text-[10px] font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-450">Active</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>

    <!-- SVG Wave Separator at the Bottom -->
    <div class="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-px select-none pointer-events-none">
      <svg class="relative block w-full h-[40px] sm:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,8.75,55.05,16.22,83.1,22.81,168.66,42.74,258.31,64.21,321.39,56.44Z" 
              class="fill-white dark:fill-zinc-950 transition-colors duration-300"></path>
      </svg>
    </div>

  </section>
</template>
