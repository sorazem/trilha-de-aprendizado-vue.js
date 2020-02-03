<template>
    <div id="card" class="elevation-2">
        <v-icon id="favorite" color="black">star_border</v-icon>
        <div class="px-4">
            <img src=""/>
            <div>
                <h3>Uma header</h3>
                <p>Texto texto texto texto</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',

    data() {
        return {
            //
        }
    }
}
</script>

<style>
    #card {
        display: flex;
        flex-direction: column;
        max-width: 30vw;
        position: relative;
    }

    #favorite{
        position: absolute;
        top: 8px;
        right: 8px;
    }
</style>