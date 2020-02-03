<template>
  <div id="header">
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
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return{

      }
    }
  };
</script>
