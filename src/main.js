import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PageLoading from "./components/PageLoading.vue";

Vue.config.productionTip = false;

//Registrando o component globalmente

Vue.component("PageLoading", PageLoading);

//Aplicado um pipe para a moeda brasileira
Vue.filter("numberPrice", (value) => {
  value = Number(value);
  if (!isNaN(value)) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    return "";
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
