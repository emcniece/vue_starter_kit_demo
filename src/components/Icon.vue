<template>
  <div>
    <Navigation />

    <h1>{{ msg }}</h1>

    <div>
      <a href="https://github.com/Justineo/vue-awesome" target="_blank"
        >Icon Docs</a
      >
    </div>

    <div>
      <a href="https://fontawesome.com/icons?d=gallery" target="_blank"
        >Font Awesome</a
      >
    </div>

    <b-container>
      <b-row class="bv-example-row">
        <b-col><v-icon scale="3" name="flag"></v-icon></b-col>
        <b-col><v-icon scale="3" name="bell"></v-icon></b-col>
        <b-col><v-icon scale="3" name="backward"></v-icon></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import "vue-awesome/icons/flag";
import "vue-awesome/icons/bell";
import "vue-awesome/icons/backward";

export default {
  name: "Icon",
  data() {
    return {
      msg: "Icon Demo"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
