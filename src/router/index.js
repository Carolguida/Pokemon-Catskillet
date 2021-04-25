import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",            
            name: "Home",
            component: () => import("@/components/Home.vue")
            
        },

        {
            path: "/pokemondetails/:id",
            name: "PokemonDetails",
            component: () => import("@/components/PokemonDetails.vue")
        }
                      
    ]
});