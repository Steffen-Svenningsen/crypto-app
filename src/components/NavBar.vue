<template>
    <nav>
        <router-link to="/">All</router-link>
        <router-link to="/top-5">Top 5</router-link>
        <router-link to="/blog">Blog</router-link>
    </nav>
</template>

<style lang="sass" scoped>
nav
    width: 100%
    height: 100%
    box-sizing: border-box
    display: flex
    align-items: center
    gap: 0.75rem

    a
        color: white
        text-decoration: none
        opacity: 0.5
        padding: 0.5rem 0.75rem
        border-radius: 18px
        text-align: center
        font-size: 18px
        display: grid
        place-items: center
        background-color: rgba(217, 217, 217, 0.10)

    .router-link-active,
    .router-link-exact-active
        border: 1px solid white
        opacity: 1
</style>