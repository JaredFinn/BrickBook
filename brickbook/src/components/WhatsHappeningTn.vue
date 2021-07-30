<template>
  <div class="WhatsHappeningTn">
    <a class="panel-block is-active">
      <div class="current-plan">
        <!-- area for current plans -->
        <div class="plan">
            planss
        </div>
        <div class="make-plan">
          <b-collapse :open="false" aria-id="contentIdForA11y1">
            <template #trigger>
              <b-button
                label="Make Plan"
                type="is-primary"
                aria-controls="contentIdForA11y1"
              />
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
import MakePlan from "../components/MakePlan.vue";
export default {
  name: "but",
  components: {
    MakePlan,
  },
};
</script>

<style>
.WhatsHappeningTn {
  padding: 5px;
}
.make-plan {
  border: 1px solid;
}
.current-plan {
  height: 400px;
  width: 100%;
  border: 1px solid;
}
</style>