<template>
  <main style="padding-top: 140px">
    <section class="breadcrumb-bg">
      <div class="theme-container container ">
        <div class="site-breadcumb white-clr">
          <h2 class="section-title">
            <span class="light-font">Kids Magic Life</span>
            <strong class="clr-txt">Products </strong>
          </h2>
          <ol class="breadcrumb breadcrumb-menubar">
            <li><nuxt-link to="/"> Home </nuxt-link> Products</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="shop-wrap sec-space-bottom">
      <div class="pattern">
        <b-img
          fluid-grow
          alt=""
          src="http://event-theme.com/themes/html/naturix-html/assets/img/icons/white-pattern.png"
        />
      </div>
      <div class="section-icon">
        <b-img width="128px" src="/images/logo.png" />
      </div>

      <b-container class="rel-div">
        <div class="divider-full-1"></div>
        <b-row class="result-bar block-inline">
          <h4 class="result-txt">
            Results <b> {{ products.length }} </b>
          </h4>
          <ul class="view-tabs">
            <li class="active">
              <a href="#grid-view" data-toggle="tab">
                <i class="fa fa-th"></i>
              </a>
            </li>
            <li class="">
              <a href="#list-view" data-toggle="tab">
                <i class="fa fa-th-list"></i>
              </a>
            </li>
          </ul>
        </b-row>
      </b-container>
      <b-container>
        <div class="tab-content shop-content">
          <div class="tab-pane active in">
            <div class="row">
              <b-col
                v-for="item in products"
                :key="item.id"
                sm="6"
                md="4"
                lg="3"
              >
                <a :href="item.amazon" target="_blank">
                  <product :product="item"></product>
                </a>
              </b-col>
            </div>
          </div>
        </div>
      </b-container>
    </section>
  </main>
</template>

<script>
import Product from '@/components/products/Product'

export default {
  name: 'Products',
  components: {
    Product
  },
  data() {
    return {
      products: [
        {
          id: 1,
          price: 15.95,
          series: 'A Journey to Magic World',
          name: 'The Magical Ice-Cream Fountain',
          amazon:
            'https://www.amazon.com/Journey-Magic-World-Ice-Cream-Fountain-ebook/dp/B0793ZSFGQ/ref=sr_1_2?qid=1570845055&refinements=p_27%3ACharise+Katz&s=digital-text&sr=1-2&text=Charise+Katz',
          images: ['/images/products/the-magical-ice-cream-fountain.jpg']
        },
        {
          id: 2,
          price: 15.95,
          series: 'A Journey to Magic World',
          name: 'The Magical Orange Balloon',
          amazon:
            'https://www.amazon.com/Journey-Magic-World-Magical-Balloon-ebook/dp/B07VMD8CB5/ref=sr_1_1?qid=1570845055&refinements=p_27%3ACharise+Katz&s=digital-text&sr=1-1&text=Charise+Katz',
          images: ['/images/products/the-magical-orange-balloon.jpg']
        },
        {
          id: 3,
          price: 9.49,
          series: 'Kids Magic Life',
          name: 'Magical Ice-Cream Fountain Album',
          amazon:
            'https://www.amazon.com/Magical-Ice-Cream-Fountain-Kids-Magic/dp/B01M4J812K/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1528458943&sr=1-1-mp3-albums-bar-strip-0&keywords=Kids+Magic+Life',
          images: ['/images/products/the-magical-ice-cream-fountain-album.jpg']
        }
      ]
    }
  }
}
</script>

<style scoped></style>
