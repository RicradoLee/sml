import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  loginData:{
    type:300,
    data:{
      user:null,
      pwd:null,
      token:"asdfsafa"
    }
  }
}

export default new Vuex.Store({
  state
})
