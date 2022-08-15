import echartsPie from './src/index'

echartsPie.install = function (Vue) {
  Vue.component(echartsPie.name, echartsPie)
}
export default echartsPie
