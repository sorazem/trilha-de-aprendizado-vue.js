<template>
  <v-app>
    <v-app-bar
      app
      color="#4dc3ff"
      dark
    >
      <v-toolbar-title>Beer Lover</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link to="/home">Home</router-link>
      <router-link to="/favourites">Favourites</router-link>
    </v-app-bar>

    <v-content class="px-8">
      <Home></Home>
    </v-content>
  </v-app>
</template>

<script>
import Home from './components/Home';

export default {
  name: 'App',
  components: {
    Home
  },

  data(){
    return{
      //
    }
  }
};
</script>
