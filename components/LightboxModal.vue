<template>
  <div
    class="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-fade-in"
    @click.self="close">
    <div
      class="relative max-w-5xl w-full bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[85vh] md:h-[600px] animate-scale-in">
      
      <!-- Botón cerrar -->
      <button
        @click="close"
        class="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-500 text-white flex items-center justify-center transition-all duration-300 hover:rotate-90">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Sección de Imagen (Carrusel) -->
      <div class="relative w-full md:w-3/5 h-1/2 md:h-full bg-black group">
        <transition name="fade" mode="out-in">
          <img
            :key="currentImageIndex"
            :src="product.images[currentImageIndex]"
            :alt="product.title"
            class="w-full h-full object-cover" />
        </transition>

        <!-- Controles de Navegación -->
        <div v-if="product.images.length > 1" class="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            @click.stop="prevImage"
            class="w-10 h-10 rounded-full bg-black/50 hover:bg-amber-500 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click.stop="nextImage"
            class="w-10 h-10 rounded-full bg-black/50 hover:bg-amber-500 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-sm">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Indicadores (Dots) -->
        <div v-if="product.images.length > 1" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <button
            v-for="(_, index) in product.images"
            :key="index"
            @click.stop="currentImageIndex = index"
            class="w-2 h-2 rounded-full transition-all duration-300"
            :class="currentImageIndex === index ? 'bg-amber-500 w-6' : 'bg-white/50 hover:bg-white'">
          </button>
        </div>
      </div>

      <!-- Sección de Información -->
      <div class="w-full md:w-2/5 h-1/2 md:h-full p-8 bg-gradient-to-br from-neutral-900 to-neutral-950 flex flex-col justify-center relative overflow-y-auto">
        <div class="space-y-6">
          <div>
            <span class="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-500/20">
              {{ product.category }}
            </span>
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-2 font-poppins leading-tight">
              {{ product.title }}
            </h2>
            <div class="w-20 h-1 bg-amber-500 rounded-full"></div>
          </div>

          <p class="text-lg text-neutral-300 leading-relaxed font-light">
            {{ product.description }}
          </p>

          <div class="pt-6 border-t border-neutral-800 flex items-center justify-between">
            <div>
              <p class="text-sm text-neutral-500 uppercase tracking-wider">Precio</p>
              <p class="text-3xl font-bold text-amber-400">{{ product.price }}</p>
            </div>
            <button class="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-xl transition-colors shadow-lg shadow-amber-500/20 flex items-center gap-2">
              <span>Ordenar</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

interface Product {
  id: number
  title: string
  images: string[]
  description: string
  price: string
  category: string
}

const props = defineProps<{ product: Product }>()
const emit = defineEmits<{ (e: 'close'): void }>()

const currentImageIndex = ref(0)

// Reset index when product changes
watch(() => props.product, () => {
  currentImageIndex.value = 0
})

function close() {
  emit('close')
}

function nextImage() {
  if (currentImageIndex.value < props.product.images.length - 1) {
    currentImageIndex.value++
  } else {
    currentImageIndex.value = 0 // Loop back to start
  }
}

function prevImage() {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  } else {
    currentImageIndex.value = props.product.images.length - 1 // Loop to end
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.animate-scale-in {
  animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
