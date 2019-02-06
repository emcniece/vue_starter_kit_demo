<template>
  <div class="hello">
    <Navigation />

    <h1>{{ msg }}</h1>

    <styled-header>Basic Header</styled-header>

    <red-header>Red Header</red-header>

    <green-header>Green Header</green-header>

    <blue-header>Blue Header</blue-header>
  </div>
</template>

<script>
import styled from "vue-styled-components";

const StyledHeader = styled.div`
  margin: 1em 0;
  font-size: 24px;
`;

const RedHeader = StyledHeader.extend`
  color: red;
`;

const GreenHeader = StyledHeader.extend`
  color: green;
`;

const BlueHeader = StyledHeader.extend`
  color: blue;
`;

export default {
  name: "StyledComponents",
  components: {
    "styled-header": StyledHeader,
    "red-header": RedHeader,
    "green-header": GreenHeader,
    "blue-header": BlueHeader
  },
  data() {
    return {
      msg: "Styled Components Demo"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
