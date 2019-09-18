<template>
  <div>
    <div class="product-box">
      <div class="product-media">
        <b-img-lazy
          class="prod-img"
          alt=""
          src="https://scontent.fmel3-1.fna.fbcdn.net/v/t31.0-8/18156648_1428685763855299_8733790701788824097_o.jpg?_nc_cat=111&_nc_oc=AQkYgIiBsEQknt1ov8nfbT5-BsBXeCq8cuR052xGAOf7AHbAuQPvbsjM9DahiMOmr-0&_nc_ht=scontent.fmel3-1.fna&oh=3a9f8647b9e37da6de8176efd01dac2b&oe=5E361D0F"
        />
      </div>

      <div class="product-caption">
        <h3 class="product-title">
          <a href="#" @click="show = true">
            <span class="light-font"> Kids Magic Life </span>
            <i class="mini-font">
              29th January 2019
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
      show: false
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
