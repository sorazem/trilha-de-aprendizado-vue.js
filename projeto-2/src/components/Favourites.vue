<template>
  <v-main>
    <v-row>
      <h1>The best beers you chose!</h1>
    </v-row>
    <!-- <Card v-bind:beers="favourites"></Card> -->
  </v-main>
</template>

<script>
  import { mapState } from 'vuex'
  // import Card from './Card'

  export default {
    computed: mapState ({
      favourites: state => state.favourites
    })
  }
</script>
