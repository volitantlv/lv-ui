<template>
  <div :id="id" :style="`width:${width}px;height:${height}px`" class="echarts-bar"></div>
</template>
<script>
import deepMerge from '../../utils/deepMerge.js'
import type from '../../utils/type.js'
import { colors } from '../../comm'

const echarts = require('echarts')
export default {
  name: 'echartsBar',
  props: ['id', 'width', 'height', 'xData', 'yData', 'option'],
  methods: {
    getOptions () {
      let series
      if (type(this.yData[0]) === 'Array') {
        series = this.yData.map((e, index) => {
          return {
            name: index,
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: colors[index][0]
                }, {
                  offset: 1,
                  color: colors[index][0]
                }]),
                barBorderRadius: 12
              }
            },
            data: e
          }
        })
      }
      return deepMerge({
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '4%',
          bottom: '14%',
          top: '16%',
          containLabel: true
        },
        legend: {
          data: ['1', '2', '3'],
          right: 10,
          top: 12,
          textStyle: {
            color: '#fff'
          },
          itemWidth: 12,
          itemHeight: 10
        },
        xAxis: {
          type: 'category',
          data: this.xData,
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'Microsoft YaHei'
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
          axisLabel: {}
        },
        dataZoom: [{
          type: 'inside',
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        series: series || [
          {
            name: '3',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: colors[0][0]
                }, {
                  offset: 1,
                  color: colors[0][1]
                }]),
                barBorderRadius: 11
              }
            },
            data: this.yData
          }]
      }, this.option)
    },
    init () {
      const chart = echarts.init(document.getElementById(this.$props.id))
      chart.setOption(this.getOptions())
      console.log(this.getOptions())
      chart.on('click', e => this.$emit('chartClick', e))
    }
  },
  mounted () {
    this.$nextTick(e => this.init())
  }
}
</script>
