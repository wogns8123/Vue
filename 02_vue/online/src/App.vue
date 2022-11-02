<template>
  <div id="app">
    <h1>이곳은 App.vue입니다.</h1>
    <img alt="Vue logo" src="./assets/logo.png">
    <hr>
    <HelloWorld msg="Welcome to Your Vue.js App"
    :dynamic-props="dynamicProps"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      dynamicProps: '싸피 여러분을 응원합니다!'
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
</style>
