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
    {
      path: '/brand',
      name: 'BrandIndex',
      component: BrandIndex,
      children: [
        {
          path: 'detail',
          name: 'BrandDetail',
          component: BrandDetail
        }
      ]
    },
    {
      path: '/home',
      name: '1',
      component: HomeIndex,
      children: [
        {
          path: 'detail',
          name: '2',
          component: BrandDetail
        }
      ]
    }
  ]
})
