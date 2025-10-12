<template>
  <div id="menu" class="py-24 bg-black">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white">Nuestro Menú</h2>
        <p class="text-lg text-gray-300">Explora nuestras delicias</p>
      </div>

      <!-- Category Filters -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          @click="selectCategory('all')"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition',
            selectedCategory === 'all'
              ? 'bg-brand-gold text-black'
              : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
          ]"
        >
          Todos
        </button>
        <button
          v-for="category in categories"
          :key="category"
          @click="selectCategory(category)"
          :class="[
            'px-6 py-2 rounded-full font-semibold transition',
            selectedCategory === category
              ? 'bg-brand-gold text-black'
              : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Menu Items -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      >
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="transform transition-all duration-300 hover:-translate-y-2"
        >
          <CardComponent
            class="bg-gray-900 border border-gray-800 h-full flex flex-col hover:border-brand-gold/50 transition-colors duration-300 rounded-lg"
          >
            <div class="p-6 flex-grow">
              <h3 class="text-xl font-bold text-brand-gold mb-2">{{ item.title }}</h3>
              <p class="text-gray-300 mb-4">{{ item.description }}</p>
            </div>
            <div class="p-6 border-t border-gray-800 mt-auto">
              <div
                v-for="variant in item.variants"
                :key="variant.id"
                class="flex justify-between items-center text-gray-300"
              >
                <span>{{ variant.title }}</span>
                <span class="font-bold text-white">${{ variant.price }}</span>
              </div>
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import menuData from '~/data/menu.json'
import CardComponent from '~/components/Common/CardComponent.vue'

const menuItems = ref(menuData.items)

const categories = computed(() => {
  const allCategories = menuItems.value.map(item => item.title)
  return [...new Set(allCategories)]
})

const selectedCategory = ref('all')

const selectCategory = (category: string) => {
  selectedCategory.value = category
}

const filteredItems = computed(() => {
  if (selectedCategory.value === 'all') {
    return menuItems.value
  }
  return menuItems.value.filter(item => item.title === selectedCategory.value)
})
</script>
