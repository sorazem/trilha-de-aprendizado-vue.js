<template>
    <div class="d-flex flex-wrap mx-2 justify-space-between">
        
        <div id="card" class="elevation-2 mb-6" v-for="beer in beers" :key="beer.id">
            <v-icon v-on:click="addToFavourites(beer.id)" id="favorite" color="#4dc3ff">star_border</v-icon>
            <div class="d-flex container">
                <v-col cols="5">
                    <img :src="beer.image_url"/>
                </v-col>
                <v-col>
                    <div id="text">
                        <h3>{{ beer.name }}</h3>
                        <p>{{ beer.description }}</p>
                    </div>
                </v-col>                
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Card',
    props: ['beers'],
    data() {
        return {
            //
        }
    }
}
</script>

<style scoped>
    #card {
        display: flex;
        flex-direction: column;
        width: 30vw;
        height: 50vh;
        position: relative;
    }

    #favorite{
        position: absolute;
        top: 8px;
        right: 8px;
    }

    .container{
        padding: 32px;
    }

    div{
        text-overflow: ellipsis;
        overflow: hidden;
    }

    img{
        height: 35vh;
        overflow: visible;
    }

    @media screen and (max-width: 991px){
        #card{
            width: 40vw;
        }
    }

    @media screen and (max-width: 767px){
        #card{
            width: 80vw;
        }
    }

    @media screen and (max-width: 520px){
        #card{
            flex-wrap: wrap;
            max-height: 100vh;
        }

        .container{
            padding: 8px;
            padding-top: 32px;
        }

        img{
            width: 100px;
        }
    }
</style>