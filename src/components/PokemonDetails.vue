<template>
  
     <div class="container">
      <b-row class="mb-3">
        <router-link to="/" tag="button">Início</router-link>
      </b-row>
      <div class="row d-flex align-items-center">
        <div class="col-md-6">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <b-card no-body>
                <div>
                  <b-row>
                    <b-col>
                      <h4 class="ml-2">Nome</h4>
                      <span class="text-light ml-2">{{ pokemonName }}</span>
                      <h4 class="ml-2 mt-2">Habilidades</h4>
                      <div
                        class="ml-2 text-light"
                        v-for="(item, index) in pokemonDetails.abilities"
                        :key="index"
                      >
                        {{ item.ability.name }}
                      </div>
                      <h4 class="ml-2 mt-2">Tipo</h4>
                      <div
                        class="ml-2 text-light"
                        v-for="(tipo, index) in pokemonDetails.types"
                        :key="index + 'a'"
                      >
                        {{ tipo.type.name }}
                      </div>
                    </b-col>

                    <b-col class="mr-1">
                      <h4>Gênero</h4>
                      <span>{{ pokemonGender | translate }} </span>

                      <h4 class="mt-2">Peso</h4>
                      <span>{{ pokemonDetails.weight }} g </span>
                      <h4 class="mt-2">Altura</h4>
                      <span>{{ pokemonDetails.height }} cm</span>
                    </b-col>
                  </b-row>
                </div>
              </b-card>
            </div>
          </div>
        </div>

         <div class="col-md-6 d-flex justify-content-center">
          <img src="https://i.imgur.com/YNnAwH1.png" class="img-fluid" />
        </div> 
      </div>
    </div> 
    
  
</template>

<script>
import service from "../services/service";


export default {
  name: "PokemonDetails",

  filters: {
    translate: function(value) {
      if (value == "female") {
        return "feminino";
      }
      if (value == "male") {
        return "masculino";
      }
      if (value == "genderless") {
        return "sem gênero";
      } else {
        return "Nenhum gênero informado!";
      }
    },
  },

  data() {
    return {
      pokemonName: this.$route.params.id,
      pokemonDetails: {},
      pokemonGender: "",
    };
  },

  methods: {
    getPokemon() {
      service.get(`pokemon/${this.pokemonName}`).then((response) => {
        this.pokemonDetails = response.data;
        this.getPokemonGender(response.data.id);
      });
    },

    getPokemonGender(id) {
      service.get(`gender/${id}`).then((response) => {
        this.pokemonGender = response.data.name;
      });
    },
  },

  mounted() {
    this.getPokemon();
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  width: 290px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #30a7d7 !important;
}

h4,
span {
  font-family: "Flexo-Medium", arial, sans-serif;
}

span {
  color: white;
}

h4 {
  color: #212121;
}

button {
  background-color: #77bdda;
  border-radius: 1em;
  color: #212121;
  padding: 5px 8px !important;
  width: 60px;
  height: 35px;
  border: 1px solid #797bd6;
}

button:hover {
  color: white;
  background-color: #0608a0;
}



</style>
