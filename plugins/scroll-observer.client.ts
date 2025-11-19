export default defineNuxtPlugin(() => {
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observar elementos cuando el DOM esté listo
    if (typeof window !== 'undefined') {
      window.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('[data-observe]').forEach((el) => observer.observe(el))
      })
    }
  }
})
