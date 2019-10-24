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
                <gallery-item
                  :image="image"
                  @image-remove="remove"
                ></gallery-item>
              </b-col>
            </div>
          </div>
        </div>
      </b-container>

      <!--      UPLOAD IMAGE MODAL      -->
      <gallery-upload-modal
        :show.sync="show"
        @image-upload="addImage"
      ></gallery-upload-modal>
    </section>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'
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
  created() {
    this.$apollo
      .query({
        query: GET_GALLERY_IMAGES
      })
      .then(({ data }) => {
        this.images = data.images
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
        this.errors = error.graphQLErrors.map(error => error)
      })
  },
  methods: {
    addImage: function(data) {
      this.images.push(data)
      // eslint-disable-next-line no-console
      console.log('data', data)
    },
    remove(id) {
      const index = _.findIndex(this.images, image => image.id === id)
      this.images.splice(index, 1)
    }
  }
}
</script>

<style scoped></style>
