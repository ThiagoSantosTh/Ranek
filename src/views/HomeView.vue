<template>
  <section>
    <h1>👍 Compre ou Venda 👎</h1>
    <ProdutosBuscar></ProdutosBuscar>
    <ProdutosLista></ProdutosLista>
  </section>
</template>

<script>
import ProdutosBuscar from "@/components/ProdutosBuscar.vue";
import ProdutosLista from "@/components/ProdutosLista.vue";

export default {
  name: "HomeView",
  components: {
    ProdutosBuscar,
    ProdutosLista,
  },
};
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  text-align: center;
  margin-top: 40px;
}
</style>
