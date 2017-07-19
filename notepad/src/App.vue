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
  html,body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
  }
  .content-wrapper {
    position: absolute;
    top:0;
    left: 0;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-top: 60px;
  }
</style>
