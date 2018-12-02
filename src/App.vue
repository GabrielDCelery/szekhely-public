<template>
  <div id="app">
    <v-app>
      <NavBar/>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar
  },
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App!"
    };
  }
};
</script>

<style lang="css">
#app {
  color: #56b983;
}
</style>