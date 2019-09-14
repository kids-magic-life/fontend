<template>
  <header class="main-header" :class="{ 'off-canvas-body': toggled_menu }">
    <b-container fluid>
      <b-row>
        <b-col sm="8" md="8" lg="4" no-gutters>
          <div class="main-logo">
            <a href="index.html">
              <b-img center src="/images/logo.png" alt="" width="80px" />
            </a>
          </div>
        </b-col>
        <b-col sm="2" lg="6" class="responsive-menu">
          <div class="responsive-toggle" @click="toggleSideMenu()">
            CLOSE
          </div>
          <nav class="fix-navbar">
            <ul class="primary-navbar">
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
              <li><nuxt-link to="/">Live Shows</nuxt-link></li>
              <li><nuxt-link to="/">Education</nuxt-link></li>
              <li><nuxt-link to="/">Entertainers</nuxt-link></li>
              <li><nuxt-link to="/">Gallery</nuxt-link></li>
              <li><nuxt-link to="/">Contact Us</nuxt-link></li>
            </ul>
          </nav>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
<script>
export default {
  name: 'Navigation',
  data() {
    return {
      toggled_menu: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const header = document.querySelector('.main-header')

      if (window.scrollY > 100 && !header.className.includes('is-sticky')) {
        header.classList.add('is-sticky')
      } else if (window.scrollY < 100) {
        header.classList.remove('is-sticky')
      }
    },
    toggleSideMenu() {
      this.toggled_menu = !this.toggled_menu
    }
  }
}
</script>
