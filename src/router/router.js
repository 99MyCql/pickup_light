import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'Home', component: () => import('@/views/home.vue') },
    { path: '/shop', name: 'Shop', component: () => import('@/views/shop.vue') },
    { path: '/blog', name: 'Blog', component: () => import('@/views/blog.vue') },
  ]
})

export default router