<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>

    <div class="row">
      <div
        class="col-xs-12
              col-sm-8
              col-md-6
              col-lg-4"
      >
        <div class="box">col-xs-12 col-sm-8 col-md-6 col-lg-4</div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-2">
        <div class="box">col-xs-2</div>
      </div>

      <div class="col-xs-2">
        <div class="box">col-xs-2</div>
      </div>

      <div class="col-xs-2">
        <div class="box">col-xs-2</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GridDemo",
  data() {
    return {
      msg: "Grid Demo"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.box {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.4);
}
</style>
