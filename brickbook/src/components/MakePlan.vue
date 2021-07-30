<template>
  <section>

        <b-field>
            <b-input placeholder="Location" type="text"></b-input>
        </b-field>

        <b-field>
            <b-input type="textarea"
                minlength="10"
                maxlength="100"
                placeholder="Whats happening there...">
            </b-input>
        </b-field>
    </section>
</template>

<script>
export default {
  name: 'MakePlan',
}
</script>

<style>

</style>