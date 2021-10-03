const userModule = {
  state() {
    return {
      message: 'user',
      counter: 10
    }
  },
  getters: {},
  mutations: {
    add(state) {
      state.counter++
    }
  }
}

export default userModule
