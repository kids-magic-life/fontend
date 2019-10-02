<template>
  <main style="padding-top: 140px">
    <section class="breadcrumb-bg">
      <div class="theme-container container ">
        <div class="site-breadcumb white-clr">
          <h2 class="section-title">
            <span class="light-font">Kids Magic Life </span>
            <strong class="clr-txt">Gallery </strong>
          </h2>
          <ol class="breadcrumb breadcrumb-menubar">
            <li><nuxt-link to="/"> Home </nuxt-link> Gallery</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="shop-wrap sec-space-bottom">
      <div class="pattern">
        <b-img fluid-grow alt="" src="/images/white-pattern.png" />
      </div>

      <div class="section-icon">
        <b-img src="/images/logo.png" width="128" />
      </div>

      <b-container class="rel-div">
        <b-row class="result-bar block-inline">
          <!--          <h4 class="result-txt">Search Results <b> 1 </b></h4>-->
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
              <b-col v-for="i in [1, 2, 3, 4, 5]" :key="i" sm="6" md="4" lg="3">
                <gallery-item :image="{}"></gallery-item>
              </b-col>
            </div>
          </div>
        </div>
      </b-container>
    </section>
  </main>
</template>
