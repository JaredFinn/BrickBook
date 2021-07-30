<template>
  <div>
      <div class="content-item" v-for="(post, i) in posts" :key="i">
         <Content :post="post" @delete="deletePost(i)"/>
      </div>
  </div>
</template>

<script>
import Vue from "vue"
import { GetMyFeed } from "../models/Posts";
import Session from "../models/Session"

import Content from "../components/Content.vue"

export default Vue.extend({
    data: () => ({
        newPost: {
            user: Session.user
        },
        posts:[]
    }),
    async mounted() {
        this.posts = await GetMyFeed();
    },
    components: {
        Content,
    },
    
})
</script>

<style>

</style>