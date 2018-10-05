import authenticateApi from '@/services/api/authentication'

export default {
  namespaced: true,
  state: {
    token: '',
    isLoggedIn: false
  },
  mutations: {
    set_token (state, token) {
      localStorage.setItem('token', token)
      state.token = token
      state.isLoggedIn = state.token !== ''
    }
  },
  getters: {
    token: (state) => {
      return localStorage.getItem('token') || state.token
    }
  },
  actions: {
    login: ({ commit }, loginInfo) => {
      return authenticateApi.login(loginInfo.username, loginInfo.password)
        .then(response => {
          commit('set_token', response.data.token)
        })
    },
    verify: ({ commit, dispatch, getters }) => {
      return authenticateApi.verify(getters['token'])
        .then(response => {
          if (!response.data.isValid) {
            dispatch('logout')
          }
        })
        .catch(error => {
          if (error) {
            dispatch('logout')
          }
        })
    },
    logout: ({ commit }) => {
      commit('set_token', '')
      localStorage.removeItem('token')
    },
    register: ({ commit }, registerInfo) => {
      return authenticateApi.register(registerInfo.username, registerInfo.password, registerInfo.passwordConfirm)
        .then(response => {
          commit('set_token', response.data.token)
        })
    }
  }
}
