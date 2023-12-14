const app = Vue.createApp({
  data() {
    return {
      premium: true, // Premium users get free shipping
      cart: []
    };
  },
  methods: {
    updateCart(product, variant) {
      console.log('Adding to cart:', product);
      this.cart.push(product);
    }
  }
});




app.component('product', {
  // https://vuejs.org/v2/guide/components-props.html
  // Props with validation
  props: {
    premium: {type: Boolean, required: true, default: false},
    // Types: String, Number, Array, Object, Function, Promise, any ctor
    // Null and undefined always pass validation
    // nameOfProp: [String, Number],
    // nameOfAnotherProp: {
    //   default() { return 'calculatedValue'; },
    //   validator(value) { return true; }
    // }
  },
  // Without validation
  // props: ['premium'],

  // Encouraged to define events
  emits: ['add-to-cart'],

  template: `
    <!-- 'class="main-prod"' will only be applied if there is a single root element -->
    <!-- There will be a bunch of warnings in the console if you do on multiple roots -->
    <div class="product">
      <div class="product-image">
        <img :src="image">
      </div>
      <div class="product-info">
        <h1 v-text="product" />

        <p v-if="premium" v-html="'<b>FREE Shipping</b>'"></p>
        <p v-else>Shipping: $4.99</p>

        <button @click="addToCart" class="add-to-cart" :class="inventory ? '' : 'disabledButton'">
          Add to Cart
        </button>

        <div v-for="(variant, index) in variants"
            :key="variant.id"
            class="color-box"
            :class="{active: selectedVariantIndex === index}"
            :style="{backgroundColor: variant.color}"
            @mouseover="selectedVariantIndex = index"
        ></div>
      </div>
    </div>
  `,
  data() {
    // Return a new object reference each time.
    return {
      product: 'Socks',
      selectedVariantIndex: 0,
      variants: [
        {id: 1, color: 'green'},
        {id: 2, color: 'blue'}
      ],
      inventory: 3,
    };
  },
  methods: {
    addToCart() {
      this.inventory--;
      const selectedVariant = this.variants[this.selectedVariantIndex];
      this.$emit('add-to-cart', {product: this.product, variant: selectedVariant});
    }
  },
  computed: {
    image() {
      const color = this.variants[this.selectedVariantIndex].color;
      return `./assets/socks-${color}.jpg`;
    },
    // If you also need a setter:
    // title: {
    //   get() {
    //     return this.product;
    //   },
    //   set(newValue) {
    //     this.product = newValue;
    //   }
    // }
  }
});


app.mount("#app");
