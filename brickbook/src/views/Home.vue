<template>
  <div class="home">
      <div>
        <NavBar />
      </div>
    <div class="columns">
      <div id="friend-panel" class="column is-one-quarter">
        <friend-panel/>
      </div>
      <div id="feed" class="column">
        <feed-info/>
        <feed/>
      </div>
      <div class="column is-one-fifth">

      </div>
    </div>
    
    <Footer/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FriendPanel from '../components/FriendPanel.vue';
import Feed from '../components/Feed.vue';
import FeedInfo from '../components/FeedInfo.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    FriendPanel,
    Feed,
    FeedInfo,
    Footer,
  }
}
</script>

<style>
#friend-panel{
  margin-top: 20px;
  margin-left: 20px;
}

#feed{
  margin-top: 20px;
  margin-left: 20px;
}
</style>
