<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand >
        <img src="https://i.imgur.com/oEYWKWx.png"  alt="Kitten">
        </b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>

.navbar.navbar-light{
  background-color: #343a40 !important;
  
}

img{
  width: 80px !important;
  border-radius: 50% !important;
}

</style>
