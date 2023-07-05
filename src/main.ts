import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import '@/assets/iconfont/iconfont.css'

import { Button } from 'vant';

const app = createApp(App)

app.use(router)
app.use(Button)

app.mount('#app')
