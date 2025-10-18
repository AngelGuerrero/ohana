<script setup lang="ts">
  import { ref, computed } from 'vue';
  import menuData from '~/data/menu.json';

  const menuItems = ref(menuData.items);

  const categories = computed(() => {
    const allCategories = menuItems.value.map((item) => item.title);
    return [...new Set(allCategories)];
  });

  const selectedCategory = ref('all');

  const selectCategory = (category: string) => {
    selectedCategory.value = category;
  };

  const filteredItems = computed(() => {
    if (selectedCategory.value === 'all') {
      return menuItems.value;
    }
    return menuItems.value.filter(
      (item) => item.title === selectedCategory.value
    );
  });
</script>

<template>
  <div
    id="menu"
    class="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800 bg-floating-particles relative overflow-hidden"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Title -->
      <div class="text-center mb-16">
        <h2
          class="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-brand-gold to-yellow-400 bg-clip-text text-transparent"
        >
          Nuestro Menú
        </h2>
        <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
          Cada creación está elaborada con pasión y los mejores ingredientes para ofrecerte momentos inolvidables de placer dulce
        </p>
        <p class="text-lg text-amber-200 max-w-xl mx-auto">
          Desde nuestras crepas artesanales hasta nuestros frappés refrescantes
        </p>

        <!-- Menu Digital Button -->
        <NuxtLink
          to="/menu"
          class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-gold to-yellow-500 text-black font-bold text-lg rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg shadow-brand-gold/30 hover:shadow-brand-gold/50"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
          </svg>
          Descubre Nuestro Menú Completo
        </NuxtLink>
      </div>

      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-3 mb-16">
        <button
          @click="selectCategory('all')"
          :class="[
            'px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105',
            selectedCategory === 'all'
              ? 'bg-gradient-to-r from-brand-gold to-yellow-500 text-black shadow-lg shadow-brand-gold/30'
              : 'bg-gray-800/80 backdrop-blur-sm text-gray-200 hover:bg-gray-700/80 border border-gray-600 hover:border-brand-gold/50',
          ]"
        >
          Todos
        </button>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectCategory(category)"
          :class="[
            'px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105',
            selectedCategory === category
              ? 'bg-gradient-to-r from-brand-gold to-yellow-500 text-black shadow-lg shadow-brand-gold/30'
              : 'bg-gray-800/80 backdrop-blur-sm text-gray-200 hover:bg-gray-700/80 border border-gray-600 hover:border-brand-gold/50',
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Menu Items -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="group transform transition-all duration-500 hover:-translate-y-4 hover:rotate-1"
        >
          <CommonCard
            class="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-gray-700 h-full flex flex-col hover:border-brand-gold/60 hover:shadow-2xl hover:shadow-brand-gold/20 transition-all duration-500 rounded-2xl overflow-hidden"
          >
            <!-- Card Header with gradient overlay -->
            <div
              class="relative p-6 bg-gradient-to-br from-gray-800/50 to-transparent"
            >
              <div
                class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-gold/10 to-transparent rounded-full -translate-y-10 translate-x-10"
              ></div>
              <h3 class="text-2xl font-bold text-brand-gold mb-3 relative z-10">
                {{ item.title }}
              </h3>
              <p
                class="text-gray-300 mb-4 text-sm leading-relaxed relative z-10"
              >
                {{ item.description }}
              </p>

              <!-- Flavors Section -->
              <div class="mb-4 relative z-10">
                <h4
                  class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3"
                >
                  Sabores Disponibles
                </h4>
                <div class="space-y-2">
                  <div
                    v-for="flavor in item.flavors"
                    :key="flavor"
                    class="flex items-center gap-2"
                  >
                    <div
                      class="w-1.5 h-1.5 bg-brand-gold rounded-full flex-shrink-0"
                    ></div>
                    <span class="text-sm text-gray-300 leading-relaxed">
                      {{ flavor }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Fruits Section (if available) -->
              <div
                v-if="item.fruits && item.fruits.length > 0"
                class="mb-4 relative z-10"
              >
                <h4
                  class="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3"
                >
                  Frutas Disponibles
                </h4>
                <div class="space-y-2">
                  <div
                    v-for="fruit in item.fruits"
                    :key="fruit"
                    class="flex items-center gap-2"
                  >
                    <div
                      class="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"
                    ></div>
                    <span class="text-sm text-gray-300 leading-relaxed">
                      {{ fruit }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Variants Section -->
            <div
              class="p-6 border-t border-gray-700/50 mt-auto bg-gradient-to-r from-gray-800/30 to-gray-900/30"
            >
              <div
                v-for="variant in item.variants"
                :key="variant.id"
                class="flex justify-between items-center text-gray-300 mb-2 last:mb-0"
              >
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 bg-brand-gold rounded-full"></div>
                  <span class="font-medium">{{ variant.title }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-lg font-bold text-white"
                    >${{ variant.price }}</span
                  >
                  <div
                    class="w-1 h-4 bg-gradient-to-b from-brand-gold to-yellow-500 rounded-full opacity-60"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Hover Effect Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-brand-gold/5 via-transparent to-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            ></div>
          </CommonCard>
        </div>
      </div>
    </div>
  </div>
</template>
