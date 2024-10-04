<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <a class="navbar-brand d-flex align-items-center" href="#home">
      MonteStack
      <img class="logo ms-2" src="icons/logoMonte.png" alt="Logo" />
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#home">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#services">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">Sobre Mí</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contacto</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  mounted() {
    // Agrega un evento click para cerrar el menú cuando se hace clic en cualquier enlace
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbarCollapse.classList.remove("show");
      });
    });
  },
};
</script>

<style scoped>
.navbar {
  background-color: #f8f9fa;
  padding: 10px 20px;
}

.navbar-brand {
  color: #0e0d0d;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  padding: 0;
}

.navbar-brand .logo {
  width: 180px;
  height: auto;
  margin-left: 10px;
  transform: translateY(0px);
}

.navbar-nav .nav-link {
  color: #0c0c0c;
  padding: 8px 15px;
}

.navbar-toggler {
  border: none;
}

@media (max-width: 768px) {
  .navbar-nav {
    text-align: center;
  }
  .navbar-nav .nav-link {
    margin-bottom: 10px;
  }
}
</style>
