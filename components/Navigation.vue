<template>
  <nav class="navbar">
    <div class="container">
      <div class="pull-left">
        <a class="navbar-toggle" href="#" data-toggle="offcanvas">
          <i class="ti-menu" />
        </a>

        <div class="logo">
          <nuxt-link to="/">
            <img src="logo.png" alt="logo" />
          </nuxt-link>
        </div>

        <ul class="nav-menu">
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/">About Us</nuxt-link></li>
          <li><nuxt-link to="/">Live Shows</nuxt-link></li>
          <li>
            <a href="#">Education</a>
            <ul>
              <li><nuxt-link to="/">Life Coaching</nuxt-link></li>
              <li><nuxt-link to="/">Parent Workshops</nuxt-link></li>
              <li><nuxt-link to="/">Children Program</nuxt-link></li>
              <li><nuxt-link to="/">Teachers / Schools</nuxt-link></li>
              <li><nuxt-link to="/">Holiday Programs</nuxt-link></li>
              <li><nuxt-link to="/">Kids Camp</nuxt-link></li>
            </ul>
          </li>
          <li><nuxt-link to="/">Product</nuxt-link></li>
          <li><nuxt-link to="/">Entertainers</nuxt-link></li>
          <li><nuxt-link to="/">Blog</nuxt-link></li>
          <li><nuxt-link to="/">Contact Us</nuxt-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="scss" scoped>
$primary-color: #159eee;
$max-height: 80px;

.navbar {
  background-color: #fff;
  position: relative;
  z-index: 99;
  margin-bottom: 64px;
  border: 0;
  border-radius: 0;
  box-shadow: 0 1px 2px 0 rgba(50, 50, 50, 0.15);
  transition: background-color 0.3s ease-out;
  padding-bottom: 5px;

  .container {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  }

  .pull-left {
    float: left;
  }

  .logo {
    display: inline-block;

    img {
      height: $max-height;
      vertical-align: middle;
      transition: height 0.2s linear;
    }
  }

  .navbar-toggle {
    display: none;
    float: left;
    border: 0;
    line-height: 40px;
    padding: 10px;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 20px;
    color: #9da7ad;
    font-size: 21px;

    i {
      font-family: themify;
      speak: none;
      font-style: normal;
      font-weight: 400;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      -webkit-font-smoothing: antialiased;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  ul li:hover > ul {
    top: $max-height;
    opacity: 1;
    visibility: visible;
  }

  .nav-menu {
    display: inline-block;
    margin-left: 60px;

    ul {
      position: absolute;
      top: 120%;
      left: 0;
      z-index: 2;
      background-color: #fff;
      border-top: 2px solid $primary-color;
      padding: 8px;
      opacity: 0;
      visibility: hidden;
      box-shadow: 0 1px 2px 0 rgba(50, 50, 50, 0.15);
      transition: opacity 0.4s ease-in-out, top 0.2s ease-in-out;
    }

    > li {
      position: relative;
      display: inline-block;
      padding: 0 2px;

      a {
        display: inline-block;
        font-size: 13px;
        font-weight: 400;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 0 8px;
        line-height: $max-height;
        color: #9da7ad;
        transition: color 0.2s linear, line-height 0.2s linear;

        &:focus,
        &:hover {
          color: $primary-color;
          text-decoration: none;
          transition: color 0.2s linear;
          outline: 0;
        }
      }
    }

    ul li a {
      font-family: Open Sans, sans-serif;
      text-transform: none;
      letter-spacing: 1px;
      line-height: 28px;
      padding-top: 3px;
      padding-bottom: 3px;
      white-space: nowrap;
      display: block;
      min-width: 150px;
      font-weight: 400;
      font-size: 12px;
      color: #9da7ad;
      border-bottom: 1px solid #f8f9fa;
    }
  }

  .active {
    color: red;
  }
}
</style>
