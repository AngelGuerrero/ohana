<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
    <div
      class="container mx-auto flex items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-2 shadow-lg backdrop-blur-md"
    >
      <!-- Logo -->
      <div class="flex-shrink-0">
        <img src="/img/logo.png" alt="Ohana Logo" class="h-10 w-auto" />
      </div>

      <!-- Navigation -->
      <nav class="flex justify-center flex-grow">
        <ul class="flex items-center gap-x-8">
          <li>
            <a
              href="#"
              class="text-gray-100 font-medium transition hover:text-brand-gold"
              >Inicio</a
            >
          </li>
          <li>
            <a
              href="#menu"
              class="text-gray-100 font-medium transition hover:text-brand-gold"
              >Menú</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-gray-100 font-medium transition hover:text-brand-gold"
              >Galería</a
            >
          </li>
        </ul>
      </nav>

      <!-- Spacer to balance the logo -->
      <div class="w-10 flex-shrink-0"></div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
