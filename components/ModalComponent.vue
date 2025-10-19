<script setup lang="ts">
defineProps<{
  title: string;
  show: boolean;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const onClose = () => {
  emit('close');
};
</script>

<template>
  <Teleport to="body">
    <div
      v-if="show"
      class="bg-black/50 fixed z-[1000] top-0 bottom-0 left-0 right-0 flex items-center justify-center">
      <div
        class="bg-white rounded-lg w-[90%] max-h-[90vh] shadow-lg flex flex-col">
        <header class="modal__header">
          <h2 class="text-lg font-bold">
            {{ title }}
          </h2>
          <button
            @click="onClose"
            class="flex items-center justify-center text-gray-500 cursor-pointer hover:text-gray-700">
            <Icon name="mdi:close" class="text-2xl" />
          </button>
        </header>

        <main class="p-2 !overflow-hidden flex flex-1">
          <slot />
        </main>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="css">
.modal__header {
  @apply border-b-2 border-gray-100 p-4 flex justify-between items-center;
}
</style>
