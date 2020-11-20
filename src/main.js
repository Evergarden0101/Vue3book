import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Data from './Data.vue'
import Insert from './Insert.vue'
import Computed from './components/Compute.vue'
import Watch from './components/watch.vue'
import Vmodel from './components/vmodel.vue'

//createApp(App).mount('#app')
//createApp(Data).mount('#app')
//createApp(Insert).mount('#app')
//createApp(Computed).mount('#app')
//createApp(Watch).mount('#app')
createApp(Vmodel).mount('#app')


