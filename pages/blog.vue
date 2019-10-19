<template>
  <div>
    <section class="breadcrumb-bg">
      <div class="theme-container container ">
        <div class="site-breadcumb white-clr">
          <h2 class="section-title">
            <span class="light-font">Kids Magic Life</span>
            <strong class="clr-txt">Facebook Blog </strong>
          </h2>
        </div>
      </div>
    </section>
    <div class="container">
      <!--     <button @click="getPageInfor">Get page infor</button> -->

      <!--    <div v-if="pageInfor != null">-->
      <!--      <img :src="pageInfor.picture.data.url" class="picture" /> <br />-->
      <!--      <img :src="pageInfor.cover.source" class="cover" />-->
      <!--    </div>-->
      <!--  <h1>No posts: {{ pagePosts.length }}</h1>  -->
      <!---- Load POSTS-------------------------------------------->
      <div v-if="pagePosts.length !== 0" class="list-blog">
        <div v-for="item in pagePosts" :key="item.id" class="item">
          <div
            class="fb-post"
            :data-href="renderPermaLinkUrl(item.id)"
            data-width="100%"
          ></div>
        </div>
      </div>
    </div>
    <loading :class="{ show: isLoading }" />
  </div>
</template>

<script>
import axios from 'axios'
import config from '../config/index.js'
import Loading from '../components/Loading'
export default {
  name: 'Blog',
  components: {
    Loading
  },
  data() {
    return {
      isLoading: true,
      result: null,
      pageInfor: null,
      pagePosts: []
    }
  },
  created() {
    this.getPagePosts()
    this.getPageInfor()
    // this.getPermalinkUrl()
  },
  mounted() {
    this.$nextTick(() => {
      const oldScript = document.getElementById('facebook-sdk')
      // if(oldScript) oldScript.remove()
      if (!oldScript) {
        const script = document.createElement('script')
        script.setAttribute('id', 'facebook-sdk')
        script.setAttribute('async', true)
        script.setAttribute('defer', true)
        script.setAttribute('crossorigin', 'anonymous')
        script.setAttribute(
          'src',
          'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2'
        )
        window.setTimeout(() => {
          document.querySelector('body').append(script)
          this.isLoading = false
        }, 1000)
      }
    })
  },
  methods: {
    // getPermalinkUrl() {

    //   axios
    //     .get(
    //       `https://graph.facebook.com/page-id-xxxx/feed?fields=permalink_url&access_token=${
    //         config.TOKEN
    //       }`
    //     )
    //     .then(res => {
    //       window.console.log(res)
    //       // if (res.status === 200) this.pagePosts = res.data.data
    //     })
    // },
    renderLink(fullId) {
      const postid = fullId.split('_')[1]
      const pageid = fullId.split('_')[0]
      return `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D${postid}%26id%3D${pageid}`
    },
    renderPermaLinkUrl(fullId) {
      const postid = fullId.split('_')[1]
      const pageid = fullId.split('_')[0]
      return `https://www.facebook.com/${pageid}/posts/${postid}/`
    },
    getPagePosts() {
      axios
        .get(
          `https://graph.facebook.com/${config.PAGEID}/feed?access_token=${
            config.TOKEN
          }`
        )
        .then(res => {
          if (res.status === 200) this.pagePosts = res.data.data
        })
    },
    getPageInfor() {
      const fields = 'fields=about,cover,picture,location,emails,website'
      axios
        .get(
          `https://graph.facebook.com/${config.PAGEID}?${fields}&access_token=${
            config.TOKEN
          }`
        )
        .then(res => {
          this.pageInfor = res.data
          window.console.log(res)
        })
    },
    test() {
      axios
        .get(
          `https://graph.facebook.com/${
            config.PAGEID
          }?fields=access_token&access_token=${config.TOKEN}`
        )
        .then(res => {
          this.result = res
        })
        .catch(err => {
          this.result = err
        })
    }
  }
}
</script>
<style>
.list-blog {
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 0 -15px;
  padding: 50px 0;
}
.list-blog .item {
  width: 50%;
  flex-basis: 50%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;
}
.list-blog .item > .fb-post,
.list-blog .item > .fb-post span,
.list-blog .item > .fb-post iframe {
  width: 100% !important;
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
@media only screen and (max-width: 767px) {
  .list-blog .item {
    width: 100%;
    flex-basis: 100%;
  }
}
</style>
