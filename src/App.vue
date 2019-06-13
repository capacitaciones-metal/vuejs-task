<template>
  <div id="app">
    <task-container />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TaskContainer from './components/TaskContainer'
export default {
  name: 'app',
  components: {
    TaskContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
