import { createApp } from 'vue'
import App from './15_组件的v-model/App.vue'
// import {sum} from './12_异步组件的使用/utils/math'


// 通过 import 的函数导入功能可以实现 webpack 的动态分包（build的时候）
// import('./12_异步组件的使用/utils/math').then(res => {
//   console.log(res.sum(2220,30))
// })



createApp(App).mount('#app')
