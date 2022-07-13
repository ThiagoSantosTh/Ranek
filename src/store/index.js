import Vue from "vue";
import Vuex from "vuex";
import { api } from "../services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    //Começa (false), pois o usuário não está logado
    login: false,
    //Dados do usuário
    usuario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    },
  },
  getters: {},
  mutations: {
    //Mutação para alterar o login
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },

    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
  },
  actions: {
    getUsuario(context, payload) {
      api.get(`/usuario/${payload}`).then((response) => {
        context.commit("UPDATE_USUARIO", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
  },

  createUser(context, payload) {
    context.commit("UPDATE_USUARIO", { id: payload.email });
    api.post("/usuario", payload);
  },
  modules: {},
});
