<template>
  <div class="page5">
    <mu-select-field style="float: left;margin-left: 20px" v-model="prod" label="选择商品"  :maxHeight="200">
      <mu-menu-item v-for="item, index in prods" :key="index" :title="item.Name" :value="item"/>
    </mu-select-field>
    <el-date-picker
      style="margin-left: 20px"
      v-model="month"
      type="month"
      placeholder="请选择月份">
    </el-date-picker>
    <mu-flat-button style="margin: 18px 0 0 10px" @click="handleClick" label="查询" />

    <div id="echarts" style="width: 800px;height: 600px;margin: 50px auto;"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  import '@/common/util'

  export default {
    data() {
      return {
        prods:[],
        prod:{},
        month:'',
        echarts:{}
      }
    },
    created() {
      this.$nextTick(function () {
        this.$http.get(this.apiurl + '/product/all')
          .then((res) => {
            if(res.data != null) {
              this.prods = res.data
            }
          })
        this.echarts = this.$echarts.init(document.getElementById('echarts'))
        let option = {

          tooltip: {
            trigger:'axis'
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          legend: {
            data:['销量']
          },
          yAxis: {
            type:'value'
          },
          xAxis: {
            type:'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              interval:0,
            }
          },
          series:[
            {
              name: '销量',
              type:'line'
            }
          ]
        };
        this.echarts.setOption(option)
      })
    },
    methods: {
      handleClick(){
        let date = new Date(this.month)
        this.$http.get(this.apiurl+'/sell/getprodsellmonthly?pid=' + this.prod.Pid + '&date=' + date.format('yyyy-MM'))
          .then((res) => {
            if(res.data != null) {
              let time = []
              let nums = []
              res.data.forEach(function (item) {
                time.push(item.Time)
                nums.push(item.Total)
              })
              this.echarts.setOption({
                title: {
                  text: this.prod.Name + date.format('yyyy-MM') +'销量'
                },
                xAxis:{
                  data: time,
                },
                series: [
                  {
                    name: '销量',
                    type: 'line',
                    data: nums
                  }
                ]
              })
            }
          })
      }
    },
    computed:{
      ...mapGetters([
        'apiurl'
      ])
    }
  }
</script>
