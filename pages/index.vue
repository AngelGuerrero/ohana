<script lang="ts" setup>
useHead({
  title: 'Ohana - Postres, Frappés & Café'
})
</script>

<template>
  <div class="min-h-screen bg-black">
    <div class="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div class="flex min-h-[80vh] flex-col items-center justify-center text-center">
        <img
          src="/img/logo.png"
          alt="Ohana"
          class="mb-12 h-96 w-96" />

        <p class="mb-8 max-w-2xl text-xl text-gray-300 sm:text-2xl">Postres, Frappés, Cafés & Crepas</p>

        <p class="mb-12 max-w-xl text-gray-400">Endulza tus momentos con nuestras deliciosas creaciones artesanales</p>

        <div class="flex flex-col gap-4 sm:flex-row">
          <button
            class="rounded-lg bg-gradient-to-r from-yellow-600 to-yellow-700 px-8 py-3 font-semibold text-black transition hover:from-yellow-500 hover:to-yellow-600">
            Ver Menú
          </button>
          <button
            class="rounded-lg border-2 border-yellow-600 px-8 py-3 font-semibold text-yellow-600 transition hover:bg-yellow-600 hover:text-black">
            Contáctanos
          </button>
        </div>

        <div class="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div class="rounded-lg border border-yellow-900/30 bg-gradient-to-br from-gray-900 to-black p-6">
            <div class="mb-4 text-4xl">☕</div>
            <h3 class="mb-2 text-lg font-semibold text-yellow-600">Cafés Premium</h3>
            <p class="text-sm text-gray-400">Granos selectos y preparaciones especiales</p>
          </div>

          <div class="rounded-lg border border-yellow-900/30 bg-gradient-to-br from-gray-900 to-black p-6">
            <div class="mb-4 text-4xl">🧁</div>
            <h3 class="mb-2 text-lg font-semibold text-yellow-600">Postres Artesanales</h3>
            <p class="text-sm text-gray-400">Creaciones únicas hechas con amor</p>
          </div>

          <div class="rounded-lg border border-yellow-900/30 bg-gradient-to-br from-gray-900 to-black p-6">
            <div class="mb-4 text-4xl">🥤</div>
            <h3 class="mb-2 text-lg font-semibold text-yellow-600">Frappés Deliciosos</h3>
            <p class="text-sm text-gray-400">Bebidas refrescantes para cualquier momento</p>
          </div>
        </div>
      </div>

      <footer class="mt-16 border-t border-yellow-900/30 pt-8 text-center text-gray-500">
        <p>&copy; 2025 Ohana. Endulzando vidas.</p>
      </footer>
    </div>
  </div>
</template>
