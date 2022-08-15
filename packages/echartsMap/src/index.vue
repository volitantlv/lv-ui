<template>
  <div class="echarts-map" :id="id" :style="`width:${width}px;height:${height}px`"></div>
</template>
<script>
import deepMerge from '../../utils/deepMerge'

const {
  init,
  registerMap
} = require('echarts')
export default {
  name: 'echartsMap',
  props: ['id', 'width', 'height', 'mapJson', 'option', 'mapName', 'mapData'],
  methods: {
    getOption () {
      return deepMerge({
        tooltip: { // 提示框组件。
          trigger: 'item' // 数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        },
        geo: [{
          show: true,
          label: true,
          map: this.mapName,
          itemStyle: {
            normal: {
              areaColor: '#0b58a2',
              borderWidth: 1,
              shadowColor: '#fff9',
              borderColor: '#fff6',
              shadowBlur: 50,
              shadowOffsetX: -5,
              shadowOffsetY: 10
            }
          },
          emphasis: {
            label: false
          }
        }],
        series: [{
          map: this.mapName,
          mapType: this.mapName,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize: '12'
              }
            },
            emphasis: {
              show: true,
              label: false,
              textStyle: {
                color: '#fff',
                fontSize: '12'
              }
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#1D346F',
              borderColor: '#fff',
              borderWidth: 3
              // shadowColor: '#D79D3D',
            },
            emphasis: {
              label: {
                show: false
                // color: '#fff'
              }
            }
          },
          animation: false,
          data: this.mapData
        }]
      }, this.option)
    },
    init () {
      const chart = init(document.getElementById(this.$props.id))
      registerMap(this.mapName, this.mapJson)
      chart.setOption(this.getOption())
      chart.on('click', e => this.$emit('chartClick', e))
    }
  },
  mounted () {
    this.$nextTick(() => this.init())
  }
}
</script>
