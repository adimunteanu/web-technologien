<template>
  <!-- TODO: implement me -->
  <img src='@/assets/AuthorSearch.jpg' class='img-fluid rounded' alt=''>
</template>

<script>
export default {
  name: 'AuthorSearch',
  methods: {
    testSearch(author) {
      this.$emit('select-author', author);
    }
  }
}
</script>