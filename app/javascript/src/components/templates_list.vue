<template>
  <div>
    <ul class="list-group list-group-horizontal">
      <li
        v-for="template in templates"
        @click="selectTemplate(template.id)"
        class="list-group-item flex-fill"
        :class="{selected: selectedTemplate == template.id}"
        :key="template.id"
      >{{template.label}}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      templates: [
        { id: 1, label: "Template 1" },
        { id: 2, label: "Template 2" },
        { id: 3, label: "Template 3" }
      ]
    };
  },
  methods: {
    ...mapMutations(["selectTemplate"])
    // selectTemplate(id) {
    //   this.selectedId = id;
    // }
  },
  computed: {
    ...mapGetters(["selectedTemplate"])
    // selectedTemplateId(){
    //   return this.$store.state.selectedTemplateId;  
    // }
  }
  // computed: mapState([
  //   'selectedTemplateId'
  // ])
};
</script>

<style lang="scss" scoped>
.selected {
  background-color: #66ff66;
  color: #ffff;
  border-color: black;
}
</style>