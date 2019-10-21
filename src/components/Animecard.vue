<template>
        <div class="col-xs-12 col-sm-12 col-md-9 col-lg-5 anime-card card m-4 p-0">
            <div class="row no-gutters">
                <div class="col-md-5 m-0 p-0">
                    <img :src="anime.image_url" class="card-img anime-poster" :alt="anime.title">
                </div>
                <div class="col-md-7 m-0 p-0">
                    <div class="card-body">
                        <h5 class="card-title">{{ anime.title }}</h5>
                        <p class="card-text description">{{ anime.synopsis.length > 300 ? anime.synopsis.substr(1, 300) +' ...' : anime.synopsis }}</p>
                        <p class="card-text"><small class="text-muted"></small></p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Animecard',
    props: ['anime'],
}
</script>

<style scoped>
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
     left: 0px;*/
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
}
</style>