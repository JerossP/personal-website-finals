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
  
    <div class="comments-container">
      <h1>Comments</h1>
      
      <!-- Comment Form -->
      <div class="comment-form">
        <h2>Leave a Comment</h2>
        <form @submit.prevent="submitComment">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required class="form-control">
          </div>
          <div class="form-group">
            <label for="comment">Comment:</label>
            <textarea id="comment" v-model="comment" required class="form-control"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <div v-if="submissionStatus" class="mt-2 status-message">
            {{ submissionStatus }}
          </div>
        </form>
      </div>

  
      <!-- Comments List -->
      <div class="comments-list">
        <ul>
          <li v-for="comment in comments" :key="comment.id" class="comment-item">
            <strong>{{ comment.name }}</strong>: {{ comment.comment }}
          </li>
        </ul>
      </div>
    </div>
  
    <footer class="section-p1">
      <div class="footer-container">
        <div class="col">
          <img src="" alt="logo">
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
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const name = ref('');
  const comment = ref('');
  const submissionStatus = ref(null);
  const comments = ref([]);
  const tableName = 'comments';
  
  // Fetch comments on component mount
  onMounted(() => {
    getComments();
  });
  
  // Fetch comments from Supabase
  async function getComments() {
    const { data } = await supabase.from(tableName).select();
    comments.value = data || [];
  }
  
  // Submit new comment
  async function submitComment() {
    submissionStatus.value = "Submitting...";
    try {
      const { error } = await supabase
        .from(tableName)
        .insert([{ name: name.value, comment: comment.value }]);
  
      if (error) {
        console.error("Error inserting comment:", error);
        submissionStatus.value = "Error submitting comment. Please try again.";
      } else {
        submissionStatus.value = "Comment submitted successfully!";
        name.value = '';
        comment.value = '';
        await getComments(); // Refresh comments list
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      submissionStatus.value = "An unexpected error occurred. Please try again later.";
    }
  }
  </script>
  
  <style scoped>
  @import url('https://pro.fontawesome.com/releases/v5.10.0/css/all.css');
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

  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-control {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  /* Comments list styling */
  .comments-list {
    margin-top: 2rem;
  }
  
  .comment-item {
    background-color: lightyellow;
    border: 1px dashed black;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
  }
  
  .status-message {
    font-style: italic;
    color: #6c757d;
  }
  </style>