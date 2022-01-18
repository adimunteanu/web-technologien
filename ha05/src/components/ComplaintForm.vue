<template>
  <!-- TODO: implement me -->
  <img src='@/assets/overview.jpg' class='img-fluid rounded' alt=''>
</template>

<script>

export default {
  name: 'ComplaintForm',
  data() {
    return {
      formSubmitted: false,
      flightNumber: '',
      emailAddress: '',
      flightDate: '',
      flightTime: '',
      bankIban: ''
    };
  },
  methods: {
    flightNumberValid(value) {
      // TODO: implement me
      value; // to suppress warning, delete line
      return false;
    },
    emailAddressValid(value) {
      // TODO: implement me
      value; // to suppress warning, delete line
      return false;
    },
    dateValid(value) {
      // TODO: implement me
      value; // to suppress warning, delete line
      return false;
    },
    timeValid(value) {
      // TODO: implement me
      value; // to suppress warning, delete line
      return false;
    },
    ibanValid(value) {
      // TODO: implement me
      value; // to suppress warning, delete line
      return false;
    },
  }
}
</script>

<style scoped>
#main-card {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>