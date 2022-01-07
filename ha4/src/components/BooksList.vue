<template>
  <div id="books">
    <ul class="list-group">
      <li
        class="list-group-item book"
        :class="{ active: selectedIndex === index }"
        v-for="(book, index) in this.booksSlice"
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
  data() {
    return {
      selectedIndex: 0,
    };
  },
  props: {
    booksSlice: Array,
  },
  methods: {
    selectItem(index) {
      this.selectedIndex = index;
      this.$emit("itemSelected", index);
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
</style>
