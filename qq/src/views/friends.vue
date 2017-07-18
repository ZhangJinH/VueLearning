<template>
    <div class="friends">
      friends
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

