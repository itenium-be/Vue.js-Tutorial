import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Exercise 5? Kill the counter store and use the products store below!

export default new Vuex.Store({
  // ~ component.data
  state: {
    count: 0
  },

  // ~ component.methods
  actions: {},

  // ~ component.computed
  getters: {
    countAlias(state) {
      return state.count;
    }
  },

  // ~ redux.reducers
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
});


// const productList = [{
//   id: 1,
//   name: "Vue Socks",
//   brand: "Vue",
//   price: 5,
//   variants: [
//     {id: 1, color: "green", fancyColor: "#42AF7C"},
//     {id: 2, color: "blue", fancyColor: "#27384F"}
//   ],
//   inventory: 3,
//   reviews: []
// },
// {
//   id: 2,
//   name: "Angular Socks",
//   brand: "angular",
//   price: 15,
//   variants: [
//     {id: 1, color: "red", fancyColor: "#B51020"},
//     {id: 2, color: "blue", fancyColor: "#584FB8"}
//   ],
//   inventory: 3,
//   reviews: []
// },
// {
//   id: 3,
//   name: "npm Socks",
//   brand: "npm",
//   price: 3,
//   variants: [
//     {id: 1, color: "red", fancyColor: "#DD1F41"},
//   ],
//   inventory: 3,
//   reviews: []
// }];


// export default new Vuex.Store({
//   state: {
//     premium: true,
//     cart: [],
//     products: productList
//   },

//   actions: {},

//   getters: {

//   },

//   mutations: {
//     addToCart(state, product) {
//       const cart = state.cart as any;
//       cart.push(product);
//     }
//   },
// });
