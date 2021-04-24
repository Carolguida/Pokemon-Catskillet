<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <b-form-input
          v-model="text"
          placeholder="Insira o Pokemon desejado"
        ></b-form-input>
        <div class="mt-2">Value: {{ text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style scoped></style>
