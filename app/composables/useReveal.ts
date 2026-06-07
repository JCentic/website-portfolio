import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer: IntersectionObserver | null = null

  const initReveal = () => {
    // Only run in browser context
    if (import.meta.server) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
          observer?.unobserve(entry.target)
        }
      })
    }, {
      root: null,
      threshold: 0.05,
      rootMargin: '0px 0px -40px 0px' // Trigger slightly before it hits the viewport boundary
    })

    const elements = document.querySelectorAll('.reveal-hidden')
    elements.forEach((el) => observer?.observe(el))
  }

  onMounted(() => {
    initReveal()
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
}
