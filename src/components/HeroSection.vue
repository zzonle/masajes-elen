<template>
  <section class="hero-section bg-white overflow-hidden py-5">
    <div class="container container-lg">
      <div class="row align-items-center g-4 g-lg-5">
        <div class="col-lg-6 order-2 order-lg-1 text-center text-lg-start">
          <div class="badge-pink mb-3 d-inline-block px-3 py-1 rounded-pill text-uppercase">
            🌸 BIENVENIDA A MASAJES ELEN 🌸
          </div>
          <h1 class="main-title text-dark mb-3">
            Realzamos tu estilo,<br />
            <span class="italic-pink">cuidamos de ti ♡</span>
          </h1>
          <p class="text-muted mb-4 lead-text">
            Uñas acrílicas, gel y diseños personalizados para que te sientas única todos los días.
          </p>

          <div
            class="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-4"
          >
            <a
              href="https://wa.me/56979472823?text=Hola%20Elena!%20%20Me%20gustar%C3%ADa%20consultar%20por%20un%20servicio%20de%20u%C3%B1as%20o%20masajes%20"
              target="_blank"
              class="btn btn-primary-pink rounded-3 px-4 py-2 text-uppercase fw-medium d-inline-flex align-items-center justify-content-center gap-2"
            >
              <i class="bi bi-whatsapp"></i>
              <span>Reserva tu hora</span>
            </a>
            <a
              href="#galeria"
              class="btn btn-outline-pink rounded-3 px-4 py-2 text-uppercase fw-medium d-inline-flex align-items-center justify-content-center"
            >
              Ver Galería
            </a>
          </div>
        </div>

        <div class="col-lg-6 order-1 order-lg-2">
          <img src="@/assets/hero-image.jpg" alt="Nails Art" class="img-fluid hero-img-fade" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.badge-pink {
  background-color: #fff0f2;
  color: #e57c91;
  font-size: 0.8rem;
  font-weight: 600;
}
.main-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
}
@media (min-width: 992px) {
  .main-title {
    font-size: 3.5rem;
  }
}
.italic-pink {
  font-style: italic;
  color: #e57c91;
}
.lead-text {
  font-size: 1.1rem;
}

/* Colores de los botones */
.btn-primary-pink {
  background-color: #e57c91;
  border-color: #e57c91;
  color: white;
}
.btn-primary-pink:hover {
  background-color: #d65d7a;
}
.btn-outline-pink {
  border: 1px solid #d6b2b8;
  color: #c45b70;
  background: transparent;
}
.btn-outline-pink:hover {
  background-color: #fff0f2;
  color: #c45b70;
}

/* EFECTO DIFUMINADO DE LA REFERENCIA */
.hero-img-fade {
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
}

@media (min-width: 992px) {
  .hero-img-fade {
    /* En PC: Altura alta y se difumina de izquierda a derecha (para fundirse con el texto) */
    height: 450px;
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 20%);
    mask-image: linear-gradient(to right, transparent 0%, black 20%);
  }
}
@media (max-width: 991px) {
  .hero-img-fade {
    /* En Celular: Altura más baja y se difumina de abajo hacia arriba */
    height: 300px;
    -webkit-mask-image: linear-gradient(to bottom, black 65%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 65%, transparent 100%);
  }
}
</style>
