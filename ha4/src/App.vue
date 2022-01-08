<template>
  <div class="container">
    <tests v-if="testing"></tests>

    <div class="row mb-3">
      <div class="col">
        <nav-bar
          ref="navBar"
          :tests-open="testing"
          :darkMode="darkMode"
          @toggle-dark-mode="toggleDarkMode"
          @toggle-tests="toggleTests"
        >
        </nav-bar>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <author-search
          ref="authorSearch"
          :authors="authorsList"
          @authorSelected="setFilterFn"
        ></author-search>

        <books-list
          ref="booksListView"
          :books="booksList"
          :page="page"
          :windowSize="windowSize"
          :selectedIndex="selectedIndex"
          @itemSelected="setSelectedIndex"
        ></books-list>

        <books-list-pagination
          ref="booksListPagination"
          :page="page"
          :windowSize="windowSize"
          :booksLength="booksList.length"
          @pageUpdated="updatePage"
        ></books-list-pagination>
      </div>

      <div class="col">
        <book-view :book="booksList[selectedIndex]"></book-view>
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
import books from "./assets/books.json";

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
      darkMode: false,
    };
  },
  computed: {
    booksList() {
      return books
        .map((book) => {
          return { ...book, authors: book.authors.split(";").join(", ") };
        })
        .filter(this.filterFn)
        .sort((a, b) => a.title.localeCompare(b.title));
    },
    authorsList() {
      return [
        ...new Set(
          books.flatMap((book) =>
            book.authors.split(";").map((author) => author.trim())
          )
        ),
      ].sort();
    },
  },
  methods: {
    setSelectedIndex(event) {
      this.selectedIndex = event;
    },
    updatePage(event) {
      this.page = event;
    },
    setFilterFn(event) {
      this.selectedIndex = 0;
      this.filterFn = event
        ? (book) => book.authors.includes(event)
        : () => true;
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
      document
        .getElementById("bootstrap-theme")
        .setAttribute(
          "href",
          this.darkMode ? this.darkThemeUrl : this.lightThemeUrl
        );
    },
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
