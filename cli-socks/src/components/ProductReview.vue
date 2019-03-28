<template>
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Add Review</h3>
      <label>Name</label>
      <input v-model="name" @keydown.ctrl.v.prevent="blockPaste">

      <ul class="error" v-for="error in errors" :key="error">
        <li>{{error}}</li>
      </ul>

      <label>Rating</label>
      <select v-model.number="rating">
        <option disabled value="">select</option>
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <br>
      <input
        type="checkbox"
        v-model="acceptTerms"
        true-value="yes"
        false-value="no"
      >
      Accept terms

      <button>Submit</button>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class ProductReview extends Vue {
  name = null;
  rating = '';
  acceptTerms = false;
  errors: string[] = [];

  onSubmit() {
    this.errors = [];
    if (!this.rating) {
        this.errors.push('Please select a rating');
    }
    if (!this.name) {
        this.errors.push('Please provide your name');
    }
    if (!this.acceptTerms) {
        this.errors.push('Please accept the terms');
    }
    if (this.errors.length) {
        return;
    }

    const review = {name: this.name, rating: this.rating};
    console.log('Submitting', review);
    this.$emit('add-review', review);
  }

  blockPaste() {
    console.log('Control + V is not allowed!');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.review-form {
  width: 175px;
  padding: 5px;
  margin: 0px;
}

h3 {
  margin-bottom: 6px;
}

input:not([type=checkbox]) {
  width: 100%;
  height: 25px;
  margin-bottom: 10px;
}

textarea {
  width: 100%;
  height: 60px;
}

.error {
  color: rgb(233, 12, 12);
}
</style>
