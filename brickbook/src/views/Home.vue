<template>
  <div class="home">
    <NavBar />
    <Hero/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import Hero from '../components/Hero.vue'

export default {
  name: 'Home',
  components: {
    NavBar,
    Hero
  }
}
</script>
