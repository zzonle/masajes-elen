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
    <div class="container max-container">
      <h2 class="section-title mb-5">SERVICIOS</h2>

      <div class="row g-4 justify-content-center">
        <div class="col-md-5 mx-3">
          <div class="category-badge mb-4 py-2 px-4">MANICURA</div>
          <ul class="list-unstyled service-list text-start">
            <li v-for="(item, i) in manicura" :key="i" class="mb-3 d-flex align-items-center">
              <span class="bullet-flower me-3">🌸</span> {{ item }}
            </li>
          </ul>
        </div>

        <div class="col-md-5 mx-3 mt-5 mt-md-0">
          <div class="category-badge mb-4 py-2 px-4">MASAJES TÉCNICA MANUAL</div>
          <ul class="list-unstyled service-list text-start">
            <li v-for="(item, i) in masajes" :key="i" class="mb-3 d-flex align-items-center">
              <span class="bullet-flower me-3">🌸</span> {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-5 pt-3">
        <p class="domicilio-text tracking-wider m-0">✨ CONSULTA POR TU SERVICIO A DOMICILIO ✨</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600&family=Montserrat:wght@300;400;500&display=swap');

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
  font-size: 1.1rem;
  letter-spacing: 2px;
  border-radius: 4px;
  font-weight: 600;
}
.service-list li {
  font-family: 'Montserrat', sans-serif;
  color: #60524a;
  font-size: 1.15rem;
  font-weight: 400;
  border-bottom: 1px dashed #f3e5e2;
  padding-bottom: 8px;
}
.bullet-flower {
  font-size: 0.9rem;
  opacity: 0.8;
}
.domicilio-text {
  font-family: 'Cinzel', serif;
  color: #6e5a51;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 1px;
}
</style>
