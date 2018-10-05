<template>
  <mdc-drawer slot="drawer" toggle-on="toggle-drawer">
    <mdc-drawer-list>
      <mdc-drawer-item start-icon="inbox" to="/">Home</mdc-drawer-item>
      <mdc-drawer-item start-icon="send" to="/chat">Chat</mdc-drawer-item>
      <mdc-drawer-item start-icon="drafts" to="/about">About</mdc-drawer-item>
    </mdc-drawer-list>
  </mdc-drawer>
</template>

<script>
import { mdcDrawer, mdcDrawerList, mdcDrawerItem } from 'vue-mdc-adapter'

export default {
  name: 'drawer',
  components: {
    mdcDrawer,
    mdcDrawerList,
    mdcDrawerItem
  }
}
</script>

<style scoped>
</style>
