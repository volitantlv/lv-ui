const type = (para) => {
  return Object.prototype.toString.call(para).replace('[object ', '').replace(']', '')
}
export default type
