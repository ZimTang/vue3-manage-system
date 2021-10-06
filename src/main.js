import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueI18n from './language'
const app = createApp(App)

app.use(router).use(store).use(ElementPlus).use(VueI18n).mount('#app')
