<template>
  <footer class="border-t border-white/10 bg-black/30 py-8 backdrop-blur-lg">
    <div
      class="container mx-auto flex flex-col items-center gap-4 px-6 text-center text-gray-300"
    >
      <!-- Contact Info -->
      <p class="text-sm">Calle Corregidora 168, Centro histórico, Querétaro, Qro.</p>
      <a href="#" class="transition hover:text-brand-gold">
        <Icon name="mdi:facebook" class="h-6 w-6" />
      </a>

      <!-- Google Maps -->
      <div class="h-64 w-full max-w-md overflow-hidden rounded-lg border border-white/10 shadow-lg">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?q=Calle%20Corregidora%20168,%20Centro%20hist%C3%B3rico,%20Quer%C3%A9taro,%20Qro.&t=&z=15&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>

      <!-- Copyright -->
      <p class="text-xs text-gray-500">
        &copy; 2025 Ohana. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>
