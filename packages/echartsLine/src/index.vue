<template>
    <div :id="id" class="echarts-bar" :style="`width:${width}px;height:${height}px`">1</div>
</template>

<script>
import deepMerge from '../../utils/deepMerge'
import { colors } from '../../comm.js'
import type from '../../utils/type.js'
const echarts = require('echarts')
export default {
  name: 'echartsLine',
  data: () => {
    return {}
  },
  props: ['id', 'xData', 'yData', 'width', 'height', 'option'],
  methods: {
    getOptions () {
      let series
      if (type(this.yData[0]) === 'Array') {
        series = this.yData.map((e, index) => {
          return {
            name: '注册总量',
            type: 'line',
            showAllSymbol: true,
            symbolSize: 8,
            lineStyle: {
              normal: {
                color: '#53fdfe' // 线条颜色
              },
              borderColor: '#f0f'
            },
            dataZoom: [{
              type: 'inside',
              show: true,
              height: 15,
              start: 1,
              end: 35
            }],
            label: {
              show: true,
              position: 'top',
              textStyle: {
                color: '#fff'
              }
            },
            itemStyle: {
              normal: {
                color: 'rgba(255,255,255,1)'
              }
            },
            tooltip: {
              show: false
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: colors[index][0]
                },
                {
                  offset: 1,
                  color: colors[index][1]
                }
                ], false),
                shadowColor: 'rgba(53,142,215, 0.9)', // 阴影颜色
                shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: e
          }
        })
      }
      return deepMerge({
        xAxis: [{
          type: 'category',
          boundaryGap: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.4)'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#d1e6eb',
              margin: 15
            }
          },
          axisTick: {
            show: false
          },
          data: this.xData
        }],
        yAxis: [{
          type: 'value',
          min: 0,
          splitNumber: 4,
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false,
            margin: 20,
            textStyle: {
              color: '#d1e6eb'
            }
          },
          axisTick: {
            show: false
          }
        }],
        series: series || [{
          name: '注册总量',
          type: 'line',
          showAllSymbol: true,
          symbolSize: 8,
          lineStyle: {
            normal: {
              color: '#53fdfe' // 线条颜色
            },
            borderColor: '#f0f'
          },
          dataZoom: [{
            type: 'inside',
            show: true,
            height: 15,
            start: 1,
            end: 35
          }],
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#fff'
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(255,255,255,1)'
            }
          },
          tooltip: {
            show: false
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0,150,239,0.3)'
              },
              {
                offset: 1,
                color: 'rgba(0,253,252,0)'
              }
              ], false),
              shadowColor: 'rgba(53,142,215, 0.9)', // 阴影颜色
              shadowBlur: 20 // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            }
          },
          data: this.yData
        }]
      }, this.option)
    },
    init () {
      const chart = echarts.init(document.getElementById(this.$props.id))
      chart.setOption(this.getOptions())
      chart.on('click', e => this.$emit('chartClick', e))
    }
  },
  mounted () {
    this.$nextTick(() => this.init())
  }
}
</script>
