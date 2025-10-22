<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
    <div
      class="container mx-auto flex items-center justify-between rounded-full border border-white/20 bg-black/60 px-4 md:px-6 py-3 shadow-xl backdrop-blur-lg">
      <!-- Logo -->
      <NuxtLink to="/" class="flex-shrink-0">
        <img
          src="/img/logo.png"
          alt="Ohana - Dulces Momentos"
          class="h-10 md:h-12 w-auto cursor-pointer hover:opacity-90 transition-opacity" />
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex justify-center flex-grow">
        <ul class="flex items-center gap-x-10">
          <li>
            <NuxtLink
              to="/"
              class="text-white font-medium text-lg hover:text-amber-300 transition-colors duration-200"
              >Inicio</NuxtLink
            >
          </li>
          <li>
            <a
              href="/#nosotros"
              class="text-white font-medium text-lg hover:text-amber-300 transition-colors duration-200"
              >Nosotros</a
            >
          </li>
          <li>
            <a
              href="/#galeria"
              class="text-white font-medium text-lg hover:text-amber-300 transition-colors duration-200"
              >Galería</a
            >
          </li>
          <li>
            <a
              href="/#contacto"
              class="text-white font-medium text-lg hover:text-amber-300 transition-colors duration-200"
              >Contacto</a
            >
          </li>
          <li>
            <NuxtLink
              to="/menu"
              class="bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold px-4 py-2 rounded-full text-sm hover:scale-105 transition-transform duration-200 shadow-lg">
              Ver Menú
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <!-- Spacer for desktop -->
      <div class="hidden lg:block w-12 flex-shrink-0"></div>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        class="lg:hidden text-white p-2 hover:text-amber-300 transition-colors"
        aria-label="Toggle menu">
        <svg
          v-if="!isMenuOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4">
      <nav
        v-if="isMenuOpen"
        class="lg:hidden fixed top-20 left-4 right-4 bg-black/95 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl overflow-hidden">
        <ul class="py-4">
          <li>
            <NuxtLink
              to="/"
              @click="closeMenu"
              class="block px-6 py-3 text-white font-medium text-lg hover:bg-white/10 hover:text-amber-300 transition-colors"
              >Inicio</NuxtLink
            >
          </li>
          <li>
            <a
              href="/#nosotros"
              @click="closeMenu"
              class="block px-6 py-3 text-white font-medium text-lg hover:bg-white/10 hover:text-amber-300 transition-colors"
              >Nosotros</a
            >
          </li>
          <li>
            <a
              href="/#galeria"
              @click="closeMenu"
              class="block px-6 py-3 text-white font-medium text-lg hover:bg-white/10 hover:text-amber-300 transition-colors"
              >Galería</a
            >
          </li>
          <li>
            <a
              href="/#contacto"
              @click="closeMenu"
              class="block px-6 py-3 text-white font-medium text-lg hover:bg-white/10 hover:text-amber-300 transition-colors"
              >Contacto</a
            >
          </li>
          <li class="px-6 py-3">
            <NuxtLink
              to="/menu"
              @click="closeMenu"
              class="block text-center bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-bold px-4 py-3 rounded-full hover:scale-105 transition-transform duration-200 shadow-lg">
              Ver Menú
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </transition>
  </header>
</template>

<script setup lang="ts">
  const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
  };
</script>
