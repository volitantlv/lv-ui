/**
 * @description 防抖函数
 * @param handle 函数
 * @param delay 等待时间
 * @return {(function(): void)|*}
 */
function debounce (handle, delay) {
  let timer = null
  return function () {
    const _self = this
    const _args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      handle.apply(_self, _args)
    }, delay)
  }
}

export default debounce
