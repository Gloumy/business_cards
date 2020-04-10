<template>
  <div class="app">
    <label for="firstname">Prénom</label>
    <input type="text" v-model="firstname" name="firstname" id="firstname" />
    <label for="lastname">Nom</label>
    <input type="text" v-model="lastname" name="lastname" id="lastname" />
    <div class="preview-container" :style="{'background-color': backgroundColor}">
      <p>{{firstname}}</p>
      <p>{{lastname}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "Hello Vue!",
      firstname: "",
      lastname: "",
      backgroundColor: "blue",
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
.preview-container {
  border-style: solid;
  border-color: black;
  width: 200px;
  height: 150px;
}
</style>
