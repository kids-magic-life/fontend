<template>
  <section>
    <header>
      <b-carousel
        id="carousel"
        :interval="4000"
        controls
        indicators
        img-height="625"
        img-width="20"
      >
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52">
          <h1>Kids Magic Life</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at
            vehicula turpis, nec iaculis nisl. Praesent eros libero, fermentum
            vel dui vel, posuere rutrum neque. Nam vehicula, sem eget
            pellentesque aliquam, tortor.
          </p>
        </b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=53" />
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54" />
      </b-carousel>
    </header>
    <section>
      <b-container fluid>
        <b-row>
          <b-col>
            <div class="division">
              <nuxt-link to="/">
                <b-img
                  fluid
                  center
                  src="/images/sun-circle/sun-circle-logo.png"
                  alt="sun-circle-logo.png"
                  height="512px"
                />
              </nuxt-link>
              <h2>Sun Circle</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eu consectetur leo. Pellentesque id hendrerit velit.
              </p>
            </div>
          </b-col>
          <b-col>
            <div class="division">
              <nuxt-link to="/">
                <b-img
                  fluid
                  center
                  src="/images/mind-mastery/mind-mastery-logo.png"
                  alt="mind-mastery-logo.png"
                />
              </nuxt-link>
              <h2>Mind Mastery</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eu consectetur leo. Pellentesque id hendrerit velit.
              </p>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </section>
</template>

<script>
export default {}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Muli:300,400,700&display=swap');

body {
  font-family: 'Muli', sans-serif;
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
</style>
