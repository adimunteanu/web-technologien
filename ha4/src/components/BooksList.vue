<template>
  <div id="books">
    <ul class="list-group">
      <li
        class="list-group-item book"
        :class="{
          active: this.selectedIndex === this.page * this.windowSize + index,
        }"
        v-for="(book, index) in booksSlice"
        :key="index"
        @click="selectItem(index)"
      >
        <p class="book-title">{{ book.title }}</p>
        <span class="book-authors">{{ book.authors }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BooksList",
  props: {
    books: Array,
    page: Number,
    windowSize: Number,
    selectedIndex: Number,
  },
  computed: {
    booksSlice() {
      return this.books.slice(
        this.page * this.windowSize,
        (this.page + 1) * this.windowSize
      );
    },
  },
  methods: {
    selectItem(index) {
      this.$emit("itemSelected", this.page * this.windowSize + index);
    },
  },
  emits: ["itemSelected"],
};
</script>

<style scoped>
#books p.book-title {
  font-weight: bold;
  margin: 0;
}
.book:hover {
  cursor: pointer;
}
</style>
