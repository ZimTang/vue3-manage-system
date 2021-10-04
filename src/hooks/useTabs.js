/**
 * 处理tabs对象的函数
 * @param {Array} types 类型数组
 * @param {string} nowType 当前类型
 * @param {string} targetType 目标类型
 * @param {number} index 当前类型对象的索引
 * @param {object} state 需要处理的对象
 * @param {boolean} all 是否需要全部处理
 */
function useTabs(types, nowType, targetType,index, state, all) {
  if (!all) {
    types.forEach(item => {
      if(item=== nowType) {
        state[targetType].push(state[nowType][index])
        state[nowType].splice(index, 1)
      }
    })
  } else {
    state[nowType].forEach(item => {
      state[targetType].push(item)
    })
    state[nowType].splice(0, state[nowType].length)
  }
  return true
}

export default useTabs