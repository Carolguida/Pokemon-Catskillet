import axios from "axios";

const service = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

/* const getPokemons = () => {
  service.get("pokemon").then((response) => {
    console.log(response);
  });
}; */

export default service; 
