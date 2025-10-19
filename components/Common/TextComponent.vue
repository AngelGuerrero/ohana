<script setup lang="ts">
const props = defineProps({
  text: {
    type: String,
    required: false,
  },
  size: {
    type: String,
    default: 'base',
    required: false,
  },
  color: {
    type: String,
    default: 'black',
    required: false,
  },
  weight: {
    type: String,
    default: 'normal',
    required: false,
  },
  align: {
    type: String,
    default: 'left',
    required: false,
  },
  font: {
    type: String,
    default: 'montserrat',
    required: false,
  },
  level: {
    type: String,
    default: 'p',
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

const weightClass = computed(() => {
  if (props.weight === 'bold') return 'font-bold';
  if (props.weight === 'light') return 'font-light';
  return 'font-normal';
});

const alignClass = computed(() => {
  if (props.align === 'center') return 'text-center';
  if (props.align === 'right') return 'text-right';
  return 'text-left';
});

const componentClasses = computed(() => [
  `text-${props.size}`,
  `text-${props.color}-800`,
  `font-${props.font}`,
  weightClass.value,
  alignClass.value,
  getFontClass(props.level),
]);
</script>

<template>
  <component
    :is="level"
    :class="componentClasses">
    <slot>
      {{ text }}
    </slot>
  </component>
</template>
