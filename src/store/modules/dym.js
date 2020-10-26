export default {
  namespaced: true,
  state: {
    loading: {
      msgLoading: false,
      comLoading: false,
      msgNoMore: false,
      comNoMore: false
    }
  },
  mutations: {
    loading (state, obj) {
      for (const k in obj) {
        if (Object.prototype.hasOwnProperty.call(state.loading, k)) {
          state.loading[k] = obj[k]
        }
      }
    }
  },
  actions: {
    // incrementIfOddOnRootSum ({ state, commit, rootState }) {
    // }
  },
  // 自定义方便
  getters: {}
}
