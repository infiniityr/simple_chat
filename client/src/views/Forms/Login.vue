<template>
  <mdc-card>
    <mdc-card-header title="Login form"></mdc-card-header>
    <mdc-card-text>
      <mdc-text-field v-model="username" fullwidth label="Username" @keypress.enter="login"></mdc-text-field>
      <mdc-text-field v-model="password" fullwidth label="Password" type="password" @keypress.enter="login"></mdc-text-field>
    </mdc-card-text>
    <mdc-card-actions>
      <mdc-card-action-buttons>
        <mdc-card-action-button @click="login">Login</mdc-card-action-button>
        <mdc-card-action-button to="/">Cancel</mdc-card-action-button>
      </mdc-card-action-buttons>
    </mdc-card-actions>
  </mdc-card>
</template>

<script>
import { mdcCard, mdcCardHeader, mdcCardText, mdcCardActionButtons, mdcCardActionButton, mdcTextField, mdcCardActions } from 'vue-mdc-adapter'
import store from '../../stores/store'

export default {
  name: 'Login',
  data: () => {
    return {
      username: '',
      password: '',
      error: ''
    }
  },
  components: {
    mdcCard,
    mdcCardHeader,
    mdcCardText,
    mdcCardActions,
    mdcCardActionButtons,
    mdcCardActionButton,
    mdcTextField
  },
  methods: {
    login () {
      let _this = this
      store.dispatch('authentication/login', { username: this.username, password: this.password })
        .then(response => {
          if (this.$store.state.authentication.isLoggedIn) {
            if (this.$route.query.nextUrl != null) {
              this.$router.push(this.$route.query.nextUrl)
            } else {
              this.$router.push('/')
            }
          } else {
            _this.error = 'User not authenticated'
          }
        })
        .catch(err => {
          _this.error = 'User not authenticated' + err.message
        })
    }
  }
}
</script>

<style scoped>
</style>
