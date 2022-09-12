import { defineStore } from "pinia";
import { ProductModel } from "./models/ProductModels";
import { SocksStore } from "./models/StoreModel";

type CountState = { count: number };

// Exercise 5? Kill the counter store and use the products store below!

export const useCounterStore = defineStore("counter", {
  // ~ component.data
  state: () => ({ count: 0 }),

  // ~ component.methods
  actions: {
    increment(state: CountState) {
      state.count++;
    },
    decrement(state: CountState) {
      state.count--;
    },
  },

  // ~ component.computed
  getters: {
    countAlias(state: CountState) {
      return state.count;
    },
  },
});


const productList = [{
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
},
{
  id: 2,
  name: "Angular Socks",
  brand: "angular",
  price: 15,
  variants: [
    {id: 1, color: "red", fancyColor: "#B51020"},
    {id: 2, color: "blue", fancyColor: "#584FB8"}
  ],
  inventory: 3,
  reviews: []
},
{
  id: 3,
  name: "npm Socks",
  brand: "npm",
  price: 3,
  variants: [
    {id: 1, color: "red", fancyColor: "#DD1F41"},
  ],
  inventory: 3,
  reviews: []
}];


// export const useSocksStore = defineStore("socks", {
//   state: (): SocksStore => ({
//     premium: true,
//     cart: [],
//     products: productList,
//   }),

//   getters: {},

//   actions: {
//     addToCart(state: SocksStore, product: ProductModel) {
//       state.cart.push(product);
//     },
//   },
// });



// Alternative Syntax: new Composition API-like:
export const useSocksStore = defineStore('socks', () => {
  const premium = true;
  const cart: ProductModel[] = [];
  const products = productList;

  function addToCart(state: SocksStore, product: ProductModel) {
    state.cart.push(product);
  }

  return { premium, cart, products, addToCart };
});
