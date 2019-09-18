<template>
  <section>
    <header>
      <p></p>
      <h1 align="center" class="title">
        ABOUT US
      </h1>
    </header>
    <body>
      <div class="ex1">
        <b-card>
          <b-media no-body>
            <b-media-aside vertical-align="center">
              <b-img
                src="https://scontent.fmel3-1.fna.fbcdn.net/v/t1.0-9/56691301_2316778871712646_537678219822759936_o.jpg?_nc_cat=102&_nc_oc=AQlz_1JlwruhtEho2Lg2OpsZVWR5hqpH9lOrs6j6EICqvxe-nhugOxrnLIkXYti_Mk4&_nc_ht=scontent.fmel3-1.fna&oh=369602669aaaef88e9b90bbeded5f4f4&oe=5E068F12"
                blank-color="#ccc"
                width="250"
                height="256"
                alt="placeholder"
              ></b-img>
            </b-media-aside>

            <b-media-body class="ml-3">
              <p align="center" class="ex1">
                Started in 2002, Kids Magic Life is the brainchild of Charise
                Katz who has a huge love for children and is invested in the
                wellbeing and development of children. After professional
                training in play therapy and spending a lot of time working with
                many different children, including children with autism and
                physical disabilities, Charise became aware that children enjoy
                listening to fun stories. When they listen to these fun stories
                they create fantasy characters who become part of their lives to
                make it more exciting. Some children create characters that are
                not even human but would give them super powers that they had
                become friends with to help get through situations like bullying
                at school.
              </p>
            </b-media-body>
          </b-media>
        </b-card>
      </div>

      <div class="ex1">
        <b-card>
          <b-media>
            <b-media right-align vertical-align="center">
              <b-img
                slot="aside"
                src="https://scontent.fmel3-1.fna.fbcdn.net/v/t1.0-9/56883455_2316778641712669_4810321933675528192_o.jpg?_nc_cat=105&_nc_oc=AQm2mZTI-Z_sd-j4HOZ4PPArwcEOXD2wcbjh2GlxZSYEdM1e6KzVhtleP2qSf6KCs7U&_nc_ht=scontent.fmel3-1.fna&oh=c6d791ca7c749fd2c92f04722ae2c8f4&oe=5DF5B85B"
                blank-color="#ccc"
                width="280"
                height="256"
                alt="placeholder"
              ></b-img>

              <p class="ex1" align="center">
                A child's mind is like a canvas, and their imagination is a wide
                array of colours splashing against it. It is amazing how far
                children's creative imagination can take them. As such, KML
                focuses on using creative imagination to help children grow,
                gain essential skills as well as Our happy, positive, fun,
                inspiring Books, CD’s, Educational Programs, Parties, Theatre
                Performances and Creative Workshops have seen children growing
                and developing a love for creativity through imagination. Kids
                Magic Life prides itself to help children find a way into their
                imagination that would teach them skills of how to access their
                imagination by visualisation, in other words, creating colourful
                pictures of fun characters in their mind that can help them
                solve problems of anxiety, frustration, anger and other negative
                feelings.
              </p>
            </b-media>
          </b-media>
        </b-card>
      </div>

      <div class="ex1">
        <b-card>
          <b-media no-body>
            <b-media-aside vertical-align="center">
              <b-img
                src="https://scontent.fmel3-1.fna.fbcdn.net/v/t1.0-9/56942440_2316778378379362_8361895055765536768_o.jpg?_nc_cat=111&_nc_oc=AQnMo4WFWRL1yWcQ1HyrqH6dRIkTLgdQKHrlAytZ3eUO5nlD6l0_PbYXJA6l2Bgiy4k&_nc_ht=scontent.fmel3-1.fna&oh=c3521c247a23068afc3e32bed6e7dca9&oe=5E090F16"
                blank-color="#ccc"
                width="280"
                height="256"
                alt="placeholder"
              ></b-img>
            </b-media-aside>

            <b-media-body>
              <p class="ex1">
                These stories are written for children to help them expand their
                own imagination in a creative process that will bring about
                positive changes in their own lives, to have more confidence,
                improve communication skills and express themselves more
                creatively leading to a general improved self-esteem. “If we
                create positive feelings through stories and empower children to
                have good self worth, then no matter what resistance they come
                up against, they will be connecting with their inner being”
              </p>
            </b-media-body>
          </b-media>
        </b-card>
      </div>

      <div class="ex3">
        <h2>
          <b-badge>
            Our Mission:
          </b-badge>
        </h2>

        <p class="inner">
          <span>
            Help individuals to find that inner spark that ignites the flame
            that leads to the manifestation of their dream.
          </span>
        </p>

        <ul class="ex1">
          <li>Life for me is living with purpose</li>
          <li>Living with compassion</li>
          <li>Living with understanding</li>
          <li>Love what you do</li>
          <li>Do what you love</li>
        </ul>
      </div>
    </body>
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

div.ex3 {
  padding: 35px;
  border: 2px solid black;
  margin: 35px;
}

p.ex1 {
  padding-top: 45px;
  padding-right: 45px;
  padding-left: 45px;
}

p.inner {
  font-family: 'Bookman Old Style';
}

ul.ex1 {
  font-size: 25px;
  font-family: fantasy;
}
</style>
