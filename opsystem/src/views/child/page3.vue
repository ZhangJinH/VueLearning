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
        nums:[]
      }
    },
    created() {
      this.$nextTick(function () {
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
              let echarts1 = this.$echarts.init(document.getElementById('echarts1'))
              let option1 = {
                  title: {
                    text: '商品总销量'
                  },
                  tooltip: {},
                  legend: {
                    data:['销量']
                  },
                  xAxis: {
                    data: name
                  },
                  yAxis: {},
                  series: [{
                    name: '销量',
                    type: 'bar',
                    data: nums
                  }]
                };
              echarts1.setOption(option1)
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
