<template>
  <div>
    <Navigation />

    <h1>{{ msg }}</h1>

    <div>
      <a href="https://github.com/xkjyeah/vue-google-maps" target="_blank"
        >Map Docs</a
      >
    </div>

    <b-container>
      <b-row>
        <b-col
          ><GmapMap
            ref="mapRef"
            :center="{ lat: 10, lng: 10 }"
            :zoom="7"
            map-type-id="terrain"
            style="width: 100%; height: 300px"
          >
            <GmapMarker
              :position="{ lat: 10, lng: 10 }"
              :clickable="true"
              :draggable="true"
            /> </GmapMap
        ></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "MapComponent",
  mounted() {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)
    /*
    this.$refs.mapRef.$mapPromise.then(map => {
      map.panTo({ lat: 1.38, lng: 103.8 });
    });
    */
  },
  data() {
    return {
      msg: "Map Demo"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
