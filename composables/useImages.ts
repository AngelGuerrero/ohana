export const useImages = () => {
  const getImageUrl = (filename: string) => {
    return `/img/${filename}`
  }

  const images = {
    logo: '/img/logo.svg',
    storeFront: '/img/store_front.jpg',
    
    // Crepas
    crepaPlatanoNutella: '/img/crepa_platano_nutella.jpg',
    crepaSaladaCarnesFrias: '/img/crepa_salada_carnes_frias.jpg',
    
    // Croissants
    croissant1: '/img/croasaint_1.jpg',
    croissant2: '/img/croasaint_2.jpg',
    croissant: '/img/croassant.jpg',
    
    // Waffles
    waffles: '/img/waffles.jpg',
    wafflesPng: '/img/waffles.png',
    
    // Frappés
    frappeMazapan: '/img/frappe_mazapan.jpg',
    
    // Postres
    fresasConCrema: '/img/fresas_con_crema.png',
    fresasConCrema1: '/img/fresas_con_crema_1.jpg',
    
    // Hotcakes
    hotCakesFresa: '/img/hot_cakes_fresa.jpg',
    hotCakesDurazno: '/img/hot_cakes_durazno.jpg',
    
    // Extras
    toppingsExtra: '/img/toppings_extra.jpg',
    
    // Galería adicional
    gallery1: '/img/IMG_20251101_203427.jpg',
    gallery2: '/img/IMG_20251101_203434.jpg',
    gallery3: '/img/IMG_20251101_203506.jpg',
    gallery4: '/img/IMG_20251101_203515.jpg',
    gallery5: '/img/IMG_20251101_210611.jpg',
    gallery6: '/img/IMG_20251101_210618.jpg',
  }

  return {
    getImageUrl,
    images
  }
}

