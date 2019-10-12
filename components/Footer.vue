<template>
  <footer class="page-footer">
    <section class="sec-space light-bg">
      <b-container>
        <b-row>
          <b-col sm="12" md="6" class="footer-widget">
            <div class="main-logo">
              <nuxt-link to="/">
                <b-img alt="" src="/images/logo.png" width="96px" />
              </nuxt-link>
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
                  <font-awesome-icon icon="map-marked" size="xs" />
                  <span>
                    South Road, Bentleigh, Melbourne, Australia
                  </span>
                </li>
                <li>
                  <font-awesome-icon icon="envelope" size="xs" />
                  <span> kidsmagiclife@gmail.com</span>
                </li>
                <li>
                  <font-awesome-icon icon="phone" size="xs" />
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
                <nuxt-link to="contact-us">
                  <font-awesome-icon icon="arrow-circle-right" size="xs" />
                  <span> Contact Us </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="about-us">
                  <font-awesome-icon icon="arrow-circle-right" size="xs" />
                  <span> About Us </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/products">
                  <font-awesome-icon icon="arrow-circle-right" size="xs" />
                  <span> Products </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="live-shows">
                  <font-awesome-icon icon="arrow-circle-right" size="xs" />
                  <span> Shows </span>
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="gallery">
                  <font-awesome-icon icon="arrow-circle-right" size="xs" />
                  <span> Gallery </span>
                </nuxt-link>
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
                <a
                  href="https://www.facebook.com/Kids-Magic-Life-Productions-308708932519660/"
                  target="_blank"
                >
                  <font-awesome-icon
                    :icon="['fab', 'facebook-square']"
                    style="color: #3b5998; font-size: 20px;"
                  />
                  <span> Facebook </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCdRDCkRmsjs0xDGsBiMjbdw"
                  target="_blank"
                >
                  <font-awesome-icon
                    :icon="['fab', 'youtube']"
                    style="color: #c4302b; font-size: 17px;"
                  />
                  <span> YouTube </span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com/s?i=digital-text&rh=p_27%3ACharise+Katz&s=relevancerank&text=Charise+Katz&ref=dp_byline_sr_ebooks_1"
                  target="_blank"
                >
                  <font-awesome-icon
                    :icon="['fab', 'amazon']"
                    style="color: #232f3e; font-size: 20px;"
                  />
                  <span> Amazon </span>
                </a>
              </li>
              <!--              <li>-->
              <!--                <a href="#">-->
              <!--                  <font-awesome-icon-->
              <!--                    :icon="['fab', 'instagram']"-->
              <!--                    style="color: #8a3ab9"-->
              <!--                  />-->
              <!--                  <span> Instagram </span>-->
              <!--                </a>-->
              <!--              </li>-->
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
        <font-awesome-icon icon="chevron-up" />
      </div>
      <b-container class="ptb-15">
        <b-row>
          <b-col sm="5" md="6">
            <p>
              <!-- Rights here -->
            </p>
          </b-col>
          <!--          <b-col sm="7" md="6">-->
          <!--            &lt;!&ndash;            <ul class="primary-navbar footer-menu">&ndash;&gt;-->
          <!--            &lt;!&ndash;              <li><a href="#">contact us </a></li>&ndash;&gt;-->
          <!--            &lt;!&ndash;              <li><a href="#">term of use </a></li>&ndash;&gt;-->
          <!--            &lt;!&ndash;              <li><a href="#">site map </a></li>&ndash;&gt;-->
          <!--            &lt;!&ndash;              <li><a href="#">privacy policy</a></li>&ndash;&gt;-->
          <!--            &lt;!&ndash;            </ul>&ndash;&gt;-->
          <!--          </b-col>-->
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
