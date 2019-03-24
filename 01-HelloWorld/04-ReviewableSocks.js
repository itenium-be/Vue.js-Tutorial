Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Add Review</h3>
      <label>Name</label>
      <input v-model="name">
 
      <label>Rating</label>
      <select v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    
      <button>Submit</button>
    </form>
  `,
  data() {
    return {
      name: null,
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      const review = {name: this.name, rating: this.rating}
      console.log('Submitting', review);
      this.name = null;
      this.rating = null;
      this.$emit('add-review', review);
    }
  }
});
 
// Validation is not built in:
// https://github.com/vuelidate/vuelidate
// https://github.com/baianat/vee-validate
 
 
 

 
Vue.component('product', {
  props: {
    premium: {type: Boolean, required: true, default: false}
  },
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image">
      </div>
 
      <div class="product-info">
          <h1>
            {{ product }}
            <i v-for="i in averageReviewScore" class="fa fa-star"></i>
          </h1>
 
          <div>
            <p v-if="inventory > 10">In Stock</p>
            <p v-else-if="inventory">Almost sold out</p>
            <p v-else>Out of Stock</p>
          </div>
 
          <p v-if="premium">FREE Shipping</p>
          <p v-else>Shipping: $4.99</p>
 
          <button
            v-on:click="addToCart"
            :disabled="!inventory"
            :class="['add-to-cart', inventory ? '' : 'disabledButton']"
          >
            Add to Cart
          </button>
 
          <div v-for="(variant, index) in variants"
              :key="variant.id"
              class="color-box"
              :style="{backgroundColor: variant.color}"
              @mouseover="selectedVariantIndex = index">
          </div>

          <product-review @add-review="addReview"></product-review>
      </div>
    </div>
  `,
  data() {
    return {
      product: 'Socks',
      selectedVariantIndex: 0,
      variants: [
        {id: 1, color: 'green'},
        {id: 2, color: 'blue'}
      ],
      inventory: 3,
      reviews: []
    };
  },
  methods: {
    addToCart() {
      this.inventory--;
      const selectedVariant = this.variants[this.selectedVariantIndex];
      this.$emit('add-to-cart', {product: this.product, variant: selectedVariant});
    },
    addReview(review) {
      this.reviews.push(review.rating);
    }
  },
  computed: {
    image() {
      const color = this.variants[this.selectedVariantIndex].color;
      return `./assets/socks-${color}.jpg`;
    },
    averageReviewScore() {
      if (!this.reviews.length) {
        return null;
      }
      return Math.round(this.reviews.reduce((a, c) => a + c, 0) / this.reviews.length);
    }
  }
})
 
const app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    updateCart(product) {
      console.log('Adding to cart:', product);
      this.cart.push(product);
    }
  }
});