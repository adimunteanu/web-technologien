<template>
  <div class="container">
    <tests v-if="testing"></tests>

    <div class="row mb-3">
      <div class="col">
        <nav-bar ref="navBar" :tests-open="testing" @toggle-tests="toggleTests">
        </nav-bar>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <author-search ref="authorSearch"></author-search>

        <books-list ref="booksListView"></books-list>

        <books-list-pagination
          ref="booksListPagination"
        ></books-list-pagination>
      </div>

      <div class="col">
        <book-view></book-view>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorSearch from "./components/AuthorSearch.vue";
import BooksList from "./components/BooksList.vue";
import BooksListPagination from "./components/BooksListPagination.vue";
import BookView from "./components/BookView.vue";
import NavBar from "./components/NavBar.vue";
import Tests from "./components/Tests.vue";

export default {
  name: "App",
  components: {
    AuthorSearch,
    BooksList,
    BooksListPagination,
    BookView,
    NavBar,
    Tests,
  },
  data() {
    return {
      page: 0,
      windowSize: 5,
      selectedIndex: 0,
      filterFn: () => true,
      lightThemeUrl:
        "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
      darkThemeUrl:
        "https://cdn.jsdelivr.net/npm/bootstrap-dark-5@1.1.3/dist/css/bootstrap-night.min.css",
      testing: false,
    };
  },
  computed: {
    booksList() {
      return []; // TODO: implement me
    },
    authorsList() {
      return []; // TODO: implement me
    },
  },
  methods: {
    toggleTests() {
      this.testing = !this.testing;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
