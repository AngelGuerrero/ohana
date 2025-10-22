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
    <section class="relative min-h-dvh flex items-center justify-center overflow-hidden bg-black">
      <div class="absolute inset-0 bg-gradient-to-br from-black via-neutral-950 to-neutral-900 animate-gradient-shift"></div>

      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-500/30 to-transparent rounded-full blur-3xl animate-parallax-1"></div>
        <div class="absolute top-40 right-32 w-80 h-80 bg-gradient-to-tl from-amber-600/20 to-transparent rounded-full blur-3xl animate-parallax-2"></div>
        <div class="absolute bottom-32 left-1/3 w-72 h-72 bg-gradient-to-tr from-amber-400/15 to-transparent rounded-full blur-3xl animate-parallax-3"></div>
        <div class="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-bl from-amber-500/25 to-transparent rounded-full blur-3xl animate-parallax-1" style="animation-delay: -10s;"></div>
      </div>

      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
        <div class="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>
      </div>

      <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.2) 1px, transparent 0); background-size: 50px 50px;"></div>

      <div class="relative z-10 flex flex-col items-center justify-center px-4">
        <img
          src="/img/logo.svg"
          alt="Ohana"
          class="mb-12 h-64 w-auto md:h-80 lg:h-96 animate-logo-entrance" />

        <a
          href="/menu"
          class="rounded-lg bg-brand-gold px-12 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/50 animate-button-entrance">
          Ver Menú
        </a>
      </div>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-amber-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- About Section -->
    <section
      id="nosotros"
      class="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-amber-950 py-20 md:py-32 px-4 flex items-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div
          class="absolute top-20 left-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div
          class="absolute bottom-20 right-10 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto max-w-7xl relative z-10">
        <div class="text-center mb-16 md:mb-24">
          <h2
            class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-6 font-poppins tracking-tight">
            Sobre Nosotros
          </h2>
          <div
            class="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
        </div>

        <div
          class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div class="w-full lg:w-auto flex justify-center order-2 lg:order-1">
            <div class="relative group">
              <div
                class="absolute -inset-2 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 rounded-3xl blur-lg opacity-60 group-hover:opacity-90 animate-pulse transition-opacity duration-500"></div>

              <div
                class="absolute -inset-1 bg-gradient-to-br from-amber-500 via-amber-300 to-amber-500 rounded-3xl animate-gradient"></div>

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
                <span
                  class="text-amber-400/60 text-sm font-semibold uppercase tracking-widest"
                  >Nuestra esencia</span
                >
              </div>
              <h3
                class="text-4xl md:text-5xl font-bold text-amber-300 mb-6 font-poppins leading-tight">
                Familia, Pasión y Sabor
              </h3>
              <p
                class="text-xl md:text-2xl text-neutral-300 leading-relaxed mb-6 font-light">
                En <span class="text-amber-400 font-semibold">Ohana</span>,
                creemos que cada postre cuenta una historia y cada visita es una
                oportunidad para crear recuerdos dulces que perduran.
              </p>
              <p class="text-lg text-neutral-400 leading-relaxed">
                Familia es lo que nos inspira cada día. Cada creación lleva el
                amor y la dedicación que ponemos en todo lo que hacemos.
              </p>
            </div>

            <div class="border-l-2 border-amber-500/30 pl-6 space-y-6">
              <div>
                <h4
                  class="text-2xl font-semibold text-amber-400 mb-3 font-poppins">
                  Nuestras Especialidades
                </h4>
                <p class="text-lg text-neutral-300 leading-relaxed">
                  Crepas artesanales, croissants recién horneados, waffles
                  crujientes y bebidas especiales. Cada producto está elaborado
                  con dedicación y los mejores ingredientes.
                </p>
              </div>

              <div>
                <h4
                  class="text-2xl font-semibold text-amber-400 mb-3 font-poppins">
                  Nuestro Compromiso
                </h4>
                <p class="text-lg text-neutral-300 leading-relaxed">
                  Ofrecerte una experiencia inolvidable donde la calidad, el
                  sabor auténtico y el servicio excepcional se unen para crear
                  momentos especiales.
                </p>
              </div>
            </div>

            <div class="flex flex-wrap gap-6 pt-4">
              <div class="!flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 !flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-neutral-400 text-sm font-medium"
                  >Ingredientes frescos</span
                >
              </div>
              <div class="!flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 !flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-neutral-400 text-sm font-medium"
                  >Elaboración artesanal</span
                >
              </div>
              <div class="!flex items-center gap-3">
                <div
                  class="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 !flex items-center justify-center">
                  <svg
                    class="w-6 h-6 text-amber-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="text-neutral-400 text-sm font-medium"
                  >Servicio excepcional</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section
      id="galeria"
      class="min-h-screen bg-gradient-to-br from-neutral-950 via-black to-neutral-900 py-20 md:py-32 px-4 flex items-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl animate-float"></div>
        <div
          class="absolute top-60 right-20 w-96 h-96 bg-amber-600/60 rounded-full blur-3xl animate-float-delayed"></div>
        <div
          class="absolute bottom-40 left-1/3 w-80 h-80 bg-amber-400/40 rounded-full blur-3xl animate-float-slow"></div>
        <div
          class="absolute bottom-10 right-10 w-64 h-64 bg-amber-500/50 rounded-full blur-3xl animate-float"></div>
      </div>

      <div
        class="absolute inset-0 opacity-5"
        style="background-image: radial-gradient(circle at 25% 25%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.1) 0%, transparent 50%);">
      </div>

      <div class="container mx-auto max-w-7xl relative z-10">
        <div class="text-center mb-16 md:mb-20">
          <div class="inline-block mb-4">
            <span
              class="text-amber-400/60 text-sm font-semibold uppercase tracking-widest animate-fade-in"
              >Galería</span
            >
          </div>
          <h2
            class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-6 font-poppins animate-fade-in-up">
            Delicias Artesanales
          </h2>
          <div
            class="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
          <p
            class="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto animate-fade-in-up-delayed">
            Explora nuestra selección de postres y bebidas elaboradas con pasión
          </p>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          <div
            v-for="(image, index) in galleryImages"
            :key="index"
            class="group relative overflow-hidden rounded-2xl bg-neutral-900/50 backdrop-blur-sm border border-amber-900/20 hover:border-amber-500/50 transition-all duration-500 cursor-pointer animate-scale-in"
            :style="{ animationDelay: `${index * 100}ms` }">
            <div class="relative aspect-square overflow-hidden">
              <img
                :src="image.url"
                :alt="image.title"
                class="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2" />

              <div
                class="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              <div
                class="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/20 group-hover:to-amber-600/10 transition-all duration-700"></div>

              <div
                class="absolute top-0 left-0 w-32 h-32 bg-amber-400/0 group-hover:bg-amber-400/10 blur-2xl rounded-full transition-all duration-700 -translate-x-16 -translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0"></div>

              <div
                class="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/0 group-hover:bg-amber-500/10 blur-2xl rounded-full transition-all duration-700 translate-x-16 translate-y-16 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </div>

            <div
              class="absolute inset-0 !flex flex-col justify-end p-6 transform transition-all duration-500">
              <div
                class="transform transition-all duration-500 group-hover:-translate-y-2">
                <div
                  class="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-transparent mb-3 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100"></div>
                <h3
                  class="text-2xl md:text-3xl font-bold text-white mb-2 font-poppins drop-shadow-lg">
                  {{ image.title }}
                </h3>
                <p
                  class="text-sm md:text-base text-neutral-200 leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150">
                  {{ image.description }}
                </p>
              </div>
            </div>

            <div
              class="absolute top-4 right-4 w-10 h-10 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 !flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-200">
              <svg
                class="w-5 h-5 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section
      id="contacto"
      class="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-amber-950 py-20 px-4 flex items-center">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <h2
            class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-6">
            Contacto
          </h2>
          <div
            class="w-24 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-8"></div>
          <p class="text-lg text-neutral-300 max-w-2xl mx-auto">
            Visítanos o contáctanos para disfrutar de nuestros deliciosos
            postres
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div
            class="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/30 space-y-6">
            <div class="!flex items-start gap-4">
              <div class="bg-amber-500/20 p-3 rounded-lg">
                <svg
                  class="w-6 h-6 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-amber-400 mb-2">Ubicación</h3>
                <p class="text-neutral-300">Ajusco 318, Loma Bonita</p>
                <p class="text-neutral-300">Querétaro, Qro.</p>
              </div>
            </div>

            <div class="!flex items-start gap-4">
              <div class="bg-amber-500/20 p-3 rounded-lg">
                <svg
                  class="w-6 h-6 text-amber-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-amber-400 mb-2">Horario</h3>
                <p class="text-neutral-300">Jueves a Domingo</p>
                <p class="text-neutral-300">6:00 PM - 10:00 PM</p>
              </div>
            </div>

            <div class="!flex items-start gap-4">
              <div class="bg-amber-500/20 p-3 rounded-lg">
                <svg
                  class="w-6 h-6 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-amber-400 mb-2">
                  Redes Sociales
                </h3>
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

          <div
            class="bg-gradient-to-br from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-900/30">
            <h3 class="text-2xl font-bold text-amber-400 mb-6">
              Envíanos un mensaje
            </h3>
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
