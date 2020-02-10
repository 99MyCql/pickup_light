import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'Home', component: () => import('@/views/home.vue') },
    { path: '/shop', name: 'Shop', component: () => import('@/views/shop-categories.vue') },
    { path: '/blog', name: 'Blog', component: () => import('@/views/blog.vue') },
    { path: '/product', name: 'Product', component: () => import('@/views/shop-product.vue') },
  ]
})

export default router