import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import PageLoading from "./components/PageLoading.vue";
import ErroNotificacao from "./components/ErroNotificacao.vue";

Vue.config.productionTip = false;

//Registrando o component globalmente

Vue.component("PageLoading", PageLoading);
Vue.component("ErroNotificacao", ErroNotificacao);

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
