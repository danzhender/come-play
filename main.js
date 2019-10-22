import Vue from 'vue'
import App from './App'

import store from './store'
import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import my from './pages/my/home.vue'
Vue.component('my',my)

import chatroom from './pages/chatroom/home.vue'
Vue.component('chatroom',chatroom)

import post from './pages/post/home.vue'
Vue.component('post',post)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()

 



