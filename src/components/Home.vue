<template>
  <div>
    <pokemon-table></pokemon-table>
  </div>
</template>

<script>
import PokemonTable from "./PokemonTable.vue";

export default {
  name: "Home",

  components: {
    PokemonTable,
  },

  data() {
    return {
      text: "",
      
    };
  },
};
</script>

<style>

</style>
