<template>
  <mdc-layout-grid>
    <mdc-layout-cell span="12"/>
    <mdc-layout-cell span="2"/>
    <mdc-layout-cell span="4"><login-form/></mdc-layout-cell>
    <mdc-layout-cell span="4"> <register-form/></mdc-layout-cell>
    <mdc-layout-cell span="2"/>
  </mdc-layout-grid>
</template>

<script>
import { mdcLayoutGrid, mdcLayoutCell } from 'vue-mdc-adapter'
import Login from './Forms/Login'
import Register from './Forms/Register'

export default {
  name: 'Login',
  components: {
    mdcLayoutGrid,
    mdcLayoutCell,
    LoginForm: Login,
    RegisterForm: Register
  }
}
</script>

<style scoped>
</style>
