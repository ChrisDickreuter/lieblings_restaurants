import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex)

//Axios binding and Token Authentication 
Axios.defaults.baseURL = process.env.VUE_APP_URL;
const access_token = localStorage.getItem('access_token')

if (access_token) {
    Axios.defaults.headers.common['Authorization'] = "Bearer " + access_token
}

export default new Vuex.Store({
  state: {
      status: '',
      access_token: localStorage.getItem('access_token') || '',
      user: localStorage.getItem('username'),
      cuisines: [],
      selectedCuisines: [],
      cities: [],
      selectedCities: [],
      selectedRestaurant: localStorage.getItem('selectedRestaurant'),
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
    },
    username(state, username) {
      state.user = username
      localStorage.setItem('username', username)
    },
    setCuisines(state, cuisines) {
      state.cuisines = cuisines
    },
    selectCuisines(state, selectedCuisines) {
      state.selectedCuisines = selectedCuisines
    },
    setCities(state, cities) {
      state.cities = cities
    },
    selectCities(state, selectedCities) {
      state.selectedCities = selectedCities
    },
    setSelectedRestaurant(state, restaurant) {
      state.selectedRestaurant = restaurant
      localStorage.setItem('selectedRestaurant', JSON.stringify(restaurant))
    }    
  },
  actions: {
    login({commit}, user) {
        return new Promise((resolve, reject) => {
          commit('auth_request')
          Axios.post('/login', user)
            .then( response => {
              const access_token = response.data.access_token
              const username = response.data.user.name
              Axios.defaults.headers.common['Authorization'] = "Bearer " + access_token
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
          delete Axios.defaults.headers.common['Authorization']
          resolve()
      })
    },
  },
  getters: {
    isLoggedIn: state => !!state.access_token,
    authStatus: state => state.status,    
    user: state => state.user,
    cuisines: state => state.cuisines.sort(), 
    selectedCuisines: state => state.selectedCuisines,
    cities: state => state.cities.sort(), 
    selectedCities: state => state.selectedCities,
    selectedRestaurant: state => state.selectedRestaurant,
  }
})
