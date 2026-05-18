<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm py-2">
    <div class="container-fluid container-lg">
      <a class="navbar-brand d-flex align-items-center" href="#">
        <h1 class="brand-text m-0 fs-3 fw-bold">Masajes</h1>
        <span class="brand-subtext m-0 fs-6 ms-1">ELENA</span>
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav" ref="navbarNavCollapse">
        <ul class="navbar-nav mx-auto text-uppercase align-items-center">
          <li class="nav-item">
            <a class="nav-link" href="#inicio" @click="closeMenu">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#servicios" @click="closeMenu">Servicios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#galeria" @click="closeMenu">Galería</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#opiniones" @click="closeMenu">Opiniones</a>
          </li>
        </ul>
        <div class="d-flex justify-content-center mt-3 mt-lg-0">
          <a
            href="https://wa.me/56979472823?text=Hola%20Elena!%20%20Me%20gustar%C3%ADa%20consultar%20por%20un%20servicio%20de%20u%C3%B1as%20o%20masajes%20"
            target="_blank"
            class="btn btn-primary-pink rounded-pill px-4 text-uppercase fw-medium fs-7"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Collapse } from 'bootstrap'

const isMenuOpen = ref(false)
const navbarNavCollapse = ref(null)
let bsCollapse = null

onMounted(() => {
  bsCollapse = new Collapse(navbarNavCollapse.value, { toggle: false })
})

const closeMenu = () => {
  if (isMenuOpen.value) {
    bsCollapse.hide()
    isMenuOpen.value = false
  }
}
</script>

<style scoped>
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
  color: #d65d7a !important;
}
.btn-primary-pink {
  background-color: #e57c91;
  border-color: #e57c91;
  color: white;
}
.btn-primary-pink:hover {
  background-color: #d65d7a;
  border-color: #d65d7a;
}
.fs-7 {
  font-size: 0.8rem;
}

@media (max-width: 991.98px) {
  .navbar-nav {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
</style>
