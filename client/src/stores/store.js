import Vue from 'vue'
import Vuex from 'vuex'
import messages from './chat/messages.store'
import authentication from './authentication'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    messages: messages,
    authentication: authentication
  }
})
