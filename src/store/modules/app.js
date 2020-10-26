import $cookie from 'js-cookie'
export default {
  namespaced: true,
  state: {
    userId: '',
    enterpriseId: '',
    userName: ''
  },
  mutations: {
    initApp (state) {
      state.userId = $cookie.get('userId')
      state.enterpriseId = $cookie.get('enterpriseId')
      state.userName = $cookie.get('userName')
    }
  },
  actions: {
    // incrementIfOddOnRootSum ({ state, commit, rootState }) {
    // }
  },
  // 自定义方便
  getters: {}
}
