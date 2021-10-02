export default {
  // 保存token到本地和vuex中
  saveToken(state, token) {
    state.token = token
    localStorage.setItem('token', token)
  },
  // 保存用户信息
  saveInfo(state,userInfo) {
    state.userInfo = userInfo
  },
  // 修改sidebar的状态
  changeIsCollapse(state, isCollapse) {
    state.isCollapse = isCollapse
  }
}