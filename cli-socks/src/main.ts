import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import Product from "./components/Product.vue";

const app = createApp(App);
app.component("product", Product);

app.use(router);

const pinia = createPinia();
app.use(pinia);



app.mount("#app");
