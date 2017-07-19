<template>
    <div class="left">
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="全部"/>
        <mu-tab value="tab2" title="收藏"/>
      </mu-tabs>
      <div class="neirong" v-if="activeTab === 'tab1'">
        <div v-for="item in notes" @click="set_activenote(item)">
          {{item.text}}
        </div>
      </div>
      <div class="neirong" v-if="activeTab === 'tab2'">
        <div v-for="item in favorNotes" @click="set_activenote(item)">
          {{item.text}}
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters,mapActions} from 'vuex'
  export default {
    data() {
      return {
        activeTab:'tab1'
      }
    },
    created() {

    },
    methods: {
      handleTabChange(val){
        this.activeTab = val
      },
      ...mapActions([
        'set_activenote'
      ])
    },
    computed: {
      ...mapGetters([
        'notes',
        'favorNotes'
      ])
    }
  }
</script>
<style>
  .left {
    width: 30%;
    height: 100%;
    float: left;
    box-sizing: border-box;
    border-right: 1px solid #7e57c2;
  }
  .neirong div {
    font-size: 20px;
    line-height: 40px;
    background-color: #e1e1e1;
    margin: 5px 0;
  }
  .demo-flat-button {
    color: #1a1a1a;
  }
</style>
