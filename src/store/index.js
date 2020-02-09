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
    category: {
      title: '',
      description: '',
      images: [],
    }
  },
  mutations: {
    setBlog (state, blog) {
      state.blog = blog
    },
    setCategory (state, category) {
      console.log(category)
      state.category = category
    }
  }
})

export default store;