<template>
  <svg
    :class="computedClass"
    :width="size"
    :height="size"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      :stroke-width="strokeWidth"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  size: {
    type: [String, Number],
    default: 24
  },
  strokeWidth: {
    type: [String, Number],
    default: 2
  },
  class: {
    type: String,
    default: ''
  }
})

const computedClass = computed(() => props.class)
</script>



