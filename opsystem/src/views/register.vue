<template>
    <div class="register">
      <div class="register-wrapper">
        <mu-text-field @change="checkUsername" :errorColor="errcolor" :errorText="errmsg1" class="reginfo" v-model="user.username" fullWidth label="账号" labelFloat/>
        <mu-text-field @change="valueChange" class="reginfo" type="password" v-model="user.password" fullWidth label="密码" labelFloat/>
        <mu-text-field @change="valueChange" :errorText="errmsg"  class="reginfo" type="password" v-model="repeatpwd" fullWidth label="请重复输入密码" labelFloat/>
        <mu-text-field class="reginfo" v-model="user.nickname" fullWidth label="昵称" labelFloat/>
        <mu-radio label="男" name="group" nativeValue="1" v-model="user.sex"/>
        <mu-radio label="女" name="group" nativeValue="2" v-model="user.sex" />
        <mu-text-field type="number" class="reginfo" v-model="user.age" fullWidth label="年龄" labelFloat/>
        <mu-raised-button class="regbtn" @click="register" label="注册" :disabled="disabled" primary/>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import md5 from 'md5'
  export default {
    data() {
      return {
        user:{
          username:'',
          password:'',
          nickname:'',
          sex:'1',
          age:''
        },
        repeatpwd:'',
        errmsg: '',
        errmsg1:'',
        errcolor:''
      }
    },
    methods: {
      valueChange(){
        if(this.user.password !== this.repeatpwd) {
          this.errmsg = '两次输入的密码不一致'
        }else {
          this.errmsg = ''
        }
      },
      register() {
        this.user.sex = parseInt(this.user.sex)
        this.user.password = md5(this.user.password)
        this.$http.post(this.apiurl+'/user/add',this.user)
          .then((res) => {
            if(res.status === 201) {
              this.$router.push({name:'login'})
            }
          })
      },
      checkUsername() {
        this.$http.post(this.apiurl+'/checkname?username='+this.user.username)
          .then((res) => {
            if(res.data != null) {
                this.errmsg1 = res.data.msg
                this.errcolor = 'red'
            }else {
              this.errmsg1 = '账号可以使用'
              this.errcolor = '#39b139'
            }
          })
      }
    },
    computed: {
      disabled: function () {
        if(this.user.username.replace(/(^s*)|(s*$)/g, "").length === 0) {
          return true
        }
        if(this.user.password.replace(/(^s*)|(s*$)/g, "").length === 0) {
          return true
        }
        if(this.user.password !== this.repeatpwd) {
          return true
        }
        if(this.user.nickname.replace(/(^s*)|(s*$)/g, "").length === 0) {
          return true
        }
        if(this.user.age.toString().replace(/(^s*)|(s*$)/g, "").length === 0) {
          return true
        }
        if(this.errcolor==='red') {
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
  .register {
    width: 100%;
    height: 100%;
  }
  .register .register-wrapper {
    width: 300px;
    overflow: hidden;
    margin: 0 auto;
  }
  .register .register-wrapper .reginfo.focus-state {
    color:#474a4f;
  }
  .register .register-wrapper  .reginfo .mu-text-field-focus-line {
    background-color: #474a4f;
  }
  .register .register-wrapper .mu-radio .mu-radio-icon-checked {
    color: #474a4f;
  }
  .register .register-wrapper .regbtn {
    width: 100px;
    margin: 5px 100px;
  }
  input[type=number] {
    -moz-appearance:textfield;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
</style>
