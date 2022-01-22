<template>
  <div
    :class='"alert " + alertStyle + " mt-3"' 
    role='alert'>
    
    <h4
      class='alert-heading'>
        {{ alertHeading }}
    </h4>
    <hr />

    <div class='row mb-3'>
      <div class='col-3 fw-bold'>Test</div>
      <div class='col-4 fw-bold'>Expected</div>
      <div class='col-4 fw-bold'>Output</div>
      <div class='col-1 fw-bold'>Result</div>
    </div>
    <hr />

    <div class='row' v-for='test, index in results' :key='index'>
      <div class='col-3'>
        <code>{{ test.label }}</code>
      </div>
      <div class='col-4'>
        <code>{{ test.expected }}</code>
      </div>
      <div class='col-4'>
        <code>{{ test.output }}</code>
      </div>
      <div class='col-1'>
        <span>
          <i v-if='test.passed' class="bi bi-check-lg text-success"></i>
          <i v-else class="bi bi-x-lg text-danger"></i>
        </span>
      </div>
      <hr class='mt-3' />
    </div>

    <div class='row'>
      <div class='col text-end fw-bold'>
        <span id='score'>{{ score }}</span> / {{ maxPoints }} Punkten
      </div>
    </div>
  </div>
</template>

<script>
// test-specific constants, variables, and functions
const inputIds = ['flight-number', 'email-address', 'flight-date', 'flight-time', 'bank-iban'];
let check = (expressions, fn, expected) => {
  return expressions.reduce((acc, val) => {
    return ((expected) ? fn(val) : !fn(val)) && acc;
  }, true);
};

export default {
  name: 'Tests',
  data() {
    return {
      alertStyle: 'alert-info',
      alertHeading: 'Tests running ...',
      score: 0,
      results: [],
      tests: [
        // input fields
        {
          points: 5,
          label: 'Input fields: check existence (5 Punkte)',
          cmd: async () => {
            return inputIds.reduce((acc, val) => {
              let field = document.getElementById(val);
              return field.tagName.toUpperCase() === 'INPUT' && acc;
            }, true);
          }, 
          expected: 'true'
        },
        
        // .is-invalid class
        {
          points: 2.5,
          label: 'Input fields: check invalid state (2,5 Punkte)',
          cmd: async () => {
            this.$root.$refs.complaintForm.formSubmitted = true;
            await this.$root.$nextTick();

            return inputIds.reduce((acc, val) => {
              let field = document.getElementById(val);
              return field.className.includes('is-invalid') && acc;
            }, true);
          }, 
          expected: 'true'
        },

        // .is-valid class
        {
          points: 2.5,
          label: 'Input fields: check valid state (2,5 Punkte)',
          cmd: async () => {
            this.$root.$refs.complaintForm.flightNumber = 'LH1';
            this.$root.$refs.complaintForm.emailAddress = 'john@tu-berlin.de';
            this.$root.$refs.complaintForm.flightDate = '2022-01-01';
            this.$root.$refs.complaintForm.flightTime = '00:10';
            this.$root.$refs.complaintForm.bankIban = 'DE18 1111 1111 1111 1111 11';
            this.$root.$refs.complaintForm.formSubmitted = true;
            await this.$root.$nextTick();

            return inputIds.reduce((acc, val) => {
              let field = document.getElementById(val);
              return field.className.includes('is-valid') && acc;
            }, true);
          }, 
          expected: 'true'
        },

        // Validation: flight number
        {
          points: 2,
          label: 'Validation: flight number (2 Punkte)',
          cmd: async () => {
            let valid = ['LH0001', 'LH 0001', 'LH001', 'LH01', 'LH1', '3X1', 'X31'];
            let invalid = ['LHA 0001', 'LH 00001', '111', 'LH 1A', 'lh1'];
            return check(valid, this.$root.$refs.complaintForm.flightNumberValid, true)
              && check(invalid, this.$root.$refs.complaintForm.flightNumberValid, false)
          }, 
          expected: 'true'
        },

        // Validation: email address
        {
          points: 2,
          label: 'Validation: email address (2 Punkte)',
          cmd: async () => {
            let valid = ['john@tu-berlin.de', 'john.doe@tu-berlin.de', 'j.o.h.n@tu-berlin.de', 'jo.doe.@tu-berlin.de', 'john@campus.tu-berlin.de', 'john@mailbox.tu-berlin.de'];
            let invalid = ['....@tu-berlin.de', 'john@example.com', 'john@mailbox.example.com', 'john doe@tu-berlin.de'];
            return check(valid, this.$root.$refs.complaintForm.emailAddressValid, true)
              && check(invalid, this.$root.$refs.complaintForm.emailAddressValid, false)
          }, 
          expected: 'true'
        },

        // Validation: flight date
        {
          points: 2,
          label: 'Validation: flight date (2 Punkte)',
          cmd: async () => {
            let valid = ['2022-01-01', '2022-1-1', '222-1-1', '22-1-1', '2-1-1', '0002-01-01'];
            let invalid = ['20222-01-01', '2022-13-01', '2022-01-32'];
            return check(valid, this.$root.$refs.complaintForm.dateValid, true)
              && check(invalid, this.$root.$refs.complaintForm.dateValid, false)
          }, 
          expected: 'true'
        },

        // Validation: flight time
        {
          points: 2,
          label: 'Validation: flight time (2 Punkte)',
          cmd: async () => {
            let valid = ['00:00', '00:10', '10:00', '1:00', '23:00'];
            let invalid = ['24:10', '23:60', '10:1'];
            return check(valid, this.$root.$refs.complaintForm.timeValid, true)
              && check(invalid, this.$root.$refs.complaintForm.timeValid, false)
          }, 
          expected: 'true'
        },

        // Validation: bank iban
        {
          points: 2,
          label: 'Validation: bank iban (2 Punkte)',
          cmd: async () => {
            let valid = ['DE18111111111111111111', 'DE18 1111 1111 1111 1111 11', 'DE18 11111111 11111111 11', 'DE18 1111111111111111 11'];
            let invalid = ['DE11 1111 1111 1111 1111 11', 'BE18 1111 1111 1111 1111 11', 'DE11 1111 1111 1111 1111 11111', 'DE11 1111 1111'];
            return check(valid, this.$root.$refs.complaintForm.ibanValid, true)
              && check(invalid, this.$root.$refs.complaintForm.ibanValid, false)
          }, 
          expected: 'true'
        },
      ]
    };
  },
  computed: {
    maxPoints() {
      return this.tests.reduce(calcPoints, 0);
    }
  },
  async mounted() {
    this.$root.$refs.complaintForm.flightNumber = '';
    this.$root.$refs.complaintForm.emailAddress = '';
    this.$root.$refs.complaintForm.flightDate = '';
    this.$root.$refs.complaintForm.flightTime = '';
    this.$root.$refs.complaintForm.bankIban = '';
    this.$root.$refs.complaintForm.formSubmitted = false;
    await this.$root.$nextTick();

    for (let i=0; i < this.tests.length; i++) {
      let result = null;
      try {
        result = JSON.stringify(await this.tests[i].cmd());
      } catch (err) {
        result = JSON.stringify(err);
      }

      let passed = result === this.tests[i].expected;
      this.results.push({
        points: this.tests[i].points,
        label: this.tests[i].label,
        expected: this.tests[i].expected,
        output: result,
        passed: passed
      });

      if (passed) {
        this.score += this.tests[i].points;
      }

      await timer(1000);
      if (i === this.tests.length-1) {
        this.cleanUp();
      }
    }
  },
  methods: {
    stopTests() {
      this.$emit('stop-tests', false);
    },
    cleanUp() {
      this.$root.$refs.complaintForm.flightNumber = '';
      this.$root.$refs.complaintForm.emailAddress = '';
      this.$root.$refs.complaintForm.flightDate = '';
      this.$root.$refs.complaintForm.flightTime = '';
      this.$root.$refs.complaintForm.bankIban = '';            
      this.$root.$refs.complaintForm.formSubmitted = false;

      let errors = this.results.filter((e) => !e.passed);
      this.alertHeading = 
        (errors.length > 0) ?
          'Nicht alle Tests bestanden!'
          : 'Alle Tests bestanden!';

      this.alertStyle = 
        (errors.length > 0) ?
          'alert-danger'
          : 'alert-success';
      
      this.score = this.maxPoints - errors.reduce(calcPoints, 0);
    }
  }
}

let calcPoints = (acc, val) => acc + val.points;

function timer(ms) { 
  return new Promise(res => setTimeout(res, ms)); 
}
</script>