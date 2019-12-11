<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <menu-page></menu-page>
  </div>
</template>

<script>
// @ is an alias to /src
// import  from "";
import MenuPage from '../components/menu/menu';

export default {
  name: 'home',
  components: {
    MenuPage
  }
};
</script>
