<template>
  <section>
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">
        Atualizar Usuário
      </button>
    </UsuarioForm>
    <ErroNotificacao :erros="erros" />
  </section>
</template>

<script>
import UsuarioForm from "../components/UsuarioForm.vue";
import { api } from "../services.js";
import ErroNotificacao from "../components/ErroNotificacao.vue";

export default {
  name: "UsuarioEditar",
  components: {
    UsuarioForm,
    ErroNotificacao,
  },
  data() {
    return {
      erros: [],
    };
  },
  methods: {
    atualizarUsuario() {
      this.erros = [];
      api
        .put("/usuario", this.$store.state.usuario)
        .then(() => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        })
        .catch((error) => {
          this.erros.push(error.response.data.message);
          console.log(error.response);
        });
    },
  },
};
</script>

<style></style>
