<template>
  <section class="hero-section py-5 bg-light-pink-flat">
    <div class="container container-lg">
      <div class="row align-items-center g-5">
        <div class="col-lg-6 order-2 order-lg-1 text-center text-lg-start pt-4 pt-lg-0">
          <div class="badge-pink mb-3 d-inline-block px-3 py-1 rounded-pill">
            🌸 BIENVENIDA A MASAJES ELEN 🌸
          </div>
          <h1 class="display-4 fw-normal text-dark main-title mb-3">
            Realzamos tu estilo,<br />
            <span class="italic-pink">cuidamos de ti ♡</span>
          </h1>
          <p class="text-muted fs-5 mb-4 lead-text">
            Uñas soft gel y diseños personalizados para que te sientas única todos los días.
          </p>
          <div class="d-flex gap-3 justify-content-center justify-content-lg-start mb-4"></div>

          <div class="">
            <a
              href="https://wa.me/56979472823?text=Hola%20Berta!%20%20Me%20gustar%C3%ADa%20consultar%20por%20un%20servicio%20de%20u%C3%B1as%20o%20masajes%20"
              target="_blank"
              class="btn btn-primary-pink rounded-pill px-4 text-uppercase fw-medium fs-5 d-inline-flex align-items-center gap-2"
            >
              <span>¡Reservar tu hora por WhatsApp!</span>
              <img
                src="/src/assets/whatsapp-svgrepo-com.svg"
                width="30"
                height="30"
                style="filter: brightness(0) invert(1)"
                alt="WhatsApp"
              />
            </a>
          </div>
        </div>

        <div class="col-lg-6 order-1 order-lg-2 text-center position-relative">
          <div class="hero-image-wrapper mx-auto">
            <img
              src="@/assets/hero-image.jpg"
              alt="Nails Art"
              class="img-fluid rounded-oval shadow-sm"
            />
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
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}
.main-title {
  font-family: 'Playfair Display', serif;
}
.italic-pink {
  font-style: italic;
  color: #e57c91;
}
.btn-outline-pink {
  border: 1px solid #e57c91;
  color: #e57c91;
  background: transparent;
}
.btn-outline-pink:hover {
  background-color: #e57c91;
  color: white;
}
.fs-7 {
  font-size: 0.8rem;
}

/* Base image styling */
.rounded-oval {
  border-radius: 150px 150px 0 0; /* Match desktop arc */
  border: 15px solid white; /* Desktop frame */
  object-fit: cover;
}

/* Mobile specific styling */
@media (max-width: 991.98px) {
  .display-4 {
    font-size: 2.5rem;
  }
  .lead-text {
    font-size: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .hero-image-wrapper {
    max-width: 80%; /* Shrink a bit on mobile */
  }
  .rounded-oval {
    border-radius: 50% / 10% 10% 0 0; /* Flatten the arc significantly on mobile */
    border-width: 8px; /* Thinner border for small screens */
  }
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
</style>
