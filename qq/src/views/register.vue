<template>
    <div class="register">
      <h2>注册用户</h2>
      <div class="registerinfo">
        <el-input v-model="user.nickname" type="text" placeholder="昵称"></el-input>
        <el-input v-model="user.loginpwd" type="password" placeholder="密码"></el-input>
        <el-button @click="registerUser">注册</el-button>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import md5 from 'md5'

  export default {
    data() {
      return {
        user:{
          nickname:'',
          loginpwd:''
        }
      }
    },
    created() {

    },
    methods: {
      registerUser() {
        if(this.user.nickname.replace(/(^s*)|(s*$)/g, "").length === 0)
        {
          this.$message({
            message:'昵称不能为空',
            type:'error'
          })
          return
        }
        if(this.user.loginpwd.replace(/(^s*)|(s*$)/g, "").length === 0)
        {
          this.$message({
            message:'密码不能为空',
            type:'error'
          })
          return
        }
        this.user.loginpwd = md5(this.user.loginpwd)
        this.$http.post(this.$apiurl + '/user',this.user)
          .then((res) => {
            if(res.status === 201) {
              this.$message('您的qq号为'+res.data)
              this.$router.push({name:'login'})
            }
          })
      }
    }
  }
</script>

<style>
  .register {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }
  .register h2{
    color: #5a98de;
    font-weight: normal;
    font-size: 28px;
  }
  .register .registerinfo {
    width: 100%;
    height: 300px;
    position: fixed;
    top:50%;
    left: 0;
    margin-top: -150px;
    box-sizing: border-box;
    padding: 0 50px;
  }
  .register .registerinfo .el-input {
    margin-top: 10px;
  }
  .register .registerinfo .el-button {
    margin-top: 10px;
    width: 100%;
    color: #fff;
    background-color: #5a98de;
    border: none;
  }
</style>

