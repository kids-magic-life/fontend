<template>
  <div class="container" style="padding: 200px 0;">
    <!--     <button @click="getPageInfor">Get page infor</button> -->

    <!--    <div v-if="pageInfor != null">-->
    <!--      <img :src="pageInfor.picture.data.url" class="picture" /> <br />-->
    <!--      <img :src="pageInfor.cover.source" class="cover" />-->
    <!--    </div>-->

    <!--  <h1>Number posts: {{ pagePosts.length }}</h1>  -->

    <div v-if="pagePosts.length !== 0">
      <iframe
        v-for="item in pagePosts"
        :key="item.id"
        :src="renderLink(item.id)"
        width="50%"
        style="border:none;"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
      <hr />
    </div>
    <!--    <ul>-->
    <!--      <li v-for="item in pagePosts" :key="item.id">-->
    <!--        <p>Id: {{ item.id }} - Created Time: {{ item.created_time }}</p>-->
    <!--        <p>Content: {{ item.message }}</p>-->
    <!--      </li>-->
    <!--    </ul>-->
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
