<!-- Product Review Form -->

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { ProductReviewModel } from '../models/ProductModels';

export default defineComponent({
  name: 'ProductReview',
  props: ['productId'],
  emits: ['add-review'],
  setup(props, { emit }) {
    const acceptTerms = ref(false);
    const review = reactive<ProductReviewModel>({name: '', rating: 0, fullReview: ''});
    const errors = ref<string[]>([]);

    function onSubmit() {
      errors.value = [];
      if (!review.rating) {
        errors.value.push('Please select a rating');
        return;
      }

      const postReview = {productId: props.productId, review};
      console.log('Submitting', review);
      emit('add-review', postReview);
    }

    return {acceptTerms, review, errors, onSubmit};
  },
});
</script>



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
