<template>
  <div class="echarts-map-3D" :id="id" :style="`width:${width}px;height:${height}px`"></div>
</template>

<script>
import deepMerge from '../../utils/deepMerge'
import 'echarts-gl'

const {
  init,
  registerMap
} = require('echarts')
export default {
  name: 'echartsMap3D',
  props: ['id', 'width', 'height', 'mapJson', 'option', 'mapName', 'mapData'],
  methods: {
    getOption () {
      return deepMerge({
        series: [
          {
            type: 'map3D',
            top: -50,
            left: 50,
            label: {
              show: true,
              distance: 40,
              textStyle: {
                color: '#fff',
                opacity: 1
              }
            },
            postEffect: {
              enable: true
            },
            boxDepth: 'auto',
            itemStyle: {
              color: 'rgba(24,53,178,0.31)',
              opacity: 0.8,
              borderColor: '#fff3',
              borderWidth: 1
            },
            regionHeight: 3,
            emphasis: {
              areaColor: '#2ab8ff',
              borderWidth: 1.5,
              color: 'skyblue'
            },
            map: this.mapName,
            viewControl: {
              projection: 'perspective',
              // autoRotate: true,
              // autoRotateAfterStill: 1,
              alpha: 35,
              beta: 6,
              distance: 116
              // minBeta: -3600,
              // maxBeta: 3600,
              // autoRotateSpeed: 6
            },
            light: {
              main: {
                color: '#fff9',
                intensity: 3,
                // shadow: true,
                // shadowQuality: "ultra",
                alpha: 10,
                beta: 10
              },
              ambient: {
                color: '#fff9',
                intensity: 2
              }
            }
          }
        ]
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

<style scoped>

</style>
