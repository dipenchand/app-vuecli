<template>
  <div id="app">
    <div class="container">
      {{ logo }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      logo: require('./assets/logo.png')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  margin: 0 auto;
  padding: 10px;
  width: 50%;
  border: 1px solid crimson;
  overflow-wrap: break-word;
}
</style>
