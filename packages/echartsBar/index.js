import echartsBar from './src/index.vue'

echartsBar.install = function (Vue) {
  Vue.component(echartsBar.name, echartsBar)
}
export default echartsBar
