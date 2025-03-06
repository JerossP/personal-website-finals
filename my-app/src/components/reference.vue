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

      <section id ="reference"> 

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

  function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

  </script>
  
  <style scoped>
 @import url("https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap");

/* General Resets */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Spartan", sans-serif;
}

body {
    width: 100%;
}

/* Typography */
h1 { font-size: 50px; line-height: 64px; color: #222; }
h2 { font-size: 46px; line-height: 54px; color: #222; }
h3 { font-size: 1.4rem; line-height: 54px; color: #222; }
h4 { font-size: 20px; color: #222; }
h5 { font-size: 1rem; line-height: 54px; color: #222; }
h6 { font-weight: 700; font-size: 12px; }
p { font-size: 16px; color: #465b52; margin: 15px 0 20px; }

/* Utility Classes */
.section-p1 { padding: 40px 80px; }
.section-m1 { margin: 40px 0; }

/* Header Styles */
#header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 80px;
    background: #e3e3e3;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 999;
}

.logo-container {
    display: flex;
    align-items: center;
    gap: 15px;
}

.logo {
    height: 40px;
    width: auto;
}

.brand-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: #222;
}

#navbar {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 30px;
}

#navbar li {
    position: relative;
}

#navbar li a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: #111;
    padding: 8px 12px;
    transition: all 0.3s ease;
}

#navbar li a:hover,
#navbar li a.active {
    color: #088178;
}

#navbar li a.active::after,
#navbar li a:hover::after {
    content: "";
    width: 100%;
    height: 2px;
    background: #088178;
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    margin: auto;
}

/* hero section */

#hero{
    background-image: url(../IMAGES/background.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 90vh;
    width: 100%;
    padding: 0 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

#hero h4 {
    padding-bottom: 15px;
}
#hero h1,
#hero h2 {
    color: #f7f7f7;
}

body {
    background: #e3e3e3;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #333333;
    line-height: 1.6;
}

.container {
    max-width: 1140px;
    margin: 40px auto;
    padding: 0 20px;
}

.profile-header {
    background: white;
    border-radius: 15px;
    padding: 40px 30px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-bottom: 35px;
}

.profile-picture-wrapper {
    position: relative;
    width: 250px;
    height: 300px;
    margin: 0 auto 25px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-picture {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 3px solid #088178;
}

.profile-header h1 {
    margin: 15px 0 8px;
    color: #2c3e50;
}

.profile-header p {
    margin: 0 0 12px;
    color: #7f8c8d;
}

.section-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.content-section {
    background: white;
    border-radius: 12px;
    padding: 28px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

}

.content-section:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.content-section h2 {
    color: #088178;
    border-bottom: 2px solid #088178;
    padding-bottom: 10px;
    margin-top: 0;
    margin-bottom: 18px;
    font-size: 1.5em;
    position: relative;
}

.content-section h2::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 40px;
    height: 3px;
    background: #088178;
}

.content-section ul {
    list-style: none;
    padding-left: 25px;
    margin: 15px 0;
}

.content-section li {
    position: relative;
    padding-left: 25px;
    margin: 8px 0;
    line-height: 1.5;
}

.content-section li::before {
    content: '✓';
    color: #088178;
    position: absolute;
    left: 0;
    font-size: 1.1em;
    top: 2px;
}




/*gallery */

.gallery-header {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
  }

  .gallery-title {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    padding-bottom: 10px;
  }

  .gallery-title::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 3px;
    background: #e3e3e3;
    ;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }


.gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    max-width: auto;
    margin: 0 auto;
    padding: 2rem;
  }

  .gallery-item {
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.3s ease;
  }

  .gallery-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }

  .gallery-item:hover img {
    opacity: 0.9;
  }

  /*footer*/

  footer {
    background-color: #f5f5f5; /* Light background color */
    padding: 10px 0;
}

.footer-container {
    display: flex;
    justify-content: space-between; /* Distribute columns evenly */
    align-items: flex-start; /* Align items at the top */
    max-width: 1200px; /* Optional: Limit width for better responsiveness */
    margin: 0 auto; /* Center the container */
    padding: 0 20px; /* Add some padding for smaller screens */
}

.col {
    flex: 1; /* Each column takes equal space */
    text-align: center; /* Center align content inside each column */
}

.col img {
    max-width: 150px; /* Adjust logo size */
    margin-bottom: 10px;
}

.col h4 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #333; /* Darker text color */
}

.col p {
    font-size: 14px;
    color: #666; /* Slightly lighter text color */
    margin: 5px 0;
}

/* Follow section styling */
footer .follow {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

footer .icon {
    display: flex;
    justify-content: center; /* Center icons horizontally */
    gap: 10px;
}

footer .icon i {
    font-size: 20px;
    color: #088178; /* Icon color */
    transition: 0.3s ease;
}

footer .icon i:hover {
    color: #cce7d0; /* Hover color */
    transform: scale(1.1); /* Slightly enlarge on hover */
}

@media (max-width: 1024px) {
    .section-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 25px;
    }
    
    .content-section {
        padding: 22px;
    }

    #header {
        padding: 15px 40px;
    }
}

/* Mobile View */
@media (max-width: 768px) {
    /* Navbar */
    #navbar {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background: #e3e3e3;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        text-align: center;
        padding: 10px 0;
    }

    #navbar.active {
        display: flex;
    }

    #navbar li {
        width: 100%;
        padding: 10px 0;
    }

    .menu-toggle {
        display: block;
        font-size: 25px;
        cursor: pointer;
    }

    /* Hero Section */
    #hero {
        padding: 0 40px;
        height: 70vh;
        text-align: center;
    }

    #hero h1 {
        font-size: 32px;
    }

    /* Profile Section */
    .profile-picture-wrapper {
        width: 180px;
        height: 220px;
    }

    .profile-header {
        padding: 25px 15px;
    }

    .content-section h2 {
        font-size: 1.3em;
    }

    /* Footer */
    .footer-container {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .col {
        margin-bottom: 15px;
    }
}

/* Small Mobile View */
@media (max-width: 480px) {
    .container {
        padding: 0 15px;
    }

    .section-grid {
        gap: 20px;
    }

    #hero {
        padding: 0 20px;
    }

    .gallery-container {
        grid-template-columns: 1fr;
        padding: 1rem;
    }

    .gallery-title {
        font-size: 2rem;
    }

    /* Footer */
    .footer-container {
        padding: 10px;
    }
}
  </style>
  