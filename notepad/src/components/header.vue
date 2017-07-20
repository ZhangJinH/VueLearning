<template>
  <el-row class="header">
    <el-col :span="24">
      <div class="left"></div>
      <div class="middle">记事本</div>
      <div class="right">
        <el-button icon="plus" @click="add_note">新增</el-button>
        <el-button v-if="activeNote.favor==false" @click="add_favor(activeNote)" icon="star-off">关注</el-button>
        <el-button v-if="activeNote.favor==true" @click="del_favor(activeNote)" icon="star-on">取关</el-button>
      </div>
    </el-col>
  </el-row>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {}
    },
    created() {

    },
    computed:{
      ...mapGetters([
        'activeNote'
      ])
    },
    methods: {
      ...mapActions([
        'add_note',
        'add_favor',
        'del_favor'
      ])
    }
  }
</script>

<style>
  .header {
    position: absolute;
    top:0;
    left: 0;
    z-index: 2;
    height: 40px;
    background-color: #e1e1e1;
    font-size: 0;
    width: 100%;
  }
  .header .left {
    display: inline-block;
    width: 20%;
  }
  .header .middle {
    display: inline-block;
    width: 60%;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
  }
  .header .right {
    display: inline-block;
    width: 20%;
  }
</style>
