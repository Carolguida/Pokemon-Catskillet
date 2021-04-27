<template>
  <footer class="bg-color" id="footer">
    
        <div class="text-center py-3">
          <span class="text-color"> &copy; 2021 Copyright: </span>
          <a
            class="text-color"
            target="_blank"
            href="https://github.com/Carolguida"
            >Carolina Guida</a
          >
        </div>
     
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.bg-color {
  background-color: #77bdda;
}

.text-color {
  color: white;
}

#footer {
  /* position: fixed; */ 
   left: 0;
   bottom: 0;  
   width: 100%;  
  
}

</style>
