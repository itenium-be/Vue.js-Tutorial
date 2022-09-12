<!-- Smaller Product info display -->
<template>
<div class="product">
    <div class="product-info">
        <h1>
          {{ product.name }}
        </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ProductModel, ProductVariantModel, ProductReviewModel } from '../models/ProductModels';


export default class ProductLine extends Vue {
  @Prop() product!: ProductModel;


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
