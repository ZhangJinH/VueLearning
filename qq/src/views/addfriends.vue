<template>
    <div class="addfriends">
      <div class="head-wrapper">
        <span>返回</span>
        添加
      </div>
      <el-input
        class="search"
        v-model="id"
        placeholder="找人/找群/找公众号"
        icon="search"
        :on-icon-click="handleIconClick"
      ></el-input>
      <p v-if="userinfo!==null">{{userinfo.Nickname}}({{userinfo.Id}})</p>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        id:'',
        userinfo:{
          type:Object,
          default:null
        }
      }
    },
    created() {

    },
    methods: {
      handleIconClick() {
        this.$http.get(this.$apiurl + '/user/'+parseInt(this.id))
          .then((res) => {
            this.userinfo = res.data
          })
      }
    }
  }
</script>

<style>
  .addfriends {
    width: 100%;
    height: 100%;
  }
  .addfriends .head-wrapper {
    width: 100%;
    height: 40px;
    color: #fff;
    line-height: 40px;
    position: relative;
    background-color: #5a98de;
  }
  .addfriends .head-wrapper span {
    display: block;
    position: absolute;
    top:0;
    left: 0;
    width: 50px;
    height: 40px;
    margin-left: 10px;
  }
  .addfriends .search {
    width: 80%;
    margin: 10px 10%;
  }
  .addfriends p {
    margin: 0;
    height: 40px;
    line-height: 40px;
    color: #1a1a1a;
    background-color: #e1e1e1;
  }
</style>
