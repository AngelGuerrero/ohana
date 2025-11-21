<template>
  <svg
    :class="computedClass"
    class="absolute inset-0 w-full h-full"
    xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient
        id="vert-gradient-1"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%">
        <stop
          offset="0%"
          style="stop-color: rgba(251, 191, 36, 0); stop-opacity: 1" />
        <stop
          offset="30%"
          style="stop-color: rgba(251, 191, 36, 0.15); stop-opacity: 1" />
        <stop
          offset="50%"
          style="stop-color: rgba(251, 191, 36, 0.25); stop-opacity: 1" />
        <stop
          offset="70%"
          style="stop-color: rgba(251, 191, 36, 0.15); stop-opacity: 1" />
        <stop
          offset="100%"
          style="stop-color: rgba(251, 191, 36, 0); stop-opacity: 1" />
      </linearGradient>
      <linearGradient
        id="vert-gradient-2"
        x1="0%"
        y1="0%"
        x2="0%"
        y2="100%">
        <stop
          offset="0%"
          style="stop-color: rgba(148, 163, 184, 0); stop-opacity: 1" />
        <stop
          offset="30%"
          style="stop-color: rgba(148, 163, 184, 0.1); stop-opacity: 1" />
        <stop
          offset="50%"
          style="stop-color: rgba(148, 163, 184, 0.2); stop-opacity: 1" />
        <stop
          offset="70%"
          style="stop-color: rgba(148, 163, 184, 0.1); stop-opacity: 1" />
        <stop
          offset="100%"
          style="stop-color: rgba(148, 163, 184, 0); stop-opacity: 1" />
      </linearGradient>
    </defs>

    <line
      x1="10%"
      y1="0"
      x2="10%"
      y2="100%"
      stroke="url(#vert-gradient-2)"
      stroke-width="1"
      class="animate-vertical-line"
      style="animation-delay: 0s" />
    <line
      x1="22%"
      y1="0"
      x2="22%"
      y2="100%"
      stroke="url(#vert-gradient-1)"
      stroke-width="1.5"
      class="animate-vertical-line"
      style="animation-delay: 0.3s" />
    <line
      x1="35%"
      y1="0"
      x2="35%"
      y2="100%"
      stroke="url(#vert-gradient-2)"
      stroke-width="1"
      class="animate-vertical-line"
      style="animation-delay: 0.6s" />
    <line
      x1="50%"
      y1="0"
      x2="50%"
      y2="100%"
      stroke="url(#vert-gradient-1)"
      stroke-width="2"
      class="animate-vertical-line"
      style="animation-delay: 0.9s" />
    <line
      x1="65%"
      y1="0"
      x2="65%"
      y2="100%"
      stroke="url(#vert-gradient-2)"
      stroke-width="1"
      class="animate-vertical-line"
      style="animation-delay: 1.2s" />
    <line
      x1="78%"
      y1="0"
      x2="78%"
      y2="100%"
      stroke="url(#vert-gradient-1)"
      stroke-width="1.5"
      class="animate-vertical-line"
      style="animation-delay: 1.5s" />
    <line
      x1="90%"
      y1="0"
      x2="90%"
      y2="100%"
      stroke="url(#vert-gradient-2)"
      stroke-width="1"
      class="animate-vertical-line"
      style="animation-delay: 1.8s" />
  </svg>
</template>

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const computedClass = computed(() => props.class)
</script>



