<script setup lang="ts">
import menuData from '~/data/menu.json';

const menuItems = menuData.items.filter(item => item.active);
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden bg-floating-particles">
    <!-- Animated background elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-400/10 to-amber-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div class="relative z-10 container mx-auto px-4 py-12">
      <!-- Header -->
      <div class="text-center mb-20">
        <h1 class="text-7xl font-bold text-white mb-6 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent leading-tight">
          {{ menuData.label }}
        </h1>
        <p class="text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-4">
          Cada creación está elaborada con pasión y los mejores ingredientes para ofrecerte momentos inolvidables de placer dulce
        </p>
        <p class="text-lg text-amber-200 max-w-2xl mx-auto">
          Desde nuestras crepas artesanales hasta nuestros frappés refrescantes, cada producto cuenta una historia de tradición y calidad
        </p>
      </div>

      <!-- Menu Items Grid -->
      <div class="grid gap-8 max-w-4xl mx-auto">
        <div
          v-for="item in menuItems"
          :key="item.id"
          class="group"
        >
          <!-- Product Card -->
          <div class="glass-morphism rounded-2xl p-8">
            <div class="flex justify-between items-start mb-4">
              <div class="!flex flex-col">
                <h3 class="text-2xl font-bold text-white mb-2">
                  {{ item.title }}
                </h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                  {{ item.description }}
                </p>
              </div>
              <div class="text-right">
                <div class="text-xs text-amber-400 font-medium uppercase tracking-wider mb-1">
                  Desde
                </div>
                <div class="text-2xl font-bold text-amber-400">
                  ${{ Math.min(...item.variants.filter(v => v.active).map(v => v.price)) }}
                </div>
              </div>
            </div>

            <!-- Flavors -->
            <div v-if="item.flavors && item.flavors.length > 0" class="mb-4">
              <div class="text-xs text-amber-300 uppercase tracking-wider mb-2 font-medium">
                Sabores disponibles
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="flavor in item.flavors"
                  :key="flavor"
                  class="px-3 py-1 bg-amber-400/10 text-amber-200 rounded-full text-sm border border-amber-400/20 backdrop-blur-sm"
                >
                  {{ flavor }}
                </span>
              </div>
            </div>

            <!-- Fruits -->
            <div v-if="item.fruits && item.fruits.length > 0" class="mb-4">
              <div class="text-xs text-green-300 uppercase tracking-wider mb-2 font-medium">
                Frutas disponibles
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="fruit in item.fruits"
                  :key="fruit"
                  class="px-3 py-1 bg-green-400/10 text-green-200 rounded-full text-sm border border-green-400/20 backdrop-blur-sm"
                >
                  {{ fruit }}
                </span>
              </div>
            </div>

            <!-- Variants & Prices -->
            <div class="space-y-2">
              <div class="text-xs text-amber-300 uppercase tracking-wider font-medium">
                Opciones y precios
              </div>
              <div class="grid gap-2">
                <div
                  v-for="variant in item.variants.filter(v => v.active)"
                  :key="variant.id"
                  class="flex justify-between items-center py-2 px-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                >
                  <span class="text-gray-300 font-medium">{{ variant.title }}</span>
                  <span class="text-lg font-bold text-amber-400">${{ variant.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="text-center mt-20 pt-12 border-t border-white/20">
        <div class="mb-6">
          <p class="text-2xl text-amber-200 font-semibold mb-2">
            ¡Una experiencia inolvidable te espera!
          </p>
          <p class="text-lg text-gray-300 max-w-2xl mx-auto">
            Cada visita a Ohana es una oportunidad para crear recuerdos dulces que perduran
          </p>
        </div>
        <div class="flex justify-center items-center gap-4 text-sm text-gray-400">
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
