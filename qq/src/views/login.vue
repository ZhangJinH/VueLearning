<template>
    <div class="login">
      <div class="logininfo">
        <el-input v-model="id" type="text" placeholder="QQ号/手机号/邮箱"></el-input>
        <el-input v-model="pwd" type="password" placeholder="密码"></el-input>
        <el-button @click="login">登录</el-button>
        <div class="help-wrapper">
          <router-link tag="div" class="register" to="/register">新用户注册</router-link>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import md5 from 'md5'
  export default {
    data() {
      return {
        id:'',
        pwd:''
      }
    },
    created() {

    },
    methods: {
      login() {
        if(this.id.replace(/(^s*)|(s*$)/g, "").length === 0)
        {
          this.$message({
            message:'昵称不能为空',
            type:'error'
          })
          return
        }
        if(this.pwd.replace(/(^s*)|(s*$)/g, "").length === 0)
        {
          this.$message({
            message:'密码不能为空',
            type:'error'
          })
          return
        }
        this.pwd = md5(this.pwd)
        this.$http.post(this.$apiurl + '/user/login?id='+ this.id + '&pwd=' + this.pwd)
          .then((res) => {
            console.log(JSON.stringify(res.data));
            if(res.data.code === '1000') {
              this.$message({
                message:res.data.msg,
                type:'error'
              })
            }else {
              sessionStorage.setItem('user',JSON.stringify(res.data))
              this.$router.push({name:'index'})
            }

          })
      }
    }
  }
</script>

<style>
  .login {
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }
  .login .logininfo {
    width: 100%;
    height: 300px;
    position: fixed;
    top:50%;
    left: 0;
    margin-top: -150px;
    box-sizing: border-box;
    padding: 0 50px;
  }
  .login .logininfo .el-input {
    margin-top: 10px;
  }
  .login .logininfo .el-button {
    margin-top: 10px;
    width: 100%;
    color: #fff;
    background-color: #5a98de;
    border: none;
  }
  .login .help-wrapper {
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
  }
  .login .logininfo .register {
    width: 100%;
    text-align: right;
    margin-top: 10px;
    color: #5a98de;
  }
</style>
