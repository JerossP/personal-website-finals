<template>
    <div>
      <header id="header">
        <div class="logo-container">
          <span class="brand-name">Jeross' Profile Webpage</span>
        </div>
        <nav>
          <ul id="navbar">
            <li><router-link to="/" class="active">Home</router-link></li>
            <li><router-link to="/gallery">Gallery</router-link></li>
            <li><router-link to="/comments">Comments</router-link></li>
            <li><router-link to="/reference"><i class="fa-solid fa-asterisk"></i></router-link></li>
          </ul>
        </nav>
      </header>
  
      <section id="hero">
        <h4>Whats good ya'll</h4>
        <h2>IM JEROSS PEREZ FROM MI231</h2>
        <h1>come look around!</h1>
        <p>I LOVE CUDDLES!</p>
      </section>
  
      <section id="contents">
        <div class="container">
          <div class="profile-header">
            <div class="profile-picture-wrapper">
              <img src="" alt="Jeross Reilan R. Perez" class="profile-picture" />
            </div>
            <h1>Jeross Reilan R. Perez</h1>
            <p>Mandaluyong City | Active Lifestyle Enthusiast</p>
            <p>Hello! I love going out and staying active, though I'm not particularly sporty.</p>
          </div>
          
          <div class="section-grid">
            <div class="content-section" v-for="(section, index) in sections" :key="index">
              <h2>{{ section.title }}</h2>
              <ul v-if="Array.isArray(section.content)">
                <li v-for="(item, idx) in section.content" :key="idx">{{ item }}</li>
              </ul>
              <p v-else>{{ section.content }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <footer class="section-p1">
        <div class="footer-container">
          <div class="col">
            <img src="" alt="Logo" />
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
              <a href="https://www.facebook.com/JerossPerez/" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/jrose.to/" target="_blank">
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
    data() {
      return {
        sections: [
          {
            title: "Education",
            content: [
              "High School: Good Shepherd Christian School (Graduated with honors)",
              "Senior High School: Rizal Technological University (Graduated with honors)"
            ]
          },
          {
            title: "Course",
            content: "Pursuing Bachelor of Science in Information Technology with specialization in Mobile and Internet Technology at Asia Pacific College."
          },
          {
            title: "IT Experience",
            content: [
              "Basic knowledge of Python",
              "Basic knowledge of Java",
              "Basic knowledge of Android Studio",
              "Basic knowledge of HTML, SQL, and CSS"
            ]
          },
          {
            title: "Hobbies",
            content: [
              "Playing billiards",
              "Competitive FPS gaming",
              "K-dramas and sports anime enthusiast",
              "Regular gym-goer",
              "Night rides explorer"
            ]
          },
          {
            title: "Goals",
            content: "Aiming to graduate with an IT degree and gain industry experience. Long-term goal includes establishing a tech-related business post-graduation."
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  @import url("https://pro.fontawesome.com/releases/v5.10.0/css/all.css");
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


  </style>
  