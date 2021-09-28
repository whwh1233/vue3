import { createApp } from 'vue'
import App from './App.vue'
import plugin_object from './plugins/plugins_object'
import plugins_function from './plugins/plugins_function'

const app = createApp(App)
app.use(plugin_object)
app.use(plugins_function)
app.mount('#app')
