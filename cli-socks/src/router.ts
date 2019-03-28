import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cart from "./views/Cart.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/counter",
      name: "Vuex Counter",
      // route level code-splitting
      // this generates a separate chunk (counter.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "counter" */ "./views/Counter.vue")
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    // {
    //   path: '/product/:id',
    //   component: () => import(/* webpackChunkName: "productDetail" */ "./views/ProductPage.vue")
    // }
    // Get id with: {{ $route.params.id }}
    // Example:
    // path: "/user/:username/post/:post_id"
    // Matches: /user/eve/post/42
    // params are: { username: 'eve', post_id: '42' }
  ]
});
