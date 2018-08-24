import Vue from 'vue'
import Router from 'vue-router'
import BrandIndex from '@/components/brand/Index'
import BrandDetail from '@/components/brand/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/brand',
      name: '1',
      component: BrandIndex,
      children: [
        {
          path: '/detail',
          name: '2',
          component: BrandDetail
        }
      ]
    },
    {
      path: '/home',
      name: '1',
      component: BrandIndex,
      children: [
        {
          path: '/detail',
          name: '2',
          component: BrandDetail
        }
      ]
    }
  ]
})
