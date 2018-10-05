export default {
  state: {
    connect: false
  },
  mutations: {
    SOCKET_CONNECT (state, status) {
      console.log('connected messages')
    },
    SOCKET_ERROR: (state, errorMsg) => {
      console.log('error while connecting', errorMsg)
    },
    SOCKET_SUCCESS: (state, data) => {
      console.log(data[0])
      console.log(data[0].message)
      console.log('user info: ' + data[0].user)
      console.log('logged in: ' + data[0].user.logged_in)
    }
  }
}
