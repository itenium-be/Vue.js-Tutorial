<!-- Display the current Cart contents -->
<template>
  <div class="container">
     <h1>
       Your Cart
     </h1>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { ProductModel, ProductVariantModel, ProductReviewModel } from '../models/ProductModels';

export default class Cart extends Vue {


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
	padding-left: 25px;
}
</style>
