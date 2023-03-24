<template>
    <div class="container">
      <router-link :to="{ name: 'blog-post' }" class="blog-post one">
        <h1>Navigating the Crypto Market</h1>
        <h3>How to Choose Which Crypto to Invest In</h3>
        <div class="line"></div>
        <span>By: <p class="author">Chat GPT</p></span>
        <p class="desc">As of 2023, there are thousands of cryptocurrencies available to invest in. However, choosing the right one to invest in can be a daunting task, especially with the volatility and unpredictability of the cryptocurrency market.</p>
      </router-link>
      <router-link :to="{ name: 'blog' }" class="blog-post two">
        <h1>To the Moon!</h1>
        <h3>Get a Look at the Upcoming Cryptos</h3>
        <div class="line"></div>
        <span>By: <p class="author">Chat GPT</p></span>
        <p class="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ad architecto quae! Cumque iure pariatur expedita aperiam, ipsum nihil omnis placeat sit nam tempore ut?</p>
      </router-link>
    </div>
  </template>
  
  <style lang="sass" scoped>
  .container
    padding: 1.5rem
    display: flex
    gap: 3rem
    background-color: rgba(255, 255, 255, 0.05)
    border-radius: 18px
    flex-wrap: wrap

    .blog-post
      text-decoration: none
      color: white
      flex: 35%
      min-width: clamp(180px, 40%, 800px)
      height: fit-content
      padding: 1.5rem
      border-radius: 14px
      background-color: rgba(255, 255, 255, 0.05)

      h1
        font-size: clamp(20px, 3vw, 28px)
        font-weight: 700

      h3
        font-size: 18px
        margin-top: 1rem

      .line
        background: linear-gradient(to bottom right, #f8a000 40%, red)
        width: 40px
        height: 2px
        margin: 0.5rem 0

      span
        display: flex
        font-size: 12px
        gap: 0.5rem

        .author
          font-style: italic
          opacity: 0.80

      .desc
        margin-top: 2rem
        line-height: 1.4
  </style>