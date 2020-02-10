import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import { Carousel, CarouselItem, Pagination } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store/index'

Vue.config.productionTip = false

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Pagination);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
