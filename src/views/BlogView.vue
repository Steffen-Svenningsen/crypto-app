<script setup>
import NavBar from "@/components/NavBar.vue"
</script>

<template>
    <div class="crypto-app">
      <h1>Crypto App 🚀</h1>
      <div class="nav-bar">
          <NavBar/>
      </div>
      <div class="container">
        Blog
      </div>
    </div>
  </template>
  
  <style lang="sass" scoped>
  .crypto-app
    width: 100%
    min-height: 100vh
    display: flex
    flex-direction: column
    background-color: #252525
    font-family: "Helvetica", sans-serif
    color: white
  
    h1
      padding: 2rem
      font-size: 2rem
      font-weight: 500
  
    .nav-bar
      margin-left: 1rem
  
    .container
      padding: 2rem
      display: flex
      flex-direction: column
      gap: 3rem
      background-color: rgba(255, 255, 255, 0.05)
      margin: 0.75rem 1rem 1rem 1rem
      border-radius: 18px
  </style>