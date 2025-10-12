<script setup lang="ts">
import HeaderComponent from '~/components/layout/HeaderComponent.vue'
import FooterComponent from '~/components/layout/FooterComponent.vue'
import FloatingWhatsapp from '~/components/common/FloatingWhatsapp.vue'
</script>

<template>
  <div class="bg-black font-sans text-gray-200">
    <HeaderComponent />
    <main>
      <slot />
    </main>
    <FooterComponent />
    <FloatingWhatsapp />
  </div>
</template>

