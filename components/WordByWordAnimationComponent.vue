<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  delay: {
    type: Number,
    default: 0,
  },
  wordDelay: {
    type: Number,
    default: 100,
  },
  baseClasses: {
    type: String,
    default: 'text-base md:text-lg text-slate-400 font-light leading-relaxed',
  },
});

const words = computed(() => props.text.split(' '));
</script>

<template>
  <p :class="baseClasses">
    <span
      v-for="(word, index) in words"
      :key="index"
      class="inline-block animate-word-fade-up"
      :style="{
        animationDelay: `${delay + index * wordDelay}ms`,
      }">
      {{ word }}&nbsp;
    </span>
  </p>
</template>

