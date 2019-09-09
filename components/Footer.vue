<template>
  <footer class="page-footer">
    <section class="sec-space light-bg">
      <b-container>
        <b-row>
          <b-col sm="12" md="6" class="footer-widget">
            <div class="main-logo">
              <a href="index.html">
                <b-img alt="" src="/images/logo.png" width="96px" />
              </a>
              <span class="medium-font">KIDS MAGIC LIFE</span>
            </div>
            <span class="divider-2"></span>
            <div class="text-widget">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
              </p>
              <ul>
                <li>
                  <font-awesome-icon
                    icon="map-marked"
                    size="xs"
                  ></font-awesome-icon>
                  <span>
                    South Road, Bentleigh, Melbourne, Australia
                  </span>
                </li>
                <li>
                  <font-awesome-icon
                    icon="envelope"
                    size="xs"
                  ></font-awesome-icon>
                  <span> kidsmagiclife@gmail.com</span>
                </li>
                <li>
                  <font-awesome-icon icon="phone" size="xs"></font-awesome-icon>
                  <span>0415 373 996</span>
                </li>
              </ul>
            </div>
          </b-col>
          <b-col sm="4" md="3" class="footer-widget">
            <h2 class="title-1" style="margin-bottom: 0px">
              <span class="light-font"> Information </span>
            </h2>
            <span class="divider-2"></span>
            <ul class="list">
              <li>
                <a href="#">
                  <font-awesome-icon
                    icon="arrow-circle-right"
                    size="xs"
                  ></font-awesome-icon>
                  <span> About Us </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon
                    icon="arrow-circle-right"
                    size="xs"
                  ></font-awesome-icon>
                  <span> About Us </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon
                    icon="arrow-circle-right"
                    size="xs"
                  ></font-awesome-icon>
                  <span> About Us </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon
                    icon="arrow-circle-right"
                    size="xs"
                  ></font-awesome-icon>
                  <span> About Us </span>
                </a>
              </li>
            </ul>
          </b-col>
          <b-col sm="4" md="3" class="footer-widget">
            <h2 class="title-1" style="margin-bottom: 0px">
              <span class="light-font">Socials</span>
            </h2>
            <span class="divider-2"></span>
            <ul class="list">
              <li>
                <a href="#">
                  <font-awesome-icon
                    :icon="['fab', 'facebook-square']"
                    style="color: #3b5998"
                    size="md"
                  ></font-awesome-icon>
                  <span> Facebook </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon
                    :icon="['fab', 'instagram']"
                    style="color: #8a3ab9"
                    size="md"
                  ></font-awesome-icon>
                  <span> Instagram </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <font-awesome-icon
                    :icon="['fab', 'youtube']"
                    style="color: #c4302b"
                    size="md"
                  ></font-awesome-icon>
                  <span> YouTube </span>
                </a>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="footer-bottom">
      <div class="pattern">
        <b-img fluid-grow src="/images/white-pattern.png" />
      </div>
      <div id="to-top" class="to-top" @click="toTop()">
        <font-awesome-icon icon="chevron-up" size="md"></font-awesome-icon>
      </div>
      <b-container class="ptb-15">
        <b-row>
          <b-col sm="5" md="6">
            <p>
              <!-- Rights here -->
            </p>
          </b-col>
          <b-col sm="7" md="6">
            <!--            <ul class="primary-navbar footer-menu">-->
            <!--              <li><a href="#">contact us </a></li>-->
            <!--              <li><a href="#">term of use </a></li>-->
            <!--              <li><a href="#">site map </a></li>-->
            <!--              <li><a href="#">privacy policy</a></li>-->
            <!--            </ul>-->
          </b-col>
        </b-row>
      </b-container>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    toTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>
