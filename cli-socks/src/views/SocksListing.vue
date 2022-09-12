<template>
  <div>


    <Product
      :premium="premium"
      :product="product"
      @add-to-cart="updateCart"
    ></Product>


    <router-link to="/Cart" title="See Cart Contents">
      <div class="cart">
        {{ cart.length }}
        <i class="fas fa-shopping-cart"></i>
      </div>
    </router-link>


  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import Product from "../components/Product.vue";
import { ProductModel } from "../models/ProductModels";


export default class SocksListing extends Vue {
  premium = true;


  cart: string[] = [];


  product = {
    id: 1,
    name: "Vue Socks",
    brand: "Vue",
    price: 5,
    variants: [
      {id: 1, color: "green", fancyColor: "#42AF7C"},
      {id: 2, color: "blue", fancyColor: "#27384F"}
    ],
    inventory: 3,
    reviews: []
  };


  updateCart(product: string): void {
    console.log("Adding to cart:", product);
    this.cart.push(product);
  }
}
</script>
