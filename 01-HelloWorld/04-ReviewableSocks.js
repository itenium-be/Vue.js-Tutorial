Vue.component('product-review', {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <!-- Modifiers: -->
      <!-- .prevent => .preventDefault() -->
      <!-- .stop => .stopPropagation() -->
      <!-- .once => Unregister after first trigger -->
      <!-- .self => Trigger only when the element is the .target -->

      <h3>Add Review</h3>
      <label>Name</label>
      <input v-model="name" @keydown.ctrl.v.prevent="blockPaste">
      <!-- Key modifiers: -->
      <!-- @keyup.enter, @keyup.ctrl.c, @click.ctrl.right, ... -->
      <!-- tab, up, alt, shift, meta, space, esc, delete, page-down ($event.key) ... -->

      <div class="error" v-for="error in errors" :key="error">
        * {{ error }}
      </div>

      <label>Rating</label>
      <select v-model.number="rating">
        <!-- Other modifiers: -->
        <!-- .lazy => Sync on change event -->
        <!-- .trim => Strip whitespace -->
        <option disabled value="">select</option>
        <option v-for="i in 5" :key="i">{{ i }}</option>
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
  `,
  data() {
    return {
      name: null,
      rating: '',
      acceptTerms: false,
      errors: []
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];
      if (!this.rating) {
        this.errors.push('Please select a rating');
        return;
      }

      const review = {name: this.name, rating: this.rating}
      console.log('Submitting', review);
      this.$emit('add-review', review);
    },
    blockPaste() {
      console.log('Control + V is not allowed!');
    }
  },

  // Watches
  watch: {
    name(newName, oldName) {
      // TODO: Call backend to check if this user has
      // already submitted a rating for this product.
      // console.log('name', oldName, '=>', newName);
    }
  },

  // LifeCycle Methods
  created() {
    console.log('product-review created');
  },
  mounted() {
    console.log('product-review mounted');
  },
  updated() {
    console.log('product-review updated');
  },
  destroyed() {
    console.log('product-review destroyed');
  },
  beforeDestroy() {
    console.log('product-review beforeDestroy');
  },
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

          <!-- Mouse modifiers: left, middle, right -->
          <button
            @click.right.prevent="addToCart"
            :disabled="!inventory"
            :class="['add-to-cart', inventory ? '' : 'disabledButton']"
          >
            Add to Cart
          </button>

          <div v-for="(variant, index) in variants"
              :key="variant.id"
              class="color-box"
              :class="{active: selectedVariantIndex === index}"
              :style="{backgroundColor: variant.color}"
              @mouseover="selectedVariantIndex = index"
          ></div>

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

const vm = new Vue({
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
