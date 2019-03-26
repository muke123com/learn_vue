import Vue from 'vue'
import Router from 'vue-router'
// 首页
import HomeIndex from '@/components/home/Home'
import Css3 from '@/components/Learn/Css3'
import H5 from '@/components/Learn/h5/index'
import AnimeJs from '@/components/Learn/Animejs'
import Interview from '@/components/Learn/interview/Index'
import Lifecycle from '@/components/Learn/Lifecycle'
import Vuex from '@/components/Vuex/index'
import VuexCalc from '@/components/Vuex/calc'
import VueRouterList from '@/components/Learn/vueRouter/List'
import VueRouterDetail from '@/components/Learn/vueRouter/Detail'
import Transition from '@/components/Learn/transition/Index'
Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: HomeIndex },
    { path: '/learn/css3', component: Css3 },
    { path: '/learn/h5', component: H5 },
    { path: '/learn/anime', component: AnimeJs },
    { path: '/learn/interview', component: Interview },
    { path: '/learn/lifecycle', component: Lifecycle },
    { path: '/vuex', component: Vuex },
    { path: '/vuex/calc', component: VuexCalc },
    { path: '/transition', component: Transition },
    { path: '/router/', component: VueRouterList ,children: [
        { name: 'routerDetail', path: ':id', component: VueRouterDetail }
    ]},
  ]
})
