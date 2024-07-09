import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import store from './store'
import router from './router'


const app = createApp(App)

registerPlugins(app)

app.use(store)
app.use(router)
app.mount('#app')
