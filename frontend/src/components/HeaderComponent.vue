<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <a class="navbar-brand d-flex align-items-center" href="#home">
      MonteStack
      <img class="logo ms-2" src="icons/logoMonte.png" alt="brand-img" />
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
  background-color: #15435a;
  padding: 10px 20px;
}

.navbar-brand {
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 2rem;
  padding: 0;
}

.navbar-brand:hover {
  color: #e1b166;
}

.navbar-brand .logo {
  width: 150px;
  height: auto;
  margin-left: 10px;
  transform: translateY(-12px);
}

.navbar-nav .nav-link {
  color: white;
  padding: 8px 15px;
}

.nav-link:hover {
  color: #e1b166;
}

.navbar-toggler {
  background-color: #e1b166;
  
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