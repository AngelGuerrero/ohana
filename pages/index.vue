<script lang="ts" setup>
  useHead({
    title: 'Ohana - Postres, Frappés & Café',
  });

  const galleryImages = [
    {
      url: '/img/crepa_platano_nutella.jpg',
      title: 'Crepas Dulces',
      description:
        'Deliciosas crepas con nutella, mermelada, miel o filadelfia',
    },
    {
      url: '/img/crepa_salada_carnes_frias.jpg',
      title: 'Crepas Saladas',
      description: 'Crepas con carnes frías y aderezo de habanero',
    },
    {
      url: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=400&h=400&fit=crop',
      title: 'Waffles',
      description: 'Waffles crujientes con toppings a elegir',
    },
    {
      url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=400&fit=crop',
      title: 'Fresas con Crema',
      description: 'Fresas frescas con nuestra crema especial',
    },
    {
      url: '/img/hot_cakes_fresa.jpg',
      title: 'Mini Hotcakes',
      description: 'Hotcakes esponjosos servidos por paquetes',
    },
    {
      url: '/img/frappe_mazapan.jpg',
      title: 'Frapé',
      description: 'Bebidas frías con sabores variados',
    },
  ];
</script>

<template>
  <div>
    <section
      class="relative min-h-dvh flex items-center justify-center overflow-hidden bg-black">
      <div
        class="absolute inset-0 bg-gradient-radial from-neutral-800/40 via-black to-black"></div>

      <svg
        class="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="vert-gradient-1"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%">
            <stop
              offset="0%"
              style="stop-color: rgba(251, 191, 36, 0); stop-opacity: 1" />
            <stop
              offset="30%"
              style="stop-color: rgba(251, 191, 36, 0.15); stop-opacity: 1" />
            <stop
              offset="50%"
              style="stop-color: rgba(251, 191, 36, 0.25); stop-opacity: 1" />
            <stop
              offset="70%"
              style="stop-color: rgba(251, 191, 36, 0.15); stop-opacity: 1" />
            <stop
              offset="100%"
              style="stop-color: rgba(251, 191, 36, 0); stop-opacity: 1" />
          </linearGradient>
          <linearGradient
            id="vert-gradient-2"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%">
            <stop
              offset="0%"
              style="stop-color: rgba(148, 163, 184, 0); stop-opacity: 1" />
            <stop
              offset="30%"
              style="stop-color: rgba(148, 163, 184, 0.1); stop-opacity: 1" />
            <stop
              offset="50%"
              style="stop-color: rgba(148, 163, 184, 0.2); stop-opacity: 1" />
            <stop
              offset="70%"
              style="stop-color: rgba(148, 163, 184, 0.1); stop-opacity: 1" />
            <stop
              offset="100%"
              style="stop-color: rgba(148, 163, 184, 0); stop-opacity: 1" />
          </linearGradient>
        </defs>

        <line
          x1="10%"
          y1="0"
          x2="10%"
          y2="100%"
          stroke="url(#vert-gradient-2)"
          stroke-width="1"
          class="animate-vertical-line"
          style="animation-delay: 0s" />
        <line
          x1="22%"
          y1="0"
          x2="22%"
          y2="100%"
          stroke="url(#vert-gradient-1)"
          stroke-width="1.5"
          class="animate-vertical-line"
          style="animation-delay: 0.3s" />
        <line
          x1="35%"
          y1="0"
          x2="35%"
          y2="100%"
          stroke="url(#vert-gradient-2)"
          stroke-width="1"
          class="animate-vertical-line"
          style="animation-delay: 0.6s" />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="url(#vert-gradient-1)"
          stroke-width="2"
          class="animate-vertical-line"
          style="animation-delay: 0.9s" />
        <line
          x1="65%"
          y1="0"
          x2="65%"
          y2="100%"
          stroke="url(#vert-gradient-2)"
          stroke-width="1"
          class="animate-vertical-line"
          style="animation-delay: 1.2s" />
        <line
          x1="78%"
          y1="0"
          x2="78%"
          y2="100%"
          stroke="url(#vert-gradient-1)"
          stroke-width="1.5"
          class="animate-vertical-line"
          style="animation-delay: 1.5s" />
        <line
          x1="90%"
          y1="0"
          x2="90%"
          y2="100%"
          stroke="url(#vert-gradient-2)"
          stroke-width="1"
          class="animate-vertical-line"
          style="animation-delay: 1.8s" />
      </svg>

      <div
        class="absolute top-8 left-8 text-left opacity-60 animate-fade-slide-in"
        style="animation-delay: 1.5s">
        <p
          class="text-xs md:text-sm text-slate-400 font-light tracking-widest uppercase">
          Crepas
        </p>
        <p class="text-[10px] md:text-xs text-slate-500">Dulces</p>
      </div>

      <div
        class="absolute top-1/4 right-12 text-right opacity-60 animate-fade-slide-in"
        style="animation-delay: 1.8s">
        <p
          class="text-xs md:text-sm text-amber-400/70 font-light tracking-widest uppercase">
          Waffles
        </p>
        <p class="text-[10px] md:text-xs text-amber-500/50">Crujientes</p>
      </div>

      <div
        class="absolute bottom-1/4 left-12 text-left opacity-60 animate-fade-slide-in"
        style="animation-delay: 2.1s">
        <p
          class="text-xs md:text-sm text-amber-400/70 font-light tracking-widest uppercase">
          Frappés
        </p>
        <p class="text-[10px] md:text-xs text-amber-500/50">Artesanales</p>
      </div>

      <div
        class="absolute bottom-12 right-16 text-right opacity-60 animate-fade-slide-in"
        style="animation-delay: 2.4s">
        <p
          class="text-xs md:text-sm text-slate-400 font-light tracking-widest uppercase">
          Postres
        </p>
        <p class="text-[10px] md:text-xs text-slate-500">Frescos</p>
      </div>

      <div
        class="relative z-10 flex flex-col items-center justify-center px-4 max-w-5xl mx-auto text-center">
        <img
          src="/img/logo.svg"
          alt="Ohana"
          class="h-48 w-auto md:h-64 lg:h-80 mb-8 animate-logo-entrance" />

        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-tight leading-tight animate-fade-in-up"
          style="animation-delay: 0.6s">
          Postres, Frappés <span class="text-amber-400">&</span> Café
        </h1>

         <div class="max-w-2xl mb-12">
           <WordByWordAnimationComponent
             text="Donde cada creación lleva el amor y la dedicación de nuestra familia"
             :delay="900"
             :word-delay="320"
             base-classes="text-base md:text-lg text-slate-400 font-light leading-relaxed" />
         </div>

        <a
          href="/menu"
          class="group relative inline-flex items-center gap-3 px-10 py-4 border border-amber-500/30 hover:border-amber-400/60 rounded-none overflow-hidden transition-all duration-500 animate-fade-in-up"
          style="animation-delay: 1.2s">
          <span
            class="relative text-sm font-normal text-slate-200 tracking-[0.2em] uppercase group-hover:text-white transition-colors duration-300">
            Ver Menú
          </span>
          <svg
            class="w-4 h-4 text-amber-400 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"></path>
          </svg>
          <div
            class="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </a>
      </div>

      <div
        class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div
          class="w-px h-12 bg-gradient-to-b from-amber-400/50 to-transparent"></div>
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
        style="
          background-image: radial-gradient(
              circle at 25% 25%,
              rgba(251, 191, 36, 0.1) 0%,
              transparent 50%
            ),
            radial-gradient(
              circle at 75% 75%,
              rgba(245, 158, 11, 0.1) 0%,
              transparent 50%
            );
        "></div>

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
                <p class="text-neutral-300">Calle Corregidora 168, Centro histórico</p>
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
