<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-toolbar-title>Beer Lover</v-toolbar-title>

      <v-spacer></v-spacer>

      <p>Home</p>
      <p>Favourites</p>
    </v-app-bar>

    <v-content class="px-8">
      <v-row class="my-12 d-flex justify-center align-center">
          <v-text-field
            solo
            flat
            outlined
            clearable
            hide-details
            label="Pesquisar..."
            v-model="itemSearch"
            v-on:keyup.enter="searchGifs"
            color="primary"
            id="search"
          >
          </v-text-field>

          <v-btn 
            v-on:click="searchGifs" 
            depressed 
            color="primary"
          >
            <v-icon color="white">search</v-icon>
          </v-btn>
      </v-row>
      
      <Card></Card>
    </v-content>
  </v-app>
</template>

<script>
import Card from './components/Card';

export default {
  name: 'App',

  components: {
    Card
  },

  data: () => ({
    beers: []
  }),
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
