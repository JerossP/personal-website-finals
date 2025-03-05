<template>
    <div>
      <section id="header">
        <div class="logo-container">
          <span class="brand-name">Jeross' Profile Webpage</span>
        </div>
        
        <ul id="navbar">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
          <li><router-link to="/comments">Comments</router-link></li>
          <li><router-link to="/reference" class="active"><i class="fa-solid fa-asterisk"></i></router-link></li>
        </ul>
      </section>
  
      <footer class="section-p1">
        <div class="footer-container">
          <div class="col">
            <img src="" alt="Logo">
          </div>
  
          <div class="col">
            <h4>Contact</h4>
            <p><strong>Address:</strong> 1550 Mandaluyong, Philippines</p>
            <p><strong>Phone:</strong> 0915-135-7434</p>
            <p><strong>Email:</strong> jrperez2@student.apc.edu.ph</p>
          </div>
  
          <div class="col">
            <h4>Follow Me</h4>
            <div class="icon">
              <a href="https://www.facebook.com/JerossPerez/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/jrose.to/" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ReferencePage'
  };
  </script>
  
  <style scoped>
  @import '@/assets/css/styles.css';
  </style>
  