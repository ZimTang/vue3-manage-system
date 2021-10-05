/**
 * vuex状态管理
 */
import { createStore } from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const store = createStore({
  state: {
    token: '' || localStorage.getItem('token'),
    userInfo: {},
    isCollapse: true,
  },
  mutations,
  getters,
  actions,
})

export default store
