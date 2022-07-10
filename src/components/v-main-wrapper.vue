<template>
  <div class="v-main-wrapper">
    <VHeader />
    <keep-alive>
      <router-view />
    </keep-alive>
    <VFooter></VFooter>
  </div>
</template>

<script>
import VFooter from "./v-footer";
import VHeader from "./v-header";
export default {
  components: {
    VFooter,
    VHeader,
  },
  name: "v-main-wrapper",
  props: {},
  data() {
    return {
      title: "Main wrapper",
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
.v-main-wrapper {
  margin: 0 auto;
}
</style>