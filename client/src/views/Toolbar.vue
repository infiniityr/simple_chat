<template>
  <mdc-toolbar slot="toolbar" fixed>
    <mdc-toolbar-row>
      <mdc-toolbar-section align-start >
        <mdc-toolbar-menu-icon event="toggle-drawer"></mdc-toolbar-menu-icon>
        <mdc-toolbar-title>Mon Chat trop cool</mdc-toolbar-title>
      </mdc-toolbar-section>
      <mdc-toolbar-section align-end>
        <mdc-button to="/login" v-if="!isLoggedIn">Login</mdc-button>
        <mdc-button @click="logout" v-else>Logout</mdc-button>
      </mdc-toolbar-section>
    </mdc-toolbar-row>
  </mdc-toolbar>
</template>

<script>
import { mdcToolbar, mdcToolbarRow, mdcToolbarSection, mdcToolbarMenuIcon, mdcToolbarTitle, mdcButton } from 'vue-mdc-adapter'
import { mapState } from 'vuex'

export default {
  name: 'toolbar',
  components: {
    mdcToolbar,
    mdcToolbarRow,
    mdcToolbarSection,
    mdcToolbarMenuIcon,
    mdcToolbarTitle,
    mdcButton
  },
  computed: {
    ...mapState({
      isLoggedIn: state => state.authentication.isLoggedIn
    })
  },
  methods: {
    logout () {
      let router = this.$router
      this.$store.dispatch('authentication/logout')
        .then(() => {
          router.push('/')
        })
    }
  }
}
</script>

<style scoped>
.mdc-button {
  color: white !important;
}
</style>
