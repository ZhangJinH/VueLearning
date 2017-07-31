<template>
    <div class="login">
      <div class="login-wrapper">
        <h3>信息管理系统</h3>
        <mu-text-field v-model="LoginInfo.username" :errorText="errmsg1" class="logininfo" label="账号" labelFloat/>
        <mu-text-field v-model="LoginInfo.password" :errorText="errmsg2" class="logininfo" type="password" label="密码" labelFloat/>
        <mu-raised-button @click="login" :disabled="disabled" class="loginbtn" label="登陆"  primary/>
        <router-link tag="button" class="regbtn" to="/register">注册</router-link>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex'
  import md5 from 'md5'
  export default {
    data() {
      return {
        LoginInfo:{
          username:'',
          password:''
        },
        errmsg1:'',
        errmsg2:''
      }
    },
    methods: {
      login() {
        this.LoginInfo.password = md5(this.LoginInfo.password)
        this.$http.post(this.apiurl+'/login',this.LoginInfo)
          .then((res) => {
            if(res.data.code === '1000') {
              this.errmsg1 = res.data.msg
              this.errmsg2 = ''
            }else if(res.data.code === '1001') {
              this.errmsg1 = ''
              this.errmsg2 = res.data.msg
            } else {
              this.errmsg1 = ''
              this.errmsg2 = ''
              this.setUser()
              this.$router.push({path:'/main'})
            }
          })
      },
      ...mapActions({
        setUser:'set_user'
      })
    },
    computed: {
      disabled:function () {
        if(this.LoginInfo.username.replace(/(^s*)|(s*$)/g, "").length === 0) {
          return true
        }
        if(this.LoginInfo.password.replace(/(^s*)|(s*$)/g, "").length === 0) {
          return true
        }
        return false
      },
      ...mapGetters([
        'apiurl'
      ])
    }
  }
</script>

<style>
  .login {
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: relative;
  }
  .login .login-wrapper {
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -250px;
    width: 500px;
    height: 300px;
    border-radius: 5px;
    -moz-box-shadow:2px 2px 5px #474a4f, -1px -1px 5px #474a4f;
    -webkit-box-shadow:2px 2px 5px #474a4f, -1px -1px 5px #474a4f;
    box-shadow:2px 2px 5px #474a4f, -1px -1px 5px #474a4f;
  }
  .login .login-wrapper h3 {
    text-align: center;
  }
  .login .login-wrapper .logininfo {
    width: 300px;
    margin: 0 100px;
  }
  .login .login-wrapper .logininfo.focus-state {
    color:#474a4f;
  }
  .login .login-wrapper .logininfo .mu-text-field-focus-line {
    background-color: #474a4f;
  }
  .login .login-wrapper .loginbtn {
    width: 100px;
    margin: 5px 200px;
  }
  .login .login-wrapper .regbtn {
    width: 100px;
    margin: 0 0 0 350px;
    border: none;
    cursor: pointer;
    background-color: #fff;
    outline: none;
  }
</style>
