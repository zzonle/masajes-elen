# 💅 Nails Elena - Sitio Web de Servicio de Uñas

Sitio web moderno y responsivo para un servicio de manicura y nail art profesional. Construido con **Vue 3**, **Vite** y **Bootstrap** para una experiencia de usuario rápida y atractiva.

---

## 🎯 Características

- ✨ **Sección Hero** - Presentación impactante del servicio
- 💼 **Catálogo de Servicios** - Listado detallado de tratamientos disponibles
- 🖼️ **Galería Completa** - Portafolio de trabajos realizados
- 📝 **Testimonios** - Reseñas de clientes satisfechos
- 📱 **Diseño Responsivo** - Optimizado para móvil, tablet y desktop
- ⚡ **Rendimiento Rápido** - Carga instantánea con Vite

---

## 🛠️ Tecnologías

| Tecnología | Versión | Descripción |
|------------|---------|-------------|
| Vue.js | 3.5.32 | Framework JavaScript progresivo |
| Vite | 8.0.8 | Herramienta de construcción rápida |
| Vue Router | 5.0.4 | Enrutamiento para SPA |
| Bootstrap | 5.3.8 | Framework CSS moderno |
| Bootstrap Icons | 1.13.1 | Librería de iconos |

---

## 📋 Requisitos Previos

- **Node.js**: v20.19.0 o superior / v22.12.0 o superior
- **npm**: Incluido con Node.js

---

## 📦 Instalación

1. **Clonar el repositorio** (o descargar los archivos)
   ```sh
   git clone <url-del-repositorio>
   cd nails-elena
   ```

2. **Instalar dependencias**
   ```sh
   npm install
   ```

---

## 🚀 Comandos Disponibles

### Desarrollo Local
Inicia el servidor de desarrollo con hot-reload en tiempo real:
```sh
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Construir para Producción
Genera los archivos optimizados para producción:
```sh
npm run build
```
Los archivos generados se guardan en la carpeta `dist/`

### Previsualizar Producción
Visualiza la versión de producción localmente:
```sh
npm run preview
```

### Formatear Código
Formatea automáticamente el código con Prettier:
```sh
npm run format
```

---

## 📂 Estructura del Proyecto

```
nails-elena/
├── src/
│   ├── components/
│   │   ├── navbar.vue              # Barra de navegación
│   │   ├── HeroSection.vue         # Sección principal de bienvenida
│   │   ├── ServiciosSection.vue    # Catálogo de servicios
│   │   └── GaleriaCompleta.vue     # Galería de trabajos
│   ├── router/
│   │   └── index.js                # Configuración de rutas
│   ├── assets/                     # Recursos estáticos (imágenes, etc)
│   ├── App.vue                     # Componente raíz
│   └── main.js                     # Punto de entrada
├── public/                         # Archivos públicos estáticos
├── index.html                      # HTML principal
├── vite.config.js                  # Configuración de Vite
├── jsconfig.json                   # Configuración de JavaScript
├── package.json                    # Dependencias del proyecto
└── README.md                       # Este archivo
```

---

## 🎨 Componentes Principales

### **navbar.vue**
Barra de navegación con enlaces a las diferentes secciones del sitio.

### **HeroSection.vue**
Sección de bienvenida con presentación principal del servicio.

### **ServiciosSection.vue**
Muestra el catálogo completo de servicios disponibles con descripciones y precios.

### **GaleriaCompleta.vue**
Galería interactiva con trabajos realizados y testimonios de clientes.

---

## 💡 Sugerencias de Desarrollo

- **VS Code**: Se recomienda usar la extensión [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) y desactivar Vetur
- **DevTools**: Instala [Vue.js DevTools](https://devtools.vuejs.org/) para depuración en el navegador
- **Formatos Personalizados**: Habilita "Custom Object Formatter" en DevTools para mejor visualización

---

## 📝 Configuración Adicional

Para más información sobre la configuración de Vite, consulta la [Documentación Oficial](https://vite.dev/config/).

---

## 📄 Licencia

Este proyecto es privado y de uso exclusivo.

---

## ✉️ Contacto

Para consultas o sugerencias sobre el desarrollo del sitio, contacta al desarrollador.
