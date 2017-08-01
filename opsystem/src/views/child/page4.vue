<template>
  <div class="page5">
    <div id="echarts" style="width: 600px;height: 400px;margin: 0 auto;"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        nums:[],
        echarts:{}
      }
    },
    created() {
      this.$nextTick(function () {
        this.echarts = this.$echarts.init(document.getElementById('echarts'))
        this.$http.get(this.apiurl + '/sell/gettotalnums')
          .then((res) => {
            if (res.data != null) {
              let name = []
              let nums = []
              let objs = []
              res.data.forEach(function (item) {
                name.push(item.Name)
                nums.push(item.Value)
                let obj = {
                  name:item.Name,
                  value:item.Value
                }
                objs.push(obj)
              })
              let option = {
                title : {
                  text: '商品总销量',
                  x:'center'
                },
                tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                  orient: 'vertical',
                  left: 'left',
                  data: name
                },
                series : [
                  {
                    name: '访问来源',
                    type: 'pie',
                    radius : ['20%','75%'],
                    center: ['50%', '60%'],
                    roseType:'radius',
                    data:objs,
                    itemStyle: {
                      emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                    }
                  }
                ]
              };
              this.echarts.setOption(option)
            }
          })
      })
    },
    methods: {

    },
    computed: {
      ...mapGetters([
        'apiurl'
      ])
    }
  }
</script>
