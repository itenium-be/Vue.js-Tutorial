import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


const productList = [{
  name: "Vue Socks",
  brand: "Vue",
  price: 5,
  variants: [
    {id: 1, color: "green", inventory: 4},
    {id: 2, color: "blue", inventory: 4}
  ],
  reviews: []
},
{
  name: "Angular Socks",
  brand: "Angular",
  price: 15,
  variants: [
    {id: 1, color: "red", inventory: 4},
    {id: 2, color: "blue", inventory: 4}
  ],
  reviews: []
},
{
  name: "npm Socks",
  brand: "npm",
  price: 3,
  variants: [
    {id: 1, color: "red", inventory: 4},
  ],
  reviews: []
}];


export default new Vuex.Store({
  state: {
    premium: true,
    cart: [],
    products: productList
  },

  actions: {

  },
  getters: {
    
  },

  mutations: {
    addToCart(state, product) {
      const cart = state.cart as any;
      cart.push(product);
    }
  },
});


// export default new Vuex.Store({
//   // ~ component.data
//   state: {
//     count: 0
//   },

//   // ~ component.methods
//   actions: {},

//   // ~ component.computed
//   getters: {
//     countAlias(state) {
//       return state.count;
//     }
//   },

//   // ~ redux.reducers
//   mutations: {
//     increment(state) {
//       state.count++;
//     },
//     decrement(state) {
//       state.count--;
//     }
//   },
// });
