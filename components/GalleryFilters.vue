<template>
  <div class="flex justify-center gap-4 mb-8 flex-wrap">
    <button
      v-for="cat in categories"
      :key="cat"
      @click="$emit('update:modelValue', cat)"
      class="px-6 py-2 rounded-full transition-all duration-300 font-medium"
      :class="
        cat === modelValue
          ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/50'
          : 'bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/50 hover:text-white border border-neutral-700/50'
      ">
      {{ cat }}
    </button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ categories: string[]; modelValue: string }>()
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>()
</script>
