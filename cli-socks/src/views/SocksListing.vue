<script lang="ts">
import Product from "../components/Product.vue";
import { ProductModel } from "../models/ProductModels";
import { ref, reactive, computed } from 'vue';

export default {
  setup(props, context) {
    const premium = ref(true);
    const computedField = computed(() => premium.value ? 'PREMIUM TIER' : 'FREE TIER');
    const cart: string[] = reactive([]);
    const product: ProductModel = reactive({
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
    });

    function updateCart(product: string): void {
      console.log("Adding to cart:", product);
      cart.push(product);
    }

    return {
      premium, cart, product, updateCart
    };
  },
  components: {
    Product,
  }
}
</script>


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
