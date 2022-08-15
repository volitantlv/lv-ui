const deepMerge = (obj1, obj2) => {
  for (const key in obj2) {
    obj1[key] = obj1[key] && obj1[key].toString() === '[object Object]' ? deepMerge(obj1[key], obj2[key]) : (obj1[key] = obj2[key])
  }
  return obj1
}

export default deepMerge


