import Vue from 'vue'
import Router from 'vue-router'
// 首页
import HomeIndex from '@/components/home/Index'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/home', component: HomeIndex, }
  ]
})
