<template>
  <div :id="id" :style="`width:${width}px;height:${height}px`" class="echarts-pie"></div>
</template>

<script>
import deepMerge from '../../utils/deepMerge'
import type from '../../utils/type'

const { init } = require('echarts')
export default {
  name: 'echartsPie',
  props: ['id', 'data', 'width', 'height', 'option', 'img'],
  methods: {
    getOptions () {
      let series
      const color = ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0']
      if (type(this.data[0]) === 'Array') {
        series = this.data.map((e, index) => {
          return {
            name: index,
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['38%', '45%'],
            label: {
              normal: {
                position: 'inner'
              }
            },
            color,
            labelLine: {
              normal: {
                show: false
              }
            },
            tooltip: {
              show: false
            },
            data: e
          }
        })
      }
      return deepMerge({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        graphic: {
          elements: this.img
            ? []
            : [{
                type: 'image',
                style: {
                  image: this.img,
                  width: 100,
                  height: 100
                },
                left: 'center',
                top: 'center'
              }]
        },
        series: series || [{
          type: 'pie',
          hoverAnimation: false,
          legendHoverLink: false,
          radius: ['38%', '45%'],
          color,
          label: {
            normal: {
              position: 'inner'
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          tooltip: {
            show: false
          },
          data: this.data
        }]
      }, this.option)
    },
    init () {
      const chart = init(document.getElementById(this.$props.id))
      chart.setOption(this.getOptions())
      chart.on('click', e => this.$emit('chartClick', e))
    }
  },
  mounted () {
    this.$nextTick(() => this.init())
  }

}
</script>
