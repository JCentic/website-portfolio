<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits<{
  (e: 'finished'): void
}>()

interface BootLog {
  text: string
  delay: number
}

const logQueue: readonly BootLog[] = [
  { text: '> CONNECTING TO HOST... OK', delay: 250 },
  { text: '> DECRYPTING JCENTIC DATABASE... OK', delay: 650 },
  { text: '> LOADING AGENTIC HUD PROTOCOLS... OK', delay: 1050 },
  { text: '> INJECTING CREATIVE SYSTEMS... OK', delay: 1450 },
  { text: '> SYSTEM BOOT COMPLETED. SECURE LINK CREATED.', delay: 1750 }
] as const

const progress = ref(0)
const visibleLogs = ref<string[]>([])
const isFinishing = ref(false)
const isUnmounted = ref(false)

const totalDuration = 1800 // Total boot duration in ms
let progressIntervalId: any = null
const logTimeoutIds: any[] = []
let finishTimeoutId: any = null

const getAsciiBar = (): string => {
  const totalBlocks = 20
  const filledBlocks = Math.floor((progress.value / 100) * totalBlocks)
  const emptyBlocks = totalBlocks - filledBlocks
  return `[${'█'.repeat(filledBlocks)}${'░'.repeat(emptyBlocks)}]`
}

onMounted(() => {
  const startTime = Date.now()

  // 1. Increment progress bar smoothly
  progressIntervalId = setInterval(() => {
    const elapsed = Date.now() - startTime
    const percent = Math.min(100, Math.floor((elapsed / totalDuration) * 100))
    progress.value = percent

    if (percent >= 100) {
      if (progressIntervalId) {
        clearInterval(progressIntervalId)
        progressIntervalId = null
      }
      
      // Trigger finishing glitch transition
      isFinishing.value = true
      
      // Delay before completely destroying and emitting finish event
      finishTimeoutId = setTimeout(() => {
        isUnmounted.value = true
        emit('finished')
      }, 350)
    }
  }, 16)

  // 2. Schedule console log telemetry entries
  for (const logItem of logQueue) {
    const timeoutId = setTimeout(() => {
      visibleLogs.value.push(logItem.text)
    }, logItem.delay)
    logTimeoutIds.push(timeoutId)
  }
})

onUnmounted(() => {
  if (progressIntervalId) clearInterval(progressIntervalId)
  for (const id of logTimeoutIds) {
    clearTimeout(id)
  }
  if (finishTimeoutId) clearTimeout(finishTimeoutId)
})
</script>

<template>
  <div 
    v-if="!isUnmounted" 
    class="loading-screen" 
    :class="{ 'glitch-finish': isFinishing, 'fade-out-active': isFinishing }"
  >
    <div class="loading-terminal">
      <!-- Terminal Header bar (MacOS-style dots) -->
      <div class="terminal-header">
        <div class="terminal-dots">
          <span class="terminal-dot dot-red"></span>
          <span class="terminal-dot dot-yellow"></span>
          <span class="terminal-dot dot-green"></span>
        </div>
        <span class="terminal-title">SYSTEM_BOOT_LOG</span>
      </div>
      
      <!-- Terminal Body -->
      <div class="terminal-body">
        <div class="terminal-logs font-mono">
          <div 
            v-for="(log, idx) in visibleLogs" 
            :key="idx" 
            class="terminal-log-line"
          >
            {{ log }}
          </div>
          <!-- Flickering cursor line -->
          <div v-if="progress < 100" class="terminal-cursor-line">
            <span class="terminal-prompt">> </span><span class="terminal-cursor">█</span>
          </div>
        </div>
        
        <!-- Progress section -->
        <div class="loading-progress-container font-mono">
          <div class="progress-info">
            <span class="progress-pct">BOOT_PROGRESS: {{ progress }}%</span>
            <span class="progress-status">STATUS: {{ progress < 100 ? 'LOADING...' : 'ONLINE' }}</span>
          </div>
          <div class="progress-bar-ascii">
            {{ getAsciiBar() }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="../assets/css/components/loading-screen.css"></style>
