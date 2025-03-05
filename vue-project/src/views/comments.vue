<template>
    <section id="header">
      <div class="logo-container">
        <span class="brand-name">Jeross' Profile Webpage</span>
      </div>
      
      <ul id="navbar">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/gallery">Gallery</router-link></li>
        <li><router-link class="active" to="/comments">Comments</router-link></li>
        <li><router-link to="/reference"><i class="fa-solid fa-asterisk"></i></router-link></li>
      </ul>
    </section>
  
    <footer class="section-p1">
      <div class="footer-container">
        <div class="col">
          <img src="/images/logo.png" alt="Logo">
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
  </template>
  
  <script>
  export default {
    name: "Comments"
  };
  </script>
  
  <style scoped>
  @import url('https://pro.fontawesome.com/releases/v5.10.0/css/all.css');
  @import '@/assets/styles.css';
  </style>
  