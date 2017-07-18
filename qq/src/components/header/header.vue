<template>
    <div class="header">
      <div class="logo"></div>
      <span v-if="currentIndex === 0" class="title">消息</span>
      <span v-if="currentIndex === 1" class="title">联系人</span>
      <div v-if="currentIndex === 0" class="more"><img src="../../assets/more.png" alt=""></div>
      <div v-if="currentIndex === 1" class="more">更多</div>
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

<style>
  .header {
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    background-color: #5a98de;
    position: relative;
  }
  .header .logo {
    width: 30px;
    height: 30px;
    position: absolute;
    top:5px;
    left: 15px;
    border-radius: 50%;
    background-color: #e1e1e1;
  }
  .header .title {
    display: inline-block;
    width: 100%;
    line-height: 40px;
    color: #fff;
    text-align: center;
  }
  .header .more {
    position: absolute;
    right: 10px;
    width: 40px;
    height: 40px;
    top:0;
    font-size: 14px;
    line-height: 40px;
    color: #fff;
   }
  .header .more img {
    margin-top: 4px;
  }

</style>
