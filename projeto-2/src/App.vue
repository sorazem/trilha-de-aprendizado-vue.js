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

    <v-main class="px-8">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
  a{
    padding-right: 20px;
    text-decoration: none;
    color: white !important;
  }
</style>
