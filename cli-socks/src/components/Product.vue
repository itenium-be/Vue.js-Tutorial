<!-- Complete Product Detail -->
<script lang="ts">
import ProductReview from './ProductReview.vue';
import { ProductModel, ProductVariantModel, ProductReviewModel, ProductReviewPostModel } from '../models/ProductModels';
import { defineComponent, reactive, ref, computed } from 'vue';
// import { useSocksStore } from '@/stores/socks';

export default defineComponent({
  name: 'Products',
  props: ['premium', 'product'],
  emits: ['add-to-cart'],
  setup(props, { emit }) {
    const reviews = reactive([]);
    const selectedVariantIndex = ref(0);
    const selectedVariant = computed(() => props.product.variants[selectedVariantIndex.value]);

    function getImageSource(): string {
      return new URL(`../assets/socks-${props.product.brand}-${selectedVariant.value.color}.jpg`, import.meta.url).href;
    }

    function averageReviewScore(): number {
      if (!props.product.reviews.length) {
        return 0;
      }

      const totalStars = props.product.reviews
        .map((a: ProductReviewPostModel) => a.review.rating)
        .reduce((a: number, c: number) => a + c, 0);

      return Math.round(totalStars / reviews.length);
    }

    function addToCart(): void {
      props.product.inventory--;
      const selectedVariant = props.product.variants[selectedVariantIndex.value];
      emit('add-to-cart', {productId: props.product.id, variantId: selectedVariant.id});
    }

    function addReview(review: ProductReviewPostModel): void {
      const reviews = props.product.reviews;
      // TODO: reviews is a prop and is readonly.
      // Mutate the product in the store or work with an event!
      // const store = useSocksStore();
      // store.addReview();
    }

    return {
      reviews, selectedVariantIndex,
      getImageSource, averageReviewScore, addToCart, addReview
    };
  },
  components: {
    ProductReview
  }
});
</script>


<template>
<div class="product">
    <div class="product-image">
      <img :src="getImageSource()">
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
