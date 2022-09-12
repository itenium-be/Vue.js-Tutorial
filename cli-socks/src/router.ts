import Vue from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import SocksListing from "./views/SocksListing.vue";
import Cart from "./views/Cart.vue";
import Product from "./components/Product.vue";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "socks-listing",
      component: SocksListing,
    },
    {
      path: "/counter",
      name: "pinia-counter",
      // route level code-splitting
      // this generates a separate chunk (counter.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "counter" */ "./views/Counter.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart,
    },

    // {
    //   path: '/product/:id',
    //   component: Product
    // }
    // Get id with: {{ $route.params.id }}
    // Example:
    // path: "/user/:username/post/:post_id"
    // Matches: /user/eve/post/42
    // params are: { username: 'eve', post_id: '42' }
  ],
});
