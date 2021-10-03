const homeModule = {
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
    doubleHomeCounter(state) {
      return state.counter * 2
    }
  }
}
export default homeModule
