# Ohana - Postres, Frappés & Café

Aplicación web para mostrar el menú digital de un restaurante especializado en postres, frappés y café.

## Tecnologías Incluidas

- **Nuxt 3** - Framework Vue.js
- **Tailwind CSS** - Framework de CSS utility-first
- **Pinia** - State management
- **TypeScript** - Tipado estático
- **Nuxt Icon** - Iconos
- **Nuxt Fonts** - Gestión de fuentes
- **Nuxt Image** - Optimización de imágenes

## Instalación

Instala las dependencias:

```bash
pnpm install
```

## Desarrollo

Inicia el servidor de desarrollo en `http://localhost:3000`:

```bash
pnpm run dev
```

## Producción

Genera la aplicación para producción:

```bash
pnpm run build
```

Previsualiza la build de producción localmente:

```bash
pnpm run preview
```

## Características Especiales

### Menú Digital Interactivo
- **Página dedicada**: `/menu` - Menú digital completo con diseño elegante
- **Fondo animado**: Partículas flotantes con efectos visuales sutiles
- **Efecto vidrio esmerilado**: Tarjetas con transparencia y desenfoque
- **Responsive design**: Optimizado para móviles y escritorio
- **Animaciones sutiles**: Transiciones suaves al hacer hover
- **Organización clara**: Productos agrupados con precios destacados

## Estructura del Proyecto

```
├── assets/          # Archivos CSS y recursos estáticos
├── components/      # Componentes Vue reutilizables
├── data/            # Datos del menú (JSON)
├── layouts/         # Layouts de la aplicación
├── pages/           # Rutas de la aplicación
│   ├── index.vue    # Página principal
│   └── menu.vue     # Página del menú digital
├── public/          # Archivos públicos estáticos
├── server/          # API y tipos del servidor
├── stores/          # Stores de Pinia
└── utils/           # Utilidades y helpers
```

## Documentación

- [Nuxt 3](https://nuxt.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Pinia](https://pinia.vuejs.org/)
