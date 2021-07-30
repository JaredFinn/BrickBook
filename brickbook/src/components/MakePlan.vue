<template>
  <section class="sec">
      <form>
        <b-field>
            <b-input v-model="loc" placeholder="Location" type="text"></b-input>
        </b-field>

        <b-field>
            <b-input 
                type="textarea"
                v-model="dis"
                minlength="10"
                maxlength="100"
                placeholder="Whats happening there...">
            </b-input>
        </b-field>
        <b-button
                class="btn"
                label="doing the make"
                type="is-primary"
                aria-controls="contentIdForA11y1"
                @click="getFormValues"
                expanded
              />
      </form>
      
    </section>
</template>

<script>
export default {
  name: 'MakePlan',
  
  methods: {
    getFormValues (submitEvent) {
        try{
            console.log(submitEvent.target.elements.dis.value);
            console.log(submitEvent.target.elements.dis.value + "");
        }catch (error) {
            console.error(error);
        }
      
    }
  }
}
</script>

<style>
.sec {
    margin: 0 auto;
    
}
.btn {
    
}
</style>