<template>
  <footer class="footer">
    <div class="container">
      <div class="top-row">
        <div class="contact-info">
          <!-- WhatsApp -->
          <a href="https://wa.me/549123456789" target="_blank" rel="noopener noreferrer" class="contact-item">
            <img src="/icons/whatsapp1.png" alt="WhatsApp" class="icon" />
            <span class="contact-text">+54 9 123 456 789</span>
          </a>
          <!-- Email -->
          <a href="mailto:montestacksoft@gmail.com" target="_blank" rel="noopener noreferrer" class="contact-item">
            <img src="/icons/mail.png" alt="Email" class="icon" />
            <span class="contact-text">montestacksoft@gmail.com</span>
          </a>
        </div>
      </div>
      <p>&copy; {{ currentYear }} Montestack | Todos los derechos reservados.</p>
      <div class="social-links">
        <a href="https://www.instagram.com/montestack/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/insta.png" alt="instagram-icon">
        </a>
        <a href="https://www.facebook.com/profile.php?id=61554865662152&locale=es_LA" target="_blank" rel="noopener noreferrer">
          <img src="/icons/fcbk.png" alt="facebook-icon">
        </a>
        <a href="https://www.linkedin.com/in/ivan-maximiliano-monte/" target="_blank" rel="noopener noreferrer">
          <img src="/icons/lnkdn.png" alt="linkedin-logo">
        </a>
      </div>
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
  
  .top-row {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 15px;
  }
  
  .contact-info {
    display: flex;
    flex-direction: column; 
    align-items: flex-end; 
    gap: 8px; 
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
  }
  
  .contact-item:hover {
    text-decoration: underline;
  }
  
  .icon {
    width: 30px;
    height: 30px;
    margin-right: 8px;
    flex-shrink: 0; /* Evita que el ícono cambie de tamaño */
  }
  
  .contact-text {
    display: inline-block;
    min-width: 200px; 
    text-align: left; 
  }
  
  .social-links {
    margin-top: 10px;
  }
  
  .social-links a {
    color: #fff;
    margin: 0 10px;
    text-decoration: none;
  }
  
  .social-links a:hover {
    text-decoration: underline;
  }
  </style>
  

