<template>
  <div>
      <article class="panel is-link" >
        <p class="panel-heading">
            The Boys
        </p>
        <div class="tabs is-boxed">
            <div class="container">
                <ul>
                  <li @click="selectTab(tab.title)"  v-for="tab in tabs" :key="tab.title" :class="{ 'is-active': selectedTab === tab.title }">
                    <a class="has-text-light" :class="{ 'has-text-grey-dark': selectedTab === tab.title }">{{ tab.title }}</a>
                  </li>
                </ul>
              </div>
        </div>
        
        <component v-bind:is="selectedTab"></component>

        <!--
            auto generate the list of friends
            get the users info
            display on the list

            show who is currently active?
            have icon for whatever
        -->
        
        
        

        <!--Where they at-->


        <!--Whats happening tn-->



        </article>
  </div>
</template>

<script>
import Boyz from '../components/Boyz'
import WhatsHappeningTn from '../components/WhatsHappeningTn.vue'
import WhereTheyAt from '../components/WhereTheyAt.vue'

export default {
    data: () => ({
        tabs: [
          {title: "Boyz"},
          {title: "WhereTheyAt"},
          {title: "WhatsHappeningTn"},
         
        ],
        selectedTab: "Boyz",
    }),
    methods:{
        selectTab(tab){
            this.selectedTab = tab;
        },
    },
    components:{
        Boyz,
        WhereTheyAt,
        WhatsHappeningTn
    }
    

}



</script>

<style>
.panel{
    padding: 1%;

}
</style>