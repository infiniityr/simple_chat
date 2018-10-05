<template>
  <mdc-card>
    <mdc-card-header title="Register form"></mdc-card-header>
    <mdc-card-text>
      <mdc-text-field v-model="username"
                      fullwidth
                      label="Username"
                      @keypress.enter="register"
                      required
                      :trailing-icon="(usernameValid)?'':'error'"
                      box
                      :valid="usernameValid"></mdc-text-field>
      <mdc-text-field v-model="password"
                      fullwidth
                      label="Password"
                      type="password"
                      @keypress.enter="register"
                      helptext="The password must be at least 8 characters long"
                      helptext-persistent
                      helptext-validation
                      :trailing-icon="(passwordValid)?'':'error'"
                      :valid="passwordValid"
                      box
                      required></mdc-text-field>
      <mdc-text-field v-model="confirmPassword"
                      fullwidth
                      label="Confirm Password"
                      type="password"
                      @keypress.enter="register"
                      :trailing-icon="(password === confirmPassword)?'':'error'"
                      :valid="password === confirmPassword"></mdc-text-field>
    </mdc-card-text>
    <mdc-card-actions>
      <mdc-card-action-buttons>
        <mdc-card-action-button @click="register">Register</mdc-card-action-button>
        <mdc-card-action-button to="/">Cancel</mdc-card-action-button>
      </mdc-card-action-buttons>
    </mdc-card-actions>
  </mdc-card>
</template>

<script>
import { mdcCard, mdcCardHeader, mdcCardText, mdcCardActionButtons, mdcCardActionButton, mdcTextField, mdcCardActions } from 'vue-mdc-adapter'

export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      confirmPassword: ''
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
  computed: {
    usernameValid () {
      return true
    },
    passwordValid () {
      return this.password.length >= 8
    }
  },
  methods: {
    register () {
      let registerInfos = {
        username: this.username,
        password: this.password,
        passwordConfirm: this.confirmPassword
      }
      this.$store.dispatch('authentication/register', registerInfos)
        .then(() => {
          if (this.$store.state.authentication.isLoggedIn) {
            if (this.$route.query.nextUrl != null) {
              this.$router.push(this.$route.query.nextUrl)
            } else {
              this.$router.push('/')
            }
          }
        })
    }
  }
}
</script>

<style scoped>
</style>
