import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '@/views/product_detail.vue'
import Product_ from '@/views/product.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/product',
    component: Product
  },
  {
    path: '/product_',
    component: Product_
  },
  {
     path: '/coupon',
     component: () => import('../views/product_coupon.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
