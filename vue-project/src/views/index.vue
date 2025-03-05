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
              <img src="@/assets/images/gradpic.png" alt="Jeross Reilan R. Perez" class="profile-picture" />
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
            <img src="@/assets/images/logo.png" alt="Logo" />
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
  @import url("@/assets/css/styles.css");
  </style>
  