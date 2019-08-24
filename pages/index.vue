<template>
  <header>
    <b-carousel
      id="carousel"
      :interval="4000"
      controls
      indicators
      img-height="625"
      img-width="20"
    >
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52" />
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=53" />
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54" />
    </b-carousel>
  </header>
</template>

<script>
export default {}
</script>
<style lang="scss">
.img-fluid {
  max-height: 626px;
}
</style>
