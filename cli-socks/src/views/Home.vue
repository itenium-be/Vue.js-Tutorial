<template>
  <div>

    <ProductLine v-for="product in products"
             :key="product.brand"
             :product="product"
    ></ProductLine>

    <div class="cart">
      {{ cart.length }}
      <i class="fas fa-shopping-cart"></i>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Product from "../components/Product.vue";
import ProductLine from "../components/ProductLine.vue";
import { ProductModel } from '../models';

@Component({
  components: {
    Product,
    ProductLine
  }
})
export default class Home extends Vue {

  premium = true;
  cart: string[] = [];

  get products() {
      return this.$store.state.products;
  }

  updateCart(product: any) {
    console.log("Adding to cart:", product);
    this.cart.push(product);
  }

  removeFromCart(product: any) {
    let index = this.cart.indexOf(product);
    this.cart.splice(index);
  }
}
</script>
