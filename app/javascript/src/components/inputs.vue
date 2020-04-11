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
        <label for="lastname">Nom</label>
        <input type="text" v-model="lastname" name="lastname" id="lastname" />
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-3">
        <label for="backgroundColor">Couleur de fond</label>
        <input type="text" v-model="backgroundColor" name="backgroundColor" id="backgroundColor" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    firstname: {
      get: function() {
        return this.$store.getters.userDetails.firstname;
      },
      set: function(value) {
        this.$store.commit("updateUserDetails", {
          attribute: "firstname",
          value: value
        });
      }
    },
    lastname: {
      get: function() {
        return this.$store.getters.userDetails.lastname;
      },
      set: function(value) {
        this.$store.commit("updateUserDetails", {
          attribute: "lastname",
          value: value
        });
      }
    },
    backgroundColor: {
      get: function() {
        return this.$store.getters.userDetails.backgroundColor;
      },
      set: function(value) {
        this.$store.commit("updateUserDetails", {
          attribute: "backgroundColor",
          value: value
        });
      }
    }
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
