<script lang="ts" setup>
import MenuComponent from '~/components/home/MenuComponent.vue'

useHead({
  title: 'Ohana - Postres, Frappés & Café'
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div
      class="flex min-h-dvh flex-col items-center justify-center bg-black text-center"
    >
      <div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <img
          src="/img/logo.png"
          alt="Ohana"
          class="mx-auto mb-8 h-64 w-auto md:h-80"
        />

        <a
          href="#menu"
          class="rounded-lg bg-brand-gold px-10 py-3 font-semibold text-black transition hover:opacity-80"
        >
          Ver Menú
        </a>
      </div>
    </div>

    <!-- Menu Section -->
    <MenuComponent />
  </div>
</template>


