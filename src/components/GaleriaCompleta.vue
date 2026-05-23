<script setup>
import { computed } from 'vue'
import { AdvancedImage, lazyload, responsive } from '@cloudinary/vue'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { cld } from '@/main.js'
import { ref } from 'vue'
import fotosData from '@/assets/fotos.json'
defineProps({
  mostrar: Boolean,
  publicId: { type: String, required: false },
  width: { type: Number, default: 400 },
  height: { type: Number, default: 300 },
})

defineEmits(['cerrar'])

const plugins = [lazyload(), responsive()]

const fotosUñas = ref(
  fotosData.map((foto, index) => ({
    id: index,
    publicId: foto.publicId,
    estilo: 'Uñas Elena',
  })),
)
const getImage = (publicId) =>
  cld.image(publicId).resize(fill().width(400).height(300)).format('auto').quality('auto')
</script>

<template>
  <div
    v-if="mostrar"
    class="modal-overlay d-flex align-items-center justify-content-center p-2 p-md-4"
  >
    <button @click="$emit('cerrar')" class="btn-close-custom shadow-sm" aria-label="Cerrar">
      <img src="@/assets/close-icon.svg" alt="Cerrar" />
    </button>
    <div
      class="modal-content-custom bg-white p-3 p-md-5 rounded-4 shadow position-relative overflow-auto"
    >
      <div class="text-center mb-4 mt-2">
        <span class="text-uppercase tracking-wider text-pink small d-block mb-1"
          >Elegancia en tus manos ♡</span
        >
        <h3 class="serif-title mb-2 fs-4 fs-md-2" style="color: #5a4b41">Catálogo de Trabajos</h3>
        <hr class="mx-auto my-2" style="width: 50px; color: #e57c91; height: 2px; opacity: 1" />
      </div>

      <div class="row g-2 g-md-3 row-cols-2 row-cols-md-4">
        <div class="col" v-for="foto in fotosUñas" :key="foto.id">
          <div class="gallery-card overflow-hidden rounded-3 position-relative shadow-sm">
            <AdvancedImage
              :cldImg="getImage(foto.publicId)"
              :plugins="plugins"
              class="img-fluid full-gallery-img"
              :alt="foto.estilo"
            />

            <div class="overlay-text d-flex align-items-end justify-content-center pb-2">
              <span class="text-white text-uppercase badge-style px-2 py-1 text-center w-90">
                {{ foto.estilo }}
              </span>
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
  background-color: rgba(90, 75, 65, 0.75);
  z-index: 2500;
  backdrop-filter: blur(4px);
}
.modal-content-custom {
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  border: 1px solid #ffeef0;
}
.btn-close-custom {
  position: fixed;
  top: 12px;
  right: 12px;
  background: #f3e5e2;
  border: none;
  color: #6e5a51;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}
.btn-close-custom:hover {
  background-color: #e57c91;
  color: white;
}
.gallery-card {
  height: 150px;
}
@media (min-width: 768px) {
  .gallery-card {
    height: 200px;
  }
}
.full-gallery-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.overlay-text {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(90, 75, 65, 0.7) 0%, rgba(0, 0, 0, 0) 50%);
}
.badge-style {
  font-size: 0.65rem;
  letter-spacing: 0.5px;
  background-color: rgba(229, 124, 145, 0.85);
  border-radius: 4px;
  backdrop-filter: blur(2px);
  max-width: 90%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
@media (min-width: 768px) {
  .badge-style {
    font-size: 0.75rem;
  }
  .overlay-text {
    opacity: 0;
    transition: opacity 0.3s;
    background: rgba(229, 124, 145, 0.6);
    align-items: center !important;
    padding-bottom: 0 !important;
  }
  .gallery-card:hover .overlay-text {
    opacity: 1;
  }
  .gallery-card:hover .full-gallery-img {
    transform: scale(1.06);
  }
  .badge-style {
    background-color: transparent;
    white-space: normal;
    max-width: 100%;
  }
}
.btn-close-custom img {
  width: 20px;
  height: 20px;
}
</style>
