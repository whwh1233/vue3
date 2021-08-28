Vue.createApp({
  template: '#my-app',
  data() {
    return {
      books: [
        {
          id: 1,
          name: '《算法导论》',
          price: 10,
          date: '2010-5',
          counter: 1
        },
        {
          id: 2,
          name: '《UNIX编程艺术》',
          price: 20,
          date: '2010-5',
          counter: 1
        },
        {
          id: 3,
          name: '《编程珠玑》',
          price: 30,
          date: '2010-5',
          counter: 1
        },
        {
          id: 4,
          name: '《代码大全》',
          price: 40,
          date: '2010-5',
          counter: 1
        }
      ]
    }
  },
  computed: {
    totalPrice() {
      let totalPrice = 0
      for (let book of this.books) {
        totalPrice += book.price * book.counter
      }
      return totalPrice
      // return this.books.map(book => {
      //   total += book.counter * book.price
      // })
      // vue3 不支持过滤器了，推荐两种做法：使用计算属性/使用全局方法
    },
    // 去除数组中对象引用的总价格无法计算的问题
    filterBooks() {
      return this.books.map(item => {
        const newItem = Object.assign({}, item)
        newItem.price = '$' + item.price
        return newItem
      })
    }
  },
  methods: {
    increment(index) {
      this.books[index].counter++
    },
    decrement(index) {
      this.books[index].counter--
    },
    removeBook(index) {
      this.books.splice(index, 1)
    },
    // 用 methods 来实现 filter
    formatPrice(price) {
      return '$' + price
    }
  }
}).mount('#app')
