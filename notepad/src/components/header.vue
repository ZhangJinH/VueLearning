<template>
    <div class="header">
      <span>记事本</span>
      <div class="fr">
        <mu-icon-button   icon="add" @click="add_note"/>
        <mu-icon-button v-if="!activeNote.favor"  tooltipPosition="bottom-left" icon="star" @click="add_favor"/>
        <mu-icon-button v-if="activeNote.favor"  tooltipPosition="bottom-left" icon="person" @click="delete_favor"/>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions,mapGetters} from 'vuex'
  export default {
    data() {
      return {}
    },
    created() {

    },
    methods: {
      ...mapActions([
        'add_note',
        'add_favor',
        'delete_favor'
      ])
    },
    computed:{
      ...mapGetters([
        'activeNote'
      ])
    }
  }
</script>

<style>
  .header {
    position: absolute;
    top:0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: hsla(0,0%,100%,.7);
    background-color: #7e57c2;
  }
  .header .fr {
    float: right;
  }
</style>
