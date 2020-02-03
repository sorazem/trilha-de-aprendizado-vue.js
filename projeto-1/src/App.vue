<template>
  <v-app>
    <v-app-bar
      app
      color="#ff9933"
      fixed
    >
      <v-col cols="11">
        <v-text-field
          solo
          flat
          clearable
          hide-details
          label="Pesquisar..."
          v-model="itemSearch"
          v-on:keyup.enter="searchGifs"
        >
        </v-text-field>
      </v-col>
      <v-col>
        <v-btn v-on:click="searchGifs" color="white">
          <v-icon color="black">search</v-icon>
        </v-btn>
      </v-col>
    </v-app-bar>

    <v-content>
      <GifContent v-bind:gifs="gifs"/>
    </v-content>
  </v-app>
</template>

<script>
  import GifContent from './components/GifContent';
  const axios = require('axios');

  export default {
    name: 'App',

    components: {
      GifContent,
    },

    data() {
      return{
        itemSearch: '',
        gifs: []
      }
    },
    methods: {
      searchGifs: function(){
        const url_search = "https://api.giphy.com/v1/gifs/search"
        let params = {
            api_key: '1NvU25d6HoFs8IVQptotFtTq1uFgjoSX',
            q: this.itemSearch
        }
        axios.get(url_search, { params }).then((response) =>{
          this.gifs = response.data.data
        })
      }
    },
    created(){
      const url_trend = "https://api.giphy.com/v1/gifs/trending"
      let params = {
          api_key: '1NvU25d6HoFs8IVQptotFtTq1uFgjoSX',
          limit: 20
      }
      axios.get(url_trend, { params }).then((response) =>{
        this.gifs = response.data.data
      })
    }
  };
</script>

<style>

</style>
