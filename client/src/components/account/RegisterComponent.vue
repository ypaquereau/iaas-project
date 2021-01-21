<template>
  <div class="middle-screen">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        label="Email address:"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your Name:">
        <b-form-input
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Your password:">
        <b-form-input
          v-model="form.password"
          placeholder="Enter password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Confirm password:">
        <b-form-input
          v-model="form.repeatedPassword"
          placeholder="Confirm password"
          required
        ></b-form-input>
      </b-form-group>

      <div class="d-flex justify-content-between">
        <b-button type="reset" variant="danger">Reset</b-button>
        <b-button type="submit" variant="primary">Submit</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: '',
          repeatedPassword: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.password= ''
        this.form.repeatedPassword=  ''
        // Trick to reset/clear native browser form validation state
        this.show = false
      }
    }
  }
</script>

<style>
  .middle-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 7vh);
  }
</style>