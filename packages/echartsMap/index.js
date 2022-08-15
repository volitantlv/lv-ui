import echartsMap from './src/index.vue'

echartsMap.install = function (Vue) {
  Vue.component(echartsMap.name, echartsMap)
}
export default echartsMap
