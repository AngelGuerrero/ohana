<template>
  <section
    id="galeria"
    class="min-h-screen bg-neutral-950 py-20 md:py-32 px-4 flex items-center relative overflow-hidden">
    <!-- Fondos animados -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl animate-float"></div>
      <div class="absolute top-60 right-20 w-96 h-96 bg-amber-600/60 rounded-full blur-3xl animate-float-delayed"></div>
      <div class="absolute bottom-40 left-1/3 w-80 h-80 bg-amber-400/40 rounded-full blur-3xl animate-float-slow"></div>
    </div>

    <!-- Contenedor principal -->
    <div class="container mx-auto max-w-7xl relative z-10">
      <!-- Encabezado -->
      <div class="text-center mb-12 md:mb-16">
        <span class="text-amber-400/80 text-sm font-bold uppercase tracking-[0.2em] mb-3 block animate-fade-in">
          Nuestra Colección
        </span>
        <h2
          class="text-5xl md:text-7xl font-bold text-white mb-6 font-poppins animate-fade-in-up tracking-tight">
          Galería <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Ohana</span>
        </h2>
        <p class="text-lg text-neutral-400 max-w-2xl mx-auto font-light animate-fade-in-up-delayed">
          Una experiencia visual de nuestros sabores más exquisitos.
        </p>
      </div>

      <!-- Grid Bento / Mosaico (Optimizado sin espacios) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] grid-flow-dense">
        <GalleryItem
          v-for="(product, index) in products"
          :key="product.id"
          :product="product"
          @click="openLightbox(product)"
          :class="[
            getSizeClasses(product.size),
            'animate-scale-in'
          ]"
          :style="{ animationDelay: `${index * 50}ms` }"
        />
      </div>
    </div>

    <!-- Lightbox con Carrusel -->
    <LightboxModal v-if="lightboxProduct" :product="lightboxProduct" @close="lightboxProduct = null" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GalleryItem from './GalleryItem.vue'
import LightboxModal from './LightboxModal.vue'

export interface Product {
  id: number
  title: string
  images: string[]
  description: string
  price: string
  category: string
  size: 'small' | 'medium' | 'large' | 'tall' | 'wide'
}

// Datos corregidos: Un solo Croissant y layout optimizado
const products = ref<Product[]>([
  {
    id: 3,
    title: 'Croissant Relleno',
    images: ['/img/croasaint_1.jpg', '/img/croassant.jpg', '/img/croasaint_2.jpg'],
    description: 'Delicioso croissant relleno de Nutella con fruta a tu elección (fresa, durazno o plátano), bañado en chocolate o lechera.',
    price: '$65',
    category: 'Croissants',
    size: 'large', // 2x2 (Ocupa 4 celdas)
  },
  {
    id: 6,
    title: 'Waffles',
    images: ['/img/waffles.png', '/img/waffles.jpg'],
    description: 'Waffles dorados y crujientes con toppings a tu elección.',
    price: '$75',
    category: 'Waffles',
    size: 'tall', // 1x2 (Vertical)
  },
  {
    id: 1,
    title: 'Crepas Dulces',
    images: ['/img/crepa_platano_nutella.jpg'],
    description: 'Deliciosas crepas con nutella, mermelada, miel o filadelfia.',
    price: '$75',
    category: 'Crepas',
    size: 'medium', // 1x1
  },
  {
    id: 9,
    title: 'Frapé Mazapán',
    images: ['/img/frappe_mazapan.jpg'],
    description: 'Bebida fría cremosa con el toque único del mazapán.',
    price: '$60',
    category: 'Bebidas',
    size: 'medium', // 1x1
  },
  {
    id: 7,
    title: 'Fresas con Crema',
    images: ['/img/fresas_con_crema_1.jpg', '/img/fresas_con_crema.png'],
    description: 'Fresas frescas seleccionadas con nuestra crema especial de la casa.',
    price: '$40',
    category: 'Postres',
    size: 'wide', // 2x1 (Horizontal)
  },
  {
    id: 2,
    title: 'Crepas Saladas',
    images: ['/img/crepa_salada_carnes_frias.jpg'],
    description: 'Crepas con carnes frías y aderezo de habanero.',
    price: '$95',
    category: 'Crepas',
    size: 'medium', // 1x1
  },
  {
    id: 8,
    title: 'Mini Hotcakes',
    images: ['/img/hot_cakes_fresa.jpg'],
    description: 'Hotcakes esponjosos servidos por paquetes, ideales para compartir.',
    price: '$55 - $95',
    category: 'Postres',
    size: 'medium', // 1x1
  },
])

const lightboxProduct = ref<Product | null>(null)

function openLightbox(p: Product) {
  lightboxProduct.value = p
}

function getSizeClasses(size: string) {
  switch (size) {
    case 'large': return 'col-span-1 md:col-span-2 row-span-2' // 2x2
    case 'wide': return 'col-span-1 md:col-span-2 row-span-1'  // 2x1
    case 'tall': return 'col-span-1 row-span-2'                // 1x2
    case 'medium': return 'col-span-1 row-span-1'              // 1x1
    case 'small': return 'col-span-1 row-span-1'               // 1x1
    default: return 'col-span-1 row-span-1'
  }
}
</script>
