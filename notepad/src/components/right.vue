<template>
    <div class="right">
      <mu-text-field v-model="text" fullWidth multiLine :rows="3" :rowsMax="6"/>
      <mu-float-button @click="edite_note(text)" icon="edit" class="demo-float-button"/>
      <mu-float-button @click="delete_note" icon="delete" class="demo-float-button"/>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapActions,mapGetters} from 'vuex'
  export default {
    data() {
      return {
        text:''
      }
    },
    created() {
        this.text = this.activeNote.text
    },
    methods: {
      ...mapActions([
        'edite_note',
        'delete_note'
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
  .right {
    float: left;
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    padding: 20px 50px;
  }
</style>
