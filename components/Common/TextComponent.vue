<script setup lang="ts">
  defineProps({
    text: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      default: 'base', // Options: 'sm', 'base', 'lg', 'xl', '2xl'
      required: false,
    },
    color: {
      type: String,
      default: 'black', // Options: 'black', 'gray', 'red', 'blue', etc.
      required: false,
    },
    weight: {
      type: String,
      default: 'normal', // Options: 'light', 'normal', 'bold'
      required: false,
    },
    align: {
      type: String,
      default: 'left', // Options: 'left', 'center', 'right'
      required: false,
    },
    font: {
      type: String,
      default: 'montserrat', // Options: 'montserrat', 'poppins', etc.
      required: false,
    },
    level: {
      type: String,
      default: 'p', // Options: 'h1', 'h2', 'h3', 'p'
      required: false,
    },
  });

  const getFontClass = (level: string) => {
    switch (level) {
      case 'h1':
        return '!text-4xl font-bold font-roboto';
      case 'h2':
        return '!text-3xl font-semibold font-montserrat';
      case 'h3':
        return '!text-2xl font-medium font-montserrat';
      case 'h4':
        return '!text-xl font-medium font-montserrat';
      case 'p':
      default:
        return 'font-poppins';
    }
  };
</script>

<template>
  <component
    :is="level"
    :class="[
      `text-${size} text-${color}-800 font-${font}`,
      weight === 'bold'
        ? 'font-bold'
        : weight === 'light'
          ? 'font-light'
          : 'font-normal',
      align === 'center'
        ? 'text-center'
        : align === 'right'
          ? 'text-right'
          : 'text-left',
      getFontClass(level),
    ]"
  >
    <slot>
      {{ text }}
    </slot>
  </component>
</template>
