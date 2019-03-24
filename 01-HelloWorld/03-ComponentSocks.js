const comp = Vue.component('product', {
  // Props with validation
  props: {
    premium: {type: Boolean, required: true, default: false}
  },
  // Without validation
  // props: ['premium'],
  template: `
    <div class="product">
      <div class="product-image">
        <img :src="image">
      </div>
      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="premium">FREE Shipping</p>
        <p v-else>Shipping: $4.99</p>
        <button v-on:click="addToCart" class="add-to-cart" :class="inventory ? '' : 'disabledButton'">
          Add to Cart
        </button>
        <div v-for="(variant, index) in variants"
            :key="variant.id"
            class="color-box"
            :style="{backgroundColor: variant.color}"
            @mouseover="selectedVariantIndex = index">
        </div>
      </div>
    </div>
  `,
  data() {
    // Return a fresh object reference each time
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
    }
  }
});



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