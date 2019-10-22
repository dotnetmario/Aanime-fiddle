<template>
    <div class="mx-3">
        <h1>{{ year }} {{ season}} Anime</h1>
        <div class="text-center">
            <ul class="nav nav-pills justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" :class="{ active : isActive('all') }" href="#" @click="filter('all')">All</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active : isActive('tvNew') }" href="#" @click="filter('tvNew')">TV (new)</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active : isActive('tvCont') }" href="#" @click="filter('tvCont')">TV (Continuing)</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active : isActive('ona') }" href="#" @click="filter('ona')">ONA</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active : isActive('ova') }" href="#" @click="filter('ova')">OVA</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active : isActive('movie') }" href="#" @click="filter('movie')">Movies</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{ active : isActive('special') }" href="#" @click="filter('special')">Specials</a>
                </li>
            </ul>
        </div>

        <div class="row">
            <div v-if="isActive('tvNew')|isActive('all')">
            new
                <Animecard v-for="anime in animes" :anime="anime" :key="anime.mal_id"></Animecard>
            </div>
            <div v-if="isActive('tvCont')">
            cont
                <Animecard v-for="anime in animes" :anime="anime" :key="anime.mal_id"></Animecard>
            </div>
            <div v-if="isActive('ona')">
            ona
                <Animecard v-for="anime in animes" :anime="anime" :key="anime.mal_id"></Animecard>
            </div>
            <div v-if="isActive('ova')">
            ova
                <Animecard v-for="anime in animes" :anime="anime" :key="anime.mal_id"></Animecard>
            </div>
            <div v-if="isActive('movie')">
            movie
                <Animecard v-for="anime in animes" :anime="anime" :key="anime.mal_id"></Animecard>
            </div>
            <div v-if="isActive('special')">
            specias
                <Animecard v-for="anime in animes" :anime="anime" :key="anime.mal_id"></Animecard>
            </div>
        </div>
    </div>
</template>

<script>
import Animecard from './../components/Animecard.vue';
const jikanjs  = require('jikanjs');

export default {
    name: 'Homepage',
    components:{
        Animecard,
    },
    data(){
        return {
            posts : [1, 2, 3, 4, 5, 6,  7, 8, 9, 10],
            year : null,
            season : null,
            animes : null,
            all : null,
            tvNew : null,
            tvCont : null,
            ona : null,
            ova : null,
            movie : null,
            special : null,
            active : 'all',
        }
    },
    created() {
        this.setSeasonAndYear();
        this.getSeasonAnime();
    },
    methods: {
        getSeasonAnime(){
            if(this.year == null && this.season == null){
                this.setSeasonAndYear();
            }

            jikanjs.loadSeason(this.year, this.season)
                .then(res => {
                    this.animes = res.anime;
                    this.all = res.anime;
                    this.filterAnime();
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        setSeasonAndYear() {
            this.year = new Date().getFullYear();
            
            const month = new Date().getMonth() + 1;
            switch(month.toString()) {
                case '12':
                case '1':
                case '2':
                    this.season = 'winter';
                    break;
                case '3':
                case '4':
                case '5':
                    this.season = 'spring';
                    break;
                case '6':
                case '7':
                case '8':
                    this.season = 'summer';
                    break;
                case '9':
                case '10': 
                case '11':
                    this.season = 'fall';
                    break;
            }
        },
        filterAnime(){
            this.tvNew = this.animes.filter(a => a.type == 'TV' && a.continuing == false);
            this.tvCont = this.animes.filter(a => a.type == 'TV' && a.continuing == true);
            this.ona = this.animes.filter(a => a.type == 'ONA');
            this.ova = this.animes.filter(a => a.type == 'OVA');
            this.movie = this.animes.filter(a => a.type == 'Movie');
            this.special = this.animes.filter(a => a.type == 'Special');
        },
        filter(type){
            switch(type){
                case 'tvNew' :
                    this.animes = this.tvNew;
                    this.active = 'tvNew';
                    break;
                case 'tvCont' :
                    this.animes = this.tvCont;
                    this.active = 'tvCont';
                    break;
                case 'ona' :
                    this.animes = this.ona;
                    this.active = 'ona';
                    break;
                case 'ova' :
                    this.animes = this.ova;
                    this.active = 'ova';
                    break;
                case 'movie' :
                    this.animes = this.movie;
                    this.active = 'movie';
                    break;
                case 'special' :
                    this.animes = this.special;
                    this.active = 'special';
                    break;
                default :
                    this.animes = this.all;
                    this.active = 'all';
                    break;
            }
        },
        isActive(type){
            console.log(this.active, type, this.active == type);
            return this.active == type;
        }
    },
}
</script>;