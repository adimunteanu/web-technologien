<template>
  <nav class="navbar navbar-light bg-light border rounded mt-2">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <i class="bi bi-book-half"></i>
        HAUSAUFGABE 4
      </a>

      <div>
        <button class="btn btn-primary me-3" type="submit" @click="toggleTests">
          <i class="bi bi-robot"></i>
          {{ !testsOpen ? "Run tests" : "Close tests" }}
        </button>
        <button id="btn-dark-mode" class="btn btn-dark" @click="toggleDarkMode">
          <i class="bi bi-lightbulb-off"> </i>
          {{ !this.darkMode ? "Lights off" : "Lights on" }}
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: ["testsOpen", "darkMode"],
  methods: {
    toggleDarkMode() {
      this.$emit("toggle-dark-mode");
    },
    toggleTests() {
      this.$emit("toggle-tests");
    },
  },
};
</script>
