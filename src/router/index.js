import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '@/views/product_detail.vue'
// import ProductPurchase from '@/views/product_purchase.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/coupon'
  },
  {
    path: '/product',
    name: 'product',
    component: Product,
    children: [
      {
        path: 'purchase',
        name: 'purchase',
        component: () => import('../views/product_purchase.vue'),
      }
    ]
  },
  {
     path: '/coupon',
     name: 'coupon',
     component: () => import('../views/product_coupon.vue')
  },
]

const router = new VueRouter({ 
  routes,
  mode: 'history'
})

export default router
