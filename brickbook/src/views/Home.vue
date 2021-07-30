<template>
  <div class="home">
      <div>
        <nav-bar-home/>
      </div>
    
    
    <Footer/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '../components/Footer.vue';
import NavBarHome from '../components/NavBarHome.vue';

export default {
  name: 'Home',
  components: {
    Footer,
    NavBarHome,
  }
}
</script>

<style>
.home{
  background-color: #fffff9;
}

#friend-panel{
  margin-top: 20px;
  margin-left: 20px;
}

#feed{
  margin-top: 20px;
  margin-left: 20px;
}
</style>
