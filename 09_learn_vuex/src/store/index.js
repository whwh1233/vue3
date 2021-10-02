import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      counter: 100
    }
  },
  mutations: {
    add(state) {
      state.counter++
    },
    sub(state) {
      state.counter--
    }
  }
})

export default store
