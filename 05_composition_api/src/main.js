import { createApp } from 'vue'
import App from './04_computed与watch/App.vue'

const app = createApp(App)
// app.mixin({
//   data() {
//     return {
//       big:'aaaa'
//     }
//   },
//   created() {
//     console.log('全局的生命周期')
//   }
// })
app.mount('#app')
