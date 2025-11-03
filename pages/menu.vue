<script setup lang="ts">
  import menuData from '~/data/menu.json';

  const menuItems = menuData.items.filter((item) => item.active);

  const scrollY = ref(0);

  onMounted(() => {
    const handleScroll = () => {
      scrollY.value = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });
</script>

<template>
  <div class="min-h-screen bg-neutral-900">
    <div
      class="relative overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-amber-950 py-20 md:py-32">
      <div
        class="absolute inset-0 bg-gradient-to-tr from-amber-900/20 via-transparent to-neutral-900/40"
        :style="{ transform: `translateY(${scrollY * 0.3}px)` }"></div>

      <div
        class="absolute top-20 left-10 w-72 h-72 bg-amber-600/10 rounded-full blur-3xl"
        :style="{
          transform: `translate(${scrollY * 0.2}px, ${scrollY * 0.15}px)`,
        }"></div>
      <div
        class="absolute bottom-20 right-10 w-96 h-96 bg-amber-700/10 rounded-full blur-3xl"
        :style="{
          transform: `translate(${-scrollY * 0.15}px, ${scrollY * 0.25}px)`,
        }"></div>

      <div class="container mx-auto px-4 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div
            class="text-left"
            :style="{ transform: `translateY(${scrollY * 0.1}px)` }">
            <h1
              class="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 mb-6 leading-tight">
              Descubre nuestro delicioso menú
            </h1>
            <p
              class="text-lg md:text-xl text-neutral-300 mb-8 max-w-xl leading-relaxed">
              Disfruta de nuestras crepas artesanales, croissants recién
              horneados y bebidas especiales. Cada producto está hecho con los
              mejores ingredientes para ofrecerte una experiencia única.
            </p>

            <div class="!flex flex-wrap items-center gap-4 mb-12">
              <a
                href="https://www.facebook.com/profile.php?id=61552845366116"
                target="_blank"
                rel="noopener noreferrer"
                class="!flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 rounded-full font-semibold hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-900/50 hover:shadow-xl hover:shadow-amber-900/70">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Síguenos en Facebook</span>
              </a>
            </div>

            <div class="grid grid-cols-3 gap-8 max-w-lg">
              <div>
                <div class="text-amber-400 text-sm font-semibold mb-1">
                  Productos
                </div>
                <div class="text-4xl font-bold text-amber-200">
                  {{ menuItems.length }}+
                </div>
              </div>
              <div>
                <div class="text-amber-400 text-sm font-semibold mb-1">
                  Sabores
                </div>
                <div class="text-4xl font-bold text-amber-200">15+</div>
              </div>
              <div>
                <div class="text-amber-400 text-sm font-semibold mb-1">
                  Variantes
                </div>
                <div class="text-4xl font-bold text-amber-200">20+</div>
              </div>
            </div>
          </div>

          <div
            class="relative hidden lg:block"
            :style="{ transform: `translateY(${scrollY * -0.15}px)` }">
            <div class="relative">
              <div
                class="absolute -top-10 -right-10 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
              <div
                class="relative bg-gradient-to-br from-neutral-800/40 to-neutral-900/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-amber-900/30">
                <img
                  src="/img/crepa_platano_nutella.jpg"
                  alt="Menú Ohana"
                  class="rounded-2xl shadow-xl w-full h-auto object-cover ring-2 ring-amber-600/30" />
                <div
                  class="absolute -bottom-6 -left-6 bg-gradient-to-br from-amber-500 to-amber-700 rounded-2xl p-4 shadow-xl shadow-amber-900/50">
                  <div class="!flex items-center gap-3">
                    <img
                      src="/img/frappe_mazapan.jpg"
                      alt="Frapé"
                      class="w-16 h-16 rounded-lg object-cover ring-2 ring-amber-300/50" />
                    <div>
                      <div class="text-sm font-semibold text-neutral-900">
                        Frapé Mazapán
                      </div>
                      <div class="text-xs text-neutral-800 font-medium">
                        Desde $60
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-8 relative z-10">
      <div
        class="max-w-6xl mx-auto bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-600/10 rounded-2xl border border-amber-500/30 overflow-hidden shadow-lg shadow-amber-900/20">
        <div class="!flex flex-col md:flex-row items-center gap-6 p-6 md:p-8">
          <div class="!flex items-center gap-4 shrink-0">
            <div
              class="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl !flex items-center justify-center shadow-lg">
              <svg
                class="w-8 h-8 text-neutral-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl font-bold text-amber-200">
                Extras y Complementos
              </h3>
              <p class="text-sm text-neutral-400">
                Agrega a cualquier producto
              </p>
            </div>
          </div>

          <div class="!flex flex-1 flex-wrap items-center gap-3">
            <span
              class="px-4 py-2 bg-gradient-to-br from-neutral-800 to-neutral-900 text-amber-200 border border-amber-600/30 rounded-lg text-sm font-medium !flex items-center gap-2">
              <span class="text-amber-400">•</span>
              Nuez
            </span>
            <span
              class="px-4 py-2 bg-gradient-to-br from-neutral-800 to-neutral-900 text-amber-200 border border-amber-600/30 rounded-lg text-sm font-medium !flex items-center gap-2">
              <span class="text-amber-400">•</span>
              Chispas de chocolate
            </span>
            <span
              class="px-4 py-2 bg-gradient-to-br from-neutral-800 to-neutral-900 text-amber-200 border border-amber-600/30 rounded-lg text-sm font-medium !flex items-center gap-2">
              <span class="text-amber-400">•</span>
              Lunetas
            </span>
            <span
              class="px-4 py-2 bg-gradient-to-br from-neutral-800 to-neutral-900 text-amber-200 border border-amber-600/30 rounded-lg text-sm font-medium !flex items-center gap-2">
              <span class="text-amber-400">•</span>
              Chispas de colores
            </span>
          </div>

          <div class="shrink-0 text-center md:text-right">
            <div class="text-xs text-amber-400 font-semibold uppercase mb-1">
              Precio
            </div>
            <div class="text-3xl font-bold text-amber-200">$10</div>
            <div class="text-xs text-neutral-400">por porción</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12 md:py-16 relative">
      <div
        class="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-3xl"
        :style="{
          transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.08}px)`,
        }"></div>

      <div id="menu-items" class="scroll-mt-20"></div>

      <div class="grid gap-8 max-w-6xl mx-auto relative z-10">
        <div v-for="item in menuItems" :key="item.id">
          <div
            class="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl overflow-hidden border border-amber-900/20 shadow-xl shadow-black/40 hover:shadow-2xl hover:shadow-amber-900/20 transition-all duration-300 hover:scale-[1.01]">
            <div
              class="px-6 md:px-8 py-6 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 relative overflow-hidden">
              <div
                class="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-50"></div>
              <div class="flex justify-between items-start gap-4 relative z-10">
                <div>
                  <h3
                    class="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
                    {{ item.title }}
                  </h3>
                  <p
                    class="text-neutral-800 text-sm md:text-base leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>
                <div class="text-right shrink-0">
                  <div
                    class="text-xs text-neutral-900 font-semibold uppercase tracking-wide mb-1">
                    Desde
                  </div>
                  <div class="text-3xl font-bold text-neutral-900">
                    ${{
                      Math.min(
                        ...item.variants
                          .filter((v) => v.active)
                          .map((v) => v.price)
                      )
                    }}
                  </div>
                </div>
              </div>
            </div>

            <div
              class="grid md:grid-cols-[300px_1fr] lg:grid-cols-[350px_1fr] gap-6 p-6 md:p-8">
              <div
                class="bg-neutral-950/50 rounded-xl overflow-hidden min-h-[250px] flex items-center justify-center border border-amber-900/20 shadow-inner">
                <img
                  v-if="item.id === 'crepas'"
                  src="/img/crepa_platano_nutella.jpg"
                  alt="Crepas"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <img
                  v-else-if="item.id === 'crepas_saladas'"
                  src="/img/crepa_salada_carnes_frias.jpg"
                  alt="Crepas Saladas"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <img
                  v-else-if="item.id === 'croissant_relleno'"
                  src="/img/croassant.jpg"
                  alt="Croissant Relleno"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <img
                  v-else-if="item.id === 'frapes'"
                  src="/img/frappe_mazapan.jpg"
                  alt="Frapés"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <img
                  v-else-if="item.id === 'mini_hotcakes'"
                  src="/img/hot_cakes_fresa.jpg"
                  alt="Mini Hotcakes"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <img
                  v-else-if="item.id === 'fresas_con_crema'"
                  src="/img/fresas_con_crema.png"
                  alt="Fresas con Crema"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <img
                  v-else-if="item.id === 'waffles'"
                  src="/img/waffles.png"
                  alt="Waffles"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                <div v-else class="text-center p-4">
                  <div
                    class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-full flex items-center justify-center border border-amber-900/30">
                    <svg
                      class="w-12 h-12 text-amber-600/40"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p class="text-neutral-400 text-sm">Espacio para imágenes</p>
                  <p class="text-neutral-500 text-xs mt-1">
                    Galería del producto
                  </p>
                </div>
              </div>

              <div class="space-y-5">
                <div v-if="item.flavors && item.flavors.length > 0">
                  <h4
                    class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span class="w-1 h-4 bg-amber-400 rounded-full"></span>
                    Sabores disponibles
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="flavor in item.flavors"
                      :key="flavor"
                      class="px-3 py-2 bg-gradient-to-br from-amber-500/20 to-amber-600/20 text-amber-200 border border-amber-600/30 rounded-lg text-sm font-medium hover:from-amber-500/30 hover:to-amber-600/30 hover:border-amber-500/50 transition-all">
                      {{ flavor }}
                    </span>
                  </div>
                </div>

                <div v-if="item.fruits && item.fruits.length > 0">
                  <h4
                    class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span class="w-1 h-4 bg-amber-400 rounded-full"></span>
                    Frutas disponibles
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="fruit in item.fruits"
                      :key="fruit"
                      class="px-3 py-2 bg-gradient-to-br from-amber-500/20 to-amber-700/20 text-amber-200 border border-amber-700/30 rounded-lg text-sm font-medium hover:from-amber-500/30 hover:to-amber-700/30 hover:border-amber-600/50 transition-all">
                      {{ fruit }}
                    </span>
                  </div>
                </div>

                <div>
                  <h4
                    class="text-xs font-bold text-amber-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <span class="w-1 h-4 bg-amber-400 rounded-full"></span>
                    Opciones y precios
                  </h4>
                  <div class="grid gap-2">
                    <div
                      v-for="variant in item.variants.filter((v) => v.active)"
                      :key="variant.id"
                      class="flex justify-between items-center py-3 px-4 bg-gradient-to-r from-neutral-800/80 to-neutral-900/80 border border-amber-900/30 rounded-lg hover:border-amber-700/50 hover:from-neutral-800 hover:to-neutral-900 transition-all group">
                      <span
                        class="text-neutral-200 font-medium text-base group-hover:text-amber-100 transition-colors"
                        >{{ variant.title }}</span
                      >
                      <span
                        class="text-xl font-bold text-amber-400 group-hover:text-amber-300 transition-colors"
                        >${{ variant.price }}</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center mt-20 pt-16 pb-12 relative">
        <div
          class="absolute inset-0 bg-gradient-to-t from-amber-900/5 to-transparent rounded-3xl blur-3xl"></div>
        <div class="mb-6 relative z-10">
          <p
            class="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 font-bold mb-3">
            ¡Una experiencia inolvidable te espera!
          </p>
          <p
            class="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto mb-6">
            Cada visita a Ohana es una oportunidad para crear recuerdos dulces
            que perduran
          </p>

          <div class="!flex justify-center mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=61552845366116"
              target="_blank"
              rel="noopener noreferrer"
              class="!flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-900 rounded-full font-semibold hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-900/50 hover:shadow-xl hover:shadow-amber-900/70 hover:scale-105">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Síguenos en Facebook</span>
            </a>
          </div>
        </div>
        <div
          class="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-sm text-amber-600/60 font-medium relative z-10">
          <span>✨ Elaborado con pasión</span>
          <span class="text-amber-800/40">•</span>
          <span>Ingredientes de calidad</span>
          <span class="text-amber-800/40">•</span>
          <span>Servicio excepcional</span>
        </div>
      </div>
    </div>
  </div>
</template>
