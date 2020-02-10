import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    blog: {
      img: '',
      title: '',
      content: ''
    },
    product: {
      name: '',
      imgUrl: '',
      description: '',
      otherImgs: []
    },
  },
  mutations: {
    setBlog (state, blog) {
      console.log('store mutations--->', blog)
      state.blog = blog
    },
    setProduct (state, product) {
      console.log('store mutations--->', product)
      state.product = product
    }
  }
})

export default store;