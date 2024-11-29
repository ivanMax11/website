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
                <img src="ivanProf.jpeg" alt="Iván Maximiliano Monte" class="about-me-image" />
                <div class="about-me-text">
                  <p>
                    "Soy Iván M. Monte, desarrollador de software FulStack y fundador de MonteStack. Me especializo en
                    ofrecer soluciones de desarrollo a medida, adaptadas a las necesidades de empresas y emprendedores
                    que buscan transformar sus ideas en productos reales.

                    Mi objetivo es construir aplicaciones intuitivas y funcionales que no solo resuelvan problemas, sino
                    que también aporten valor tangible a los usuarios. Trabajo estrechamente con mis clientes para
                    entender sus necesidades y objetivos, brindando acompañamiento desde la concepción de la idea hasta
                    el lanzamiento y mantenimiento del producto."
                  </p>
                </div>
              </div>
            </div>

            <!-- Habilidades -->
            <div class="col-md-6">
              <div class="info-box">
                <h3>Tecnologías</h3>
                <div id="skillsCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                  <div class="carousel-inner">
                    <!-- Lenguajes de Programación -->
                    <div class="carousel-item active">
                      <div class="skills d-flex justify-content-around">
                        <div class="skill">
                          <img src="/icons/python.png" alt="Python" class="skill-icon" />
                          <p>Python</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/csharp96.png" alt="C#" class="skill-icon" />
                          <p>C#</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/js.png" alt="JavaScript" class="skill-icon" />
                          <p>JavaScript</p>
                        </div>
                      </div>
                    </div>
                    <!-- Frameworks -->
                    <div class="carousel-item">
                      <div class="skills d-flex justify-content-around">
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
                          <img src="/icons/.net.png" alt="net" class="skill-icon" />
                          <p>.net</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/express.png" alt="Express.js" class="skill-icon" />
                          <p>Express.js</p>
                        </div>
                      </div>
                    </div>
                    <!-- Bases de Datos -->
                    <div class="carousel-item">
                      <div class="skills d-flex justify-content-around">
                        <div class="skill">
                          <img src="/icons/mysql.png" alt="MySQL" class="skill-icon" />
                          <p>MySQL</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/mongo.png" alt="MongoDB" class="skill-icon" />
                          <p>MongoDB</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/postgre.png" alt="PostgreSQL" class="skill-icon" />
                          <p>PostgreSQL</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- Controles de navegación del carrusel -->
                  <button class="carousel-control-prev" type="button" data-bs-target="#skillsCarousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#skillsCarousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Siguiente</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div id="projectsCarousel" class="carousel slide projects" data-bs-ride="carousel" data-bs-interval="4000">
            <div class="carousel-inner">
              <!-- Grupo de Proyectos 1 -->
              <div class="carousel-item active">
                <div class="row justify-content-center">
                  <div class="col-md-6">
                    <div class="project-box">
                      <a href="https://newrepo-oaw4.onrender.com/" target="_blank" class="project-link">
                        <h4>CSE Motors</h4>
                        <p> Applicacion web para venta de vehiculos desarrollado con Node.js y PostgreSQL.</p>
                        <img src="/cse340motors.png" alt="CSE Motors">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="project-box">
                      <a href="https://managentsystem-1.onrender.com" target="_blank" class="project-link">
                        <h4>Sistema de Gestion</h4>
                        <p>Sistema de gestión de inventarios desarrollado con Node.js y MongoDB.</p>
                        <img src="/dashboard.png" alt="Management System">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Grupo de Proyectos 2 -->
              <div class="carousel-item">
                <div class="row justify-content-center">
                  <div class="col-md-6">
                    <div class="project-box">
                      <a href="https://ivanmax11.github.io/Challengewdd330/src/#" target="_blank" class="project-link">
                        <h4>NASA API Explorer</h4>
                        <p>Aplicación web con API de la NASA para explorar contenido y descubrir información asombrosa.
                        </p>
                        <img src="/nasaApp.png" alt="NASA API Explorer">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="project-box">
                      <a href="https://mevn-taskmanager-1.onrender.com/" target="_blank" class="project-link">
                        <h4>Tasking</h4>
                        <p>Aplicación para gestionar tareas con usuarios unificados.</p>
                        <img src="/taskmanager.png" alt="Task Manager img">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Controles de navegación -->
            <button class="carousel-control-prev" type="button" data-bs-target="#projectsCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>

      </section>


      <!-- Sección de contacto -->
      <section id="contact" class="section contact-section">
        <div class="container">
          <h2 class="text-center">Contacto</h2>
          <p class="text-center">Completa el siguiente formulario para ponerte en contacto conmigo:</p>
          <form @submit.prevent="submitForm" class="contact-form" novalidate>
            <div class="mb-3">
              <label for="name" class="form-label">Nombre</label>
              <input type="text" v-model="form.name" class="form-control" id="name" required
                :class="{ 'is-invalid': formErrors.name }">
              <div v-if="formErrors.name" class="invalid-feedback">{{ formErrors.name }}</div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" v-model="form.email" class="form-control" id="email" required
                :class="{ 'is-invalid': formErrors.email }">
              <div v-if="formErrors.email" class="invalid-feedback">{{ formErrors.email }}</div>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Teléfono</label>
              <input type="text" v-model="form.phone" class="form-control" id="phone"
                :class="{ 'is-invalid': formErrors.phone }">
              <div v-if="formErrors.phone" class="invalid-feedback">{{ formErrors.phone }}</div>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Mensaje</label>
              <textarea v-model="form.message" class="form-control" id="message" rows="3" required
                :class="{ 'is-invalid': formErrors.message }"></textarea>
              <div v-if="formErrors.message" class="invalid-feedback">{{ formErrors.message }}</div>
            </div>
            <!-- Implementa aquí tu reCAPTCHA -->
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
      phone: '',
      message: ''
    });
    const formErrors = ref({});
    const successMessage = ref(false);

    const validateForm = () => {
      const errors = {};
      if (!form.value.name || form.value.name.length < 3) {
        errors.name = 'El nombre debe tener al menos 3 caracteres.';
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!form.value.email || !emailPattern.test(form.value.email)) {
        errors.email = 'Debes ingresar un email válido.';
      }
      const phonePattern = /^[0-9]{10}$/; // Puedes ajustar la validación según el formato local
      if (form.value.phone && !phonePattern.test(form.value.phone)) {
        errors.phone = 'El teléfono debe contener 10 dígitos.';
      }
      if (!form.value.message || form.value.message.length < 10) {
        errors.message = 'El mensaje debe tener al menos 10 caracteres.';
      }
      return errors;
    };

    const submitForm = async () => {
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        formErrors.value = errors;
        return;
      }

      try {
        console.log('Enviando formulario...');
        const apiUrl = process.env.VUE_APP_API_URL;

        const response = await axios.post(`${apiUrl}/api/contacts`, {
          name: form.value.name,
          email: form.value.email,
          phone: form.value.phone,
          message: form.value.message,
        });

        if (response.status === 201) {
          successMessage.value = true;
          form.value.name = '';
          form.value.email = '';
          form.value.phone = '';
          form.value.message = '';
          formErrors.value = {};

          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }, 3000);
        }
      } catch (error) {
        console.error('Error al enviar el formulario:', error);
        alert('Hubo un error al enviar tu mensaje, por favor intenta más tarde.');
      }
    };

    return { form, formErrors, successMessage, submitForm };
  }
};
</script>

<style scoped>
@charset 'UTF-8';

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
  background-color: #15435a;
  border-color: #e1b166;
  padding: 12px 24px;
  font-size: 1.1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 15px rgba(0, 123, 255, 0.4);
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-primary:hover {
  background-color: #e1b166;
  transform: translateY(-3px);
  box-shadow: 0px 6px 20px rgba(0, 86, 179, 0.6);
}


.services-section {
  background-color: #ffffff;
  border-top: 4px solid #e1b166;
  padding: 80px 20px;
  /* Aumentado el padding superior e inferior */
}

.about-section {
  background-color: #f8f9fa;
  padding: 80px 20px;
  /* Aumentado el padding superior e inferior */
}

.about-me-content {
  display: flex;
  align-items: flex-start;
  min-height: 235px;
  /* Ajusta la altura mínima para que sea igual a la de la imagen */
}


.about-me-image {
  float: left;
  max-width: 100%;
  width: 170px;
  height: auto;
  /* Deja que la altura se ajuste automáticamente */
  max-height: 235px;
  /* Limita la altura máxima para evitar que sea demasiado grande */
  border-radius: 8px;
  margin-right: 15px;
  margin-bottom: 15px;
  object-fit: cover;
  /* Recorta la imagen para que siempre llene el espacio disponible */
}


.about-me-text,
p {
  flex: 1;
  /* Permite que el texto ocupe el espacio restante */
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
  justify-content: space-around;
  gap: 20px;
  margin-top: 20px;
}

.skill {
  text-align: center;
  margin: 10px;
  flex: 1 0 150px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.skill:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.skill-icon {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
}

.skill:hover .skill-icon {
  transform: scale(1.1);
}

h4 {
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  margin: 20px 0 10px;
  color: #343a40;
}

.projects {
  margin-top: 60px;
}

.project-box {
  background-color: #ffffff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 10px;
  /* Agregado para espaciado entre proyectos */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

.project-box img {
  width: 330px;
  height: 150px;
  object-fit: cover;
  aspect-ratio: 16 / 9; /* Cambia a 4 / 3 o lo que prefieras */
  border-radius: 5px;
}


.project-link {
  text-decoration: none;
  color: #343a40;
}

.project-link h4 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.project-link p {
  font-size: 0.95rem;
  color: #6c757d;
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
    flex-direction: row;
    /* Cambia a fila en pantallas grandes */
    align-items: flex-start;
    /* Alinea la imagen y el texto en la parte superior */
  }

  .about-me-image {
    width: 150px;
    /* Tamaño fijo para pantallas grandes */
    height: 220px;
    /* Tamaño fijo para pantallas grandes */
    margin-right: 20px;
    /* Espacio entre la imagen y el texto */
  }

  .info-box {
    margin-bottom: 20px;
    /* Ajustado el margen inferior */
  }

  .skills {
    flex-direction: row;
  }

  .skill {
    flex: 1 0 45%;
    /* Ocupa aproximadamente la mitad del ancho, para dos columnas */
    margin: 10px 0;
  }
}
</style>
