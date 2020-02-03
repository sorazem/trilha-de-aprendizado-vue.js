<template>
  <div id="gallery">
    <div v-for="gif in gifs" v-bind:key="gif.id">
      <img :src="gif.images.original.url">
    </div>
    <div id="notFound" v-if="gifs == []">
      <p>Desculpe, não encontramos nada relacionado a isso :(</p>
      <img src="https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GifContent',
    props: ['gifs'],
    data() {
      return{

      }
    }
  };
</script>

<style>
  #gallery{
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  #gallery img{
    object-fit: cover;
    margin: 1em;
    width: 27vw;
    height: 40vh;
  }

  #gallery div{
    margin: 1em;
  }

  #notFound{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p{
    margin: 1em;
  }
</style>
