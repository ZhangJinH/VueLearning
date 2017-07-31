<template>
    <div class="main">
      <div class="header">
        <div class="logo">
          信息管理系统
        </div>
        <div class="userinfo">
          <span>{{UserInfo.Nickname}}</span>
          <mu-flat-button  @click="LogOut" label="退出" class="logout"/>
        </div>
      </div>
      <div class="content">
        <div class="content-left">
          <mu-list @change="handleListChange" @itemClick="handleItemChange" :value="activeList">
            <mu-list-item title="商品维护" value="page1" >
              <mu-icon slot="left" value="unarchive" />
            </mu-list-item>
            <mu-list-item title="销量统计" value="page2">
              <mu-icon slot="left" value="save"/>
            </mu-list-item>
            <mu-list-item title="报表查看" toggleNested>
              <mu-icon slot="left" value="sort"/>
              <mu-list-item slot="nested" title="柱状图" value="page3">
                <mu-icon slot="left" value="sort"/>
              </mu-list-item>
              <mu-list-item slot="nested" title="饼图" value="page4">
                <mu-icon slot="left" value="sort"/>
              </mu-list-item>
              <mu-list-item slot="nested" title="热力图" value="page5">
                <mu-icon slot="left" value="sort"/>
              </mu-list-item>
            </mu-list-item>
            <mu-list-item title="信息维护" value="page6">
              <mu-icon slot="left" value="inbox"/>
            </mu-list-item>
          </mu-list>
        </div>
        <div class="content-right">
          <div class="body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapMutations,mapActions} from 'vuex'
  export default {
    data () {
      return {
        activeList: 'page1',
        title:'商品维护'
      }
    },
    created() {
      this.setUser()
    },
    methods: {
      handleListChange (val) {
        this.activeList = val
        this.$router.push({name:val})
      },
      handleItemChange(e) {
        this.title = e.title
      },
      LogOut() {
        this.$http.post(this.apiurl+'/logout')
          .then((res) => {
            this.removeUser()
          })
      },
      ...mapMutations({
        removeUser:'REMOVE_USER'
      }),
      ...mapActions({
        setUser:'set_user'
      })
    },
    computed: {
      ...mapGetters([
        'apiurl',
        'UserInfo'
      ])
    }
  }
</script>
<style scoped>
  .main {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .header{
    position: absolute;
    z-index: 2;
    top:0;
    left: 0;
    background-color: #474a4f;
    height:60px;
    width: 100%;
  }
  .logo{
    font-size: 24px;
    color: white;
    display: inline-block;
    padding: 10px 20px;
  }
  .userinfo {
    float: right;
  }
  .userinfo span {
    font-size: 16px;
    line-height: 60px;
    color:#fff;
  }
  .userinfo .logout {
    color: #fff;
    margin-left: 10px;
  }
  .userinfo .logout:hover {
    background-color: #fff;
    color: #1a1a1a;
  }
  .content{
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding-top: 60px;
    background-color: rgb(236, 236, 236);
  }
  .content-left{
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    border-right: 1px solid #e1e1e1;
    float: left;
    background-color: #fff;
  }
  .content-right{
    position: relative;
    width: 80%;
    height: 100%;
    display: inline-block;
    float: right;
    padding: 10px 20px 10px 20px;
    background-color: rgba(0, 0, 0, 0);
  }
  .body{
    background-color: white;
    border-radius: 5px;
    height: 100%;
    width: 100%;
  }
</style>
