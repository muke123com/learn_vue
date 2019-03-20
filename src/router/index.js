import Vue from 'vue'
import Router from 'vue-router'
// 首页
import HomeIndex from '@/components/home/Home'
import Css3 from '@/components/Learn/Css3'
import H5 from '@/components/Learn/h5/index'
import AnimeJs from '@/components/Learn/Animejs'
import Lifecycle from '@/components/Learn/Lifecycle'
import Vuex from '@/components/Vuex/index'
import VuexCalc from '@/components/Vuex/calc'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HomeIndex },
    { path: '/learn/css3', component: Css3 },
    { path: '/learn/h5', component: H5 },
    { path: '/learn/anime', component: AnimeJs },
    { path: '/learn/lifecycle', component: Lifecycle },
    { path: '/vuex', component: Vuex },
    { path: '/vuex/calc', component: VuexCalc }
  ]
})
