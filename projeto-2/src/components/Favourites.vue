<template>
  <v-main>
    <v-row>
      <v-col align="center">
        <h1>The best beers you chose!</h1>
      </v-col>
    </v-row>
    <Card v-if="this.favourites.length > 0" v-bind:beers="favourites"></Card>
    <div v-else align="center">
      <img src="../assets/undraw_Beer.svg">
      <p>Oh no, it's empty! Explore, select your favorite beers and come back to see them here :)</p>
    </div>
  </v-main>
</template>

<script>
  import { mapState } from 'vuex'
  import Card from './Card'

  export default {
    name: 'Favourites',
    components: {
      Card
    },
    computed: mapState ({
      favourites: state => state.favourites
    })
  }
</script>

<style scoped>
  h1{
    margin-bottom: 5vh;
  }

  img{
    margin-bottom: 2vh;
    width: 20vw;
  }

  @media screen and (max-width: 520px){
      img{
          width: 30vh;
      }
  }

  @media screen and (max-width: 991px){
      img{
          width: 40vh;
      }
  }
</style>
