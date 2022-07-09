<template>
  <section class="produtos-container">
    <div v-for="produto in produtos" :key="produto.id">
      <img
        v-if="produto.fotos"
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].titulo"
      />
      <p>{{ produto.descricao }}</p>
      <h2 class="titulo">{{ produto.nome }}</h2>
      <p class="preco">{{ produto.preco }}</p>
    </div>
  </section>
</template>

<script>
import { api } from "@/services.js";

export default {
  data() {
    return {
      produtos: null,
    };
  },
  methods: {
    getProdutos() {
      api.get("/produto").then((response) => {
        console.log(response.data);
        this.produtos = response.data;
      });
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
