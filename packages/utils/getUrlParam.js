/**
 * @description 获取url的参数
 * @param sUrl url
 * @param sKey 键
 * @return {{}|*|string}
 */
function getUrlParam (url, sKey) {
  const result = {}
  url.replace(/(\w+)=(\w+)(?=[&|#])/g, function (ele, key, val) {
    if (!result[key]) {
      result[key] = val
    } else {
      const temp = result[key]
      result[key] = [].concat(temp, val)
    }
  })
  if (!sKey) {
    return result
  } else {
    return result[sKey] || ''
  }
}
export default getUrlParam
