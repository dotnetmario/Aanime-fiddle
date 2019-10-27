<template>
    <div class="card mb-3 col-xs-12 col-sm-5 col-md-9 col-lg-6 mx-auto anime-card px-0" style="max-width: 540px;" @click="animeInfo(anime.mal_id)">
        <div class="row no-gutters">
            <div class="col-md-4">
                <img :src="anime.image_url" class="card-img anime-poster" :alt="anime.title">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title" :title="anime.title">{{ anime.title.length > 25 && anime.synopsis.length > 200 ? anime.title.substr(1, 25) +' ...' : anime.title }}</h5>
                <p class="card-text anime-desc">{{ anime.synopsis }}</p>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Animecard',
    props: ['anime'],
    methods: {
        animeInfo(id){
            // console.log(id);
            this.$router.push({name: 'anime', params: {id : id}});
        }
    },
}
</script>

<style scoped>
.anime-poster{
    max-width: 300px;
    max-height: 400px;
    /*height: auto;*/
}

.anime-card{
    background-color: transparent;
    border: none;
}

.anime-card:hover{
    transition : all 0.4s ease;
    box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.5);
    background-color: var(--main-color);
}

.anime-desc{
    max-height: 160px;
    overflow-y: auto;
}

.anime-desc:hover{
    /*overflow-y: auto;*/
}
/*
.card{
    border: none;
    background-color: transparent;
}

.anime-card{
    height: 320px;
}

.anime-poster{
    height: 320px;
    max-width: 220px;
    /* position: absolute;
     left: 0px;
    transition : all 0.4s ease;
}

.anime-card:hover {
    transition : all 0.4s ease;
    box-shadow: 10px 10px 20px 0px rgba(0,0,0,0.5);
    background-color: var(--main-color);
}

.description{
    height: 100%;
    overflow: auto;
}*/
</style>