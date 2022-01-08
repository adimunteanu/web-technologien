<template>
  <div class="mt-3 btn-toolbar justify-content-center" role="toolbar">
    <div class="btn-group" role="group">
      <button
        type="button"
        id="pagination-back-button"
        class="btn btn-link btn-outline-secondary"
        :class="{ disabled: isFirstPage }"
        :disabled="isFirstPage"
        @click="updatePage(this.page - 1)"
      >
        Previous
      </button>
      <button
        type="button"
        id="pagination-next-button"
        class="btn btn-link btn-outline-secondary"
        :class="{ disabled: isLastPage }"
        :disabled="isLastPage"
        @click="updatePage(this.page + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BooksListPagination",
  props: {
    page: Number,
    windowSize: Number,
    booksLength: Number,
  },
  computed: {
    isFirstPage() {
      return this.page === 0;
    },
    isLastPage() {
      return this.booksLength - this.page * this.windowSize <= this.windowSize;
    },
  },
  methods: {
    updatePage(page) {
      this.$emit("pageUpdated", page);
    },
  },
};
</script>

<style scoped>
button {
  text-decoration: none;
}
</style>
