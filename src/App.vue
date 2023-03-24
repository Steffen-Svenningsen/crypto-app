<script setup>
import NavBar from "@/components/NavBar.vue"
</script>

<template>
    <h1 class="title">Crypto App 🚀</h1>
    <div class="nav-bar-container">
        <NavBar/>
    </div>
    <router-view></router-view>
</template>

<style lang="sass">
#app
  width: 100%
  min-height: 100vh
  display: flex
  flex-direction: column
  background-color: #252525
  font-family: "Helvetica", sans-serif
  color: white
  box-sizing: border-box
  padding: 2rem 1rem

  .title
    font-size: 2rem
    font-weight: 500

  .nav-bar-container
    margin: 2rem 0 0.75rem 0
</style>