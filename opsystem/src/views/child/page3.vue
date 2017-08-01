<template>
    <div class="page3">
      <div id="echarts1" style="width: 600px;height: 400px;margin: 0 auto;"></div>
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
        this.echarts = this.$echarts.init(document.getElementById('echarts1'))
        let option = {
          title: {
            text: '商品总销量'
          },
          tooltip: {
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
              formatter:function (value) {
                return value.split("").join("\n")
              }
            }
          },
          series:[
            {
              name: '销量',
              type: 'bar',
            }
          ]
        };
        this.echarts.setOption(option)

        this.$http.get(this.apiurl + '/sell/gettotalnums')
          .then((res) => {
            if (res.data != null) {
              let name = []
              let nums = []
              res.data.forEach(function (item) {
                name.push(item.Name)
                nums.push(item.Value)
              })
              this.echarts.setOption({
                xAxis:{
                  data: name,
                },
                series: [
                  {
                    name: '销量',
                    type: 'bar',
                    data: nums
                  }
                ]
              })

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
