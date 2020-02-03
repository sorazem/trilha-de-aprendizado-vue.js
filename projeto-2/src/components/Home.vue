<template>
    <v-content>
        <v-row class="my-12 d-flex justify-center align-center">
            <v-text-field
            solo
            flat
            outlined
            clearable
            hide-details
            label="Ex: trashy_blonde"
            v-model="itemSearch"
            v-on:keyup.enter="search"
            color="#4dc3ff"
            id="search"
            >
            </v-text-field>

            <v-btn 
            v-on:click="search" 
            depressed 
            color="#4dc3ff"
            >
            <v-icon color="white">search</v-icon>
            </v-btn>
        </v-row>
        <Card v-bind:beers="beers"></Card>
    </v-content>
</template>

<script>
import Card from './Card';

const axios = require('axios');
const url_search = "https://api.punkapi.com/v2/beers"

export default {
  name: 'Home',
  components: {
    Card
  },

  data(){
    return{
      itemSearch: '',
      beers: []
    }
  },

  methods: {
    search: function(){
      let params = {
        beer_name: this.itemSearch
      
      }
      axios.get(url_search, { params }).then((response) =>{
        this.beers = response.data
      })
    }
  },
  created() {
    axios.get(url_search).then((response) =>{
      this.beers = response.data
    })
  }
};
</script>

<style>
  .v-input{
    max-width: 70vw !important;
  }

  .v-btn{
    height: 56px !important;
  }

  .v-btn, .v-text-field--outlined, .v-text-field--solo{
    border-radius: 0 !important;
  }
</style>
