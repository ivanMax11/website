<template>
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Montestack. Todos los derechos reservados.</p>
        <div class="social-links">
          <a href="https://www.instagram.com/ivan.maxdev/?next=%2F" target="_blank" rel="noopener noreferrer" ><img src="/icons/insta.png" alt="instagram-icon"></a>
          <a href="https://www.facebook.com/profile.php?id=61554865662152&locale=es_LA" target="_blank" rel="noopener noreferrer"><img src="/icons/fcbk.png" alt="facebook-icon"></a>
          <a href="https://linkedin.com/in/tu_usuario" target="_blank" rel="noopener noreferrer"><img src="/icons/lnkdn.png" alt="linkedin-logo"></a>
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
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
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
  