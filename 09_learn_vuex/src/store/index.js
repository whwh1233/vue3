import { createStore } from 'vuex'
import axios from 'axios'
import userModule from './modules/user'
import homeModule from './modules/home'
const store = createStore({
  state() {
    return {
      counter: 100
    }
  },
  mutations: {
    add(state) {
      state.counter++
    }
  },
  modules: {
    home: homeModule,
    user: userModule
  }
})

export default store
