<!-- Basic Vuex example -->
<template>
  <div class="counter">
    <h1>Vuex Counter</h1>
    <p>{{ countAlias }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
//import { mapState, mapGetters } from 'vuex';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';

@Component
export default class Counter extends Vue {
  get count(): number {
    // Select state directly from store
    return this.$store.state.count;
  }

  // Or use a getter defined in store.ts
  @Getter countAlias!: number;


  increment(): void {
    this.$store.commit('increment');
  }

  @Mutation decrement!: Function;
}
</script>


<style scoped lang="scss">
.counter {
  padding-left: 25px;
}
</style>
