<template>
    <div class="tab">
      <router-link v-for="(item,index) in link" :key="index" @click.native="change(index)"
                   :class="item.name" tag="div" :to="item.name">{{item.title}}</router-link>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations} from 'vuex'
  export default {
    data() {
      return {
        link:[{
          name:'message',
          title:'消息'
        },
          {
            name:'friends',
            title:'联系人'
          }]
      }
    },
    created() {

    },
    methods: {
      change(index){
        this.setIndex(index)
      },
      ...mapMutations({
        setIndex: 'SET_INDEX'
      })
    }
  }
</script>

<style>
  .tab {
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    border-top: 1px solid #e1e1e1;
  }
  .tab div {
    flex: 1;
    line-height: 100px;
    font-size: 14px;
  }
  .tab .message {
    background: url("../../assets/message.png") no-repeat center 10px;
    color: #2c2c2c;
  }
  .tab .message.router-link-active {
    background: url("../../assets/message-active.png") no-repeat center 10px;
    color: #1296db;
  }
  .tab .friends {
    background: url("../../assets/friends.png") no-repeat center 10px;
    color: #2c2c2c;
  }
  .tab .friends.router-link-active {
    background: url("../../assets/friends-active.png") no-repeat center 10px;
    color: #1296db;
  }
</style>
