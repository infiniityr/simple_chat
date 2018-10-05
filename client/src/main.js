import Vue from 'vue'
import App from './App.vue'
import router from './routes/router'
import store from './stores/store'
import 'vue-mdc-adapter/dist/vue-mdc-adapter.css'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8000'

if (store.getters['authentication/token'] != null && store.state.authentication.token === '') {
  Vue.set(store.state.authentication, 'token', store.getters['authentication/token'])
  store.state.authentication.isLoggedIn = true
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
