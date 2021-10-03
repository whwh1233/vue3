const homeModule = {
  // 添加命名空间
  namespaced: true,
  state() {
    return {
      message: 'home',
      counter: 20
    }
  },
  mutations: {
    add(state) {
      state.counter++
    }
  },
  getters: {
    doubleHomeCounter(state, getters, rootState) {
      return state.counter * 2
    }
  },
  actions: {
    increment({ commit, dispatch, state, getters, rootState, rootGetters }) {
      // 派发根模块的 mutation
      commit('increment', payload, { root: true })
    }
  }
}
export default homeModule
