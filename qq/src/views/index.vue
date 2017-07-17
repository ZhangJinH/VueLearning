<template>
    <div class="index">
      <router-view></router-view>
      <tab></tab>
    </div>
</template>

<script type="text/ecmascript-6">
  import tab from 'components/tab/tab'
  export default {
    data() {
      return {}
    },
    created() {

    },
    methods: {

    },
    components: {
      tab
    }
  }
</script>
