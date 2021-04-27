<template>
  <div>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <img src="https://i.imgur.com/oEYWKWx.png" class="img-fluid" />
        </div>
      </div>

      <div class="row d-flex justify-content-center">
        <div class="col-md-6">
          <div class="row d-flex justify-content-center">
            <div class="col-md-10">
              <table class="table text-center bg-column">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Nome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in pokemonList" :key="index">
                    <td>
                      <router-link
                        class="link"
                        :to="{
                          name: 'PokemonDetails',
                          params: { id: item.name },
                        }"
                      >
                        {{ item.name }}
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div class="my-4">
                <!-- Pagination -->
                <ul
                  class="pagination pagination-md justify-content-center text-center"
                >
                  <li
                    class="page-item"
                    :class="currentPage === 1 ? 'disabled' : ''"
                  >
                    <a class="page-link" @click="prevPage">Anterior</a>
                  </li>
                  <li class="page-link" style="background-color: inherit">
                    {{ currentPage }} de {{ lastPage }}
                  </li>
                  <li
                    class="page-item"
                    :class="currentPage === lastPage ? 'disabled' : ''"
                  >
                    <a class="page-link" @click="nextPage">Próximo</a>
                  </li>
                </ul>
              </div>
              <!--./Pagination -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../services/service";

export default {
  name: "PokemonTable",

  data() {
    return {
      perPage: 20,
      currentPage: 1,
      totalRows: 0,
      offSet: 0,

      fields: [
        {
          key: "name",
          label: "Nome",
        },
      ],
      pokemonList: [],
    };
  },

  mounted() {
    this.getItems();
  },

  methods: {
    getItems() {
      service.get(`pokemon?offset=${this.offSet}&limit=20`).then((response) => {
        this.pokemonList = response.data.results;
        this.totalRows = response.data.count;
      });
    },

    prevPage() {
      this.currentPage--;
      this.offSet -= 20;
      this.getItems();
    },

    nextPage() {
      this.currentPage++;
      this.offSet += 20;
      this.getItems();
    },
  },

  computed: {
    lastPage() {
      return Math.floor(this.totalRows / this.perPage);
    },
  },
};
</script>

<style scoped>
.table.b-table {
  text-align: center !important;
}
table {
  border-radius: 10px;
}

.text-color {
  color: darkslategrey;
}

.bg-column {
  background-color: aliceblue;
}

a:hover {
  cursor: pointer;
}
</style>
