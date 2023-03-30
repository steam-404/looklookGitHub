import { createApp } from 'vue'
import App from './App.vue'
import element from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'

const app=createApp(App)
app.use(element)
app.mount('#app')
