<!-- Product Review Form -->
<template>
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Add Review</h3>
      <label>Name</label>
      <input v-model="review.name">

      <div class="error" v-for="error in errors" :key="error">
        * {{ error }}
      </div>

      <label>Rating</label>
      <select v-model.number="review.rating">
        <option disabled value="">select</option>
        <option v-for="i in 5" :key="`option-${i}`">{{ i }}</option>
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
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ProductReviewModel } from '../models/ProductModels';


export default class ProductReview extends Vue {
  @Prop() productId!: number;

  acceptTerms = false;

  review: ProductReviewModel;
  errors: string[] = [];

  constructor() {
    super();
    this.review = {
      name: '',
      rating: 0,
      fullReview: '',
    };
  }


  onSubmit() {
    this.errors = [];
    if (!this.review.rating) {
      this.errors.push('Please select a rating');
      return;
    }

    const review = {productId: this.productId, review: this.review};
    console.log('Submitting', review);
    this.$emit('add-review', review);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.review-form {
  width: 175px;
  padding: 5px;
  margin: 0px;
  margin-top: 25px;
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
