<script lang="ts" setup>
  useHead({
    title: 'Ohana - Postres, Frappés & Café',
  });

  const hoveredIndex = ref(-1);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=400&fit=crop',
      title: 'Crepa de Nutella',
      description: 'Crepa francesa rellena de nutella',
    },
    {
      url: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
      title: 'Waffle Belga',
      description: 'Waffle crujiente con frutas frescas',
    },
    {
      url: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=400&h=400&fit=crop',
      title: 'Fresas con Crema',
      description: 'Fresas frescas con crema batida',
    },
    {
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      title: 'Mini Hotcakes',
      description: 'Hotcakes esponjosos con miel',
    },
    {
      url: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=400&fit=crop',
      title: 'Gomitas Artesanales',
      description: 'Gomitas con sabores naturales',
    },
    {
      url: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
      title: 'Frapé Cremoso',
      description: 'Bebida fría con café premium',
    },
    {
      url: 'https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=400&h=400&fit=crop',
      title: 'Toppings Especiales',
      description: 'Variedad de toppings para personalizar',
    },
    {
      url: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400&h=400&fit=crop',
      title: 'Postres Gourmet',
      description: 'Deliciosas creaciones artesanales',
    },
  ];
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

    <!-- Gallery Section -->
    <section
      class="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-mesh-gradient relative overflow-hidden flex items-center"
    >
      <div class="w-full px-4">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros Postres Destacados
          </h2>
          <p class="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Deliciosas creaciones que deleitarán tu paladar
          </p>
        </div>

        <div class="relative w-full gallery-horizontal">
          <div
            class="flex gap-2 transition-all duration-700 ease-out justify-center md:justify-start"
          >
            <div
              v-for="(image, index) in galleryImages"
              :key="index"
              class="group relative flex-shrink-0 transition-all duration-700 ease-out cursor-pointer"
              :class="{
                'w-40 md:w-48': hoveredIndex !== index, // Ancho base más grande
                'w-80 md:w-96': hoveredIndex === index, // Ancho expandido en hover
              }"
              @mouseenter="hoveredIndex = index"
              @mouseleave="hoveredIndex = -1"
            >
              <div
                class="relative h-64 md:h-80 overflow-hidden rounded-xl bg-gray-800 shadow-2xl"
              >
                <img
                  :src="image.url"
                  :alt="image.title"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <!-- Gradiente mejorado para contraste -->
                <div
                  class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20"
                ></div>

                <!-- Texto con excelente contraste -->
                <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3
                    class="font-bold text-shadow-xl transition-all duration-500 leading-tight mb-2"
                    :class="{
                      'text-xl md:text-2xl': hoveredIndex === index,
                      'text-base md:text-lg': hoveredIndex !== index,
                    }"
                  >
                    {{ image.title }}
                  </h3>
                  <p
                    class="text-sm md:text-base text-gray-100 text-shadow transition-opacity duration-500 leading-relaxed"
                    :class="{
                      'opacity-100': hoveredIndex === index,
                      'opacity-80': hoveredIndex !== index,
                    }"
                  >
                    {{ image.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Scroll indicator mejorado -->
        <div class="flex justify-center mt-8 md:hidden">
          <div
            class="text-sm text-gray-300 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            ← Desliza para ver más →
          </div>
        </div>
      </div>
    </section>

    <!-- Menu Section -->
    <HomeMenu />
  </div>
</template>
