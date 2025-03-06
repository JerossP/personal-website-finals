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
          { src: 'src/images/beach.jpg', alt: 'Beach Image' },
          { src: 'src/images/jerox.jpg', alt: 'Jerox Image' },
          { src: 'src/images/prom.jpg', alt: 'Prom Image' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* General Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}

body {
    background-color: #f4f4f4;
    color: #222;
}

/* Header Section */
#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #088178;
    padding: 15px 30px;
    color: white;
}

.brand-name {
    font-size: 1.5rem;
    font-weight: bold;
}

#navbar {
    list-style: none;
    display: flex;
}

#navbar li {
    margin: 0 10px;
}

#navbar a {
    text-decoration: none;
    color: white;
    padding: 8px 15px;
    transition: 0.3s;
}

#navbar a:hover,
#navbar a.active {
    background-color: #cce7d0;
    color: #088178;
    border-radius: 5px;
}

/* Gallery Section */
.gallery-header {
    text-align: center;
    margin: 30px 0;
}

.gallery-title {
    font-size: 2rem;
    color: #088178;
}

.gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 15px;
    padding: 20px;
    max-width: 1000px;
    margin: auto;
}

.gallery-item img {
    width: 100%;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
}

.gallery-item img:hover {
    transform: scale(1.05);
}

/* Comments Section */
.comments-section {
    max-width: 800px;
    margin: auto;
    padding: 20px;
}

.comment {
    background: white;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Footer */
footer {
    background-color: #222;
    color: white;
    text-align: center;
    padding: 20px 10px;
    margin-top: 30px;
}

.footer-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.footer-container .col {
    margin: 10px;
}

.footer-container img {
    width: 100px;
}

.footer-container .icon {
    margin-top: 10px;
}

.footer-container .icon a {
    color: white;
    margin-right: 10px;
    font-size: 1.5rem;
    transition: 0.3s;
}

.footer-container .icon a:hover {
    color: #cce7d0;
}

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
  