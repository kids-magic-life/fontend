<template>
  <div>
    <section class="breadcrumb-bg">
      <div class="theme-container container ">
        <div class="site-breadcumb white-clr">
          <h2 class="section-title">
            <span class="light-font">Kids Magic Life</span>
            <strong class="clr-txt">Contact Us </strong>
          </h2>
        </div>
      </div>
    </section>
    <div id="contact" :class="{ loading: loading }">
      <div class="column">
        <div class="column1">
          <img src="/font/spotlight.jpg" class="bg" />
          <p>
            <span class="fa fa-map-marker">&emsp;&nbsp;&nbsp;Address</span
            ><br />
            <a
              href="https://www.google.com/maps/place/Umbrella+Lounge+Bar/@-37.884751,145.0008673,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad668fe528eaf67:0xf6318e9aeff5f370!8m2!3d-37.884751!4d145.003056"
              class="a1"
              >Umbrella Lounge Bar, 338-340 Glen Huntly Road<br />&emsp;&emsp;&nbsp;Elsternwick,
              VIC 3185, Australia</a
            ><br />
            <span class="fa fa-comments-o">&emsp;Live Chat Support</span><br />
            <a
              href="https://m.me/308708932519660?fbclid=IwAR38wFuMeuPi6LmCTMciRLs32dvioFgxfNYkTVtSK5QdjeTbCejFFeuE1S4"
              >Click Here To Chat</a
            ><br />
            <span class="fa fa-volume-control-phone"
              >&emsp;&nbsp;Lets Talks</span
            ><br />
            <a href="">+61 415 373 996</a><br />
            <span class="fa fa-envelope-o">&emsp;&nbsp;General Support</span
            ><br />
            <a href="mailto:Charise@gmail.com" class="a2"
              >kidsmagiclife@gmail.com</a
            ><br />
          </p>
        </div>
      </div>
      <div class="column">
        <form action="" style="max-height: 100%; text-align: center;">
          <h2 style="max-height: 65px; padding-top: 10px; color: green;">
            Send Us A Message
          </h2>
          <div style="text-align: left; max-height: 70%; font-weight: bold">
            <label for="name">&nbsp; Tell Us Your Name</label>
            <input
              id="name"
              v-model="name"
              type="text"
              name="name"
              pattern="^[a-zA-Z][a-zA-Z-_\s]+"
              placeholder="Your name..."
            />
            <label for="email">&nbsp; Enter Your Email</label>
            <input
              id="email"
              v-model="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              placeholder="Your email.."
              type="text"
            />
            <label>&nbsp; Enter Message Subject</label>
            <input
              id="title"
              v-model="title"
              type="text"
              name="title"
              pattern="^[a-zA-Z]+[\w\W\d\s\.\?-_]*"
              placeholder="Your message is about .."
            />
            <label>&nbsp; Message</label>
            <textarea
              id="subject"
              v-model="message"
              name="subject"
              pattern="^[a-zA-Z]+[\w\W\d\s\.\?-_]*"
              placeholder="Write something.."
              style="min-height:170px; margin-top: 0"
            ></textarea>
          </div>
          <input type="submit" value="Submit" @click.prevent="handleSubmit" />
        </form>
      </div>
      <div class="fix-clear"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      title: '',
      message: '',
      loading: false
    }
  },
  methods: {
    handleSubmit() {
      const data = {
        email: this.email,
        name: this.name,
        title: this.title,
        message: this.message
      }
      this.loading = true
      axios
        .post('http://localhost:3000/api/sendMail', data)
        .then(response => {
          this.loading = false
          this.email = ''
          this.name = ''
          this.title = ''
          this.message = ''
          window.alert(response.data.message)
        })
        .catch(error => {
          this.loading = false
          window.alert(error.message)
        })
    }
  }
}
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
body {
  font-family: Courier New, Arial, Helvetica;
}
#contact {
  display: flex;
}
#contact::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  z-index: 99999;
  opacity: 0;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.2);
}
#contact.loading::after {
  opacity: 1;
  visibility: visible;
}
#contact .fix-clear {
  /*content: ''*/
  clear: both;
  display: block;
}

/* Style inputs */
input[type='text'],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 3px;
  margin-bottom: 16px;
  resize: vertical;
  max-height: 30px;
  background-color: #f2f2f2;
}

input[type='submit'] {
  background-color: #009900;
  color: white;
  padding: 6px 21px;
  border: none;
  cursor: pointer;
  max-height: 35px;
  text-align: center;
}

input[type='submit']:hover {
  background-color: #045d04fa;
}

input:invalid {
  border: 2px solid #c4302b;
}

input:valid {
  border-color: #cccccc;
}

p {
  color: white;
  font-size: 18px;
  position: relative;
}
.a1 {
  color: #ffc107;
}
.a2 {
  color: #20c997;
}
a {
  font-family: Arial, Helvetica;
  font-size: 15px;
  padding-left: 35px;
  text-decoration: none;
  color: #f2aef7;
}
a:hover {
  color: #ffa4a4;
  font-size: 18px;
}
span {
  margin-top: 27px;
}

/* Create two columns that float next to eachother */
.column {
  /*float: left;*/
  width: 50%;
  margin-top: 0;
  padding-right: 30px;
  padding-bottom: 0;
}

.column1 {
  /*float: left;*/
  min-width: 100%;
  height: 100%;
  /*background-image: url('/font/spotlight.jpg');*/
  background-size: cover;
  padding-left: 80px;
  padding-top: 70px;
  position: relative;
}
.column1 .bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .column,
  input[type='submit'] {
    float: none;
    min-width: 100%;
    margin-top: 0;
    background: white;
    padding-right: 0;
  }
}
</style>
