<template>
  <div>
    <h1>{{ msg }}</h1>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
    </ul>

    <div>
      <a href="https://github.com/SSENSE/vue-carousel" target="_blank"
        >Vue-Carousel Docs</a
      >
    </div>

    <b-container>
      <b-row>
        <b-col>
          <div class="title">Carousel 1: Click Nav Only</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <carousel :per-page="1" :mouse-drag="false">
            <slide>
              Slide 1 Content
            </slide>
            <slide>
              Slide 2 Content
            </slide>
          </carousel>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div class="title">Carousel 2: Draggable</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <carousel :per-page="1" :mouse-drag="true">
            <slide>
              Slide 1 Content
            </slide>
            <slide>
              Slide 2 Content
            </slide>
          </carousel>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <div class="title">Carousel 3: Side Navigation</div>
        </b-col>
      </b-row>

      <b-row>
        <b-col>
          <carousel
            :per-page="1"
            :mouse-drag="true"
            :paginationEnabled="false"
            :navigationEnabled="true"
          >
            <slide>
              Slide 1 Content
            </slide>
            <slide>
              Slide 2 Content
            </slide>
          </carousel>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "CarouselDemo",
  data() {
    return {
      msg: "Carousel Demo"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin: 1em 0;
  font-size: 24px;
}
.VueCarousel-slide {
  background: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.4);
  margin: 0.5em 0;
}
</style>
