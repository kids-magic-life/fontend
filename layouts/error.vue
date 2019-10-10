<template>
  <main style="padding-top: 140px">
    <section class="breadcrumb-bg">
      <div class="theme-container container ">
        <div class="site-breadcumb white-clr">
          <h2 class="section-title">
            <span class="light-font">Kids Magic Life</span>
            <strong class="clr-txt">404 </strong>
          </h2>
          <ol class="breadcrumb breadcrumb-menubar">
            <li><nuxt-link to="/"> Home </nuxt-link> Error</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="error-wrap sec-space text-center">
      <div class="container">
        <img src="/images/error.png" alt="" />
        <h2 class="section-title pt-15">
          <span class="light-font">Error - </span> <strong>Not Found </strong>
        </h2>
        <p class="fsz-16 ptb-15">
          It seems we can’t find what you’re looking for, perhaps go back to the
          <nuxt-link to="/" style="color: #ff99dd"> Homepage </nuxt-link>
        </p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped></style>
