<template>
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

              <div v-if="!Session.user" class="navbar-end">
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
              <div v-else>
                <b> {{Session.user.firstName}} {{Session.user.lastName}} </b>
                <br />
                {{Session.user.handle}}
                (<a @click="logout">
                    Log out
                </a>)
              </div>
            </div>
          </div>
        </nav>
      </div>
      
    </section>
</template>

<script>
import Session, { Logout } from "../models/Session";

export default {
  data: () => ({
        Session,
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
          {title: "New Post"}
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
      logout() {
            Logout();
      }
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
  margin-left: 5px;
}
</style>
