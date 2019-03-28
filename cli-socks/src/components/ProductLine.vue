<template>
    <div>{{product.name}}
        <router-link :to="{ name: 'product', params: { id: product.name }}">Link</router-link>
    </div>
</template>


<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import { ProductModel } from '../models';

    @Component({
        components: {
        }
    })

    export default class ProductLine extends Vue {
        @Prop({default: undefined}) private product!: ProductModel;
    }
</script>

<style scoped>

</style>