<template>
  <main style="padding-top: 140px">
    <section class="breadcrumb-bg">
      <div class="theme-container container ">
        <div class="site-breadcumb white-clr">
          <h2 class="section-title">
            <span class="light-font">Kids Magic Life</span>
            <strong class="clr-txt"> Shows </strong>
          </h2>
          <ol class="breadcrumb breadcrumb-menubar">
            <li><nuxt-link to="/"> Home </nuxt-link> Shows</li>
          </ol>
        </div>
      </div>
    </section>
    <b-container>
      <b-row>
        <b-col v-for="i in [1, 2]" :key="i">
          <div class="item">
            <div class="testi-wrap">
              <div class="testi-img">
                <a href="#">
                  <img
                    src="http://event-theme.com/themes/html/naturix-html/assets/img/extra/testi-1.jpg"
                    alt=""
                  />
                </a>
              </div>
              <div class="testi-caption">
                <p>
                  <i
                    >“Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elitsed the diam nonummy nibh euismod tincidunt.”</i
                  >
                </p>
                <i class="fa fa-user clr-txt"></i>
                <strong> LUIS GARCHIA </strong>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Muli:300,400,700&display=swap');
body {
  font-family: 'Muli', sans-serif;
  font-size: 18px;
}
.img-fluid {
  max-height: 626px;
}
.carousel-caption {
  top: 25%;
  h1 {
    font-size: 5rem;
  }
  p {
    width: 60%;
    text-align: center;
    margin: 0 auto;
  }
}
.division {
  display: block;
  h2 {
    text-align: center;
    margin-top: -32px;
  }
  p {
    margin: 0 auto;
    width: 60%;
    text-align: center;
  }
}
p.ex1 {
  font-family: Verdana;
  padding: 50px;
}
div.ex1 {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 20px;
}
h1.title {
  font-family: 'Prestige Elite Std';
  padding: 35px;
  border: 2px solid black;
}
div.ex2 {
  font-family: 'Comic Sans MS';
  padding: 50px;
}
div.bordered {
  padding: 20px;
  margin: 20px;
  border: 10px outset black;
}
</style>
