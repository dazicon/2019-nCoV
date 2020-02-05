<template>
  <div id="mapChina" class="map_china" :style="{height:'320px',width:'100%'}" ref="myEchart"></div>
</template>

<script>
import echarts from 'echarts'
import '../../node_modules/echarts/map/js/china.js'

export default {
  name: 'chinaMap',
  // props: ['userJson'],
  data () {
    return {
      // chart: null
    }
  },
  mounted () {
    this.chinaConfigure()
  },
  // beforeDestroy () {
  //   if (!this.chart) {
  //     return
  //   }
  //   this.chart.dispose()
  //   this.chart = null
  // },
  methods: {
    chinaConfigure () {
      // console.log(this.userJson)
      let myChart = echarts.init(this.$refs.myEchart) // 这里是为了获得容器所在位置
      // window.onresize = myChart.resize
      myChart.setOption({ // 进行相关配置
        title: {
          text: '全国确诊病例数各省统计',
          textStyle: {
            fontSize: 14
          },
          left: 'center',
          top: '15'
        },
        backgroundColor: '#fff',
        // fontSize: '20px',
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        // legend: {
        //   orient: 'vertical',
        //   left: 'left',
        //   data: ['确诊', '治愈'],
        //   selectedMode: 'single',
        //   selected: {
        //     '确诊': true,
        //     '治愈': false
        //   }
        // },
        visualMap: [{
          type: 'piecewise',
          show: true,
          // zlevel: 1,
          // orient: 'horizontal',
          // min: 0,
          // max: 10000,
          pieces: [
            { gte: 10000 }, // (1500, Infinity]
            { gte: 1000, lte: 9999 }, // (900, 1500]
            { gte: 500, lte: 999 }, // (310, 1000]
            { gte: 100, lte: 499 }, // (200, 300]
            { gte: 10, lte: 99 }, // (10, 200]
            { gte: 1, lte: 9 } // (-Infinity, 5)
          ],
          itemGap: 5,
          itemWidth: 8,
          itemHeight: 8,
          left: '8',
          bottom: '5',
          // text: ['高', '低'],
          textGap: 5,
          textStyle: {
            color: '#333',
            fontSize: 10
          },
          realtime: true,
          calculable: true,
          // color: ['orangered', 'yellow', 'lightskyblue'], // echarts2.x的写法，现在推荐用下面的inRange写法
          inRange: {
            color: ['#fdebcf', '#e55a4e', '#4f070d']
          }
        }],
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          // roam: true,
          zlevel: 0,
          label: {
            show: true, // 是否显示对应地名
            color: 'rgba(0,0,0,0.9)',
            fontSize: '8'
          },
          itemStyle: {
            borderColor: 'rgba(0, 0, 0, 0.2)',
            areaColor: null
          },
          emphasis: {
            label: {
              show: true, // 是否显示对应地名
              color: 'rgba(0,0,0,0.9)',
              fontSize: '12'
            },
            itemStyle: {
              // shadowOffsetX: 0,
              // shadowOffsetY: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              shadowBlur: 5,
              borderWidth: 0.5,
              opacity: 0.7
            }
          }
        },
        series: [{
          type: 'scatter',
          coordinateSystem: 'geo' // 对应上方配置
        },
        {
          name: '确诊', // 浮动框的标题
          type: 'map',
          geoIndex: 0,
          data: [
            { 'name': '湖北', 'value': 22112 },
            { 'name': '浙江', 'value': 1006 },
            { 'name': '广东', 'value': 1018 },
            { 'name': '河南', 'value': 914 },
            { 'name': '湖南', 'value': 772 },
            { 'name': '安徽', 'value': 665 },
            { 'name': '江西', 'value': 661 },
            { 'name': '重庆', 'value': 411 },
            { 'name': '江苏', 'value': 408 },
            { 'name': '山东', 'value': 379 },
            { 'name': '四川', 'value': 344 },
            { 'name': '黑龙江', 'value': 277 },
            { 'name': '北京', 'value': 274 },
            { 'name': '上海', 'value': 269 },
            { 'name': '福建', 'value': 215 },
            { 'name': '陕西', 'value': 184 },
            { 'name': '广西', 'value': 172 },
            { 'name': '河北', 'value': 171 },
            { 'name': '云南', 'value': 135 },
            { 'name': '海南', 'value': 111 },
            { 'name': '山西', 'value': 96 },
            { 'name': '辽宁', 'value': 94 },
            { 'name': '天津', 'value': 79 },
            { 'name': '贵州', 'value': 77 },
            { 'name': '甘肃', 'value': 67 },
            { 'name': '吉林', 'value': 65 },
            { 'name': '内蒙古', 'value': 50 },
            { 'name': '宁夏', 'value': 43 },
            { 'name': '新疆', 'value': 39 },
            { 'name': '香港', 'value': 24 },
            { 'name': '青海', 'value': 18 },
            { 'name': '台湾', 'value': 16 },
            { 'name': '澳门', 'value': 10 },
            { 'name': '西藏', 'value': 1 }
          ]
        }
        // ,{
        //   name: '治愈', // 浮动框的标题
        //   type: 'map',
        //   geoIndex: 1,
        //   data: [
        //     { 'name': '湖北', 'value': 2211 },
        //     { 'name': '浙江', 'value': 1006 },
        //     { 'name': '广东', 'value': 1018 },
        //     { 'name': '河南', 'value': 914 },
        //     { 'name': '湖南', 'value': 772 },
        //     { 'name': '安徽', 'value': 665 },
        //     { 'name': '江西', 'value': 661 },
        //     { 'name': '重庆', 'value': 411 },
        //     { 'name': '江苏', 'value': 408 },
        //     { 'name': '山东', 'value': 379 },
        //     { 'name': '四川', 'value': 344 },
        //     { 'name': '黑龙江', 'value': 277 },
        //     { 'name': '北京', 'value': 274 },
        //     { 'name': '上海', 'value': 269 },
        //     { 'name': '福建', 'value': 215 },
        //     { 'name': '陕西', 'value': 184 },
        //     { 'name': '广西', 'value': 172 },
        //     { 'name': '河北', 'value': 171 },
        //     { 'name': '云南', 'value': 135 },
        //     { 'name': '海南', 'value': 111 },
        //     { 'name': '山西', 'value': 96 },
        //     { 'name': '辽宁', 'value': 94 },
        //     { 'name': '天津', 'value': 79 },
        //     { 'name': '贵州', 'value': 77 },
        //     { 'name': '甘肃', 'value': 67 },
        //     { 'name': '吉林', 'value': 65 },
        //     { 'name': '内蒙古', 'value': 50 },
        //     { 'name': '宁夏', 'value': 43 },
        //     { 'name': '新疆', 'value': 39 },
        //     { 'name': '香港', 'value': 24 },
        //     { 'name': '青海', 'value': 18 },
        //     { 'name': '台湾', 'value': 16 },
        //     { 'name': '澳门', 'value': 10 },
        //     { 'name': '西藏', 'value': 1 }
        //   ]
        // }
        ]
      })
    }
  }
}
</script>

<style>
</style>
