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
      <div v-if="pagePosts.length !== 0">
        <div
          v-for="item in pagePosts"
          :key="item.id"
          class="fb-post"
          :src="renderLink(item.id)"
          data-width="100%"
        ></div>

        <iframe
          v-for="item in pagePosts"
          :key="item.id"
          :src="renderLink(item.id)"
          width="48%"
          style="border:1px solid #eeeeee; margin: 10px "
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
          allow="encrypted-media"
        ></iframe>
        <hr style="margin: 20px; width: 100%" />
      </div>
      <!--    <ul>-->
      <!--      <li v-for="item in pagePosts" :key="item.id">-->
      <!--        <p>Id: {{ item.id }} - Created Time: {{ item.created_time }}</p>-->
      <!--        <p>Content: {{ item.message }}</p>-->
      <!--      </li>-->
      <!--    </ul>-->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '../config/index.js'
export default {
  name: 'Blog',
  data() {
    return {
      result: null,
      pageInfor: null,
      pagePosts: []
    }
  },
  created() {
    this.getPagePosts()
    this.getPageInfor()
  },
  methods: {
    renderLink(fullId) {
      const postid = fullId.split('_')[1]
      const pageid = fullId.split('_')[0]
      return `https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D${postid}%26id%3D${pageid}`
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
<style scoped>
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
</style>
