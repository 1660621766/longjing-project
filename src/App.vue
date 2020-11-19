<template>
  <div id="app" class="apps">
    <router-view />
  </div>
</template>

<script>
import { utils } from "./utils";
export default {
  name: "App",
  mounted() {
    // utils.setContentHeight(); //自动计算高度
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: inherit;
}
body,h1,h2,h3,h4,h5,p {
  margin: 0;
}
html,
body {
  height: 100%;
}
</style>
