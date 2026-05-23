<script setup>
import { ref } from 'vue'
import navbar from './components/navbar.vue'
import ServiciosSection from './components/ServiciosSection.vue'
import HeroSection from './components/HeroSection.vue'
import GaleriaCompleta from './components/GaleriaCompleta.vue'

import fotosData from '@/assets/fotos.json'
import { cld } from '@/main.js'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { AdvancedImage } from '@cloudinary/vue'

const getImage = (publicId) =>
  cld.image(publicId).resize(fill().width(500).height(600)).format('auto').quality('auto')

const total = fotosData.length
const preview = [
  fotosData[0],
  fotosData[Math.floor(total / 3)],
  fotosData[Math.floor((total / 3) * 2)],
  fotosData[7],
]
const testimonios = ref([
  {
    id: 1,
    nombre: 'Carla M.',
    estrellas: 5,
    texto: 'Me encantó el resultado, súper profesional y amorosa. Volveré siempre ✨',
  },
  {
    id: 2,
    nombre: 'Valentina R.',
    estrellas: 5,
    texto: 'Los diseños son increíbles y duran mucho. 100% recomendada 🥰',
  },
  {
    id: 3,
    nombre: 'Fernanda L.',
    estrellas: 5,
    texto: 'El lugar es hermoso y muy limpio. Me siento muy cómoda siempre 💗',
  },
])
const verGaleria = ref(false)
</script>

<template>
  <div class="app-container">
    <navbar />

    <div id="inicio">
      <HeroSection />
    </div>

    <div id="servicios">
      <ServiciosSection />
    </div>

    <div id="galeria">
      <section class="py-5 bg-white text-center">
        <div class="container px-4 m-max-width">
          <span class="text-uppercase text-pink d-block mb-1 tracking-wider small">Galería ♡</span>
          <h2 class="serif-title mb-5 fs-2">Trabajos Recientes</h2>

          <div class="row g-3 align-items-center justify-content-center">
            <div
              class="row g-2 g-md-3 justify-content-center"
              style="max-width: 600px; margin: 0 auto"
            >
              <div class="col-6" v-for="(foto, i) in preview" :key="i">
                <div class="preview-card overflow-hidden rounded-4 shadow-sm position-relative">
                  <AdvancedImage
                    :cldImg="getImage(foto.publicId)"
                    class="preview-img"
                    alt="Trabajo"
                  />
                  <div class="preview-badge">Uñas Elena</div>
                </div>
              </div>
            </div>
          </div>

          <button
            @click="verGaleria = true"
            class="btn btn-outline-pink-ref mt-5 px-5 py-2 text-uppercase fs-7 fw-medium rounded-pill"
          >
            Explorar Catálogo Completa
          </button>
        </div>
      </section>
    </div>

    <section class="py-5" style="background-color: #fff5f6">
      <div class="container">
        <div
          class="row flex-nowrap overflow-x-auto pb-3 g-3 px-3 scroll-mobile justify-content-md-center"
        >
          <div class="col-10 col-sm-6 col-md-4 col-lg-3 flex-shrink-0">
            <div class="card border-0 shadow-sm p-4 h-100 text-center bg-white rounded-3">
              <div class="icon-circle mb-3"><i class="bi bi-gem text-pink"></i></div>
              <h3 class="fs-5 fw-bold text-dark-pink mb-2">Productos de calidad</h3>
              <p class="fs-7 text-muted lh-base m-0">
                Utilizo productos profesionales para cuidar la salud de tus uñas.
              </p>
            </div>
          </div>

          <div class="col-10 col-sm-6 col-md-4 col-lg-3 flex-shrink-0">
            <div class="card border-0 shadow-sm p-4 h-100 text-center bg-white rounded-3">
              <div class="icon-circle mb-3">
                <i class="bi bi-shield-check text-pink"></i>
              </div>
              <h3 class="fs-5 fw-bold text-dark-pink mb-2">Higiene y seguridad</h3>
              <p class="fs-7 text-muted lh-base m-0">
                Instrumentos esterilizados y espacio 100% higiénico.
              </p>
            </div>
          </div>

          <div class="col-10 col-sm-6 col-md-4 col-lg-3 flex-shrink-0">
            <div class="card border-0 shadow-sm p-4 h-100 text-center bg-white rounded-3">
              <div class="icon-circle mb-3">
                <i class="bi bi-calendar-heart text-pink"></i>
              </div>
              <h3 class="fs-5 fw-bold text-dark-pink mb-2">Agenda tu hora</h3>
              <p class="fs-7 text-muted lh-base m-0">
                Fácil y rápido por WhatsApp. ¡Te espero para consentirte!
              </p>
            </div>
          </div>

          <div class="col-10 col-sm-6 col-md-4 col-lg-3 flex-shrink-0">
            <div class="card border-0 shadow-sm p-4 h-100 text-center bg-white rounded-3">
              <div class="icon-circle mb-3">
                <i class="bi bi-heart text-pink"></i>
              </div>
              <h3 class="fs-5 fw-bold text-dark-pink mb-2">Atención personalizada</h3>
              <p class="fs-7 text-muted lh-base m-0">
                Cada diseño es único, pensado especialmente como tú.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="opiniones" class="py-5 bg-white text-center">
      <div class="container">
        <span class="text-pink d-block mb-1 tracking-wider">Lo que dicen mis clientas ♡</span>
        <h2 class="serif-title mb-4 fs-2">Opiniones que me motivan</h2>

        <div
          class="row flex-nowrap overflow-x-auto pb-3 g-3 px-3 scroll-mobile justify-content-md-center"
        >
          <div class="col-10 col-sm-6 col-md-4 flex-shrink-0" v-for="t in testimonios" :key="t.id">
            <div
              class="card border-0 bg-light-pink p-4 h-100 text-start position-relative rounded-3 shadow-xs"
            >
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="fw-bold text-dark m-0 fs-7">{{ t.nombre }}</h6>
                <div class="text-warning small">
                  <span v-for="i in t.estrellas" :key="i">★</span>
                </div>
              </div>
              <p class="text-muted fs-7 m-0 italic-quote lh-base">"{{ t.texto }}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer-section pt-5 text-dark">
      <div class="container px-4 border-bottom pb-4">
        <div class="row g-4 text-center text-md-start justify-content-between">
          <div class="col-sm-6 col-md-3">
            <h6 class="fw-bold mb-2 small tracking-wider">📍 ¿DÓNDE ESTOY?</h6>
            <p class="fs-7 text-muted mb-1">Puerto Montt, Chile</p>
          </div>
          <div class="col-sm-6 col-md-3">
            <h6 class="fw-bold mb-2 small tracking-wider">🕒 HORARIOS</h6>
            <p class="fs-7 text-muted mb-0"><b>Lunes a Viernes</b><br />10:00 - 20:00 hrs</p>
            <p class="fs-7 text-muted mb-0 mt-2"><b>Sábados</b><br />10:00 - 16:00 hrs</p>
          </div>
          <div class="col-sm-6 col-md-3">
            <h6 class="fw-bold mb-2 small tracking-wider">💬 WHATSAPP</h6>
            <p class="fs-7 text-muted mb-2">Reserva tu hora<br />+56 9 7947 2823</p>
            <a
              href="https://wa.me/56979472823?text=Hola%20Elena!%20%20Me%20gustar%C3%ADa%20consultar%20por%20un%20servicio%20de%20u%C3%B1as%20o%20masajes%20"
              class="btn btn-sm btn-pink-text px-3 rounded-pill fs-7"
              target="_blank"
              >Escribirme</a
            >
          </div>
          <div class="col-sm-6 col-md-3">
            <h6 class="fw-bold mb-2 small tracking-wider">📸 SÍGUEME</h6>
            <p class="fs-7 text-muted mb-2">@masajesyunas.elen</p>
            <a
              href="https://www.instagram.com/masajesyunas.elen"
              class="btn btn-sm btn-pink-text px-3 rounded-pill fs-7"
              target="_blank"
              >Ver Instagram</a
            >
          </div>
        </div>
      </div>
      <div class="bg-pink-footer text-center py-4 text-white">
        <p class="m-0 fs-7">Gracias por confiar en mi trabajo ❤</p>
        <small class="opacity-75 fs-8">© 2026 Masajes Elen. Diseñado con amor ❤</small>
      </div>
    </footer>

    <a
      href="https://wa.me/56979472823?text=Hola%20Elena!%20%20Me%20gustar%C3%ADa%20consultar%20por%20un%20servicio%20de%20u%C3%B1as%20o%20masajes%20"
      class="whatsapp-floating-btn shadow"
      target="_blank"
    >
      <img
        src="/src/assets/whatsapp-svgrepo-com.svg"
        alt="WhatsApp"
        style="width: 32px; height: 32px; filter: brightness(0) invert(1)"
      />
    </a>

    <GaleriaCompleta :mostrar="verGaleria" @cerrar="verGaleria = false" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
  overflow-x: hidden; /* Evita scrolls raros hacia los lados */
}
.serif-title {
  font-family: 'Playfair Display', serif;
}
.text-pink {
  color: #e57c91;
}
.tracking-wider {
  letter-spacing: 1.5px;
}
.btn-outline-pink {
  border: 1px solid #e57c91;
  color: #e57c91;
  background: white;
  transition: all 0.3s ease;
}
.btn-outline-pink:hover {
  background-color: #e57c91;
  color: white;
}
.btn-pink-text {
  color: #e57c91;
  border: 1px solid #ffeef0;
  background-color: #fff7f8;
}
.btn-pink-text:hover {
  background-color: #e57c91;
  color: white;
}
.gallery-img {
  transition: transform 0.4s ease;
  cursor: pointer;
  height: 180px; /* Reducido un poco para móviles */
  object-fit: cover;
  width: 100%;
}
@media (min-width: 768px) {
  .gallery-img {
    height: 250px;
  }
}
.gallery-img:hover {
  transform: scale(1.04);
}
.bg-light-pink {
  background-color: #fff7f8;
  border: 1px solid #ffeef0 !important;
}
.italic-quote {
  font-style: italic;
}
.footer-section {
  background-color: #fffafb;
}
.bg-pink-footer {
  background-color: #e57c91;
}

.whatsapp-floating-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #25d366;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  z-index: 1050;
  text-decoration: none;
  transition: transform 0.3s ease;
}
.whatsapp-floating-btn:hover {
  transform: scale(1.1);
  color: white;
}

.icon-circle {
  width: 50px;
  height: 50px;
  background-color: #fff0f2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 1.3rem;
}

@media (max-width: 991.98px) {
  .scroll-mobile {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Oculta barra en Firefox */
  }
  .scroll-mobile::-webkit-scrollbar {
    display: none; /* Oculta barra en Chrome/Safari */
  }
}

.fs-7 {
  font-size: 0.85rem;
}
.fs-8 {
  font-size: 0.75rem;
}

.text-dark-pink {
  color: #c45b70;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.5px;
}
.text-muted {
  color: #6c757d !important;
}
.lh-base {
  line-height: 1.5 !important;
}
.m-max-width {
  max-width: 800px;
}

.preview-card {
  aspect-ratio: 4 / 5; /* proporción vertical, ni muy alta ni muy ancha */
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-tall,
.card-short {
  aspect-ratio: 3 / 4; /* proporción vertical tipo retrato */
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (min-width: 768px) {
  .card-tall,
  .card-short {
    height: 320px; /* este ya estaba bien */
  }
}

.preview-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.preview-card:hover .preview-img {
  transform: scale(1.04);
}

/* Una etiqueta minimalista y fina que se asoma abajo de la foto */
.preview-badge {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background-color: rgba(255, 255, 255, 0.9);
  color: #5a4b41;
  font-family: 'Poppins', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 6px;
  backdrop-filter: blur(4px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
@media (min-width: 768px) {
  .preview-badge {
    font-size: 0.8rem;
    bottom: 20px;
    left: 20px;
  }
}
</style>
