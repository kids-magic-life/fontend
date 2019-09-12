<template>
  <section>
    <header>
      <p></p>
      <h1 align="center" class="title">
        LIVE SHOWS
      </h1>
      &nbsp; &nbsp;
    </header>
    <body>
      <div class="ex1">
        <b-embed
          allowfullscreen
          aspect="21by9"
          src="https://www.youtube.com/embed/zFwC_wnyGJg"
          type="iframe"
        ></b-embed>
      </div>

      <div class="ex2">
        <h2>
          We are here to provide children with the best creative entertainment.
        </h2>
        <h2>KIDS MAGIC LIFE LIVE PERFORMANCE</h2>
        <h2>KIDS MAGIC LIFE PARTIES</h2>
      </div>
      <div>
        <p class="ex1">
          Kids Magic Life Party Time! Enjoy lively Sing a-long party for
          everyone to share, with magic world dressed up characters from our
          books to entertain you. Your child will become part of the magical
          theatre and have the best party or birthday ever. We do creative
          program performances - All our learning programs have been designed
          for children to understand the art of creating through imagination.
          Each story takes us on a magical journey with our characters. Your
          children will meet all the characters from our books and learn some
          new songs from our Magical ice-cream fountain CD. All our programs are
          designed to suit the age group of the children.
        </p>
        <p class="ex1">
          Children get a chance to join in the learning by taking part in the
          stories and asking questions and learning to express themselves
          creatively. We play dress up, singing and teach children new songs. We
          do dance routines, drama, improvisation, discussions, arts and craft,
          and offer face or body painting, balloon twisting and lots more! We
          work as a group playing games with your children and our programs
          start with practical steps like waking up in the morning, washing your
          face, brushing your teeth eating breakfast learning about healthy
          food, exercising and lots more. So come along and join us on this
          magical adventure and have the best party!
        </p>
        <p class="ex1">
          ICE-CREAM PARTIES Held at an ice-cream shop near you, because we are
          on the hunt for the magical ice-cream fountain, everyone will get
          ice-cream too. PUBLIC AND COMMUNITY PERFORMANCES Contact Us at
          kidsmagiclife@gmail.com or call Charise 0415373996 to enquire about
          services. We cater all parties to your needs.
        </p>
      </div>
    </body>

    <section>
      <b-container fluid>
        <b-row>
          <b-col>
            <div class="division">
              <nuxt-link to="/">
                <b-img
                  alt="sun-circle-logo.png"
                  center
                  fluid
                  height="512px"
                  src="/images/sun-circle/sun-circle-logo.png"
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
                  alt="mind-mastery-logo.png"
                  center
                  fluid
                  src="/images/mind-mastery/mind-mastery-logo.png"
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
  font-size: 18px;
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

p.ex1 {
  font-family: Verdana;
  padding: 50px;
}

div.ex1 {
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 50px;
}

h1.title {
  font-family: 'Prestige Elite Std';
  padding: 35px;
  border: 2px solid black;
}

div.ex2 {
  font-family: 'Comic Sans MS';
  padding: 50px;
}
</style>
