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
      description: 'Bebida fría con café de calidad',
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

    <!-- About Section -->
    <section
      id="nosotros"
      class="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-amber-950 py-20 md:py-32 px-4 flex items-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto max-w-7xl relative z-10">
        <div class="text-center mb-16 md:mb-24">
          <h2 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-6 font-poppins tracking-tight">
            Sobre Nosotros
          </h2>
          <div class="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>
        
        <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div class="w-full lg:w-auto flex justify-center order-2 lg:order-1">
            <div class="relative group">
              <div class="absolute -inset-2 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-3xl blur-lg opacity-60 group-hover:opacity-90 animate-pulse transition-opacity duration-500"></div>
              
              <div class="absolute -inset-1 bg-gradient-to-br from-amber-500 via-amber-300 to-amber-500 rounded-3xl animate-gradient"></div>
              
              <div class="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="/img/store_front.jpg"
                  alt="Ohana Store"
                  class="relative w-72 md:w-80 h-96 md:h-[28rem] object-cover" />
              </div>
            </div>
          </div>
          
          <div class="max-w-2xl order-1 lg:order-2 space-y-12">
            <div>
              <div class="inline-block mb-4">
                <span class="text-amber-400/60 text-sm font-semibold uppercase tracking-widest">Nuestra esencia</span>
              </div>
              <h3 class="text-4xl md:text-5xl font-bold text-amber-300 mb-6 font-poppins leading-tight">
                Familia, Pasión y Sabor
              </h3>
              <p class="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-6 font-light">
                En <span class="text-amber-400 font-semibold">Ohana</span>, creemos que cada postre cuenta una historia y cada visita es una oportunidad para crear recuerdos dulces que perduran.
              </p>
              <p class="text-lg text-neutral-400 leading-relaxed">
                Familia es lo que nos inspira cada día. Cada creación lleva el amor y la dedicación que ponemos en todo lo que hacemos.
              </p>
            </div>

            <div class="border-l-2 border-amber-500/30 pl-6 space-y-6">
              <div>
                <h4 class="text-2xl font-semibold text-amber-400 mb-3 font-poppins">Nuestras Especialidades</h4>
                <p class="text-lg text-neutral-300 leading-relaxed">
                  Crepas artesanales, croissants recién horneados, waffles crujientes y bebidas especiales. Cada producto está elaborado con dedicación y los mejores ingredientes.
                </p>
              </div>
              
              <div>
                <h4 class="text-2xl font-semibold text-amber-400 mb-3 font-poppins">Nuestro Compromiso</h4>
                <p class="text-lg text-neutral-300 leading-relaxed">
                  Ofrecerte una experiencia inolvidable donde la calidad, el sabor auténtico y el servicio excepcional se unen para crear momentos especiales.
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-6 pt-4">
              <div class="!flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 !flex items-center justify-center">
                  <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="text-neutral-400 text-sm font-medium">Ingredientes frescos</span>
              </div>
              <div class="!flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 !flex items-center justify-center">
                  <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="text-neutral-400 text-sm font-medium">Elaboración artesanal</span>
              </div>
              <div class="!flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 !flex items-center justify-center">
                  <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <span class="text-neutral-400 text-sm font-medium">Servicio excepcional</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section
      id="galeria"
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

    <!-- Contact Section -->
    <section
      id="contacto"
      class="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-amber-950 py-20 px-4 flex items-center">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-6">
            Contacto
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
          <p class="text-lg text-neutral-300 max-w-2xl mx-auto">
            Visítanos o contáctanos para disfrutar de nuestros deliciosos postres
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div class="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/30 space-y-6">
            <div class="!flex items-start gap-4">
              <div class="bg-amber-500/20 p-3 rounded-lg">
                <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-amber-400 mb-2">Ubicación</h3>
                <p class="text-neutral-300">Visítanos en nuestra tienda</p>
              </div>
            </div>

            <div class="!flex items-start gap-4">
              <div class="bg-amber-500/20 p-3 rounded-lg">
                <svg class="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-amber-400 mb-2">Horario</h3>
                <p class="text-neutral-300">Lunes a Domingo</p>
                <p class="text-neutral-300">9:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div class="!flex items-start gap-4">
              <div class="bg-amber-500/20 p-3 rounded-lg">
                <svg class="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-amber-400 mb-2">Redes Sociales</h3>
                <a
                  href="https://www.facebook.com/profile.php?id=61552845366116"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neutral-300 hover:text-amber-400 transition-colors">
                  Síguenos en Facebook
                </a>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/30">
            <h3 class="text-2xl font-bold text-amber-400 mb-6">Envíanos un mensaje</h3>
            <p class="text-neutral-300 mb-6">
              ¿Tienes alguna pregunta o sugerencia? Nos encantaría escucharte.
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61552845366116"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 rounded-full font-semibold hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-900/50 hover:shadow-xl hover:shadow-amber-900/70 hover:scale-105">
              Contactar por Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
