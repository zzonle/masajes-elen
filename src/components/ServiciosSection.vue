<script setup>
import { ref } from 'vue'

const manicura = ref([
  'Esmaltado Permanente',
  'Uñas soft gel',
  'Manicura completa',
  'Retiro de producto',
])

const masajes = ref([
  'Masajes de relajación',
  'Detox tren superior',
  'Piernas cansadas',
  'Drenaje linfático cuerpo completo',
  'Cervico craneal',
])
</script>

<template>
  <section class="py-5 bg-white text-center">
    <div class="container max-container px-4">
      <h2 class="section-title mb-4 fs-3 fs-md-2">SERVICIOS</h2>

      <div class="row g-4 justify-content-center">
        <div class="col-md-5 mx-md-3">
          <div class="category-badge mb-3 py-2 px-4 shadow-xs">MANICURA</div>
          <ul class="list-unstyled service-list text-start">
            <li v-for="(item, i) in manicura" :key="i" class="py-2.5 d-flex align-items-start">
              <span class="bullet-flower me-2 pt-0.5">🌸</span>
              <span class="service-text">{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="col-md-5 mx-md-3 mt-4 mt-md-0">
          <div class="category-badge mb-3 py-2 px-4 shadow-xs">MASAJES MANUALES</div>
          <ul class="list-unstyled service-list text-start">
            <li v-for="(item, i) in masajes" :key="i" class="py-2.5 d-flex align-items-start">
              <span class="bullet-flower me-2 pt-0.5">🌸</span>
              <span class="service-text">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-5 pt-2">
        <div class="domicilio-banner py-2 px-3 d-inline-block rounded-pill">
          <p class="domicilio-text m-0 fs-7 fs-md-6">✨ CONSULTA POR TU SERVICIO A DOMICILIO ✨</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.max-container {
  max-width: 850px;
}
.section-title {
  font-family: 'Cinzel', serif;
  color: #5a4b41;
  letter-spacing: 4px;
  font-weight: 500;
}
.category-badge {
  background-color: #f3e5e2;
  color: #6e5a51;
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  letter-spacing: 2px;
  border-radius: 6px;
  font-weight: 600;
}
.service-list li {
  font-family: 'Montserrat', sans-serif;
  color: #60524a;
  font-size: 1rem;
  font-weight: 400;
  border-bottom: 1px dashed #f3e5e2;
}
@media (min-width: 768px) {
  .category-badge {
    font-size: 1.1rem;
  }
  .service-list li {
    font-size: 1.1rem;
  }
}
.bullet-flower {
  font-size: 0.85rem;
  line-height: 1;
}
.service-text {
  line-height: 1.4;
}
.domicilio-banner {
  background-color: #fff0f2;
  border: 1px dashed #e57c91;
}
.domicilio-text {
  font-family: 'Cinzel', serif;
  color: #6e5a51;
  font-weight: 600;
  letter-spacing: 1px;
}
</style>
