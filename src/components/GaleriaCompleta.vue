<script setup>
import { ref } from 'vue'

// Definimos si el bloque está visible o no
defineProps({
  mostrar: Boolean,
})

defineEmits(['cerrar'])

// Aquí pones todas las fotos de las uñas que ha hecho
const fotosUñas = ref([
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=400',
    estilo: 'Soft Gel Premium',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1604654894610-df490651e56c?q=80&w=400',
    estilo: 'Esmaltado Permanente Nude',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=400',
    estilo: 'Nail Art Mano Alzada',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=400',
    estilo: 'Francesa Clásica',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=400',
    estilo: 'Efecto Aurora',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=400',
    estilo: 'Diseño con Cristales',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1604654894610-df490651e56c?q=80&w=400',
    estilo: 'Kapping Gel',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1632345031435-8797b2d58045?q=80&w=400',
    estilo: 'Glitter Encapsulado',
  },
])
</script>

<template>
  <div
    v-if="mostrar"
    class="modal-overlay d-flex align-items-center justify-content-center animate__animated animate__fadeIn"
  >
    <div
      class="modal-content-custom bg-white p-4 p-md-5 rounded-4 shadowposition-relative overflow-auto"
    >
      <button @click="$emit('cerrar')" class="btn-close-custom shadow-sm">&times;</button>

      <div class="text-center mb-4">
        <span class="text-uppercase tracking-wider text-pink small d-block mb-1"
          >Elegancia en tus manos ♡</span
        >
        <h3 class="serif-title mb-2" style="color: #5a4b41">Catálogo de Trabajos</h3>
        <hr class="mx-auto" style="width: 60px; color: #e57c91; height: 2px" />
      </div>

      <div class="row g-3 row-cols-2 row-cols-md-4">
        <div class="col" v-for="foto in fotosUñas" :key="foto.id">
          <div class="gallery-card overflow-hidden rounded-3 position-relative shadow-sm">
            <img :src="foto.url" class="img-fluid full-gallery-img" :alt="foto.estilo" />
            <div class="overlay-text d-flex align-items-center justify-content-center">
              <span class="text-white small text-center text-uppercase p-2">{{ foto.estilo }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(90, 75, 65, 0.7);
  z-index: 2000;
  padding: 20px;
}
.modal-content-custom {
  max-width: 1000px;
  width: 100%;
  max-height: 85vh;
  border: 1px solid #ffeef0;
}
.btn-close-custom {
  position: absolute;
  top: 15px;
  right: 20px;
  background: #f3e5e2;
  border: none;
  font-size: 2rem;
  color: #6e5a51;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  line-height: 40px;
  transition: all 0.2s;
}
.btn-close-custom:hover {
  background-color: #e57c91;
  color: white;
}
.gallery-card {
  height: 200px;
  cursor: pointer;
}
.full-gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}
.gallery-card:hover .full-gallery-img {
  transform: scale(1.06);
}
.overlay-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(229, 124, 145, 0.6);
  opacity: 0;
  transition: opacity 0.3s;
}
.gallery-card:hover .overlay-text {
  opacity: 1;
}
</style>
