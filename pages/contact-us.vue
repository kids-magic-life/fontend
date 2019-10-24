<template>
  <main style="padding-top: 140px">
    <section class="breadcrumb-bg">
      <div class="theme-container container ">
        <div class="site-breadcumb white-clr">
          <h2 class="section-title">
            <span class="light-font">Kids Magic Life</span>
            <strong class="clr-txt">Contact Us </strong>
          </h2>
          <ol class="breadcrumb breadcrumb-menubar">
            <li><a href="#"> Home </a> Contact Us</li>
          </ol>
        </div>
      </div>
    </section>

    <section class="contact-wrap sec-space-bottom">
      <b-container class="rel-div pt-50">
        <b-row>
          <b-col md="8">
            <div class="contact-map">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    id="gmap_canvas"
                    width="100%"
                    height="500px"
                    src="https://maps.google.com/maps?q=South%20Road%2C%20Bentleigh%2C%20Melbourne%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </b-col>

          <b-col md="4">
            <div class="contact-details">
              <h3 class="fsz-25">
                <span class="light-font">Kids Magic Life </span>
                <strong>Address </strong>
              </h3>
              <h6 class="sub-title-1 pb-15">Musical Production</h6>

              <h5 class="clr-txt fsz-12 pt-15">Kids Magic Life</h5>
              <p>South Road, Bentleigh, Melbourne, Australia</p>

              <ul>
                <li><strong>Call: </strong> <i>0415 373 996</i></li>
                <li>
                  <strong>Email: </strong>
                  <i> kidsmagiclife@gmail.com </i>
                </li>
                <li>
                  <strong>Facebook: </strong>
                  <i>
                    <a
                      href="https://www.facebook.com/Kids-Magic-Life-Productions-308708932519660/"
                    >
                      Kids Magic Life Productions
                    </a>
                  </i>
                </li>
              </ul>
            </div>
          </b-col>
        </b-row>

        <div class="divider-full-1"></div>

        <b-col md="8" offset-md="2" class="pt-50">
          <h3 class="fsz-25 text-center">
            <span class="light-font">Contact </span>
            <strong>Kids Magic Life </strong>
          </h3>
          <h6 class="sub-title-1 text-center">Musical Production</h6>

          <div ref="emailContainer" class="contact-form pt-50">
            <b-alert v-model="alert" variant="success" dismissible>
              Message Sent Successfully!
            </b-alert>

            <b-alert v-model="error" variant="danger" dismissible>
              Oops! Something went wrong!
            </b-alert>
            <form id="contact-form" class="contact-form row">
              <b-col sm="4" class="form-group">
                <input
                  id="Name"
                  v-model="name"
                  class="form-control"
                  placeholder="Name"
                  name="Name"
                  required=""
                  type="text"
                />
              </b-col>
              <b-col sm="4" class="form-group">
                <input
                  id="Email"
                  v-model="email"
                  class="form-control"
                  placeholder="Email"
                  name="Email"
                  required=""
                  type="email"
                />
              </b-col>
              <b-col sm="4" class="form-group">
                <input
                  id="Phone"
                  v-model="phone"
                  class="form-control"
                  placeholder="Phone"
                  name="Phone"
                  type="text"
                />
              </b-col>
              <b-col sm="12" class="form-group">
                <textarea
                  id="Message"
                  v-model="message"
                  class="form-control"
                  placeholder="Message"
                  name="Message"
                  cols="12"
                  rows="4"
                ></textarea>
              </b-col>
              <b-col sm="12" class="form-group text-center pt-15">
                <button
                  class="theme-btn"
                  type="submit"
                  @click.prevent="handleSubmit()"
                >
                  <strong> SEND EMAIL </strong>
                </button>
              </b-col>
            </form>
          </div>
        </b-col>
      </b-container>
    </section>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactUs',
  data() {
    return {
      name: null,
      email: null,
      phone: null,
      message: null,
      alert: false,
      error: false
    }
  },
  methods: {
    handleSubmit() {
      const loading = this.$loading.show({
        container: this.$refs.emailContainer
      })

      axios
        .post('http://localhost:3000/api/sendMail', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        })
        .then(response => {
          this.loading = false
          this.name = null
          this.email = null
          this.phone = null
          this.message = null
          this.alert = true
          loading.hide()
        })
        .catch(error => {
          this.loading = false
          this.error = true
          loading.hide()

          // eslint-disable-next-line no-console
          console.log(error)
        })
    }
  }
}
</script>

<style scoped></style>
