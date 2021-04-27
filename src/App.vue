<template>
  <div id="App" class="bg">
     
    <NavBar></NavBar>
    <b-container>
      <main>
        <router-view></router-view>         
      </main>      
    </b-container>
    
  </div>
</template>

<script>
import NavBar from "./components/NavBar";


export default {
  name: "App",

  components: {
    NavBar   

 
  },
};
</script>

<style>
.container {
  margin-top: 20px;
}

.bg{
  background-color: rgb(145, 184, 221);  
   min-height: 100vh;
}


</style>
