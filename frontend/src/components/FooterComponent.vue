<template>
  <footer class="footer">
    <div class="container">
      <div class="top-row">
        <!-- Contacto (Izquierda) -->
        <div class="contact-info">
          <a href="https://wa.me/549123456789" target="_blank" class="contact-item">
            <img src="/icons/whatsapp1.png" alt="WhatsApp" class="icon" />
            <span class="contact-text">+54 9 123 456 789</span>
          </a>
          <a href="mailto:montestacksoft@gmail.com" target="_blank" class="contact-item">
            <img src="/icons/mail.png" alt="Email" class="icon" />
            <span class="contact-text">montestacksoft@gmail.com</span>
          </a>
        </div>

        <!-- Redes Sociales (Derecha) -->
        <div class="social-links">
          <a href="https://www.instagram.com/montestack/" target="_blank">
            <img src="/icons/insta.png" alt="Instagram">
          </a>
          <a href="https://www.facebook.com/profile.php?id=61554865662152" target="_blank">
            <img src="/icons/fcbk.png" alt="Facebook">
          </a>
          <a href="https://www.linkedin.com/in/ivan-maximiliano-monte/" target="_blank">
            <img src="/icons/lnkdn.png" alt="LinkedIn">
          </a>
        </div>
      </div>

      <!-- Texto de derechos reservados -->
      <p class="copyright">&copy; {{ currentYear }} Montestack | Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: #15435a;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Nueva disposición */
.top-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding-bottom: 10px;
}

/* Contacto a la izquierda */
.contact-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

.contact-item {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  white-space: nowrap;
}

.contact-item:hover {
  text-decoration: underline;
}

.icon {
  width: 24px;
  height: 24px;
  margin-right: 8px;
  flex-shrink: 0;
}

/* Redes Sociales a la derecha */
.social-links {
  display: flex;
  gap: 12px;
}

.social-links a img {
  width: 28px;
  height: 28px;
  transition: transform 0.2s ease-in-out;
}

.social-links a img:hover {
  transform: scale(1.1);
}

/* Derechos de autor al centro */
.copyright {
  margin-top: 15px;
  font-size: 12px;
}

/* RESPONSIVE: Mantener alineación en móviles */
@media (max-width: 768px) {
  .top-row {
    display: flex;
    justify-content: space-between; /* Mantiene contacto a la izq y redes a la derecha */
    align-items: center;
    flex-wrap: wrap;
  }

  .contact-info {
    align-items: flex-start;
  }

  .social-links {
    justify-content: flex-end;
  }
}
</style>
