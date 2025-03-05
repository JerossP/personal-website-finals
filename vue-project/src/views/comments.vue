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
          <img src="..src/images/logo.png" alt="logo">
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
  import { supabase } from '../lib/supabaseClient';
  
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
  @import '@/assets/styles.css';
  
  /* Form styling */
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