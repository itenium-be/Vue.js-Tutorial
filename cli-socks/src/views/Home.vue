<template>
  <div>
    <!--<Product :premium="premium" @add-to-cart="updateCart"></Product>-->
    <ProductLine v-for="k in products" :key="k.name" :product="k"></ProductLine>

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

  products: ProductModel[] = [];
  premium = true;
  cart: string[] = [];

  constructor() {
      super();
      const product1 = new ProductModel();
      product1.name = "product1";
      const product2 = new ProductModel();
      product2.name = "product2";
      this.products.push(product1);
      this.products.push(product2);
  }

  updateCart(product: any) {
    console.log("Adding to cart:", product);
    this.cart.push(product);
  }
}
</script>
