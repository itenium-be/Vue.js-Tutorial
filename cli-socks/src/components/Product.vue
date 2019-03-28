<template>
<div class="product">
    <div class="product-image">
      <img :src="require(`@/assets/socks-${product.brand}-${selectedVariant.color}.jpg`)">
    </div>

    <div class="product-info">
        <h1>
          {{ title }}
          <!-- eslint-disable-next-line vue/no-unused-vars -->
          <i v-for="i in averageReviewScore" class="fa fa-star" :key="i"></i>
        </h1>

        <div>
          <p v-if="selectedVariant.inventory > 10">In Stock</p>
          <p v-else-if="selectedVariant.inventory">Almost sold out</p>
          <p v-else>Out of Stock</p>
        </div>

        <p v-if="premium">FREE Shipping</p>
        <p v-else>Shipping: $4.99</p>

        <button
          @click="addToCart"
          :disabled="!selectedVariant.inventory"
          :class="['add-to-cart', selectedVariant.inventory ? '' : 'disabledButton']"
        >
          Add to Cart
        </button>

        <button
          @click="removeFromCart"
          :disabled="cartLength === 0"
          :class="['remove-from-cart', cartLength > 0 ? '' : 'disabledButton']"
        >
          Remove from cart
        </button>

        <div v-for="(variant, index) in product.variants"
            :key="variant.id"
            class="color-box"
            :class="{active: selectedVariantIndex === index}"
            :style="{backgroundColor: variant.color}"
            @mouseover="selectedVariantIndex = index"
        ></div>

        <ProductReview @add-review="addReview"></ProductReview>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProductReview from './ProductReview.vue';

@Component({
  components: {
    ProductReview
  }
})
export default class Product extends Vue {
  @Prop({default: false}) private premium!: boolean;
  @Prop() private cartLength: number;

  product = {
    name: "Vue Socks",
    brand: "Vue",
    price: 5,
    variants: [
      {id: 1, color: "green", inventory: 3},
      {id: 2, color: "blue", inventory: 5}
    ],
    inventory: 3,
    reviews: []
  };

  selectedVariantIndex = 0;

  get selectedVariant(): any {
    return this.product.variants[this.selectedVariantIndex];
  }

  get averageReviewScore(): number | null {
    if (!this.product.reviews.length) {
      return null;
    }
    return Math.round(this.product.reviews.reduce((a, c) => a + c, 0) / this.product.reviews.length);
  }

  get title() {
      return `${this.product.name} ($${this.product.price})`;
  }

  addToCart() {
    this.selectedVariant.inventory--;
    this.$emit('add-to-cart', {product: this.product, variant: this.selectedVariant});
  }

  removeFromCart() {
    this.product.inventory++;
    const selectedVariant = this.product.variants[this.selectedVariantIndex];
    this.$emit('remove-from-cart', {product: this.product, variant: selectedVariant})
  }

  addReview(review: any) {
    const reviews = this.product.reviews as any;
    reviews.push(review.rating);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product {
  display: flex;
  flex-flow: wrap;
  padding: 0rem 1rem;
}

.fa.fa-star {
  color: rgb(219, 219, 91);
  font-size: 20px;
}

img {
  border: 1px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  box-shadow: 0px 0.5px 1px #d8d8d8;
}

.product-image {
  width: 80%;
}

.product-image,
.product-info {
  margin-top: 10px;
  width: 50%;
}

.color-box {
  width: 40px;
  height: 40px;
  margin-top: 5px;
}

.active {
  box-sizing: border-box;
  border: 2px solid black;
}

button.add-to-cart {
  border: none;
  background-color: #1E95EA;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
  position: absolute;
  top: 85px;
  right: 13px;
}

button.remove-from-cart {
  border: none;
  background-color: #F12321;
  color: white;
  height: 40px;
  width: 100px;
  font-size: 14px;
  position: absolute;
  top: 135px;
  right: 13px;
} 

.disabledButton {
  background-color: #d8d8d8 !important;
}

h3 {
  margin-bottom: 6px;
}
</style>
