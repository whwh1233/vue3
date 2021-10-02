import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      counter: 100,
      name: 'wh',
      age: 18,
      height: 188
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
