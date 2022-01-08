<template>
  <label for="author-search">Search books of author:</label>
  <div class="input-group mb-3">
    <input
      type="text"
      list="authors"
      name="author-search"
      id="author-search"
      class="form-control"
      placeholder="Stephen King, Stephen Hawking, Steve Turner, ..."
      @change="testSearch"
    />
    <datalist id="authors">
      <option
        v-for="author in this.authors"
        :key="author"
        :value="author"
      ></option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: "AuthorSearch",
  props: {
    authors: Array,
  },
  methods: {
    testSearch(author) {
      this.$emit("authorSelected", author);
    },
  },
  emits: ["authorSelected"],
};
</script>
