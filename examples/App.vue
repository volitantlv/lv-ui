<template>
  <div id="app">
    <echarts-line :width="500" :height="500" id="id1" :xData="['a','b','c']" :yData="[1,2,3,4]"
                  :option="{1:1}"></echarts-line>
    <echarts-bar :width="500" :height="500" id="id2" :xData="['a','b','c']" :yData="[[1,2],[1,2]]"
                 :option="{1:1}"></echarts-bar>
    <echartsMap :width="500" :height="500" id="id3" :map-json="chinaJson" map-name="china"></echartsMap>
    <echartsMap3D :width="500" :height="500" id="id4" :map-json="chinaJson" map-name="china"></echartsMap3D>
    <echartsPie :width="500" :height="500" id="id5" :data="[1,1]" map-name="china"></echartsPie>
  </div>
</template>

<script>

import chinaJson from './assets/json/china.json'
export default {
  name: 'App',
  data () {
    return { chinaJson }
  },
  components: {
    // echartsBar,
    // echartsMap,
    // echartsMap3D,
    // echartsPie

  },
  mounted () {
  }
}
</script>

<style lang="less">
#app {
  background-color: #000;
}
</style>
