import echartsLine from './src/index'

echartsLine.install = function (Vue) {
  Vue.component(echartsLine.name, echartsLine)
}
export default echartsLine
