/**
 * @description 防抖函数
 * @param handler 函数
 * @param wait 间隔时间
 * @return {(function(*): void)|*}
 */
function throttle (handler, wait) {
  let lastTime = 0
  return function (e) {
    const nowTime = new Date().getTime()
    if (nowTime - lastTime > wait) {
      handler.apply(this, arguments)
      lastTime = nowTime
    }
  }
}
export default throttle
