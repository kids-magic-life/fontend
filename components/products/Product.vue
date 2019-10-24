<template>
  <div>
    <div class="product-box">
      <div class="product-media">
        <b-img-lazy class="prod-img" :src="product.images[0]" />
      </div>
      <div class="product-caption">
        <h3 class="product-title">
          <a :href="product.amazon" target="_blank">
            <span class="light-font" style="font-size: 16px;">
              {{ product.name }}
            </span>
            <i class="mini-font">
              {{ product.series }}
            </i>
          </a>
        </h3>
        <div class="price">
          <strong class="clr-txt"> ${{ product.price }} </strong>
          <!--          <del class="light-font">-->
          <!--            {{ (product.price * 1.5) | currency }}-->
          <!--          </del>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    product: {
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
