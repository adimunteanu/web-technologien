<template>
  <nav class='navbar navbar-light bg-light border rounded mt-2'>
    <div class='container-fluid'>

      <a class='navbar-brand' href='#'>
        <i class='bi bi-book-half'></i>
        HAUSAUFGABE 4
      </a>

      <div>
        <!-- TODO: implement -->
        <img src='@/assets/ButtonDarkMode.jpg' width ='114' class='rounded float-end' alt=''>

        <button class='btn btn-primary me-3' type='submit' @click='toggleTests'>
          <i class='bi bi-robot'></i>
          {{ (!testsOpen) ? "Run tests" : "Close tests" }}
        </button>
      </div>

    </div>
  </nav>  
</template>

<script>
export default {
  name: 'NavBar',
  props: ['testsOpen'],
  methods: {
    toggleDarkMode() {
      // TODO: implement me
    },
    toggleTests() {
      this.$emit('toggle-tests');
    }    
  }
}
</script>