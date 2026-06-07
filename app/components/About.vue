<template>
  <section id="about" class="about-section">
    
    <div class="about-container">
      
      <!-- Section Header -->
      <div class="about-header">
        <h2 class="about-title">
          Profile & Attributes
        </h2>
        <p class="about-subtitle">
          A bento-grid overview of my technical stack, milestones, and development values.
        </p>
      </div>

      <!-- Bento Grid Container -->
      <div class="bento-grid">
        
        <!-- Card 1: Player Profile (Bio) - Spans 2 columns -->
        <div class="profile-card">
          <div>
            <h3 class="profile-title">
              Player Profile
            </h3>
            <p class="profile-bio">
              I am a web developer focused on building modern full-stack web applications. What started as an academic milestone has evolved into a dedicated career path where I design and implement responsive user interfaces alongside robust database systems and secure backends.
            </p>
            <p class="profile-bio-extra">
              I treat web engineering like system design in a game: balancing optimal API performance, secure query processing, and fluid responsive styling to create a seamless user experience.
            </p>

            <!-- Core Engineering Areas -->
            <div class="core-areas-grid">
              
              <!-- Area 1: Backend Engineering -->
              <div class="core-area-item">
                <div class="core-area-icon-wrapper">
                  <!-- Server/API SVG icon -->
                  <svg class="core-area-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <div>
                  <h4 class="core-area-title">Backend Engineering</h4>
                  <p class="core-area-desc">
                    Designing scalable REST APIs, secure routing, and database pooling configurations using FastAPI and Python.
                  </p>
                </div>
              </div>

              <!-- Area 2: Database Architecture -->
              <div class="core-area-item">
                <div class="core-area-icon-wrapper">
                  <!-- Database Stack SVG icon -->
                  <svg class="core-area-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                </div>
                <div>
                  <h4 class="core-area-title">Database Architecture</h4>
                  <p class="core-area-desc">
                    Structuring relational schemas, writing optimized SQL queries, and managing migrations in PostgreSQL and MySQL.
                  </p>
                </div>
              </div>

              <!-- Area 3: Frontend Development -->
              <div class="core-area-item">
                <div class="core-area-icon-wrapper">
                  <!-- Code brackets SVG icon -->
                  <svg class="core-area-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <div>
                  <h4 class="core-area-title">Frontend Development</h4>
                  <p class="core-area-desc">
                    Building component-driven layouts, reactive states, and responsive interface styling using Vue.js and Nuxt.
                  </p>
                </div>
              </div>

              <!-- Area 4: Deployment & CI/CD -->
              <div class="core-area-item">
                <div class="core-area-icon-wrapper">
                  <!-- Cloud Upload SVG icon -->
                  <svg class="core-area-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <div>
                  <h4 class="core-area-title">Deployment & CI/CD</h4>
                  <p class="core-area-desc">
                    Configuring automated Git-flow integrations, serverless distribution, and hosting setups on Vercel and Render.
                  </p>
                </div>
              </div>

            </div>
          </div>
          
          <!-- Gamer HUD / Stats Panel -->
          <div class="hud-panel">
            <div>
              <span class="hud-label">Class</span>
              <span class="hud-val">Full-Stack Dev</span>
            </div>
            <div>
              <span class="hud-label">Specialty</span>
              <span class="hud-val">Nuxt 3 & APIs</span>
            </div>
            <div>
              <span class="hud-label">Database</span>
              <span class="hud-val">PostgreSQL / SQL</span>
            </div>
          </div>
        </div>

        <!-- Card 2: Skill Tree (Timeline) - Spans 1 column -->
        <div class="skill-tree-card">
          <h3 class="skill-tree-title">
            Skill Tree Path
          </h3>
          
          <div class="timeline-wrapper">
            
            <!-- Checkpoint 1 -->
            <div class="timeline-node group/node">
              <div class="node-dot-inactive group-hover/node:scale-125"></div>
              <time class="node-label-inactive">Checkpoint 01</time>
              <h4 class="node-title">Academic Foundation</h4>
              <p class="node-desc">
                Learned structured database systems (SQL, PostgreSQL) and core programming methodologies to fulfill academic guidelines.
              </p>
            </div>

            <!-- Checkpoint 2 -->
            <div class="timeline-node group/node">
              <div class="node-dot-inactive group-hover/node:scale-125"></div>
              <time class="node-label-inactive">Checkpoint 02</time>
              <h4 class="node-title">Full-Stack Expansion</h4>
              <p class="node-desc">
                Built backend services using FastAPI and configured modern frontend reactive templates with Vue and Nuxt.
              </p>
            </div>

            <!-- Checkpoint 3 -->
            <div class="timeline-node">
              <div class="node-dot-active"></div>
              <time class="node-label-active">Current Node</time>
              <h4 class="node-title-active">Serverless Deployment</h4>
              <p class="node-desc">
                Deploying production-grade frontends on Vercel, databases on Neon, and backends on Render using Git flow.
              </p>
            </div>

          </div>
        </div>

        <!-- Card 3: Frontend Inventory - Spans 1 column -->
        <div class="inventory-card">
          <div>
            <h3 class="inventory-title">
              Frontend Inventory
            </h3>
            <p class="inventory-desc">
              Client languages and reactive layout engines.
            </p>
          </div>
          <div class="inventory-badges">
            <span class="badge">HTML / CSS</span>
            <span class="badge">JavaScript</span>
            <span class="badge">TypeScript</span>
            <span class="badge">Vue.js</span>
            <span class="badge-highlight">Nuxt 3</span>
            <span class="badge-highlight">Tailwind CSS</span>
            <span class="badge-highlight">React Native</span>
          </div>
        </div>

        <!-- Card 4: Backend & DB Inventory - Spans 1 column -->
        <div class="inventory-card">
          <div>
            <h3 class="inventory-title">
              Backend & Database
            </h3>
            <p class="inventory-desc">
              API development frameworks and relational query stores.
            </p>
          </div>
          <div class="inventory-badges">
            <span class="badge">FastAPI</span>
            <span class="badge">Laravel</span>
            <span class="badge">PostgreSQL</span>
            <span class="badge">MySQL</span>
            <span class="badge">SQLite</span>
          </div>
        </div>

        <!-- Card 5: Tools & Platforms - Spans 1 column -->
        <div class="inventory-card">
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
          </div>
        </div>

        <!-- Card 6: Active Quests - Spans 3 columns -->
        <div class="quests-card">
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
