<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6">
    <div
      class="container mx-auto flex items-center justify-between rounded-full border border-white/20 bg-black/60 px-6 py-3 shadow-xl backdrop-blur-lg"
    >
      <!-- Logo -->
      <div class="flex-shrink-0">
        <img src="/img/logo.png" alt="Ohana - Dulces Momentos" class="h-12 w-auto" />
      </div>

      <!-- Navigation -->
      <nav class="flex justify-center flex-grow">
        <ul class="flex items-center gap-x-10">
          <li>
            <a
              href="#"
              class="text-white font-medium text-lg hover:text-amber-300 transition-colors duration-200"
              >Inicio</a
            >
          </li>
          <li>
            <a
              href="#menu"
              class="text-white font-medium text-lg hover:text-amber-300 transition-colors duration-200"
              >Nuestro Menú</a
            >
          </li>
          <li>
            <a
              href="#"
              class="text-white font-medium text-lg hover:text-amber-300 transition-colors duration-200"
              >Experiencia</a
            >
          </li>
          <li>
            <NuxtLink
              to="/menu"
              class="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold px-4 py-2 rounded-full text-sm hover:scale-105 transition-transform duration-200 shadow-lg"
            >
              Ver Menú
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Spacer to balance the logo -->
      <div class="w-12 flex-shrink-0"></div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
