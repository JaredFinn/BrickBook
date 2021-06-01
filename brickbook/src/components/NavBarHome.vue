<template>
<div>
    <section class="hero is-info is-small">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a href="/" id="brick-title" class="title">
                BrickBook
                <span class="icon">
                <i class="fas fa-star-of-david is-size-3"></i>
              </span>
              </a>
              <span class="navbar-burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <span class="navbar-item">
                  <router-link to="/signup" id="signup-btn" class="button is-info is-inverted">
                    <span class="icon">
                      <i class="fas fa-star-of-david"></i>
                    </span>
                    <span>Sign Up</span>
                  </router-link>
                  <router-link to="/login" class="button is-info">
                    <span class="icon">
                      <i class="fas fa-star-of-david"></i>
                    </span>
                    <span>Login</span>
                  </router-link>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div class="hero-body">
        <div class="container">
          <section>

            <b-carousel
                :indicator="indicator"
                :indicator-background="indicatorBackground"
                :indicator-inside="indicatorInside"
                :indicator-mode="indicatorMode"
                :indicator-position="indicatorPosition"
                :indicator-style="indicatorStyle">
                <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                    <section :class="`hero is-medium is-${carousel.color}`">
                        <div class="hero-body has-text-centered">
                            <h1 class="title">{{carousel.title}}</h1>
                        </div>
                    </section>
                </b-carousel-item>
            </b-carousel>
        </section>
        </div>
      </div>

      <div class="columns">
        <div class="column"></div>
        <div class="column is-two-thirds">
          <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth">
              <div class="container">
                <ul>
                  <li @click="selectTab(tab.title)"  v-for="tab in tabs" :key="tab.title" :class="{ 'is-active': selectedTab === tab.title }">
                    <a class="has-text-light" :class="{ 'has-text-grey-dark': selectedTab === tab.title }">{{ tab.title }}</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
      
    </section>
    <div class="columns">
      <div id="friend-panel" class="column is-one-quarter">
        <friend-panel/>
      </div>
      <div id="feed" class="column">
        <feed-info/>
        <component v-bind:is="selectedTab"></component>
      </div>
      <div class="column is-one-fifth">

      </div>
    </div>
    </div>
</template>

<script>
import Feed from '../components/Feed.vue';
import NewPost from '../components/NewPost'
import FriendPanel from '../components/FriendPanel.vue';
import FeedInfo from '../components/FeedInfo.vue';

export default {
  data: () => ({
        indicator: false,
        indicatorBackground: false,
        indicatorInside: false,
        indicatorMode: 'hover',
        indicatorPosition: 'is-top',
        indicatorStyle: 'is-lines',
        carousels: [
            { title: 'Slide 1', color: 'info' },
            { title: 'Slide 2', color: 'success' },
            { title: 'Slide 3', color: 'warning' },
            { title: 'Slide 4', color: 'danger' }
        ],
        tabs: [
          {title: "Feed"},
          {title: "NewPost"}
        ],
        selectedTab: "Feed",
  }),
  methods: {
      getImgUrl(value) {
          return `https://picsum.photos/id/43${value}/1230/500`
      },
      selectTab(tab){
        this.selectedTab = tab;
      },
    },
    components:{
      Feed,
      NewPost,
      FriendPanel,
      FeedInfo
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.is-active .al img {
    filter: grayscale(0%);
}
.al img {
    filter: grayscale(100%);
}
#signup-btn{
  margin-right: 5px;
}
#brick-title{
  margin-top: 30px;
}
</style>
