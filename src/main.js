import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', name: 'Home', component: () => import('@/views/home.vue') },
    { path: '/shop', name: 'Shop', component: () => import('@/views/shop.vue') },
    { path: '/blog', name: 'Blog', component: () => import('@/views/blog.vue') },
  ]
})

Vue.use(ElementUI);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
