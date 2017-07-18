<template>
    <div class="message">
    <p>      message</p>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {

      }
    },
    created() {
      console.log(this.currentIndex);
    },
    methods: {

    },
    computed: {
      ...mapGetters([
        'currentIndex'
      ])
    }
  }
</script>

<style>
  .message {
    width: 100%;
    padding-bottom: 60px;
  }
</style>

