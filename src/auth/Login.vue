<template>
  <section class="login">
    <h1>Login</h1>
    <form>
      <label for="emal">Email</label>
      <input type="email" name="emal" id="emal" v-model="login.email" />

      <label for="senha">Senha</label>
      <input type="password" name="senha" id="senha" v-model="login.senha" />

      <button class="btn" @click.prevent="logar">Entrar</button>
      <ErroNotificacao :erros="erros" />
    </form>
    <p class="perdeu">
      <a
        href="http://ranekapi.local/wp-login.php?action=lostpassword"
        target="_blank"
        >Perdeu a senha? Clique aqui.</a
      >
    </p>
    <Register />
  </section>
</template>

<script>
import Register from "./Register.vue";
import ErroNotificacao from "../components/ErroNotificacao.vue";

export default {
  name: "LoginAuth",
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
      erros: [],
    };
  },
  components: {
    Register,
    ErroNotificacao,
  },
  methods: {
    logar() {
      this.erros = [];
      this.$store
        .dispatch("logarUsuario", this.login)
        .then((response) => {
          console.log(response);
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "usuario" });
        })
        .catch((error) => {
          console.log(error.response);
          this.erros.push(error.response.data.message);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
