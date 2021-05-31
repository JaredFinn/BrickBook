<template>
  <div class="WhatsHappeningTn">
      <a class="panel-block is-active">
            <div class="make-plan">               
                    <div id="but">
                        <button class="button is-small is-fullwidth" v-on:click="CreatePlan">Small</button>
                    </div>
                
            </div>
            <div class="current-plan">

            </div>
        </a>
  </div>
</template>

<script>
//import Vue from 'vue'
//import MakePlan from '../components/MakePlan';
//Vue.component('MakePlan', MakePlan)


export default {
    name: 'but',
    methods: {
        CreatePlan: function (event) {
        console.log('test clicked' + event)
        }
    }//,
    //components: {
    //    MakePlan
   // }
}

</script>

<style>
.WhatsHappeningTn {
    align-items: center;
    padding-right: 5px;
    padding-left: 5px;
    height: 300px;
    width: 500px;
    border: 2px solid;
    border-radius: 5px;
}
.make-plan {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 300px;
    border: 3px solid rgb(0, 30, 128); 
    bottom: 0px;
}
.current-plan {
    border: 2px solid;
    align-items: center;
    border-radius: 5px;
    height: 225px;
    width: 350px;
    padding-left: 25px;
    padding-right: 25px;
}
</style>