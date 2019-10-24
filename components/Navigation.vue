<template>
  <no-ssr>
    <header class="main-header" :class="{ 'off-canvas-body': toggled_menu }">
      <b-container fluid>
        <b-row>
          <b-col sm="8" md="8" lg="3" no-gutters>
            <div class="main-logo">
              <nuxt-link to="/">
                <b-img center src="/images/logo.png" alt="" width="100px" />
              </nuxt-link>
            </div>
          </b-col>
          <b-col sm="2" lg="7" class="responsive-menu">
            <div class="responsive-toggle" @click="toggleSideMenu()">
              CLOSE
            </div>
            <nav class="fix-navbar">
              <ul class="primary-navbar">
                <li><nuxt-link to="/" tag="a">Home</nuxt-link></li>
                <li><nuxt-link to="/about-us">About Us</nuxt-link></li>
                <li><nuxt-link to="/live-shows">Shows</nuxt-link></li>
                <li><nuxt-link to="/education">Education</nuxt-link></li>
                <li><nuxt-link to="/products">Products</nuxt-link></li>
                <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
                <li v-if="user != null" class="dropdown">
                  <a>
                    <b-img
                      :src="user.avatar"
                      style="width: 42px; border-radius: 5px;"
                    />
                  </a>

                  <ul class="dropdown-menu">
                    <li><a href="/" @click="logout()"> Logout </a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </b-col>
          <b-col sm="2" md="4" lg="2" class="cart-megamenu">
            <div class="responsive-toggle">
              <b-img src="/images/menu.png" @click="toggleSideMenu()" />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
  </no-ssr>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigation',
  data() {
    return {
      toggled_menu: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
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
    },
    logout() {
      this.$store.commit('auth/LOGOUT')
    }
  }
}
</script>
