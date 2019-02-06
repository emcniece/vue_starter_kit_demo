<template>
  <div>
    <Navigation />

    <h1>{{ msg }}</h1>

    <div>
      <a
        href="https://bootstrap-vue.js.org/docs/components/layout/"
        target="_blank"
        >Bootstrap-Vue Grid Docs</a
      >
    </div>

    <b-container>
      <b-row class="bv-example-row">
        <b-col>1 of 3</b-col>
        <b-col>2 of 3</b-col>
        <b-col>3 of 3</b-col>
      </b-row>

      <b-row class="bv-example-row">
        <b-col>col</b-col>
        <b-col>col</b-col>
        <b-col>col</b-col>
        <b-col>col</b-col>
      </b-row>

      <b-row class="bv-example-row">
        <b-col cols="8">col-8</b-col>
        <b-col cols="4">col-4</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Grid",
  data() {
    return {
      msg: "Grid Demo"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bv-example-row > div {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.4);
  margin: 0.5em 0;
}
</style>
