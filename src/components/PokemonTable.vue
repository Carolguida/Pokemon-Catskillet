<template>
  <div>
    <div>
      <b-table :fields="fields" :items="items">
        <template #cell(Pokemon_Name)="data">       
          <router-link to="/">
          {{ data.value }}
          </router-link>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonTable",
  data() {
    return {
      fields: [
        {
          key: "number",
          label: "Number",
        },

        {
          key: "Pokemon_Name",
          label: "Name",
        },
      ],

      items: [
        {
          number: 40,
          Pokemon_Name: "Dickerson",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
