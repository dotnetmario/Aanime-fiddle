<template>
    <div class="container mb-5" :class="{'d-none' : !this.loaded}">
        <div class="anime-top-section row border-shadow">
            <div class="anime-poster col-md-3 order-dark">
                <img :src="anime.image_url" class="anime-poster-pic" />
                <p class="anime-score">
                    {{ anime.score }} <i class="fa fa-star"></i>
                    <span class="text-small ml-2">scrored by{{ anime.scored_by }}</span>
                </p>

                <p class="ml-2 m-0 p-0 text-left">
                    <span class="font-weight-bold">Source</span> : {{ anime.source }}
                </p>

                <p class="ml-2 m-0 p-0 text-left">
                    <span class="font-weight-bold">Status</span> : {{ anime.status }}
                </p>

                <p class="ml-2 m-0 p-0 text-left" v-if="anime.status == 'Currently Airing'">
                    <span class="font-weight-bold">Broadcast Schedule</span> : {{ anime.broadcast }}
                </p>

                <p class="ml-2 m-0 p-0 text-left">
                    <span class="font-weight-bold">Episode</span> : {{ anime.episodes }}
                </p>

                <p class="ml-2 m-0 p-0 text-left">
                    <span class="font-weight-bold">Episode Duration</span> : {{ anime.duration }}
                </p>
            </div>

            <div class="anime-info col-md-7 ml-auto order-dark p-3">
                <h2 class="text-center">{{ anime.title }}</h2>
                
                <p class="anime-synopsis">
                    {{ this.getSynopsis }} 
                    {{ !this.full && this.anime.synopsis.length > 300 ? '...' : '' }}
                </p>
                <span 
                    v-if="this.anime.synopsis.length > 300" 
                    class="read-more mx-auto btn btn-primary " 
                    @click="this.updateFull">
                        {{ this.full ? "Read less" : "Read more" }}
                </span>
            </div>
        </div>





        <div class="anime-main-content row border-shadow">
            <div class="anime-asside-content col-md-5">
                
            </div>
            <div class="anime-content col-md-5">
            </div>
        </div>
    </div>
</template>

<script>
const jikanjs  = require('jikanjs');

export default {
    name : 'Anime',
    data(){
        return {
            id: null,
            anime: null,
            full: false,
            loaded: false,
        }
    },
    created() {
        this.id = this.$route.params.id;
        this.getAnime(this.id);
    },
    computed: {
        getSynopsis(){
            return this.full ? this.anime.synopsis : this.anime.synopsis.substr(0, 300);
        }
    },
    methods: {
        getAnime(id){
            jikanjs.loadAnime(id).then((res) => {
                this.anime = res;
                this.loaded = true;
                console.log(this.anime);
            }).catch((err) => {
                console.error(err);
            });
        },

        saveAnime(){
            if(this.anime != null){
                const data = JSON.stringify(this.anime);
                console.log("got here");
            }
        },

        updateFull(){
            this.full = !this.full;
        }
    },
}
</script>

<style scoped>
.fa-star{
    color: #F9A602;
}
.border-dark{
    border: 1px solid black;
}
.anime-top-section{
    height: 540px;
    border-radius: 5px;
}

.anime-poster-pic{
    max-width: 300px;
    max-height: 393px;
}

.anime-synopsis{
    max-height: 310px;
    overflow-y: auto;
}

@media(max-width: 769px){
    .anime-synopsis{
        height: auto;
        overflow-y: auto;
    }

    .anime-top-section{
        height: auto;
    }

    .anime-info{
        height: auto;
    }
}
</style>