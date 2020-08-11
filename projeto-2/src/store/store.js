import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const axios = require('axios');
const url_search = "https://api.punkapi.com/v2/beers";

export default new Vuex.Store({
  state: {
    favourites: [],
    beers: []
  },
  mutations: {
    search(state, item) {
      let params = {
        beer_name: item
      }
      axios.get(url_search, { params }).then((response) =>{
        state.beers = response.data
      })
    },
    addFavourite(state, payload){
      state.favourites.push(payload)
      console.log(state.favourites)
    },
    removeFavourite(state, index){
      state.favourites.splice(index, 1)
    }
  },
  actions: {
    addFavourite: ({commit}) => commit('addFavourite')
  },
  getters: {
    getAllBeers: state => {
      axios.get(url_search).then((response) =>{
        state.beers = response.data
      });

      return state.beers;
    }
  }
});
