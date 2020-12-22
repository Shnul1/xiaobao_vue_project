import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '@/views/product_detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/product',
    name: 'Product',
    component: Product
  }
  // {
  //    path: '/about',
  //    name: 'About',
  //    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
