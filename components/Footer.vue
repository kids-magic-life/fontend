<template>
  <footer>
    <b-container fluid>
      <b-row align-h="center">
        <b-col cols="4">
          <h2>
            <span class="light-font">Kids Magic Life </span>
            <strong>Information</strong>
          </h2>
          <span class="divider"></span>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna.
          </p>
          <ul>
            <li>
              <font-awesome-icon
                icon="map-marked"
                size="xs"
              ></font-awesome-icon>
              South Road, Bentleigh, Melbourne, Australia
            </li>
            <li>
              <font-awesome-icon icon="envelope" size="xs"></font-awesome-icon>
              kidsmagiclife@gmail.com
            </li>
            <li>
              <font-awesome-icon icon="phone" size="xs"></font-awesome-icon>
              0415 373 996
            </li>
          </ul>
        </b-col>
        <b-col cols="3">
          <ul>
            <li>Tag 1</li>
            <li>Tag 1</li>
            <li>Tag 1</li>
          </ul>
        </b-col>
        <b-col cols="3">
          <ul>
            <li>Tag 1</li>
            <li>Tag 1</li>
            <li>Tag 1</li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
    <section class="footer-bottom">
      <div class="pattern">
        <b-img fluid-grow src="/images/white-pattern.png" />
      </div>
      <div class="to-top">
        UP
      </div>
      <b-container fluid>
        <b-row>
          <b-col>
            <p>
              ©2019 , made with by , all right reserved
            </p>
          </b-col>
          <b-col>
            <p>
              ©2019 , made with by , all right reserved
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
footer {
  margin-top: 80px;
  width: 100%;
  bottom: 0;
  background-color: #f7f6f2;
  min-height: 256px;
  padding: 2.5rem;

  h2 {
    font-size: 18px;
    margin: 0;
  }

  p {
    margin-bottom: 15px;
    line-height: 1.7;
    font-size: 14px;
  }

  ul {
    padding: 0px;
    list-style: none;
    margin: 1.8rem auto;
  }

  li {
    font-weight: lighter;
    line-height: 24px;
  }

  .divider {
    background-color: #7fba00;
    display: inline-block;
    height: 2px;
    width: 30px;
  }

  .footer-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;

    .to-top {
      position: absolute;
      display: block;
      bottom: 100%;
      right: 0;
      left: 0;
      margin-bottom: -50px;
      text-align: center;
    }

    @media (min-width: 1200px) {
      .pattern {
        background-color: #f7f6f2;
      }
    }
  }
}
</style>
