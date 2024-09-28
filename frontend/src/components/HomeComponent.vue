<template>
  <div class="home-container">
    <div class="container mt-5 pt-5">
      <!-- Sección de inicio -->
      <section id="home" class="section home-section text-center">
        <div class="hero-content">
          <h1 class="display-3">Bienvenido a MonteStack</h1>
          <p class="lead">Tu solución integral para desarrollo de software. Ofrecemos servicios
            personalizados para ayudarte a alcanzar tus objetivos tecnológicos.</p>
          <a href="#services" class="btn btn-primary btn-lg">Descubre Nuestros Servicios</a>
        </div>
      </section>

      <!-- Sección de servicios -->
      <section id="services" class="section services-section">
        <div class="container">
          <h2 class="text-center">Servicios</h2>
          <div class="row">
            <!-- Servicio 1 -->
            <div class="col-md-4">
              <div class="service-card">
                <img src="/icons/software-development.png" alt="Desarrollo de Software" class="service-icon" />
                <h3>Desarrollo de Software</h3>
                <p>Creación de aplicaciones a medida utilizando las últimas tecnologías para cumplir con tus necesidades
                  específicas.</p>
              </div>
            </div>

            <!-- Servicio 2 -->
            <div class="col-md-4">
              <div class="service-card">
                <img src="/icons/consultancy1.png" alt="Consultoría" class="service-icon" />
                <h3>Consultoría</h3>
                <p>Asesoramiento experto en estrategias tecnológicas y soluciones para mejorar la eficiencia y
                  productividad de tu negocio.</p>
              </div>
            </div>

            <!-- Servicio 3 -->
            <div class="col-md-4">
              <div class="service-card">
                <img src="/icons/support1.png" alt="Soporte Técnico" class="service-icon" />
                <h3>Soporte Técnico</h3>
                <p>Asistencia técnica continua para resolver problemas y mantener tus sistemas funcionando sin
                  contratiempos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Sección de sobre mí -->
<section id="about" class="section about-section">
  <div class="container">
    <h2 class="text-center">Sobre Mí</h2>
    <div class="row">
      <!-- Información Personal -->
      <div class="col-md-6">
        <div class="info-box">
          <h3>Quién Soy</h3>
          <img src="ivanProf.jpeg" alt="Iván Maximiliano Monte" class="about-me-image" />
          <div class="about-me-text">
            <p>
              Soy Iván Maximiliano Monte, desarrollador de software con experiencia en diversas tecnologías.
              Mi enfoque se centra en crear soluciones eficientes y adaptadas a las necesidades actuales. A través de
              mi marca personal, MonteStack, ofrezco servicios de desarrollo personalizados, siempre comprometido con
              la calidad y la mejora continua. Mi objetivo es ayudar a empresas y emprendedores a llevar sus
              ideas a la realidad con un enfoque práctico y accesible.
            </p>
          </div>
        </div>
      </div>

      <!-- Habilidades -->
      <div class="col-md-6">
        <div class="info-box">
          <h3>Tecnologías</h3>
          <div class="skills">
            <div class="skill">
              <img src="/icons/python.png" alt="Python" class="skill-icon" />
              <p>Python</p>
            </div>
            <div class="skill">
              <img src="/icons/csharp96.png" alt="C#" class="skill-icon" />
              <p>C#</p>
            </div>
            <div class="skill">
              <img src="/icons/.net.png" alt=".NET" class="skill-icon" />
              <p>.NET</p>
            </div>
            <div class="skill">
              <img src="/icons/js.png" alt="JavaScript" class="skill-icon" />
              <p>JavaScript</p>
            </div>
            <div class="skill">
              <img src="/icons/nuxt.png" alt="Nuxt" class="skill-icon" />
              <p>Nuxt</p>
            </div>
            <div class="skill">
              <img src="/icons/vuejs.png" alt="Vue.js" class="skill-icon" />
              <p>Vue.js</p>
            </div>
            <div class="skill">
              <img src="/icons/nodejs.png" alt="Node.js" class="skill-icon" />
              <p>Node.js</p>
            </div>
            <div class="skill">
              <img src="/icons/express.png" alt="Express.js" class="skill-icon" />
              <p>Express.js</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Proyectos Destacados -->
    <div class="row">
      <h3 class="text-center">Proyectos Destacados</h3>
      <div class="col-md-4">
        <div class="project-box">
          <a href="https://newrepo-oaw4.onrender.com/" target="_blank" class="project-link">
            <h4>Sistema para venta de autos CSE Motors</h4>
            <p>Sistema de gestión de inventarios desarrollado con Node.js y PostgreSQL.</p>
            <img src="/cse340.png" alt="CSE Motors">
          </a>
        </div>
        <div class="project-box">
          <a href="" target="_blank" class="project-link">
            <h4>Inventario Management System</h4>
            <p>Sistema de gestión de inventarios desarrollado con Node.js y PostgreSQL.</p>
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="project-box">
          <a href="https://ivanmax11.github.io/Challengewdd330/src/#" target="_blank" class="project-link">
            <h4>NASA API Explorer</h4>
            <p>Aplicación web con API de la NASA para explorar contenido y descubrir información asombrosa.</p>
            <img src="/nasaApp.png" alt="NASA API Explorer">
          </a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="project-box">
          <a href="https://yourproject3.com" target="_blank" class="project-link">
            <h4>Veterinary Clinics App</h4>
            <p>Aplicación para recopilar información sobre clínicas veterinarias.</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


    <!-- Sección de contacto -->
    <section id="contact" class="section contact-section">
      <div class="container">
        <h2 class="text-center">Contacto</h2>
        <p class="text-center">Completa el siguiente formulario para ponerte en contacto conmigo:</p>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="mb-3">
            <label for="name" class="form-label">Nombre</label>
            <input type="text" v-model="form.name" class="form-control" id="name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" v-model="form.email" class="form-control" id="email" required>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Teléfono</label>
            <input type="text" v-model="form.phone" class="form-control" id="phone">
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Mensaje</label>
            <textarea v-model="form.message" class="form-control" id="message" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
        <div v-if="successMessage" class="alert alert-success mt-3" role="alert">
          ¡Gracias por contactarte conmigo! Serás redirigido a la página de inicio en unos momentos.
        </div>
      </div>
    </section>

  </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  setup() {

    const form = ref({
      name: '',
      email: '',
      message: ''
    });
    const successMessage = ref(false);

    const submitForm = async () => {
      try {
        console.log('Enviando formulario...');
        // Defining apiUrl correctly from the enviroments
        const apiUrl = process.env.VUE_APP_API_URL;


        const response = await axios.post(`${apiUrl}/api/contacts`, {
          name: form.value.name,
          email: form.value.email,
          message: form.value.message,
          phone: form.value.phone, // Agregar el campo de teléfono

        });

        console.log('Respuesta del servidor:', response);

        if (response.status === 201) {
          successMessage.value = true;
          form.value.name = '';
          form.value.email = '';
          form.value.message = '';
          form.value.phone = ''; // Limpiar el campo de teléfono


          // Scroll hacia la parte superior o hacia una sección específica
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 3000);
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error al enviar tu mensaje, por favor intenta más tarde.');
      }
    };


    return { form, successMessage, submitForm };
  }
};
</script>

<style scoped>
.home-section {
  background-image: url('/public/icons/desarrollo-web.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #ffffff;
  padding: 100px 20px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.hero-content {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 40px;
  border-radius: 15px;
  max-width: 800px;
}

.display-3 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
}

.lead {
  font-size: 1.25rem;
  margin-bottom: 30px;
  color: #e0e0e0;

}

.btn-primary {
  background-color: #c92b48;
  border-color: #007bff;
  padding: 12px 24px;
  font-size: 1.1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 123, 255, 0.4);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
  box-shadow: 0px 6px 20px rgba(0, 86, 179, 0.6);
}


.services-section {
  background-color: #ffffff;
  border-top: 4px solid #007bff;
  padding: 80px 20px;
  /* Aumentado el padding superior e inferior */
}

.about-section {
  background-color: #f8f9fa;
  padding: 80px 20px;
  /* Aumentado el padding superior e inferior */
}

.contact-section {
  background-color: #ffffff;
  padding: 60px 0; /* Espaciado general */
  /* Aumentado el padding superior e inferior */
}

.about-me-content {
  display: flex;
  flex-wrap: wrap; /* Permite que el texto fluya alrededor de la imagen */
  align-items: flex-start; /* Alinea la imagen y el texto al inicio */
  text-align: left; /* Alinea el texto a la izquierda */
}

.about-me-image {
  float: left; /* Permite que el texto fluya alrededor de la imagen */
  max-width: 100%; /* Asegura que la imagen no se exceda del contenedor */
  width: 160px; /* Ancho fijo de la imagen para pantallas grandes */
  height: 235px; /* Mantiene la proporción de la imagen */
  border-radius: 8px; /* Bordes redondeados */
  margin-right: 15px; /* Espaciado a la derecha de la imagen */
  margin-bottom: 15px; /* Espaciado debajo de la imagen */
}

.about-me-text {
  flex: 1; /* Permite que el texto ocupe el espacio restante */
}



.service-card {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: background-color 0.3s, box-shadow 0.3s;
  margin-bottom: 30px;
  /* Añadido margen inferior */
}

.service-card:hover {
  background-color: #e9ecef;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}

.service-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 15px;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #343a40;
}

.service-card p {
  font-size: 1rem;
  color: #495057;
}

.info-box {
  background-color: #ffffff;
  padding: 20px;
  margin-bottom: 30px;
  /* Añadido margen inferior */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.info-box h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #343a40;
}

.info-box p {
  font-size: 1rem;
  color: #495057;
}

.skills {
  display: flex;
  flex-wrap: wrap;
}

.skill {
  text-align: center;
  margin: 10px;
  flex: 1;
}

.skill-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}

.projects {
  margin-top: 60px;
  /* Aumentado el margen superior */
}

.project-box {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 350px;
  /* Asegura que todos los cuadros tengan la misma altura */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  /* Añadido margen inferior */
}

.project-box img {
  display: block;
  /* Hace que la imagen se comporte como un bloque */
  margin: 0 auto;
  /* Centra la imagen horizontalmente */
  max-width: 100%;
  /* Ajusta el tamaño de la imagen dentro de su contenedor */
  height: 150px;
  /* Define una alura fija para que todas las imagenes sean del mismo tamaño */
  object-fit: cover;
  /* Asegura que la imagen mantenga su proporcion y se recorte si es necesario */
}

.project-link {
  text-decoration: none;
  color: #343a40;
}

.project-link h4 {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.project-link p {
  font-size: 1rem;
  color: #495057;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form .form-control {
  font-size: 0.875rem;
}

@media (max-width: 768px) {

  .display-3 {
    font-size: 2rem;
  }

  .lead {
    font-size: 1rem;
  }


  .service-card {
    margin-bottom: 30px;
    /* Aumentado el margen inferior */
  }

  .about-section {
    padding: 40px 20px;
    /* Aumentado el padding superior e inferior */
  }


  .about-me-content {
    flex-direction: row; /* Cambia a fila en pantallas grandes */
    align-items: flex-start; /* Alinea la imagen y el texto en la parte superior */
  }

  .about-me-image {
    width: 150px; /* Tamaño fijo para pantallas grandes */
    height: 220px; /* Tamaño fijo para pantallas grandes */
    margin-right: 20px; /* Espacio entre la imagen y el texto */
  }
  /*
  .about-me-image {
    width: 100%; 
    max-width: none; 
  } */
  
  .info-box {
    margin-bottom: 20px;
    /* Ajustado el margen inferior */
  }

  .skills {
    flex-direction: column;
  }

  .skill {
    margin: 10px 0;
  }
}
</style>
