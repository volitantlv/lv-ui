import echartsLine from './echartsLine'
import echartsBar from './echartsBar'
import echartsMap from './echartsMap'
import echartsMap3D from './echartsMap3D'
import echartsPie from './echartsPie'
import { debounce, deepMerge, getUrlParam, throttle, type, unique } from './utils'
const components = [echartsLine, echartsBar, echartsMap, echartsMap3D, echartsPie]
const install = function (Vue) {
  if (install.installed) return
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
export default install
export {
  install,
  echartsLine, echartsBar, echartsMap, echartsMap3D, echartsPie,
  debounce, deepMerge, getUrlParam, throttle, type, unique
}
cnpm i lvcx-ui --save
import {debounce} from 'lvcx-ui'
