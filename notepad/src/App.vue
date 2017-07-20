<template>
  <div id="app">
    <v-header></v-header>
    <div class="content-wrapper">
      <left></left>
      <right></right>
    </div>
  </div>
</template>

<script>
import VHeader from './components/header.vue'
import left from './components/left.vue'
import right from './components/right.vue'
export default {
  name: 'app',
  components: {
    VHeader,
    left,
    right
  }
}
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
  #app {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    top:0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 45px 10px 0 10px;
  }
</style>
