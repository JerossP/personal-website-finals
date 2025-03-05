<template>
    <section id="header">
      <div class="logo-container">
        <span class="brand-name">Jeross' Profile Webpage</span>
      </div>
      <ul id="navbar">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/gallery" class="active">Gallery</router-link></li>
        <li><router-link to="/comments">Comments</router-link></li>
        <li><router-link to="/reference"><i class="fa-solid fa-asterisk"></i></router-link></li>
      </ul>
    </section>
  
    <div class="gallery-header">
      <h2 class="gallery-title">Here Are Some Pictures of Me</h2>
    </div>
  
    <div class="gallery-container">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <img :src="image.src" :alt="image.alt" loading="lazy" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          { src: 'images/beach.jpg', alt: 'Beach Image' },
          { src: 'images/jerox.jpg', alt: 'Jerox Image' },
          { src: 'images/prom.jpg', alt: 'Prom Image' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  #header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: #222;
    color: white;
  }
  
  #navbar {
    list-style: none;
    display: flex;
    gap: 15px;
  }
  
  #navbar li a {
    color: white;
    text-decoration: none;
  }
  
  #navbar .active {
    font-weight: bold;
    text-decoration: underline;
  }
  
  .gallery-header {
    text-align: center;
    margin: 20px 0;
  }
  
  .gallery-container {
    display: flex;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  .gallery-item img {
    width: 200px;
    height: auto;
    border-radius: 10px;
  }
  </style>
  