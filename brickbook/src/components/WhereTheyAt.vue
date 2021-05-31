<template>
  <div class="WhereTheyAt" id="WTA">
    <a class="panel-block">
      <div class="map-holder">
        <gmaps-map :options="mapOptions" />
      </div>
    </a>
  </div>
</template>


<script>
import Vue from 'vue'
import { gmapsMap } from 'x5-gmaps';
import x5GMaps from 'x5-gmaps'
Vue.use(x5GMaps, 'AIzaSyCVFDFIOQ-bzrsTfPI_TGfTQTrOGotLiJw')
Vue.use(x5GMaps, { key: 'AIzaSyCVFDFIOQ-bzrsTfPI_TGfTQTrOGotLiJw', libraries: ['places'] })

new Vue({
  render: (h) => h(gmapsMap),
})
export default {
  components: { gmapsMap },
  data: () => ({
    mapOptions: {
      center: { lat: 41.74759, lng: -74.08681},
      zoom: 12
    }
  })
}

</script>

<style>
.WhereTheyAt {
  padding: 5px;
  height: 500px;
  width: max-content;
}
.map-holder {
  padding-left: 5px;
  padding-top: 25px;
  padding-bottom: 25px;
  padding-right: 5px;
  height: 450px;
  width: 425px;
  background: gray;
}
</style>


