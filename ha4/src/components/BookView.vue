<template>
  <div id="book">
    <ul class="list-group">
      <li class="list-group-item">
        <div class="d-flex justify-content-center mb-3">
          <img
            id="book-image"
            :src="this.book.thumbnail"
            alt="Thumbnail missing"
          />
        </div>
        <p id="book-title">{{ computedTitle }}</p>
      </li>
      <li
        class="list-group-item"
        v-for="property in bookProperties"
        :key="property[0]"
      >
        <b class="book-property-name">{{ property[0] + " " }}</b>
        <span class="book-property">{{ property[1] }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BookVue",
  props: {
    book: Object,
  },
  computed: {
    computedTitle() {
      return (
        this.book.title + (this.book.subtitle ? " - " + this.book.subtitle : "")
      );
    },
    bookProperties() {
      const bookCopy = {...this.book};
      delete bookCopy.thumbnail;
      delete bookCopy.subtitle;
      delete bookCopy.title;
      return Object.entries(bookCopy).sort((a, b) => a[0].localeCompare(b[0]));
    },
  },
};
</script>

<style scoped>
.book-property-name {
  text-transform: capitalize;
}
</style>
