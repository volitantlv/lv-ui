import type from './type.js'
/**
 * @description 数组去重 | 数组对象去重
 * @param source 源数组
 * @param key
 * @return newArr
 */
const unique = (source, key) => {
  let d = []
  if (type(source[0]) === 'Object') {
    const obj = {}
    d = source.reduce((preVal, curVal) => {
      if (!obj[curVal[key]]) obj[curVal[key]] = preVal.push(curVal)
      return preVal
    }, [])
  } else {
    d = [...new Set(source)]
  }
  return d
}

export default unique
