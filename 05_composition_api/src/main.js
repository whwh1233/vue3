import { createApp } from 'vue'
import App from './03_refAPI的补充/App.vue'

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
