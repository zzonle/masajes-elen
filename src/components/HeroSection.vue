<template>
  <section class="hero-section py-4 py-md-5 bg-light-pink-flat">
    <div class="container container-lg px-4">
      <div class="row align-items-center g-4 g-lg-5">
        <div class="col-lg-6 text-center position-relative order-1 order-lg-2">
          <div class="hero-image-wrapper mx-auto">
            <img
              src="@/assets/hero-image.jpg"
              alt="Nails Art"
              class="img-fluid rounded-hero-profile shadow-sm"
            />
          </div>
        </div>

        <div class="col-lg-6 text-center text-lg-start order-2 order-lg-1">
          <div class="badge-pink mb-3 d-inline-block px-3 py-1 rounded-pill text-uppercase">
            🌸 Bienvenida a Masajes Elen
          </div>
          <h1 class="main-title text-dark mb-3">
            Realzamos tu estilo,<br />
            <span class="italic-pink">cuidamos de ti ♡</span>
          </h1>
          <p class="text-muted mb-4 lead-text">
            Uñas soft gel y diseños personalizados para que te sientas única todos los días.
          </p>

          <div class="pt-2">
            <a
              href="https://wa.me/56979472823?text=Hola%20Elena!%20%20Me%20gustar%C3%ADa%20consultar%20por%20un%20servicio%20de%20u%C3%B1as%20o%20masajes%20"
              target="_blank"
              class="btn btn-primary-pink rounded-pill px-4 py-2.5 text-uppercase fw-medium fs-7 fs-md-6 d-inline-flex align-items-center gap-2 shadow-sm"
            >
              <span>Reservar por WhatsApp</span>
              <i class="bi bi-whatsapp fs-5"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-light-pink-flat {
  background-color: #fffafb;
}
.badge-pink {
  background-color: #fff0f2;
  color: #e57c91;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.main-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  line-height: 1.2;
}
@media (min-width: 992px) {
  .main-title {
    font-size: 3.2rem;
  }
}
.italic-pink {
  font-style: italic;
  color: #e57c91;
}
.lead-text {
  font-size: 0.95rem;
  color: #6c757d;
}
@media (min-width: 768px) {
  .lead-text {
    font-size: 1.1rem;
  }
}

/* MARCO FOTO PROFILE (Círculo perfecto en móvil, arco en escritorio) */
.rounded-hero-profile {
  width: 240px;
  height: 240px;
  border-radius: 50%; /* Esfera limpia en móviles */
  border: 10px solid white;
  object-fit: cover;
}
@media (min-width: 992px) {
  .rounded-hero-profile {
    width: 100%;
    height: auto;
    max-height: 480px;
    border-radius: 180px 180px 0 0; /* Arco clásico de salón de belleza */
    border-width: 15px;
  }
}

.btn-primary-pink {
  background-color: #e57c91;
  border-color: #e57c91;
  color: white;
  transition: all 0.3s ease;
}
.btn-primary-pink:hover {
  background-color: #d65d7a;
  border-color: #d65d7a;
  transform: translateY(-1px);
}
.fs-7 {
  font-size: 0.85rem;
}
</style>
