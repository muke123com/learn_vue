import Vue from 'vue'
import Router from 'vue-router'
// 首页
import Layout from '@/components/Layout'
import Index from '@/components/Index'
Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Layout,
    children: [
      {
        path: '/',
        component: Index
      }
    ]
   },
  ]
})
