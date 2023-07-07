import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import '@/assets/iconfont/iconfont.css'

import { NavBar, Notify, Calendar } from 'vant';
import 'vant/lib/index.css';
const app = createApp(App)

app.use(router)
app.use(NavBar)
app.use(Notify)
app.use(Calendar)

app.mount('#app')
