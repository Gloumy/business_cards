<template>
  <div class="preview-container" :style="{backgroundColor: userDetails.backgroundColor}">
    <h1>Template {{selectedTemplate}}</h1>
    {{userDetails.firstname}} {{userDetails.lastname}}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["userDetails", "selectedTemplate"])
  }
};
</script>

<style lang="scss" scoped>
.preview-container {
  border-style: solid;
  border-color: black;
  min-width: 100%;
  min-height: 350px;
  border-width: 1px;
}
</style>