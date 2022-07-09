<template>
  <div id="app">
    <Header></Header>
    <main id="main">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

body {
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: #345;
  background: url(./assets/pattern.svg) repeat top;
}

a {
  color: #345;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all 0.3s;
  border: none;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  cursor: pointer;
}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex: 1;
}
</style>
