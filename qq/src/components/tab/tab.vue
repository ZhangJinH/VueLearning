<template>
    <div class="tab">
        <router-link class="message" tag="div" to="/message">消息</router-link>
        <router-link class="friends" tag="div" to="/friends">联系人</router-link>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {}
    },
    created() {

    },
    methods: {}
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
