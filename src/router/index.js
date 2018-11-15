import Vue from 'vue'
import Router from 'vue-router'
// 首页
import HomeIndex from '@/components/home/Home'
import AnimeJs from '@/components/Learn/Animejs'
import Lifecycle from '@/components/Learn/Lifecycle'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HomeIndex },
    { path: '/learn/anime', component: AnimeJs },
    { path: '/learn/lifecycle', component: Lifecycle }
  ]
})
