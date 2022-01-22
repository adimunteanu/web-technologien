<template>
  <nav class='navbar navbar-light bg-warning rounded mt-2'>
    <div class='container'>
      <span class='navbar-brand mb-0 h1'>
        <i class='bi bi-cloud-fog2-fill'></i>
        Hausaufgabe 5
      </span>

      <button class='btn btn-primary me-3' type='submit' @click='toggleTests'>
        <i class='bi bi-robot'></i>
        {{ (!testsOpen) ? "Run tests" : "Close tests" }}
      </button>      
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['testsOpen'],
  methods: {
    toggleTests() {
      this.$emit('toggle-tests');
    }    
  }  
}
</script>