import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex)

//Axios binding and Token Authentication 
Axios.defaults.baseURL = "http://api.lieblings-restaurants.local/api";
const access_token = localStorage.getItem('access_token')

if (access_token) {
    Axios.defaults.headers.common['Authorization'] = access_token
}

export default new Vuex.Store({
  state: {
      status: '',
      access_token: localStorage.getItem('access_token') || '',
      user: localStorage.getItem('username'),
      expire_token: localStorage.getItem('expire_token') || '',
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, access_token) {
      state.status = 'success'
      state.access_token = access_token
      localStorage.setItem('access_token', access_token)
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.access_token = ''
      state.expire_token = ''
    },
    username(state, username) {
      state.user = username
      localStorage.setItem('username', username)
    },
  },
  actions: {
    login({commit}, user) {
        return new Promise((resolve, reject) => {
          commit('auth_request')
          Axios.post('/login/?XDEBUG_SESSION_START=vscode', user)
            .then( response => {
              const access_token = response.data.access_token
              const username = response.data.user.name
              Axios.defaults.headers.common['Authorization'] = access_token
              commit('auth_success', access_token)
              commit('username', username)
              resolve(response)
            })
        .catch(error => {
          commit('auth_error')
            localStorage.removeItem('access_token')
            localStorage.removeItem('username')
            reject(error)
        })
      })
    },
    logout({commit}) {
      return new Promise((resolve) => {
          commit('logout')
          localStorage.removeItem('token_type')
          localStorage.removeItem('access_token')
          localStorage.removeItem('refresh_token')
          localStorage.removeItem('expire_token')
          delete Axios.defaults.headers.common['Authorization']
          resolve()
      })
    },
  },
  getters: {
    isLoggedIn: state => !!state.access_token,
    authStatus: state => state.status,
    isExpired:  state =>  state.expire_token,
    user: state => state.user,
  }
  
})
