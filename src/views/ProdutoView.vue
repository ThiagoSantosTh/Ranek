<template>
  <section>
    <div v-if="produto" class="produto">
      <ul v-if="produto.fotos" class="fotos">
        <li v-for="(foto, index) in produto.fotos" :key="index">
          <img src=":foto.src" :alt="foto.titulo" />
        </li>
      </ul>

      <div class="info">
        <h1>{{ produto.nome }}</h1>
        <p class="preco">{{ produto.preco | numberPrice }}</p>
        <p class="descricao">{{ produto.descricao }}</p>
        <transition mode="out-in" v-if="produto.vendido === 'false'">
          <button class="btn" v-if="!finalizar" @click="finalizar = true">
            Comprar
          </button>
          <FinalizarCompra v-else :produto="produto" />
        </transition>
        <button class="btn" v-else disabled>Produto Vendido</button>
      </div>
    </div>
    <PageLoading v-else key="loading" />
  </section>
</template>

<script>
import { api } from "@/services.js";
import FinalizarCompra from "@/components/FinalizarCompra.vue";

export default {
  name: "ProdutoView",
  props: ["id"],
  components: {
    FinalizarCompra,
  },
  data() {
    return {
      produto: null,
      finalizar: false,
    };
  },
  methods: {
    getProduto() {
      api.get(`/produto/${this.id}`).then((response) => {
        this.produto = response.data;
      });
    },
  },

  created() {
    this.getProduto();
  },
};
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5em;
  margin-bottom: 40px;
}

.descricao {
  font-size: 1.2em;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
