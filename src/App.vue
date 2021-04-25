<template>
  <div>
    <NavBar></NavBar>
    <div class="container">
    <main>
      <router-view></router-view>
    </main>
    </div>
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
.container{
  margin-top: 20px;
}
</style>
