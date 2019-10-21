<template>
  <div id="app">
    <navbar></navbar>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components: {
    navbar,
  }
}
</script>

<style>
@import './../public/css/main.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.content{
  margin-top : 100px;
}
</style>
