import Homepage from './pages/Homepage.vue';
import Anime from './pages/Anime.vue';

export const routes = [
    {name : 'home', path : '', component : Homepage},
    {name : 'anime', path : '/anime/:id', component : Anime},
];