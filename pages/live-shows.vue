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
      <div class="bordered">
        <div class="ex2">
          <h2>
            We are here to provide children with the best creative
            entertainment.
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
            new songs from our Magical ice-cream fountain CD. All our programs
            are designed to suit the age group of the children.
          </p>
          <p class="ex1">
            Children get a chance to join in the learning by taking part in the
            stories and asking questions and learning to express themselves
            creatively. We play dress up, singing and teach children new songs.
            We do dance routines, drama, improvisation, discussions, arts and
            craft, and offer face or body painting, balloon twisting and lots
            more! We work as a group playing games with your children and our
            programs start with practical steps like waking up in the morning,
            washing your face, brushing your teeth eating breakfast learning
            about healthy food, exercising and lots more. So come along and join
            us on this magical adventure and have the best party!
          </p>
          <p class="ex1">
            ICE-CREAM PARTIES Held at an ice-cream shop near you, because we are
            on the hunt for the magical ice-cream fountain, everyone will get
            ice-cream too. PUBLIC AND COMMUNITY PERFORMANCES Contact Us at
            kidsmagiclife@gmail.com or call Charise 0415373996 to enquire about
            services. We cater all parties to your needs.
          </p>
        </div>
      </div>

      <b-container fluid class="p-4 bg-dark">
        <b-row>
          <b-col>
            <b-img
              left
              thumbnail
              fluid
              src="https://scontent.fmel3-1.fna.fbcdn.net/v/t31.0-8/11838855_961891067201440_385247951384401860_o.jpg?_nc_cat=110&_nc_oc=AQl83fS6aCQApJ0P4Xd_cdIdsMvDHwGzxHlI7yRPmej8ifquy5nsJrKdDbgat6d7myM&_nc_ht=scontent.fmel3-1.fna&oh=1686a7e662a723887f7f0b200c7a6eaf&oe=5DF39EF5"
              alt="Image 1"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              center
              thumbnail
              fluid
              src="https://scontent.fmel3-1.fna.fbcdn.net/v/t31.0-8/11888166_956242597766287_4633533854011039450_o.jpg?_nc_cat=101&_nc_oc=AQni4RGqhJYlWbduqyDmn93LsdFtLptgfG9vX__evhlCQhJi2qMZ15xxcaduAcc5QAI&_nc_ht=scontent.fmel3-1.fna&oh=c830c2e5bf9531dac6c39fd857b4c4b2&oe=5E05E869"
              alt="Image 2"
            ></b-img>
          </b-col>
          <b-col>
            <b-img
              right
              thumbnail
              fluid
              src="https://scontent.fmel3-1.fna.fbcdn.net/v/t31.0-8/12002610_961890117201535_8536142144695870715_o.jpg?_nc_cat=108&_nc_oc=AQlnRgyPjfIQFiu2zemH33MlawAYEvkjqBGV65Blrbbuu3t-nw6UuaRSBn_xuG26D4o&_nc_ht=scontent.fmel3-1.fna&oh=fa1b957bc3719cc1b45b3260d3708199&oe=5E3CFEF2"
              alt="Image 3"
            ></b-img>
          </b-col>
        </b-row>
      </b-container>
    </body>
  </section>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
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
  padding-bottom: 20px;
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
div.bordered {
  padding: 20px;
  margin: 20px;
  border: 10px outset black;
}
</style>
