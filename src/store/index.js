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
  },
  mutations: {
    setBlog (state, blog) {
      state.blog = blog
    }
  }
})

export default store;