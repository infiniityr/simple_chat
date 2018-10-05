<template>
  <div>
    <h1>Chat vue</h1>
    <mdc-text-field v-model="to" label="To User"></mdc-text-field>
    <mdc-text-field v-model="message" fullwidth label="Message" multiline rows="8" cols="40"></mdc-text-field>
    <mdc-button @click="send">Send</mdc-button>
    <br/>
    <mdc-list>
      <mdc-list-item v-for="(receive, index) in received" :key="index">{{ receive }}</mdc-list-item>
    </mdc-list>
  </div>
</template>

<script>
import Vue from 'vue'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'
import store from '../stores/store'
import { mdcTextField, mdcButton, mdcList, mdcListItem } from 'vue-mdc-adapter'

let socketMessages = socketio('http://localhost:8000', { query: { auth_token: store.getters['authentication/token'] } })

Vue.use(VueSocketIO, socketMessages)

export default {
  name: 'Chat',
  data () {
    return {
      to: '',
      message: '',
      received: []
    }
  },
  components: {
    mdcTextField,
    mdcButton,
    mdcList,
    mdcListItem
  },
  sockets: {
    receive_private_message (message) {
      this.received.push(message.from + ' - ' + message.message)
    },
    connect () {
      console.log('connected')
    }
  },
  methods: {
    send () {
      socketMessages.emit('send_private_message', {
        to: this.to,
        message: this.message
      })
    }
  }
}
</script>

<style scoped>
</style>
