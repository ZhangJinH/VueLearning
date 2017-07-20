<template>
    <div class="left-wrapper">
      <el-tabs v-model="activeName">
        <el-tab-pane width="50%" label="全部" name="all">
          <p v-for="item in notes" @click="set_active(item)">{{item.text}}
            <i v-if="item.favor==false" @click="add_favor(item)"  class="el-icon-star-off"></i>
            <i v-if="item.favor==true" @click="del_favor(item)" class="el-icon-star-on"></i></p>
        </el-tab-pane>
        <el-tab-pane width="50%"  label="收藏" name="favor">
          <p v-for="item in favorNotes" @click="set_active(item)">{{item.text}}
            <i v-if="item.favor==false" @click="add_favor(item)" class="el-icon-star-off"></i>
            <i v-if="item.favor==true" @click="del_favor(item)" class="el-icon-star-on"></i></p>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {
        activeName:'all',
      }
    },
    computed: {
      ...mapGetters([
        'notes',
        'favorNotes'
      ])
    },
    methods: {
      ...mapActions([
        'set_active',
        'add_favor',
        'del_favor'
      ])
    }
  }
</script>
<style>
  .left-wrapper {
    float: left;
    width: 30%;
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #e1e1e1;
  }
  .el-tabs__nav {
    width: 100%;
  }
  .el-tabs__item {
    width: 50%;
    text-align: center;
  }
  .el-tab-pane p{
    margin: 5px 0;
    padding: 10px 0;
    background-color: #e1e1e1;
  }
  .el-tab-pane p i {
    float: right;
    margin-right: 40px;
  }
</style>
