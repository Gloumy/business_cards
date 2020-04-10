<template>
  <div class="vue-inputs">
    <div class="row">
      <div class="col-sm-12 col-md-3">
        <label for="firstname">Prénom</label>
        <input type="text" v-model="firstname" name="firstname" id="firstname" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-3">
        <label for="laststname">Nom</label>
        <input type="text" v-model="lastname" name="lastname" id="lastname" />
      </div>
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
      backgroundColor: "blue"
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
