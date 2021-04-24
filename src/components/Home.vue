<template>
  <div class="container">
    <div class="row">
      

      <div>
        <pokemon-table></pokemon-table>
      </div>
      

    </div>
  </div>
</template>


<script>

import PokemonTable from './PokemonTable.vue';

export default {

  name: "Home",

  components: {
    PokemonTable
    
  },

  data() {
    return {
      text: "",
    };
  },
};
</script>

<style scoped></style>
