<template>
  <div>
    <div
      class="product-box"
      @mouseover="hovering = true"
      @mouseleave="hovering = false"
    >
      <div class="product-media">
        <b-img-lazy class="prod-img" alt="" :src="image.location" />
      </div>

      <div class="product-caption">
        <h3 class="product-title">
          <a href="#" @click="show = true">
            <span class="light-font"> {{ image.title }} </span>
            <i class="mini-font">
              {{ moment(image.CreatedAt).format('DD MMM YYYY') }}
            </i>
          </a>
        </h3>
      </div>
    </div>

    <b-badge
      v-show="hovering"
      variant="danger"
      style="top: 30px; right: 0px; position: absolute; cursor: pointer;"
      @mouseover="hovering = true"
      @mouseleave="hovering = false"
      @click="doDelete()"
    >
      Delete
    </b-badge>
  </div>
</template>

<script>
import DELETE_IMAGE from '@/graphql/DELETE_IMAGE'

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
      moment: this.$moment,
      hovering: false
    }
  },
  methods: {
    doDelete() {
      this.$apollo
        .mutate({
          mutation: DELETE_IMAGE,
          variables: {
            id: this.image.id
          }
        })
        .then(({ data }) => {
          this.$emit('image-remove', data.id)
        })
        .catch(error => {
          // eslint-disable-next-line no-console
          console.log(error)
        })
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
