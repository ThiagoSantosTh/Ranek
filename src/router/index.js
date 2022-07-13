import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProdutoView from "../views/ProdutoView.vue";
import Login from "../auth/Login.vue";
import Usuario from "../user/Usuario.vue";
import UsuarioProduto from "../user/UsuarioProduto.vue";
import UsuarioVendas from "../user/UsuarioVendas.vue";
import UsuarioCompras from "../user/UsuarioCompras.vue";
import UsuarioEditar from "../user/UsuarioEditar.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/produto/:id",
    name: "produto",
    component: ProdutoView,
    props: true,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/usuario",
    name: "usuario",
    component: Usuario,
    children: [
      {
        //Inicial do usuario: Quando o usuario entrar na pagina, ele vai para a lista dos produtos
        path: "",
        name: "usuario",
        component: UsuarioProduto,
      },
      {
        path: "compras",
        name: "compras",
        component: UsuarioCompras,
      },
      {
        path: "vendas",
        name: "vendas",
        component: UsuarioVendas,
      },
      {
        path: "editar",
        name: "usuario-editar",
        component: UsuarioEditar,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  },
});

export default router;
