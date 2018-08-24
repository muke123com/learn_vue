import Vue from 'vue'
import Router from 'vue-router'
// 首页
import BrandIndex from '@/components/brand/Index'
import BrandDetail from '@/components/brand/Detail'
// 个人中心
import HomeIndex from '@/components/home/Index'
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/brand', component: BrandIndex, },
    { path: '/brand/detail', component: BrandDetail },
    { path: '/home', component: HomeIndex, }
  ]
})
