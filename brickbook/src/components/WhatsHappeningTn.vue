<template>
  <div class="WhatsHappeningTn">
    <a class="panel-block is-active">
      <div class="current-plan">
        <!-- area for current plans -->
        <div class="plan">
        <!-- display Location -->
        <!-- display disc -->
        </div>
        <div class="make-plan">
          <b-collapse :open="false" aria-id="contentIdForA11y1">
            <template #trigger>
            <div class="btn">
              <b-button
                
                label="Make Plan"
                type="is-primary"
                aria-controls="contentIdForA11y1"
                expanded
              /></div>
            </template>
            <div class="notification">
              <div class="content">
                <MakePlan />
              </div>
            </div>
          </b-collapse>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import MakePlan from "../components/MakePlan.vue"
export default {
  name: "but",
  components: {
    MakePlan,
  },
};
</script>

<style>
.btn {
  padding-left: 5%;
  padding-right:  10%;
}
.WhatsHappeningTn {
  padding: 5px;
}
.make-plan {
  bottom: 0%;
  position: relative;
  height: 60px;
}
.current-plan {
  height: 400px;
  width: 100%;
}
</style>