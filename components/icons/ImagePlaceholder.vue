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
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
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



