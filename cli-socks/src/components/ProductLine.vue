<!-- Smaller Product info display -->
<script setup lang="ts">
import { ProductModel, ProductVariantModel, ProductReviewModel } from '../models/ProductModels';

interface Props {
  product: ProductModel
}

const props = withDefaults(defineProps<Props>(), {});
</script>



<template>
<div class="product">
    <div class="product-info">
        <h1>
          {{ product.name }}
        </h1>
    </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
