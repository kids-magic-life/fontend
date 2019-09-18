<template>
  <nav class="navbar">
    <div class="container">
      <div class="pull-left">
        <a class="navbar-toggle" href="#" data-toggle="offcanvas">
          <font-awesome-icon icon="bars" />
        </a>

        <div class="logo">
          <nuxt-link to="/">
            <img src="logo.png" alt="logo" />
          </nuxt-link>
        </div>

        <ul class="nav-menu">
          <li>
            <nuxt-link to="/">Home</nuxt-link>
          </li>
          <li>
            <nuxt-link to="about-us">About Us</nuxt-link>
          </li>
          <li>
            <nuxt-link to="live-show">Live Shows</nuxt-link>
          </li>
          <li>
            <a href="#">Education</a>
            <ul>
              <li>
                <nuxt-link to="/">Life Coaching</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Parent Workshops</nuxt-link>
              </li>
              <li>
                <nuxt-link to="children-program">Children Program</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Teachers / Schools</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Holiday Programs</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/">Kids Camp</nuxt-link>
              </li>
            </ul>
          </li>
          <li>
            <nuxt-link to="/">Product</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Entertainers</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Blog</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/">Contact Us</nuxt-link>
          </li>
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
$max-height: 60px;
$toggle-width: 1200px;

@media (max-width: $toggle-width) {
  .navbar {
    transition: 0.2s ease-out;

    .nav-menu {
      position: fixed;
      left: -80%;
      top: 0;
      bottom: 0;
      width: 80%;
      height: 100%;
      overflow-y: auto;
      background-color: #fff;
      margin-left: 0;
      padding: 24px 16px;
      box-shadow: 8px 0 10px 0 rgba(0, 0, 0, 0.05);
      transition: left 0.2s ease-out;

      a {
        line-height: 50px !important;

        &.active {
          border-top: 0;
        }
      }

      > li {
        display: block;
        border-bottom: 1px solid #f7f7f9;

        &:last-child {
          border-bottom: 0;
        }
      }

      ul {
        visibility: visible;
        opacity: 1;
        position: static;
        border-top: 0;

        li a {
          border-bottom: 0;
          line-height: 40px !important;
        }
      }
    }
  }
}

.navbar {
  background-color: #fff;
  position: relative;
  z-index: 99;
  margin-bottom: 0;
  border: 0;
  border-radius: 0;
  box-shadow: 0 1px 2px 0 rgba(50, 50, 50, 0.15);
  transition: background-color 0.3s ease-out;

  .container {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
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
  }

  .logo {
    display: inline-block;

    img {
      height: $max-height;
      transition: height 0.2s linear;
    }
  }

  ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;

    li:hover > ul {
      top: 100%;
      opacity: 1;
      visibility: visible;
    }
  }

  .divider {
    line-height: $max-height;
    margin: 0 20px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      height: 20px;
      margin-top: -10px;
      border-left: 1px solid #eceeef;
    }
  }
}

.nav-menu {
  display: inline-block;
  margin-left: 60px;

  > li {
    position: relative;
    display: inline-block;
    padding: 0 2px;

    &:last-child {
      padding-right: 0;

      > a {
        padding-right: 0;
      }
    }

    &:hover > a {
      color: $primary-color;
    }
  }

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

    &:focus {
      color: $primary-color;
      text-decoration: none;
    }

    &:hover {
      color: $primary-color;
      text-decoration: none;
    }

    &.active {
      color: $primary-color;
    }
  }

  strong {
    font-weight: 600;
    font-size: 14px;
    font-family: Montserrat, sans-serif;
  }

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

    li {
      a {
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

      &:last-child a {
        border-bottom: 0;
      }
    }

    a.active {
      border-top: none;
    }
  }
}

@media (max-width: 480px) {
  .navbar .container,
  .navbar .container-fluid {
    padding-left: 5px;
  }

  .navbar .navbar-toggle {
    margin-right: 10px;
  }

  .user-account {
    margin: 0;
  }
}

@media (max-width: $toggle-width) {
  .navbar .navbar-toggle {
    display: inline-block;
  }
}
</style>
