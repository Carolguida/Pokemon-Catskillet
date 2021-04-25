<template>
  <div>
    <h1> Nome: {{ pokemonName }}</h1>
    <h2>Habilidades</h2>
    <div v-for="(item, index) in pokemonDetails.abilities" :key="index">
        {{item.ability.name}}
    </div>

     <h2>Tipo propriedades</h2>
    <div  v-for="(tipo, index) in pokemonDetails.types" :key="index+'a'">
      {{tipo.type.name}}
    </div> 

      <!-- <h2>Espécie</h2>
    {{pokemonDetails.species.name != undefined ? pokemonDetails.species.name :""}}  
 -->
    <h2>Genero</h2>
    <span>{{pokemonGender | translate}} </span>

    <h2>Peso</h2>
    <span>{{pokemonDetails.weight}} g </span>
    <h2>Altura</h2>
    <span>{{pokemonDetails.height}} cm</span>
  </div>
</template>

<script>

import service from '../services/service'

export default {
  name: "PokemonDetails",
  
  filters: {
    translate: function (value){
      if(value == 'female'){
        return 'feminino'
      }
      if(value == 'male'){
        return 'masculino'
      }
      if(value == 'genderless'){
        return 'sem gênero'
      }else{
        return "Nenhum gênero informado"
      }
      
    }
  },

  data() {
    return {

      pokemonName: this.$route.params.id,
      pokemonDetails: {},
      pokemonGender: '',
     

    };

  },

  methods: {
    getPokemon(){
      service.get(`pokemon/${this.pokemonName}`).then(response => {
        this.pokemonDetails = response.data
        this.getPokemonGender(response.data.id) 
        
        console.log(response.data)
        console.log(this.pokemonDetails.species.name)
      })
    },

    getPokemonGender(id){
        service.get(`gender/${id}`).then(response => {
          this.pokemonGender = response.data.name 
          //console.log(this.pokemonGender)
          //console.log(response)

        })
    },

  },

  mounted(){
    this.getPokemon()    
  }
};
</script>

<style scoped></style>
