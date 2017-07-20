<template>
    <div class="right-wrapper">
      <el-input type="textarea" v-model="text"></el-input>
      <el-button icon="edit" @click="edit_note(text)">修改</el-button>
      <el-button icon="delete" @click="del_note">删除</el-button>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex'
  import {activeNote} from "../store/getters";

  export default {
    data() {
      return {
        text:''
      }
    },
    mounted() {
    },
    methods: {
      ...mapActions([
        'edit_note',
        'del_note'
      ])
    },
    computed: {
      ...mapGetters([
        'activeNote'
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
</style>

