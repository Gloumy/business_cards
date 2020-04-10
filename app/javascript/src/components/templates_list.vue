<template>
  <div>
    <ul class="list-group list-group-horizontal">
      <li
        v-for="template in templates"
        v-on:click="selectTemplate(template.id)"
        class="list-group-item flex-fill"
        :class="{selected: selectedId == template.id}"
        :key="template.id"
      >{{template.label}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      templates: [
        { id: 1, label: "Template 1" },
        { id: 2, label: "Template 2" },
        { id: 3, label: "Template 3" }
      ],
      selectedId: 1
    };
  },
  methods: {
    selectTemplate(id) {
      this.selectedId = id;
    }
  }
};
</script>

<style lang="scss" scoped>
.selected {
  background-color: #66ff66;
  color: #ffff;
  border-color: black;
}
</style>