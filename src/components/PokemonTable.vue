<template>
  <div>
    <div>
      <b-table :fields="fields" :items="pokemonList">
        <template #cell(name)="data">
          <router-link
            :to="{ name: 'PokemonDetails', params: { id: data.value } }"
          >
            {{ data.value }}
          </router-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>

import  service  from '../services/service'

export default {
  name: "PokemonTable",
  data() {
    return {

      fields: [{
        key: 'name',
        label: 'Nome'
      }],
      pokemonList: []

    };
  },

mounted(){
  this.getItems()
},


methods: {
 
  getItems(){
    service.get('pokemon').then(response => {
      this.pokemonList = response.data.results
      
    })
  }

}



};
</script>

<style scoped></style>
