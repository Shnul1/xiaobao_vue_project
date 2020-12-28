import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '@/views/product_detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/product',
    component: Product
  },
  {
     path: '/coupon',
     component: () => import('../views/product_coupon.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
