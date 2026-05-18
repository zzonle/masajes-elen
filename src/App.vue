<script setup>
import { ref } from 'vue'
import navbar from './components/navbar.vue'
import ServiciosSection from './components/ServiciosSection.vue'
import HeroSection from './components/HeroSection.vue'
import GaleriaCompleta from './components/GaleriaCompleta.vue'

// Datos de testimonios simulando la imagen
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
        <div class="container">
          <span class="text-uppercase text-pink d-block mb-1">Galería ♡</span>
          <h2 class="serif-title mb-4">Algunos de mis trabajos</h2>

          <div class="row g-3">
            <div class="col" v-for="n in 2" :key="n">
              <div class="gallery-wrapper overflow-hidden rounded-3 shadow-sm">
                <img
                  :src="`https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=400`"
                  class="img-fluid gallery-img"
                  alt="Trabajo"
                />
              </div>
            </div>
          </div>

          <button
            @click="verGaleria = true"
            class="btn btn-outline-pink mt-4 px-4 text-uppercase fs-7"
          >
            Ver Galerría
          </button>
        </div>
      </section>

      <GaleriaCompleta :mostrar="verGaleria" @cerrar="verGaleria = false" />
    </div>

    <section class="py-5 info-banner">
      <div class="container">
        <div class="row text-center g-4">
          <div class="col-md-3 border-end-md">
            <h5 class="text-pink mb-2">❤️ Productos de calidad</h5>
            <small class="text-muted d-block px-3"
              >Utilizo productos profesionales para cuidar la salud de tus uñas.</small
            >
          </div>
          <div class="col-md-3 border-end-md">
            <h5 class="text-pink mb-2">✨ Higiene y seguridad</h5>
            <small class="text-muted d-block px-3"
              >Instrumentos esterilizados y espacio 100% higiénico.</small
            >
          </div>
          <div class="col-md-3 border-end-md">
            <h5 class="text-pink mb-2">🕒 Atención personalizada</h5>
            <small class="text-muted d-block px-3">Cada diseño es único, como tú.</small>
          </div>
          <div class="col-md-3">
            <h5 class="text-pink mb-2">📅 Agenda tu hora</h5>
            <small class="text-muted d-block px-3">Fácil y rápido por WhatsApp, ¡te espero!</small>
          </div>
        </div>
      </div>
    </section>

    <section id="opiniones" class="py-5 bg-white text-center">
      <div class="container">
        <span class="text-pink d-block mb-1">Lo que dicen mis clientas ♡</span>
        <h2 class="serif-title mb-5">Opiniones que me motivan</h2>

        <div class="row g-4 justify-content-center">
          <div class="col-md-4" v-for="t in testimonios" :key="t.id">
            <div
              class="card border-0 bg-light-pink p-4 h-100 text-start position-relative rounded-3"
            >
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h6 class="fw-bold text-dark m-0">{{ t.nombre }}</h6>
                <div class="text-warning">
                  <span v-for="i in t.estrellas" :key="i">★</span>
                </div>
              </div>
              <p class="text-muted fs-7 m-0 italic-quote">"{{ t.texto }}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer-section pt-5 text-dark">
      <div class="container border-bottom pb-4">
        <div class="row g-4 text-start justify-content-between">
          <div class="col-md-3">
            <h6 class="fw-bold mb-3">📍 ¿DÓNDE ESTOY?</h6>
            <p class="fs-7 text-muted mb-1">Puerto Montt, Chile</p>
          </div>
          <div class="col-md-3">
            <h6 class="fw-bold mb-3">🕒 HORARIOS</h6>
            <p class="fs-7 text-muted mb-0"><b>Lunes a Viernes</b><br />10:00 - 20:00 hrs</p>
            <p class="fs-7 text-muted mb-0 mt-2"><b>Sábados</b><br />10:00 - 16:00 hrs</p>
          </div>
          <div class="col-md-3">
            <h6 class="fw-bold mb-3">💬 WHATSAPP</h6>
            <p class="fs-7 text-muted mb-1">Reserva tu hora<br />+56 9 7947 2823</p>
            <a href="https://wa.me/56979472823" class="fs-7 text-pink" target="_blank"
              >Escribirme</a
            >
          </div>
          <div class="col-md-3">
            <h6 class="fw-bold mb-3">📸 SÍGUEME</h6>
            <p class="fs-7 text-muted mb-1">@masajesyunas.elen</p>
            <a
              href="https://www.instagram.com/masajesyunas.elen"
              class="fs-7 text-pink"
              target="_blank"
              >Ver Instagram</a
            >
          </div>
        </div>
      </div>
      <div class="bg-pink-footer text-center py-4 text-white">
        <p class="m-0 fs-7">Gracias por confiar en mi trabajo ❤</p>
        <small class="opacity-75">© 2026 Masajes Elen. Diseñado con amor ❤</small>
      </div>
    </footer>

    <GaleriaCompleta :mostrar="verGaleria" @cerrar="verGaleria = false" />
  </div>
</template>

<style>
/* Estilos globales para matizar el diseño de la imagen */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Poppins:wght@300;400;500;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  background-color: #fff;
}
.serif-title {
  font-family: 'Playfair Display', serif;
}
.text-pink {
  color: #e57c91;
}
.btn-outline-pink {
  border: 1px solid #e57c91;
  color: #e57c91;
  background: white;
}
.btn-outline-pink:hover {
  background-color: #e57c91;
  color: white;
}
.gallery-img {
  transition: transform 0.4s ease;
  cursor: pointer;
  height: 250px;
  object-fit: cover;
  width: 100%;
}
.gallery-img:hover {
  transform: scale(1.08);
}
.info-banner {
  background-color: #fff0f2;
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
  bottom: 25px;
  right: 25px;
  background-color: #e57c91;
  color: white;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  z-index: 1000;
  text-decoration: none;
}
@media (min-width: 768px) {
  .border-end-md {
    border-end: 1px solid #ffd1d9;
  }
}
.fs-7 {
  font-size: 0.85rem;
}
</style>
