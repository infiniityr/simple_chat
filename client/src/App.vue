<template>
  <mdc-layout-app id="app">
    <toolbar slot="toolbar"/>
    <drawer slot="drawer"/>
    <main class="content" >
      <router-view/>
    </main>
  </mdc-layout-app>
</template>

<script>
import toolbar from './views/Toolbar.vue'
import drawer from './views/Drawer.vue'
import { mdcLayoutApp } from 'vue-mdc-adapter'

export default {
  name: 'app',
  components: {
    toolbar,
    drawer,
    mdcLayoutApp
  }
}
</script>

<style lang="scss">
</style>
