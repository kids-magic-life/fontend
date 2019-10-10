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

      <b-container ref="gallery" class="rel-div">
        <b-row class="result-bar block-inline">
          <button
            v-show="user != null"
            class="theme-btn"
            style="float: right; border-radius: 5px"
            @click="show = true"
          >
            Upload Image
          </button>
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
              <b-col
                v-for="image in images"
                :key="image.id"
                sm="6"
                md="4"
                lg="3"
              >
                <gallery-item :image="image"></gallery-item>
              </b-col>
            </div>

            <div class="rel-div pt-50">
              <div class="divider-full-1"></div>
              <div class="nav-page" style="display: inline-flex;">
                <a :disabled="pagination.current <= 1" @click="addPage(-1)">
                  <font-awesome-icon icon="arrow-left" class="left" />
                </a>
                <a @click="addPage(1)">
                  <font-awesome-icon icon="arrow-right" class="right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </b-container>

      <!--      UPLOAD IMAGE MODAL      -->
      <gallery-upload-modal :show.sync="show"></gallery-upload-modal>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import GET_GALLERY_IMAGES from '~/graphql/GET_GALLERY_IMAGES'
import GalleryItem from '~/components/gallery/GalleryItem'
import GalleryUploadModal from '../components/gallery/GalleryUploadModal'

export default {
  name: 'Gallery',
  components: {
    GalleryUploadModal,
    GalleryItem
  },
  data() {
    return {
      pagination: {
        current: 0,
        max_items: 12
      },

      show: false,
      images: []
    }
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  mounted() {
    // const loading = this.$loading.show({
    //   container: this.$refs.gallery
    // })

    this.$apollo
      .query({
        query: GET_GALLERY_IMAGES
      })
      .then(({ data }) => {
        this.images = data.images
        // loading.hide()
      })
      .catch(error => {
        this.errors = error.graphQLErrors.map(error => error)
        // loading.hide()
      })
  },
  methods: {
    addPage: function(amount) {
      this.pagination.current += amount
    }
  }
}
</script>

<style scoped></style>
