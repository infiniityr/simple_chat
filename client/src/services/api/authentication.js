import axios from 'axios'

export default {
  login (username, password) {
    return axios.post('/login', { username: username, password: password })
  },
  verify (token) {
    return axios.post('/verify', { token: token })
  },
  register (username, password, passwordConfirm) {
    return axios.post('/register', {
      username: username,
      password: password,
      passwordConfirm: passwordConfirm
    })
  }
}
