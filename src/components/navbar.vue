<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-4">
    <div class="container-fluid container-lg">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <h1 class="brand-text m-0 fs-3 fw-bold">Masajes</h1>
        <span class="brand-subtext m-0 fs-6 ms-1 texto-pink">ELEN</span>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse custom-transition"
        :class="{ show: isMenuOpen }"
        id="navbarNav"
      >
        <ul class="navbar-nav ms-auto text-uppercase align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="#inicio" @click="isMenuOpen = false">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#servicios" @click="isMenuOpen = false">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#galeria" @click="isMenuOpen = false">Galería</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#opiniones" @click="isMenuOpen = false">Opiniones</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<style scoped>
/* --- ESTILOS DE DISEÑO --- */
.brand-text {
  font-family: 'Playfair Display', serif;
  color: #333;
}
.brand-subtext {
  font-family: 'Poppins', sans-serif;
  color: #888;
  letter-spacing: 2px;
  font-weight: 300;
}
.nav-link {
  color: #e57c91 !important;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 1px;
}
.nav-link:hover,
.nav-link.active {
  color: #333 !important;
}
.texto-pink {
  color: #e57c91;
}

@media (max-width: 991.98px) {
  .navbar-nav {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

/* --- ANIMACIÓN FLUIDA SIN ROMPER BOOTSTRAP --- */
@media (max-width: 991.98px) {
  .custom-transition {
    display: block !important; /* Evita que Bootstrap lo oculte bruscamente */
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition:
      max-height 0.4s ease-in-out,
      opacity 0.3s ease-in-out;
  }

  /* Cuando Vue le añade la clase 'show', se despliega suavemente */
  .custom-transition.show {
    max-height: 350px; /* Altura máxima para cubrir tus enlaces */
    opacity: 1;
  }
}
</style>
