<!-- Complete Product Detail -->
<template>
<div class="product">
    <div class="product-image">
      <img :src="require(`@/assets/socks-${product.brand}-${selectedVariant.color}.jpg`)">
    </div>

    <div class="product-info">
        <h1>
          {{ product.name }}
          <!-- eslint-disable-next-line vue/no-unused-vars -->
          <i v-for="i in averageReviewScore" class="fa fa-star" :key="i"></i>
        </h1>

        <div>
          <p v-if="product.inventory > 10">In Stock</p>
          <p v-else-if="product.inventory">Almost sold out</p>
          <p v-else>Out of Stock</p>
        </div>

        <p v-if="premium">FREE Shipping</p>
        <p v-else>Shipping: $4.99</p>

        <button
          @click="addToCart"
          :disabled="!product.inventory"
          :class="['add-to-cart', product.inventory ? '' : 'disabledButton']"
        >
          Add to Cart
        </button>

        <div v-for="(variant, index) in product.variants"
            :key="variant.id"
            class="color-box"
            :class="{active: selectedVariantIndex === index}"
            :style="{backgroundColor: variant.fancyColor}"
            @mouseover="selectedVariantIndex = index"
        ></div>

        <ProductReview @add-review="addReview" :product-id="product.id"></ProductReview>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
import ProductReview from './ProductReview.vue';
import { ProductModel, ProductVariantModel, ProductReviewModel } from '../models/ProductModels';

export interface ProductReviewPostModel {
	productId: number;
	review: ProductReviewModel;
}


@Component({
  components: {
    ProductReview
  }
})
export default class Product extends Vue {
  // Prop() decorator binds the field to the store
  // {default: false} argument is optional
  // premium!: The exclamation mark is TypeScript annotation telling the compiler
  //           the value will be initialized (to avoid ts warning)
  @Prop({default: false}) premium!: boolean;

  @Prop() product!: ProductModel;

  selectedVariantIndex = 0;

  get selectedVariant(): ProductVariantModel {
    return this.product.variants[this.selectedVariantIndex];
  }

  get reviews(): ProductReviewPostModel[] {
    return this.tempReviews;
  }

  get averageReviewScore(): number {
    if (!this.reviews.length) {
      return 0;
    }

    const totalStars = this.reviews
      .map((a: ProductReviewPostModel) => a.review.rating)
      .reduce((a: number, c: number) => a + c, 0);

    return Math.round(totalStars / this.reviews.length);
  }

  addToCart(): void {
    this.product.inventory--;
    const selectedVariant = this.product.variants[this.selectedVariantIndex];
    this.$emit('add-to-cart', {productId: this.product.id, variantId: selectedVariant.id});
  }

  addReview(review: ProductReviewPostModel): void {
    const reviews = this.product.reviews as any;
    // TODO: reviews is a @Prop() and is readonly.
    // Mutate the product in the store!
    // reviews.push(review.rating);

    this.tempReviews.push(review);
  }

  tempReviews: ProductReviewPostModel[] = [];
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

  h1 {
    width: calc(100% - 100px);
  }
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

.disabledButton {
  background-color: #d8d8d8 !important;
}

h3 {
  margin-bottom: 6px;
}
</style>
