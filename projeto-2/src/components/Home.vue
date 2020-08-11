<template>
    <v-main>
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
    </v-main>
</template>

<script>
  import { mapState } from 'vuex'
  import Card from './Card';

  /*const axios = require('axios');
  const url_search = "https://api.punkapi.com/v2/beers"*/

  export default {
    name: 'Home',
    components: {
      Card
    },
    data() {
      return{
        itemSearch: ''
      }
    },
    computed: mapState ({
      beers: state => state.beers
    }),
    methods: {
      search() {
        this.$store.commit('search', this.itemSearch);
      }
    },
    created() {
      /*axios.get(url_search).then((response) =>{
        this.$store.state.beers = response.data
      });*/
      this.$store.getters.getAllBeers
    }
  }
</script>

<style scoped>
  .v-input{
    max-width: 70vw !important;
  }

  .v-btn{
    height: 56px !important;
  }

  .v-btn, .v-text-field--outlined, .v-text-field--solo{
    border-radius: 0 !important;
  }

  .theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
    color: rgba(77, 195, 255, 0.38) !important;
  }
</style>
