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
                <img src="/icons/software-development.png" alt="icon" class="service-icon" />
                <h3>Desarrollo de Software</h3>
                <p>Creación de aplicaciones a medida utilizando las últimas tecnologías para cumplir con tus necesidades
                  específicas.</p>
              </div>
            </div>

            <!-- Servicio 2 -->
            <div class="col-md-4">
              <div class="service-card">
                <img src="/icons/consultancy1.png" alt="Consultoría-icon" class="service-icon" />
                <h3>Consultoría</h3>
                <p>Asesoramiento experto en estrategias tecnológicas y soluciones para mejorar la eficiencia y
                  productividad de tu negocio.</p>
              </div>
            </div>

            <!-- Servicio 3 -->
            <div class="col-md-4">
              <div class="service-card">
                <img src="/icons/support1.png" alt="Soporte-icon" class="service-icon" />
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
                <h3>Mi descripción</h3>
                <img src="ivanProf.jpeg" alt="Iván Monte-img" class="about-me-image" />
                <div class="about-me-text">
                  <p>
                    "Soy Iván M. Monte, desarrollador Full-Stack y fundador de MonteStack. Me especializo en
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
                          <img src="/icons/python.png" alt="" class="skill-icon" />
                          <p>Python</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/csharp96.png" alt="" class="skill-icon" />
                          <p>C#</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/js.png" alt="" class="skill-icon" />
                          <p>JavaScript</p>
                        </div>
                      </div>
                    </div>
                    <!-- Frameworks -->
                    <div class="carousel-item">
                      <div class="skills d-flex justify-content-around">
                        <div class="skill">
                          <img src="/icons/nuxt.png" alt="" class="skill-icon" />
                          <p>Nuxt</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/vuejs.png" alt="" class="skill-icon" />
                          <p>Vue.js</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/reactjs.png" alt="" class="skill-icon" />
                          <p>React</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/nodejs.png" alt="" class="skill-icon" />
                          <p>Node.js</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/.net.png" alt="" class="skill-icon" />
                          <p>.net</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/express.png" alt="" class="skill-icon" />
                          <p>Express.js</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/nextjs.png" alt="" class="skill-icon" />
                          <p>Nextjs</p>
                        </div>

                      </div>
                    </div>
                    <!-- Bases de Datos -->
                    <div class="carousel-item">
                      <div class="skills d-flex justify-content-around">
                        <div class="skill">
                          <img src="/icons/mysql.png" alt="" class="skill-icon" />
                          <p>MySQL</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/mongo.png" alt="" class="skill-icon" />
                          <p>MongoDB</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/postgre.png" alt="" class="skill-icon" />
                          <p>PostgreSQL</p>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="skills d-flex justify-content-around">
                        <div class="skill">
                          <img src="/icons/vuetify.png" alt="" class="skill-icon" />
                          <p>Vuetify</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/bootstrap.png" alt="" class="skill-icon" />
                          <p>Bootstrap</p>
                        </div>
                        <div class="skill">
                          <img src="/icons/tailwind.png" alt="" class="skill-icon" />
                          <p>Tailwind</p>
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
                        <img src="/cse340motors.png" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="project-box">
                      <a href="https://managentsystem-1.onrender.com" target="_blank" class="project-link">
                        <h4>Sistema de Gestion</h4>
                        <p>Sistema de gestión de inventarios desarrollado con Node.js y MongoDB.</p>
                        <img src="/dashboard.png" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="project-box">
                      <a href="https://ivanmax11.github.io/Challengewdd330/src/#" target="_blank" class="project-link">
                        <h4>NASA API Explorer</h4>
                        <p>Aplicación web con API de la NASA para explorar contenido y descubrir información asombrosa.
                        </p>
                        <img src="/nasaApp.png" alt="">
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
                      <a href="https://acme-xcdb.vercel.app/dashboard" target="_blank" class="project-link">
                        <h4>Acme</h4>
                        <p>Aplicación para gestionar gastos y presupuestos.</p>
                        <img src="/acme.png" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="project-box">
                      <a href="https://handcrafted-haven-steel.vercel.app/" target="_blank" class="project-link">
                        <h4>Handcrafted</h4>
                        <p>Comercio electronico para vendedores y compradores de productos elaborados.</p>
                        <img src="/handcrafted.png" alt="">
                      </a>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="project-box">
                      <a href="https://tienda-online-1-3oi2.onrender.com/" target="_blank" class="project-link">
                        <h4>Tienda Online</h4>
                        <p>Aplicación para gestionar tareas con usuarios unificados.</p>
                        <img src="/t-online.png" alt="">
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
            <button class="carousel-control-next" type="button" data-bs-target="#projectsCarousel" data-bs-slide="next" >
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>

      </section>


      <!-- Sección de contacto  -->
<section id="contact" class="section contact-section py-5 bg-light">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">¡Hagamos crecer tu negocio juntos! 🚀</h2>
      <p class="lead text-dark ">Déjanos tu mensaje y te contactaremos lo antes posible.</p>
    </div>

    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="card shadow-lg p-4">
          <h3 class="text-center mb-4">Contáctanos</h3>

          <form @submit.prevent="submitForm" class="contact-form needs-validation" novalidate>
            <div class="mb-3">
              <label for="name" class="form-label fw-semibold">Nombre</label>
              <input type="text" v-model="form.name" class="form-control" id="name" placeholder="Tu nombre" required
                :class="{ 'is-invalid': formErrors.name }">
              <div v-if="formErrors.name" class="invalid-feedback">{{ formErrors.name }}</div>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label fw-semibold">Email</label>
              <input type="email" v-model="form.email" class="form-control" id="email" placeholder="correo@ejemplo.com" required
                :class="{ 'is-invalid': formErrors.email }">
              <div v-if="formErrors.email" class="invalid-feedback">{{ formErrors.email }}</div>
            </div>

            <div class="mb-3">
              <label for="phone" class="form-label fw-semibold">Teléfono</label>
              <input type="text" v-model="form.phone" class="form-control" id="phone" placeholder="+54 9 11 1234 5678"
                :class="{ 'is-invalid': formErrors.phone }">
              <div v-if="formErrors.phone" class="invalid-feedback">{{ formErrors.phone }}</div>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label fw-semibold">Mensaje</label>
              <textarea v-model="form.message" class="form-control" id="message" rows="4" placeholder="Escribe tu mensaje aquí..." required
                :class="{ 'is-invalid': formErrors.message }"></textarea>
              <div v-if="formErrors.message" class="invalid-feedback">{{ formErrors.message }}</div>
            </div>

            <!-- Implementa aquí tu reCAPTCHA si es necesario -->

            <div class="text-center">
              <button type="submit" class="btn btn-primary btn-lg w-100">Enviar Mensaje</button>
            </div>
          </form>

          <div v-if="successMessage" class="alert alert-success mt-3 text-center" role="alert">
            ¡Gracias por contactarte conmigo! Serás redirigido a la página de inicio en unos momentos.
          </div>
        </div>
      </div>
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
      const phonePattern = /^[0-9]{10}$/;
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
}

.about-section {
  background-color: #f8f9fa;
  padding: 80px 20px;
}

.about-me-content {
  display: flex;
  align-items: flex-start;
  min-height: 235px;
}


.about-me-image {
  float: left;
  max-width: 100%;
  width: 170px;
  height: auto;
  max-height: 235px;
  border-radius: 8px;
  margin-right: 15px;
  margin-bottom: 15px;
  object-fit: cover;
}


.about-me-text,
p {
  flex: 1;
}

.service-card {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: background-color 0.3s, box-shadow 0.3s;
  margin-bottom: 30px;
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
  font-size: 20px;
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
  aspect-ratio: 16 / 9; 
  border-radius: 5px;
}


.project-link {
  text-decoration: none;
  color: #343a40;
  font-size: 20px;
}

.project-link h4 {
  font-size: 20px;
  margin-bottom: 8px;
}

.project-link p {
  font-size: 18px;
  color: #063055;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #15435a; 
  border-radius: 50%; 
  width: 40px; 
  height: 40px;
}

#contact h2, h3 {
  color: #15435a;
}

.contact-form {
  width: 70%; 
  margin: 0 auto;
  padding: 20px;
}

.contact-form .form-control {
  font-size: 1rem; 
  padding: 12px; 
  border-radius: 8px; 
}

.contact-form .form-label {
  font-size: 1.1rem; 
  font-weight: 600; 
}

.contact-form .btn-primary {
  font-size: 1.2rem; 
  padding: 14px;
  border-radius: 8px;
  font-weight: bold;
}

.contact-form .card {
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); 
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
    
  }

  .about-section {
    padding: 40px 20px;
    
  }


  .about-me-content {
    flex-direction: row;
    
    align-items: flex-start;
    
  }

  .about-me-image {
    width: 150px;
    height: 220px;
    margin-right: 20px;
  }

  .info-box {
    margin-bottom: 20px;
  }

  .skills {
    flex-direction: row;
  }

  .skill {
    flex: 1 0 45%;
    margin: 10px 0;
  }

  .project-box img {
  width: 300px;
  height: 150px;
  object-fit: cover;
  aspect-ratio: 16 / 9;
  border-radius: 5px;
}
}
</style>
