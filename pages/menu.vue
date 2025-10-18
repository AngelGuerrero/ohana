<script setup lang="ts">
  import menuData from '~/data/menu.json';

  const menuItems = menuData.items.filter((item) => item.active);
</script>

<template>
  <div class="min-h-screen bg-neutral-900">
    <div class="container mx-auto px-4 py-12 md:py-16">
      <!-- Hero Section -->
      <div class="text-center mb-16 md:mb-20 py-16 md:py-20">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-amber-400 tracking-tight">
          {{ menuData.label }}
        </h1>
      </div>

      <!-- Menu Items Grid -->
      <div class="grid gap-8 max-w-6xl mx-auto">
        <div v-for="item in menuItems" :key="item.id">
          <!-- Product Card -->
          <div class="bg-neutral-800 rounded-2xl overflow-hidden">
            <!-- Header -->
            <div class="px-6 md:px-8 py-6 bg-amber-400">
              <div class="flex justify-between items-start gap-4">
                <div>
                  <h3 class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                    {{ item.title }}
                  </h3>
                  <p class="text-neutral-800 text-sm md:text-base leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
                <div class="text-right shrink-0">
                  <div class="text-xs text-neutral-900 font-semibold uppercase tracking-wide mb-1">
                    Desde
                  </div>
                  <div class="text-3xl font-bold text-neutral-900">
                    ${{
                      Math.min(
                        ...item.variants
                          .filter((v) => v.active)
                          .map((v) => v.price)
                      )
                    }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Body with Gallery -->
            <div class="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-6 p-6 md:p-8">
              <!-- Image Gallery -->
              <div class="bg-neutral-700/30 rounded-xl overflow-hidden min-h-[250px] flex items-center justify-center">
                <img 
                  v-if="item.id === 'crepas'" 
                  src="/img/crepa_1.jpg" 
                  alt="Crepas" 
                  class="w-full h-full object-cover"
                />
                <img 
                  v-else-if="item.id === 'croissant_relleno'" 
                  src="/img/croassant.jpg" 
                  alt="Croissant Relleno" 
                  class="w-full h-full object-cover"
                />
                <img 
                  v-else-if="item.id === 'frapes'" 
                  src="/img/frappe_mazapan.jpg" 
                  alt="Frapés" 
                  class="w-full h-full object-cover"
                />
                <div v-else class="text-center p-4">
                  <div class="w-24 h-24 mx-auto mb-4 bg-neutral-700/50 rounded-full flex items-center justify-center">
                    <svg class="w-12 h-12 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p class="text-neutral-500 text-sm">Espacio para imágenes</p>
                  <p class="text-neutral-600 text-xs mt-1">Galería del producto</p>
                </div>
              </div>

              <!-- Content -->
              <div class="space-y-5">
                <!-- Flavors -->
                <div v-if="item.flavors && item.flavors.length > 0">
                  <h4 class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
                    Sabores disponibles
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="flavor in item.flavors"
                      :key="flavor"
                      class="px-3 py-2 bg-amber-400/20 text-amber-300 rounded-lg text-sm font-medium">
                      {{ flavor }}
                    </span>
                  </div>
                </div>

                <!-- Fruits -->
                <div v-if="item.fruits && item.fruits.length > 0">
                  <h4 class="text-xs font-bold text-green-400 uppercase tracking-wider mb-3">
                    Frutas disponibles
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="fruit in item.fruits"
                      :key="fruit"
                      class="px-3 py-2 bg-green-400/20 text-green-300 rounded-lg text-sm font-medium">
                      {{ fruit }}
                    </span>
                  </div>
                </div>

                <!-- Variants & Prices -->
                <div>
                  <h4 class="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-3">
                    Opciones y precios
                  </h4>
                  <div class="grid gap-2">
                    <div
                      v-for="variant in item.variants.filter((v) => v.active)"
                      :key="variant.id"
                      class="flex justify-between items-center py-3 px-4 bg-neutral-700/50 rounded-lg">
                      <span class="text-neutral-200 font-medium text-base">{{
                        variant.title
                      }}</span>
                      <span class="text-xl font-bold text-amber-400"
                        >${{ variant.price }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-20 pt-16">
        <div class="mb-6">
          <p class="text-2xl md:text-3xl text-amber-400 font-bold mb-3">
            ¡Una experiencia inolvidable te espera!
          </p>
          <p class="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto">
            Cada visita a Ohana es una oportunidad para crear recuerdos dulces que perduran
          </p>
        </div>
        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-neutral-500 font-medium">
          <span>✨ Elaborado con pasión</span>
          <span>•</span>
          <span>Ingredientes premium</span>
          <span>•</span>
          <span>Servicio excepcional</span>
        </div>
      </div>
    </div>
  </div>
</template>
