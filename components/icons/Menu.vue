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
      d="M4 6h16M4 12h16M4 18h16" />
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

