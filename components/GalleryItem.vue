<template>
  <div
    ref="cardRef"
    class="group relative overflow-hidden rounded-3xl bg-neutral-900/50 backdrop-blur-sm border border-amber-900/20 hover:border-amber-500/50 transition-all duration-500 cursor-pointer h-full w-full"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="cardStyle">
    
    <!-- Imagen Principal -->
    <div class="relative w-full h-full overflow-hidden">
      <img
        :src="product.images[0]"
        :alt="product.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

      <!-- Overlays -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
      
      <!-- Indicador de Multi-imagen -->
      <div v-if="product.images.length > 1" class="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10 z-20">
        <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span class="text-xs font-medium text-white">+{{ product.images.length - 1 }}</span>
      </div>
    </div>

    <!-- Contenido -->
    <div class="absolute inset-0 flex flex-col justify-end p-6 z-10">
      <div class="transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
        <div class="flex justify-between items-end mb-2">
          <h3 class="text-xl md:text-2xl font-bold text-white font-poppins leading-tight drop-shadow-lg group-hover:text-amber-400 transition-colors">
            {{ product.title }}
          </h3>
          <span class="text-lg font-bold text-amber-400 bg-amber-950/30 px-3 py-1 rounded-lg backdrop-blur-sm border border-amber-500/20">
            {{ product.price }}
          </span>
        </div>
        
        <p class="text-sm text-neutral-300 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {{ product.description }}
        </p>
        
        <!-- Botón Ver Más (aparece en hover) -->
        <div class="mt-4 flex items-center gap-2 text-amber-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 translate-y-4 group-hover:translate-y-0">
          <span>Ver detalles</span>
          <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Product {
  id: number
  title: string
  images: string[]
  description: string
  price: string
  category: string
  size: string
}

const props = defineProps<{ product: Product }>()

// Lógica para el efecto Tilt 3D
const cardRef = ref<HTMLElement | null>(null)
const rotateX = ref(0)
const rotateY = ref(0)

const cardStyle = computed(() => ({
  transform: `perspective(1000px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) scale3d(1, 1, 1)`,
}))

function handleMouseMove(e: MouseEvent) {
  if (!cardRef.value) return

  const rect = cardRef.value.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  // Calcular rotación (máximo 10 grados)
  rotateY.value = ((x - centerX) / centerX) * 5
  rotateX.value = -((y - centerY) / centerY) * 5
}

function handleMouseLeave() {
  rotateX.value = 0
  rotateY.value = 0
}
</script>
