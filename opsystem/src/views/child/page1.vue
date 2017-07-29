<template>
    <div class="page1">
      <mu-raised-button v-show="UserInfo.Jid == 2" label="新增商品" class="addProd" @click="open"/>
      <mu-dialog :open="dialog" title="新增商品" @close="close">
        <mu-text-field v-model="prod.Name" label="商品名" labelFloat/>
        <mu-flat-button slot="actions" @click="close" primary label="取消"/>
        <mu-flat-button v-show="!updateCheck" slot="actions" primary @click="addProd" label="确定"/>
        <mu-flat-button v-show="updateCheck" slot="actions" primary @click="updateProd" label="修改"/>
      </mu-dialog>
      <mu-table
        :showCheckbox="showCheckbox"
        :selectable="selectable"
        fixedHeader>
        <mu-thead slot="header">
          <mu-tr>
            <mu-th tooltip="ID">ID</mu-th>
            <mu-th tooltip="名称">名称</mu-th>
            <mu-th v-show="UserInfo.Jid == 2" tooltip="操作">操作</mu-th>
          </mu-tr>
        </mu-thead>
        <mu-tbody v-show="!produsIsNull">
          <mu-tr  v-for="item,index in prods"  :key="index" :selected="item.selected">
            <mu-td>{{item.Pid}}</mu-td>
            <mu-td>{{item.Name}}</mu-td>
            <mu-td v-show="UserInfo.Jid == 2">
              <mu-raised-button @click.stop="update(item)" label="修改"/>
              <mu-raised-button @click.stop="del(item.Pid)" label="删除" secondary/>
            </mu-td>
          </mu-tr>
        </mu-tbody>
      </mu-table>
      <div v-show="produsIsNull" style="width: 100%;text-align: center;margin: 10px 0;font-size: 16px">暂无数据</div>
      <mu-pagination :current="page.current" v-show="!produsIsNull" @pageChange="handlePageChange" :total="page.total">
      </mu-pagination>
    </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        dialog: false,
        prod:{
          Name:''
        },
        prods:[],
        page:{
          total: 110,
          current: 1,
          pagesize: 10
        },
        updateCheck:true,
        delList:[],
        showCheckbox:false,
        selectable:false
      }
    },
    created() {
      this.$nextTick(function () {
        this.getProds()
      })
    },
    methods: {
      open () {
        this.updateCheck = false
        this.dialog = true
      },
      close () {
        this.dialog = false
      },
      addProd() {
        this.$http.post(this.apiurl + '/product/add',this.prod)
          .then((res) => {
            if(res.data === 'ok') {
              this.dialog = false
              this.prod.Name = ''
              this.getProds()
            }
          })
      },
      getProds() {
        this.$http.get(this.apiurl + '/product/count')
          .then((res) => {
            if(res.data!== null) {
              this.page.total = res.data
            }
          })
        this.$http.post(this.apiurl +'/product/get?current=' + this.page.current + '&pagesize='+this.page.pagesize)
          .then((res) => {
            if (res.data !== null) {
              this.prods = res.data
            }else {
              this.prods = []
            }
          })
      },
      handlePageChange(val) {
        this.page.current = val
        this.getProds()
      },
      update(item){
        this.updateCheck = true
        this.prod = item
        this.dialog = true
      },
      updateProd() {
        this.$http.put(this.apiurl+'/product/update',this.prod)
          .then((res) => {
            if(res.data !== null ){
              this.dialog = false
              this.getProds()
            }
          })
      },
      del(id){
        this.$http.delete(this.apiurl+'/product/delete?pid='+id)
          .then((res) => {
            if(res.data !== null && res.data === 'ok') {
              this.getProds()
            }
            console.log(this.prods);
          })
      }
    },
    computed: {
      produsIsNull:function () {
        let value = this.prods
        if((Array.isArray(value) && value.length === 0) || (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0)){
          return true
        }
        return false
      },
      ...mapGetters([
        'apiurl',
        'UserInfo'
      ])
    }
  }
</script>
<style>
  .page1 {
    width: 100%;
    overflow: hidden;
  }
  .page1 .addProd {
    float: right;
    margin: 10px 10px 0 0 ;
  }
</style>
