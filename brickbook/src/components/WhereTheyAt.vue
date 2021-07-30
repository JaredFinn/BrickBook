<template>
  
  <div class="WhereTheyAt" id="WTA">
   <!-- <a class="panel-block">
      <div class="map-holder">
        <gmaps-map :options="mapOptions">
          <gmaps-marker
            v-for="(item, i) in items"
            :key="i"
            :options="item.options"
          />
        </gmaps-map>
      </div>
    </a>-->
  </div>
</template>


<script>
  /*
import Vue from "vue";
import { gmapsMap, gmapsMarker } from "x5-gmaps";
import x5GMaps from "x5-gmaps";

Vue.use(x5GMaps, "AIzaSyCVFDFIOQ-bzrsTfPI_TGfTQTrOGotLiJw");
Vue.use(x5GMaps, {
  key: "AIzaSyCVFDFIOQ-bzrsTfPI_TGfTQTrOGotLiJw",
  libraries: ["places"],
});
var x = document.getElementById("WTA");
new Vue({
  render: (h) => h(gmapsMap, gmapsMarker),
});
var currlat = "";
var currlon = "";
export default {
  components: { gmapsMap, gmapsMarker },
  data: () => ({
    mapOptions: {
      center: { lat: 41.74759, lng: -74.08681 },
      zoom: 12,
    },
    items: [
      { options: { position: { lat: currlat, lng: currlon } } },
    ],
  }),
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
        currlat = position.coords.latitude;
        currlon = position.coords.longitude;
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }
    },
    showPosition(position) {
      x.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;
    },
  },
};
*/
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


