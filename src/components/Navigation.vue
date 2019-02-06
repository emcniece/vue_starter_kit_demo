<template>
  <div>
    <h2>Project Navigation</h2>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/grid">Grid</router-link>
      </li>
      <li>
        <router-link to="/carousel">Carousel</router-link>
      </li>
      <li>
        <router-link to="/styled-components">Styled Components</router-link>
      </li>
      <li>
        <router-link to="/icon">Icons</router-link>
      </li>
      <li>
        <router-link to="/map">Maps</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
