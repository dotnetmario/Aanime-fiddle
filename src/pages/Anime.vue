<template>
    <div>
        {{ $route.params.id }}
        {{ id }}
    </div>
</template>

<script>
export default {
    name : 'Anime',
    data(){
        return {
            id: $route.params.id,
            anime: null,
        }
    },
    created() {
        this.getAnime(this.id);
    },
    methods: {
        getAnime(id){
            console.log(id);
            // jikanjs.loadAnime(id, 'episodes').then((response) => {
            //     response.episodes.forEach(element => {
            //         console.log(`${element.episode_id}: ${element.title} - ${element.title_romanji} - ${element.title_japanese}`);
            //     })
            // }).catch((err) => {
            //     console.error(err);
            // });
        },

        saveAnime(){
            if(this.anime != null){
                const data = JSON.stringify(this.anime);
                console.log("got here");
                // window.localStorage.setItem(this.anime.title, data);
                // console.log(JSON.parse(window.localStorage.getItem(this.anime.title)))
            }
        }
    },
}
</script>