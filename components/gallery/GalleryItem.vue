<template>
  <div>
    <div class="product-box">
      <div class="product-media">
        <b-img-lazy
          class="prod-img"
          alt=""
          :src="'http://localhost:9000/' + image.location"
        />
      </div>

      <div class="product-caption">
        <h3 class="product-title">
          <a href="#" @click="show = true">
            <span class="light-font"> {{ image.title }} </span>
            <i class="mini-font">
              {{ moment(image.CreatedAt).format('D-MM-YYYY') }}
            </i>
          </a>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    image: {
      type: Object,
      default: null,
      required: true
    }
  },
  data() {
    return {
      show: false,
      moment: this.$moment
    }
  }
}
</script>
<style lang="scss" scoped>
.heart {
  cursor: pointer;

  &:hover > svg {
    -moz-transition: all 0.2s ease-in-out;
    -o-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    color: #f88596;
  }
}
</style>
