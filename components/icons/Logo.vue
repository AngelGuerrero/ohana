<template>
  <img
    :src="src"
    :alt="alt"
    :class="computedClass"
    :style="computedStyle" />
</template>

<script setup lang="ts">
const props = defineProps({
  src: {
    type: String,
    default: '/img/logo.svg'
  },
  alt: {
    type: String,
    default: 'Ohana'
  },
  height: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  }
})

const computedClass = computed(() => props.class)
const computedStyle = computed(() => {
  const style: Record<string, string> = {}
  if (props.height) style.height = props.height
  if (props.width) style.width = props.width
  return style
})
</script>

