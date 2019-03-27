<template>
  <div class="counter">
    <h1>Vuex Counter</h1>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapGetters } from 'vuex';

@Component
export default class Counter extends Vue {
  get count(): number {
    return this.$store.state.count;
  }

  increment(): void {
    this.$store.commit('increment');
  }

  decrement(): void {
    this.$store.commit('decrement');
  }
}
</script>


<style scoped lang="scss">
.counter {
  padding-left: 25px;
}
</style>
