<template>
    <div class="index">
      <m-header></m-header>
      <router-view></router-view>
      <tab></tab>
    </div>
</template>

<script type="text/ecmascript-6">
  import tab from 'components/tab/tab'
  import MHeader from 'components/header/header'
  export default {
    data() {
      return {}
    },
    created() {

    },
    methods: {

    },
    components: {
      tab,
      MHeader
    }
  }
</script>

<style>
.index {
  width: 100%;
  overflow: hidden;
  padding-bottom: 60px;
}
</style>
