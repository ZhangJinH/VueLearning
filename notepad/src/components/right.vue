<template>
    <div class="right-wrapper">
      <el-input type="textarea" v-model="content"></el-input>
      <el-button icon="edit" @click="changeContent">修改</el-button>
      <el-button icon="delete" @click="del_note">删除</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex'

  export default {
    data() {
      return {
        content:''
      }
    },
    mounted() {
    },
    methods: {
      changeContent() {
        this.edit_note(this.content)
        this.content = ''
      },
      ...mapActions([
        'edit_note',
        'del_note'
      ])
    },
    computed: {
      ...mapGetters([
        'text'
      ])
    }
  }
</script>

<style>
  .right-wrapper {
    float: left;
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
  }
  .right-wrapper .el-textarea {
    margin-bottom: 10px;
  }
</style>

