import { createStore } from 'vuex'
import axios from 'axios'
import { ADD_N } from './mutation-types'
const store = createStore({
  state() {
    return {
      counter: 100,
      name: 'wh',
      age: 18,
      height: 188,
      books: [
        { name: '1', price: 100, counter: 0 },
        { name: '3', price: 100, counter: 4 },
        { name: 'wh', price: 100, counter: 5 },
        { name: 'jj', price: 100, counter: 1 }
      ],
      discount: 0.6,
      banners: []
    }
  },
  actions: {
    // 放入函数,可以进行异步操作
    addAction(context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    // context 里包含 commit state getter rootGetters dispatch等等
    subAction(context) {
      console.log(context)
    },
    // actions -> mutation(commit) -> state
    // 可以返回一个 Promise
    getHomeMultiData(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://123.207.32.32:8000/home/multidata')
          .then(res => {
            console.log(res.data.data.banner.list)
            context.commit('addBannerData', res.data.data.banner.list)
            resolve('hahha')
          })
          .catch(err => {
            console.log(payload)
            reject()
          })
      })
    }
  },
  // 相当于computed  直接使用 不需要加小括号
  getters: {
    nameInfo(state) {
      return `name:${state.name}`
    },
    heightInfo(state) {
      return `height:${state.height}`
    },
    ageInfo(state) {
      return `age:${state.age}`
    },
    totalPrice(state, getters) {
      let total = 0
      for (const book of state.books) {
        total += book.counter * book.price
      }
      return total * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    totalPriceCounterGreaterN(state, getters) {
      return function(n) {
        let total = 0
        for (const book of state.books) {
          if (book.counter > n) {
            total += book.counter * book.price
          }
        }
        return total
      }
    }
  },
  mutations: {
    addBannerData(state, payload) {
      state.banners = payload
    },
    add(state) {
      state.counter++
    },
    [ADD_N](state, payload) {
      console.log(payload)
      state.counter += payload.n
    },
    subN(state, payload) {
      state.counter -= payload
    },
    sub(state) {
      state.counter--
    }
  }
})

export default store
